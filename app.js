/**
 * Core Application State
 */
const AppState = {
  currentView: 'home',
  language: 'en',
  cart: [],
  products: [
    { id: 1, name: 'Samsung Galaxy A15', category: 'Electronics', price: 450000, rating: 4.7, seller: 'Kaga Tech', sellerId: 'seller-001', desc: '128GB Storage, 4GB RAM, Brand New.', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400', whatsapp: '0754000000', location: 'Dar es Salaam' },
    { id: 2, name: 'Smart Watch Ultra', category: 'Electronics', price: 120000, rating: 4.5, seller: 'Kaga Tech', sellerId: 'seller-001', desc: 'Waterproof sports smartwatch with heart rate monitoring.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', whatsapp: '0754000000', location: 'Arusha' },
    { id: 3, name: 'Classic Leather Sneakers', category: 'Fashion', price: 65000, rating: 4.4, seller: 'Mwanza Trendy Walks', sellerId: 'seller-002', desc: 'Durable white street fashion wear sneakers.', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', whatsapp: '0713000000', location: 'Mwanza' },
    { id: 4, name: 'Premium Coffee Beans Bag', category: 'Groceries', price: 25000, rating: 4.9, seller: 'Kilimanjaro Harvest', sellerId: 'seller-003', desc: 'Organic roasted medium blend robusta coffee.', img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', whatsapp: '0784000000', location: 'Dodoma' }
  ],
  businesses: [
    { id: 1, name: 'Kaga Tech', type: 'Electronics & Gadgets', emoji: '📱', verified: true },
    { id: 2, name: 'Mwanza Trendy Walks', type: 'Fashion & Shoes', emoji: '👗', verified: true },
    { id: 3, name: 'Kilimanjaro Harvest', type: 'Groceries & Organics', emoji: '☕', verified: false }
  ],
  activeCategory: 'All',
  searchQuery: '',
  currentUser: null,
  userOrders: [],
  userWishlist: [],
  userChats: {}
};

/**
 * ===== LOGIN SESSION MANAGEMENT =====
 */
function initializeLoginState() {
  const storedUser = localStorage.getItem('kagaCurrentUser');
  if (storedUser) {
    try {
      AppState.currentUser = JSON.parse(storedUser);
      updateNavigationForLoggedInUser();
    } catch (e) {
      console.error('Error parsing user data:', e);
      AppState.currentUser = null;
    }
  }
  
  // Load user preferences
  loadUserPreferences();
}

function updateNavigationForLoggedInUser() {
  if (!AppState.currentUser || !AppState.currentUser.loginStatus) {
    return;
  }

  // Call the index.html function to update UI
  if (typeof window.updateLoginState === 'function') {
    window.updateLoginState();
  }
}

/**
 * ===== USER PREFERENCES MANAGEMENT =====
 */
function loadUserPreferences() {
  // Load language
  const savedLang = localStorage.getItem('kagaLanguage') || 'en';
  AppState.language = savedLang;
  
  // Load theme
  const savedTheme = localStorage.getItem('kagaTheme') || 'light';
  applyTheme(savedTheme);
  
  // Load delivery address
  const savedAddress = localStorage.getItem('kagaDeliveryAddress');
  if (savedAddress) {
    AppState.deliveryAddress = JSON.parse(savedAddress);
  }
}

function saveLanguage(lang) {
  AppState.language = lang;
  localStorage.setItem('kagaLanguage', lang);
  // Reload to apply language changes
  location.reload();
}

function applyTheme(theme) {
  localStorage.setItem('kagaTheme', theme);
  if (theme === 'dark') {
    document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
  } else {
    document.documentElement.style.filter = 'none';
  }
}

function saveDeliveryAddress(address) {
  AppState.deliveryAddress = address;
  localStorage.setItem('kagaDeliveryAddress', JSON.stringify(address));
}

/**
 * ===== MY MARKET FUNCTIONS =====
 */
window.openProfile = function() {
  if (!AppState.currentUser) {
    alert('Please log in first');
    return;
  }
  switchView('account');
};

window.openOrders = function() {
  if (!AppState.currentUser) {
    alert('Please log in first');
    return;
  }
  switchView('customer-dashboard');
};

window.openWishlist = function() {
  if (!AppState.currentUser) {
    alert('Please log in first');
    return;
  }
  switchView('customer-dashboard');
};

window.openStore = function() {
  if (!AppState.currentUser) {
    alert('Please log in first');
    return;
  }
  if (AppState.currentUser.role !== 'seller' && !AppState.currentUser.isSeller) {
    alert('Only sellers can access the store dashboard');
    return;
  }
  switchView('business-dashboard');
};

window.openSettings = function() {
  if (!AppState.currentUser) {
    alert('Please log in first');
    return;
  }
  alert('Settings panel coming soon');
};

window.logoutUser = function() {
  if (!confirm('Are you sure you want to log out?')) {
    return;
  }
  
  // Clear user session
  localStorage.removeItem('kagaCurrentUser');
  AppState.currentUser = null;
  
  // Call index.html function to update UI
  if (typeof window.updateLoginState === 'function') {
    window.updateLoginState();
  }
  
  // Redirect and show message
  switchView('home');
  alert('Logged out successfully');
};

/**
 * ===== CHAT SYSTEM STRUCTURE (Firebase Ready) =====
 */
window.startChat = function(sellerId) {
  if (!AppState.currentUser) {
    alert('Please log in to start a chat');
    return;
  }

  const chatId = `chat_${AppState.currentUser.id}_${sellerId}`;
  
  if (!AppState.userChats[chatId]) {
    AppState.userChats[chatId] = {
      id: chatId,
      sellerId: sellerId,
      buyerId: AppState.currentUser.id,
      messages: [],
      createdAt: new Date().toISOString()
    };
  }

  saveChatLocally(chatId, AppState.userChats[chatId]);
  loadMessages(chatId);
  switchView('messenger');
};

window.sendMessage = function(chatId, message) {
  if (!chatId || !message.trim()) return;

  const chat = AppState.userChats[chatId];
  if (!chat) return;

  const msg = {
    id: Date.now(),
    from: AppState.currentUser.id,
    fromName: AppState.currentUser.firstName,
    text: message,
    timestamp: new Date().toISOString()
  };

  chat.messages.push(msg);
  saveChatLocally(chatId, chat);
  
  // In future, sync with Firebase
  console.log('Message saved:', msg);
};

window.loadMessages = function(chatId) {
  const chat = loadChatLocally(chatId);
  if (chat) {
    AppState.userChats[chatId] = chat;
  }
  
  // Display messages in messenger UI
  renderChatMessages(chatId);
};

window.showUnreadMessages = function() {
  let unreadCount = 0;
  Object.values(AppState.userChats).forEach(chat => {
    const unread = chat.messages.filter(m => m.from !== AppState.currentUser.id).length;
    unreadCount += unread;
  });
  return unreadCount;
};

function saveChatLocally(chatId, chatData) {
  const chats = JSON.parse(localStorage.getItem('kagaChats') || '{}');
  chats[chatId] = chatData;
  localStorage.setItem('kagaChats', JSON.stringify(chats));
}

function loadChatLocally(chatId) {
  const chats = JSON.parse(localStorage.getItem('kagaChats') || '{}');
  return chats[chatId] || null;
}

function renderChatMessages(chatId) {
  const chat = AppState.userChats[chatId];
  if (!chat) return;

  const messagesContainer = document.getElementById('chat-messages');
  if (!messagesContainer) return;

  messagesContainer.innerHTML = chat.messages.map(msg => `
    <div class="msg-bubble ${msg.from === AppState.currentUser.id ? 'msg-out' : 'msg-in'}">
      <strong>${msg.fromName}</strong><br>
      ${msg.text}
    </div>
  `).join('');

  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

/**
 * Initialize Application Lifecycle Hooks
 */
document.addEventListener('DOMContentLoaded', () => {
  // 0. Initialize login state and user preferences
  initializeLoginState();
  
  // 1. Initial view components render templates
  renderCategories();
  renderHomeProducts();
  renderShopProducts();
  renderBusinesses();
  updateCartUI();

  // 2. Wire Global Search Input Event Listeners
  const globalSearch = document.getElementById('global-search-input');
  globalSearch?.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value.toLowerCase();
    doSearchFiltering();
  });

  // 3. Wire Shop Panel Live Search Input Event Listeners
  const shopSearch = document.getElementById('shop-search-input');
  shopSearch?.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value.toLowerCase();
    doSearchFiltering();
  });

  // 4. Handle Delivery Checkout Form Form Submissions
  const deliveryForm = document.getElementById('delivery-form');
  deliveryForm?.addEventListener('submit', handleCheckoutSubmit);
});

/**
 * SPA Global View Switcher
 * Perfectly pairs with onclick="switchView('viewname')" tags inside your HTML buttons
 */
window.switchView = function(viewId) {
  if (!viewId) return;
  AppState.currentView = viewId;

  // Select all layout panels 
  const panels = document.querySelectorAll('.panel');
  panels.forEach(panel => {
    if (panel.id === `${viewId}-panel`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  // Keep navigation buttons active styling synced across Desktop & Mobile bars
  const allNavBtns = document.querySelectorAll('.nav-btn, .mob-nav-btn');
  allNavBtns.forEach(btn => {
    const onClickAttr = btn.getAttribute('onclick');
    if (onClickAttr && onClickAttr.includes(`'${viewId}'`)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Auto scroll window back up on panel viewport transitions
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Categories Horizontal Carousel Injector
 */
function renderCategories() {
  const cats = ['All', 'Electronics', 'Fashion', 'Groceries', 'Home', 'Beauty', 'Sports', 'Books', 'Tools'];
  const scrollContainer = document.getElementById('categories-scroll');
  if (!scrollContainer) return;

  scrollContainer.innerHTML = cats.map(c => {
    const icon = getCategoryIcon(c);
    return `<div class="category-chip ${AppState.activeCategory === c ? 'active' : ''}" 
                 onclick="filterShopByCategory('${c}')">${icon} ${c}</div>`;
  }).join('');
}

function getCategoryIcon(cat) {
  const icons = { 'All': '✨', 'Electronics': '📱', 'Fashion': '👗', 'Groceries': '🍎', 'Home': '🏠', 'Beauty': '💄', 'Sports': '⚽', 'Books': '📚', 'Tools': '🔧' };
  return icons[cat] || '📦';
}

/**
 * Filter Marketplace catalog views using categories
 */
window.filterShopByCategory = function(category) {
  AppState.activeCategory = category;
  renderCategories(); // Rerender dynamic visual active indicator states
  
  // Apply category filtering rule
  renderShopProducts();
  switchView('shop');
};

/**
 * Core Component Renderers
 */
function renderHomeProducts() {
  const container = document.getElementById('home-products-container');
  if (!container) return;

  // Take the top 2 items to show on the main homepage
  const featured = AppState.products.slice(0, 2);
  container.innerHTML = generateProductGridHTML(featured);
}

function renderShopProducts() {
  const container = document.getElementById('shop-products-container');
  if (!container) return;

  let filtered = AppState.products;
  if (AppState.activeCategory !== 'All') {
    filtered = filtered.filter(p => p.category === AppState.activeCategory);
  }
  if (AppState.searchQuery) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(AppState.searchQuery));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <div class="empty-title">No items found</div>
        <div class="empty-desc">We couldn't find matches matching your criteria.</div>
      </div>`;
    return;
  }

  container.innerHTML = `<div class="products-grid">${generateProductGridHTML(filtered)}</div>`;
}

function generateProductGridHTML(productArray) {
  return productArray.map(product => `
    <div class="product-card">
      <div class="product-img" onclick="viewProductDetails(${product.id})">
        <img src="${product.img}" alt="${product.name}" onerror="this.parentElement.innerHTML='📦';">
      </div>
      <div class="product-info" onclick="viewProductDetails(${product.id})">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price.toLocaleString()} TZS</div>
        <div class="product-seller">Shop: ${product.seller}</div>
      </div>
      <div class="product-actions">
        <button class="btn-cart" onclick="addToCart(${product.id})">🛒 Add</button>
        <button class="btn-wa-small" onclick="openWhatsAppInquiry(${product.id})">💬</button>
      </div>
    </div>
  `).join('');
}

function renderBusinesses() {
  const homeContainer = document.getElementById('home-businesses-container');
  const allContainer = document.getElementById('all-businesses-container');

  const generateHTML = (bizArray) => bizArray.map(b => `
    <div class="business-card">
      <div class="biz-header">
        <div class="biz-logo">${b.emoji}</div>
        <div>
          <div class="biz-name">${b.name}</div>
          <div class="biz-type">${b.type}</div>
          ${b.verified ? '<span class="verified-badge">✓ Verified</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');

  if (homeContainer) homeContainer.innerHTML = generateHTML(AppState.businesses.slice(0, 2));
  if (allContainer) allContainer.innerHTML = generateHTML(AppState.businesses);
}

/**
 * Handle Direct Searches
 */
window.doHeroSearch = function() {
  const input = document.getElementById('hero-search-input');
  if (!input) return;
  AppState.searchQuery = input.value.toLowerCase();
  
  // Synchronize search boxes for clarity
  const shopSearch = document.getElementById('shop-search-input');
  if (shopSearch) shopSearch.value = input.value;

  renderShopProducts();
  switchView('shop');
};

function doSearchFiltering() {
  renderShopProducts();
}

/**
 * Dynamic Product Item Page Inspector View
 */
window.viewProductDetails = function(productId) {
  const product = AppState.products.find(p => p.id === productId);
  const detailsContainer = document.getElementById('product-details');
  if (!product || !detailsContainer) return;

  detailsContainer.innerHTML = `
    <div class="product-card" style="cursor: default;">
      <div class="product-img" style="aspect-ratio: 16/9; font-size: 64px;">
        <img src="${product.img}" alt="${product.name}" onerror="this.parentElement.innerHTML='📦';">
      </div>
      <div class="product-info" style="padding: 16px;">
        <span class="category-chip active" style="font-size:10px; padding:4px 8px;">${product.category}</span>
        <h2 style="font-size: 18px; font-weight:700; margin: 8px 0 4px;">${product.name}</h2>
        <div class="product-price" style="font-size: 20px; margin-bottom: 12px;">${product.price.toLocaleString()} TZS</div>
        <p style="font-size: 13px; color: var(--text-muted); line-height:1.5; margin-bottom:16px;">${product.desc}</p>
        
        <div style="font-size: 11px; color:var(--text-light); margin-bottom:12px;">
          📍 Location: ${product.location}<br>
          🏪 Seller: ${product.seller}
        </div>

        <div style="display:flex; gap:10px;">
          <button class="btn-submit" onclick="addToCart(${product.id})" style="flex:1; height:44px;">🛒 Add to Cart</button>
          <button class="btn-wa-small" onclick="openWhatsAppInquiry(${product.id})" style="width:44px; height:44px; font-size:20px;">💬</button>
          ${AppState.currentUser ? `<button class="btn-submit" onclick="startChat('${product.sellerId}')" style="flex:1; height:44px;">💬 Chat</button>` : ''}
        </div>
      </div>
    </div>
  `;
  switchView('product');
};

/**
 * Core Shopping Cart Operations
 */
window.addToCart = function(productId) {
  const item = AppState.products.find(p => p.id === productId);
  if (!item) return;

  const existingItem = AppState.cart.find(c => c.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    AppState.cart.push({ ...item, quantity: 1 });
  }

  updateCartUI();
};

window.updateQty = function(productId, delta) {
  const item = AppState.cart.find(c => c.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    AppState.cart = AppState.cart.filter(c => c.id !== productId);
  }
  updateCartUI();
};

function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const cartList = document.getElementById('cart-list');
  const totalBar = document.getElementById('cart-total-bar');

  const subtotalPrice = AppState.cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const totalItemsCount = AppState.cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // 1. Update count badge
  if (countBadge) {
    countBadge.textContent = totalItemsCount;
  }

  // 2. Render summary panel structure updates
  if (!cartList) return;

  if (AppState.cart.length === 0) {
    cartList.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🛒</div>
        <div class="empty-title">Your cart is empty</div>
        <div class="empty-desc">Explore the marketplace to find products you need.</div>
        <button class="btn-empty" onclick="switchView('shop')">Start Shopping</button>
      </div>`;
    if (totalBar) totalBar.style.display = 'none';
  } else {
    cartList.innerHTML = AppState.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">📦</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">${(item.price * item.quantity).toLocaleString()} TZS</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
            <span class="qty-num">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `).join('');

    // Update monetary total components values
    const deliveryCost = 5000;
    const grandTotal = subtotalPrice + deliveryCost;

    document.getElementById('cart-subtotal').textContent = `TZS ${subtotalPrice.toLocaleString()}`;
    document.getElementById('cart-grand-total').textContent = `TZS ${grandTotal.toLocaleString()}`;
    if (totalBar) totalBar.style.display = 'block';
  }
}

/**
 * Handle Order Post Operations & Checkout Form Submissions
 */
function handleCheckoutSubmit(e) {
  e.preventDefault();
  if (AppState.cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  const clientName = document.getElementById('del-name').value;
  const clientPhone = document.getElementById('del-phone').value;
  const clientAddress = document.getElementById('del-address').value;
  const paymentMethod = document.getElementById('del-payment').value;

  // Save delivery address if logged in
  if (AppState.currentUser) {
    const address = {
      name: clientName,
      phone: clientPhone,
      address: clientAddress,
      savedAt: new Date().toISOString()
    };
    saveDeliveryAddress(address);

    // Save order to user orders
    const order = {
      id: Date.now(),
      items: [...AppState.cart],
      total: AppState.cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0) + 5000,
      deliveryInfo: address,
      paymentMethod: paymentMethod,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    const orders = JSON.parse(localStorage.getItem('kagaOrders') || '[]');
    orders.push(order);
    localStorage.setItem('kagaOrders', JSON.stringify(orders));
    AppState.userOrders.push(order);
  }

  alert(`Asante sana ${clientName}! Your order has been registered via ${paymentMethod}.`);
  
  // Flush local cart memory values data and redirect home
  AppState.cart = [];
  updateCartUI();
  document.getElementById('delivery-form').reset();
  switchView('home');
}

/**
 * Direct WhatsApp Link Routing Generator
 */
window.openWhatsAppInquiry = function(productId) {
  const product = AppState.products.find(p => p.id === productId);
  if (!product) return;

  // Clean phone spacing configurations safely
  const formattedPhone = product.whatsapp.replace(/\s+/g, '');
  const message = encodeURIComponent(`Habari, ninahitaji bidhaa hii: ${product.name} yenye thamani ya TZS ${product.price.toLocaleString()} kutoka Kaga's Market.`);
  
  window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
};

/**
 * Vendor User Operations: Add custom product properties with seller info
 */
window.submitProduct = function() {
  // Check if user is logged in and is a seller
  if (!AppState.currentUser) {
    alert('Tafadhali ingia kwanza ili kuuza bidhaa!');
    return;
  }

  if (AppState.currentUser.role !== 'seller' && !AppState.currentUser.isSeller) {
    alert('Huwezi kuuza bila akaunti ya muuzaji. Tafadhali andika upya kama muuzaji.');
    return;
  }

  const name = document.getElementById('prod-name').value.trim();
  const category = document.getElementById('prod-category').value;
  const price = parseFloat(document.getElementById('prod-price').value);
  const desc = document.getElementById('prod-desc').value.trim();
  const whatsapp = document.getElementById('prod-whatsapp').value.trim();
  const location = document.getElementById('prod-location').value;

  if (!name || !price || !whatsapp) {
    alert('Tafadhali jaza Jina, Bei, na Namba ya WhatsApp!');
    return;
  }

  const newProduct = {
    id: AppState.products.length + 1,
    name: name,
    category: category,
    price: price,
    rating: 5.0,
    seller: AppState.currentUser.name || AppState.currentUser.firstName,
    sellerId: AppState.currentUser.id,
    sellerCity: AppState.currentUser.city,
    desc: desc || 'No description provided.',
    img: 'placeholder',
    whatsapp: whatsapp,
    location: location,
    postedAt: new Date().toISOString(),
    postedBy: AppState.currentUser.id
  };

  AppState.products.unshift(newProduct); // Add straight to top of stack lists
  
  // Save to localStorage
  const userProducts = JSON.parse(localStorage.getItem('kagaUserProducts') || '{}');
  if (!userProducts[AppState.currentUser.id]) {
    userProducts[AppState.currentUser.id] = [];
  }
  userProducts[AppState.currentUser.id].push(newProduct);
  localStorage.setItem('kagaUserProducts', JSON.stringify(userProducts));
  
  // Refresh rendering state pipelines
  renderHomeProducts();
  renderShopProducts();
  
  alert('Bidhaa yako imepokelewa! Itahakikiwa ndani ya saa 24.');
  
  // Reset form strings
  document.getElementById('prod-name').value = '';
  document.getElementById('prod-price').value = '';
  document.getElementById('prod-desc').value = '';
  document.getElementById('prod-whatsapp').value = '';
  
  switchView('shop');
};
// ===============================
// KAGA'S MARKET — APP.JS
// Option B Auth: Guests browse freely
// Login only required for protected actions
// ===============================

function $(id) { return document.getElementById(id); }

// ===============================
// SECTION 1: CATEGORIES
// ===============================
const categories = [
  { icon: '📱', name: 'Electronics',  count: '' },
  { icon: '👗', name: 'Fashion',      count: '' },
  { icon: '🍎', name: 'Groceries',    count: '' },
  { icon: '🏠', name: 'Home',         count: '' },
  { icon: '💄', name: 'Beauty',       count: '' },
  { icon: '⚽', name: 'Sports',       count: '' },
  { icon: '📚', name: 'Books',        count: '' },
  { icon: '🔧', name: 'Tools',        count: '' },
];

// ===============================
// SECTION 2: STORAGE HELPERS
// ===============================
function getProducts()    { return JSON.parse(localStorage.getItem('kagaProducts') || '[]'); }
function saveProducts(p)  { localStorage.setItem('kagaProducts', JSON.stringify(p)); }
function getUsers()       { return JSON.parse(localStorage.getItem('kagaUsers') || '[]'); }
function saveUsers(u)     { localStorage.setItem('kagaUsers', JSON.stringify(u)); }
function getCurrentUser() { const r = localStorage.getItem('kagaCurrentUser'); return r ? JSON.parse(r) : null; }

// ===============================
// SECTION 3: AUTH GUARD (Option B)
// Guests can browse home, shop, product pages
// Login required only for: cart checkout, add product, dashboards, admin, messages
// ===============================
const guestAllowedViews = ['home', 'shop', 'product', 'businesses'];
// All other views require login

function requireLogin(reason) {
  // Show a friendly message then redirect to login
  showToast('🔒 ' + (reason || t('toast-login-first')));
  setTimeout(() => { window.location.href = 'login.html'; }, 900);
}

// ===============================
// SECTION 4: VIEW SWITCHER
// ===============================
const panelMap = {
  home:                 'home-panel',
  shop:                 'shop-panel',
  product:              'product-panel',
  businesses:           'businesses-panel',
  'add-product':        'add-product-panel',
  'customer-dashboard': 'customer-dashboard-panel',
  'business-dashboard': 'business-dashboard-panel',
  admin:                'admin-panel',
  account:              'account-panel',
  messenger:            'messenger-panel',
  cart:                 'cart-panel',
  delivery:             'delivery-panel',
};

const mobNavMap = {
  home:          'mob-home',
  shop:          'mob-shop',
  'add-product': 'mob-sell',
  messenger:     'mob-messenger',
  account:       'mob-account',
};

window.switchView = function(view) {
  const user = getCurrentUser();

  // ---- OPTION B AUTH GATE ----
  // If view is NOT in guest-allowed list AND user is not logged in → redirect to login
  if (!guestAllowedViews.includes(view) && !user) {
    if (view === 'cart') {
      requireLogin('Ingia kwanza ili uone cart yako / Login to view your cart');
    } else if (view === 'add-product') {
      requireLogin('Ingia kwanza ili uweze kuuza / Login to sell a product');
    } else if (view === 'messenger') {
      requireLogin('Ingia kwanza ili utume ujumbe / Login to send messages');
    } else if (view === 'delivery') {
      requireLogin('Ingia kwanza ili ufanye order / Login to place an order');
    } else {
      requireLogin(t('toast-login-first'));
    }
    return;
  }

  // Role-based guards (user IS logged in)
  if (view === 'admin' && user && user.role !== 'admin') {
    showToast(t('toast-admin-only'));
    return;
  }
  if (view === 'business-dashboard' && user && user.role === 'buyer') {
    showToast(t('toast-seller-only'));
    return;
  }

  // Switch panels
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  const panelId = panelMap[view];
  if (panelId) {
    const panel = $(panelId);
    if (panel) panel.classList.add('active');
  }

  // Nav highlights
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-nav-btn').forEach(b => b.classList.remove('active'));
  if (mobNavMap[view]) {
    const mb = $(mobNavMap[view]);
    if (mb) mb.classList.add('active');
  }

  // On-open hooks
  if (view === 'shop')               renderShopProducts();
  if (view === 'businesses')         renderAllBusinesses();
  if (view === 'add-product')        setupAddProductPanel();
  if (view === 'admin')              loadAdminStats();
  if (view === 'business-dashboard') loadBizDashboard();
  if (view === 'customer-dashboard') loadCustomerOrders();
  if (view === 'cart')               renderCart();

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===============================
// SECTION 5: RENDER CATEGORIES
// ===============================
function renderCategories() {
  const grid = $('categories-grid');
  if (!grid) return;

  const products = getProducts().filter(p => p.status === 'approved');

  grid.innerHTML = categories.map(c => {
    const count = products.filter(p => p.category && p.category.includes(c.name)).length;
    return '<div class="category-card" onclick="filterShopByCategory(\'' + c.name + '\')">' +
      '<span class="category-icon">' + c.icon + '</span>' +
      '<div class="category-name">' + c.name + '</div>' +
      '<div class="category-count">' + (count > 0 ? count + ' items' : '') + '</div>' +
    '</div>';
  }).join('');
}

// ===============================
// SECTION 6: RENDER PRODUCT CARD
// ===============================
function renderProductCard(p) {
  const imgContent = p.images && p.images[0]
    ? '<img src="' + p.images[0] + '" alt="' + p.name + '" />'
    : '<span style="font-size:40px;">' + (p.icon || '📦') + '</span>';

  return '<div class="product-card" onclick="openProduct(' + p.id + ')">' +
    '<div class="product-img-wrap"><div class="product-img">' + imgContent + '</div></div>' +
    '<div class="product-info">' +
      '<div class="product-name">' + p.name + '</div>' +
      '<div class="product-price">TZS ' + Number(p.price).toLocaleString() + '</div>' +
      '<div class="product-seller">' + (p.sellerName || 'Seller') + ' · ' + (p.location || '') + '</div>' +
    '</div>' +
    '<div class="product-actions">' +
      '<button class="btn-cart" onclick="event.stopPropagation(); addToCart(' + p.id + ')">' + t('btn-add-cart') + '</button>' +
      '<a href="https://wa.me/' + formatWA(p.whatsapp) + '?text=' + encodeURIComponent('Hi! I am interested in ' + p.name) + '" target="_blank" onclick="event.stopPropagation();">' +
        '<button class="btn-wa-small">💬</button>' +
      '</a>' +
    '</div>' +
  '</div>';
}

function formatWA(num) {
  if (!num) return '255700000000';
  num = num.replace(/\D/g, '');
  if (num.startsWith('0')) num = '255' + num.slice(1);
  return num;
}

// ===============================
// SECTION 7: RENDER HOME PRODUCTS
// ===============================
function renderHomeProducts() {
  const el = $('home-products-container');
  if (!el) return;

  const products = getProducts().filter(p => p.status === 'approved');

  if (products.length === 0) {
    el.innerHTML = '<div class="empty-state">' +
      '<span class="empty-icon">🛍️</span>' +
      '<div class="empty-title">No products yet</div>' +
      '<div class="empty-desc">Be the first to post a product on Kaga\'s Market!</div>' +
      '<button class="btn-empty" onclick="switchView(\'add-product\')">Post a Product</button>' +
    '</div>';
    return;
  }

  el.innerHTML = '<div class="products-grid">' + products.slice(0, 8).map(renderProductCard).join('') + '</div>';
}

// ===============================
// SECTION 8: RENDER SHOP PRODUCTS
// ===============================
let shopFilter = { category: 'All', search: '', maxPrice: 2000000, condition: 'All' };

function renderShopProducts() {
  const el = $('shop-products-container');
  if (!el) return;

  let products = getProducts().filter(p => p.status === 'approved');

  if (shopFilter.category !== 'All') {
    products = products.filter(p => p.category && p.category.includes(shopFilter.category));
  }
  if (shopFilter.condition !== 'All') {
    products = products.filter(p => p.condition && p.condition.includes(shopFilter.condition));
  }
  if (shopFilter.search) {
    const q = shopFilter.search.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.sellerName && p.sellerName.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }
  products = products.filter(p => Number(p.price) <= shopFilter.maxPrice);

  const countEl = $('results-count');
  if (countEl) countEl.textContent = products.length + ' ' + t('results-count');

  if (products.length === 0) {
    el.innerHTML = '<div class="empty-state">' +
      '<span class="empty-icon">🔍</span>' +
      '<div class="empty-title">No products found</div>' +
      '<div class="empty-desc">Try a different search or be the first to sell in this category!</div>' +
      '<button class="btn-empty" onclick="switchView(\'add-product\')">Post a Product</button>' +
    '</div>';
    return;
  }

  el.innerHTML = '<div class="products-grid">' + products.map(renderProductCard).join('') + '</div>';
}

window.filterShopByCategory = function(cat) {
  shopFilter.category = cat;
  switchView('shop');
};

window.filterCat = function(cat, el) {
  shopFilter.category = cat;
  document.querySelectorAll('.shop-filters .filter-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  renderShopProducts();
};

window.filterCondition = function(cond, el) {
  shopFilter.condition = cond;
  const group = el.closest('.filter-group');
  if (group) group.querySelectorAll('.filter-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  renderShopProducts();
};

// ===============================
// SECTION 9: OPEN PRODUCT PAGE
// (Guests can view product pages freely)
// ===============================
window.openProduct = function(id) {
  const products = getProducts();
  const p = products.find(pr => pr.id === id);
  if (!p) return;

  const nameEl   = $('product-page-name');
  const priceEl  = $('product-page-price');
  const descEl   = $('product-page-desc');
  const waLink   = $('product-wa-link');
  const sellerNm = $('product-seller-name');
  const addBtn   = $('product-add-cart-btn');

  if (nameEl)   nameEl.textContent   = p.name;
  if (priceEl)  priceEl.textContent  = 'TZS ' + Number(p.price).toLocaleString();
  if (descEl)   descEl.textContent   = p.description || '';
  if (sellerNm) sellerNm.textContent = p.sellerName || 'Seller';
  if (waLink)   waLink.href          = 'https://wa.me/' + formatWA(p.whatsapp) + '?text=' + encodeURIComponent('Hi! I am interested in ' + p.name);

  // Add to cart from product page — requires login
  if (addBtn) {
    addBtn.onclick = () => addToCart(p.id);
  }

  // Main image
  const mainImg = $('main-product-img');
  if (mainImg) {
    if (p.images && p.images[0]) {
      mainImg.innerHTML = '<img src="' + p.images[0] + '" alt="' + p.name + '" />';
    } else {
      mainImg.innerHTML = '<span id="main-img-icon" style="font-size:80px;">📦</span>';
    }
  }

  // Thumbs
  const thumbs = $('product-thumbs');
  if (thumbs && p.images && p.images.length > 0) {
    thumbs.innerHTML = p.images.map((img, i) =>
      '<div class="img-thumb ' + (i === 0 ? 'active' : '') + '" onclick="setMainImg(\'' + img + '\', this)">' +
        '<img src="' + img + '" alt="" />' +
      '</div>'
    ).join('');
  }

  switchView('product');
};

window.setMainImg = function(src, el) {
  const mainImg = $('main-product-img');
  if (mainImg) mainImg.innerHTML = '<img src="' + src + '" alt="" />';
  document.querySelectorAll('.img-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
};

// ===============================
// SECTION 10: RENDER BUSINESSES
// (Guests can view businesses freely)
// ===============================
function renderBusinessCard(b) {
  const logoContent = b.logo
    ? '<img src="' + b.logo + '" alt="' + b.name + '" />'
    : '🏪';
  return '<div class="business-card">' +
    '<div class="biz-header">' +
      '<div class="biz-logo">' + logoContent + '</div>' +
      '<div><div class="biz-name">' + b.name + '</div><div class="biz-type">' + (b.category || '') + '</div></div>' +
    '</div>' +
    '<span class="verified-badge" data-i18n="verified-badge">✅ Verified</span>' +
    '<div class="biz-rating">⭐ ' + (b.rating || 'New') + '</div>' +
  '</div>';
}

function renderHomeBusinesses() {
  const el = $('home-businesses-container');
  if (!el) return;

  const users = getUsers().filter(u => u.role === 'seller' && u.status === 'active');

  if (users.length === 0) {
    el.innerHTML = '<div class="empty-state">' +
      '<span class="empty-icon">🏪</span>' +
      '<div class="empty-title">No businesses yet</div>' +
      '<div class="empty-desc">Be the first business to join Kaga\'s Market!</div>' +
      '<button class="btn-empty" onclick="window.location.href=\'login.html\'">Register Business</button>' +
    '</div>';
    return;
  }

  el.innerHTML = '<div class="businesses-grid">' +
    users.slice(0, 4).map(u => renderBusinessCard({
      name:     u.businessName || u.name,
      category: u.businessCat  || '',
      logo:     u.logo         || '',
      rating:   '5.0 ★★★★★',
    })).join('') +
  '</div>';
}

function renderAllBusinesses() {
  const el = $('all-businesses-container');
  if (!el) return;

  const users = getUsers().filter(u => u.role === 'seller' && u.status === 'active');

  if (users.length === 0) {
    el.innerHTML = '<div class="empty-state" style="max-width:400px;margin:40px auto;">' +
      '<span class="empty-icon">🏪</span>' +
      '<div class="empty-title">No businesses yet</div>' +
      '<div class="empty-desc">Verified businesses will appear here once they register.</div>' +
      '<button class="btn-empty" onclick="window.location.href=\'login.html\'">Register as Seller</button>' +
    '</div>';
    return;
  }

  el.innerHTML = '<div class="businesses-grid">' +
    users.map(u => renderBusinessCard({
      name:     u.businessName || u.name,
      category: u.businessCat  || '',
      logo:     u.logo         || '',
      rating:   '5.0 ★★★★★',
    })).join('') +
  '</div>';
}

// ===============================
// SECTION 11: ADD PRODUCT
// (Only sellers/admins — login required, enforced by switchView)
// ===============================
let uploadedImages = [];

function setupAddProductPanel() {
  const user     = getCurrentUser();
  const notice   = $('seller-notice');
  const formCard = $('add-product-form-card');

  if (!user || (user.role !== 'seller' && user.role !== 'admin')) {
    if (notice)   notice.style.display        = 'flex';
    if (formCard) formCard.style.opacity       = '0.4';
    if (formCard) formCard.style.pointerEvents = 'none';
  } else {
    if (notice)   notice.style.display        = 'none';
    if (formCard) formCard.style.opacity       = '1';
    if (formCard) formCard.style.pointerEvents = 'auto';

    const waInput = $('prod-whatsapp');
    if (waInput && user.phone && !waInput.value) waInput.value = user.phone;

    const locSelect = $('prod-location');
    if (locSelect && user.location && !locSelect.value) {
      for (let i = 0; i < locSelect.options.length; i++) {
        if (locSelect.options[i].text === user.location) {
          locSelect.selectedIndex = i;
          break;
        }
      }
    }
  }
}

window.handleImageUpload = function(input) {
  const files = Array.from(input.files);
  files.forEach(file => {
    if (uploadedImages.length >= 4) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedImages.push(e.target.result);
      renderImagePreviews();
    };
    reader.readAsDataURL(file);
  });
};

function renderImagePreviews() {
  const previews = $('img-previews');
  if (!previews) return;
  previews.innerHTML = uploadedImages.map((img, i) =>
    '<div style="position:relative;display:inline-block;">' +
      '<img class="img-preview-thumb" src="' + img + '" alt="preview ' + i + '" />' +
      '<button class="btn-remove-img" onclick="removeUploadedImg(' + i + ')">✕</button>' +
    '</div>'
  ).join('');
}

window.removeUploadedImg = function(index) {
  uploadedImages.splice(index, 1);
  renderImagePreviews();
};

window.updateCharCount = function(el, countId, max) {
  const counter = $(countId);
  if (counter) counter.textContent = el.value.length;
};

window.submitProduct = function() {
  const user = getCurrentUser();
  if (!user || (user.role !== 'seller' && user.role !== 'admin')) {
    requireLogin('Ingia kama muuzaji / Login as a seller to post products');
    return;
  }

  const name      = $('prod-name')      ? $('prod-name').value.trim()      : '';
  const category  = $('prod-category')  ? $('prod-category').value         : '';
  const condition = $('prod-condition') ? $('prod-condition').value         : '';
  const price     = $('prod-price')     ? $('prod-price').value             : '';
  const stock     = $('prod-stock')     ? $('prod-stock').value             : '1';
  const desc      = $('prod-desc')      ? $('prod-desc').value.trim()       : '';
  const location  = $('prod-location')  ? $('prod-location').value          : '';
  const whatsapp  = $('prod-whatsapp')  ? $('prod-whatsapp').value.trim()   : '';
  const delivery  = $('prod-delivery')  ? $('prod-delivery').value          : '';

  if (!name)      { showToast('⚠️ Please enter a product name'); return; }
  if (!category)  { showToast('⚠️ Please select a category');    return; }
  if (!condition) { showToast('⚠️ Please select condition');      return; }
  if (!price || isNaN(price) || Number(price) <= 0) { showToast('⚠️ Please enter a valid price'); return; }
  if (!desc)      { showToast('⚠️ Please add a description');     return; }
  if (!location)  { showToast('⚠️ Please select your location');  return; }
  if (!whatsapp)  { showToast('⚠️ Please add your WhatsApp number'); return; }

  const products   = getProducts();
  const newProduct = {
    id:          Date.now(),
    name:        name,
    category:    category,
    condition:   condition,
    price:       Number(price),
    stock:       Number(stock),
    description: desc,
    location:    location,
    whatsapp:    whatsapp,
    delivery:    delivery,
    images:      uploadedImages.slice(),
    sellerId:    user.id,
    sellerName:  user.businessName || user.name,
    sellerRole:  user.role,
    status:      user.role === 'admin' ? 'approved' : 'pending',
    datePosted:  new Date().toLocaleDateString(),
    views:       0,
  };

  products.push(newProduct);
  saveProducts(products);

  showToast(user.role === 'admin'
    ? '✅ Product posted and live!'
    : '✅ Product submitted! It will go live after review.');

  // Reset form
  uploadedImages = [];
  renderImagePreviews();
  ['prod-name', 'prod-price', 'prod-desc', 'prod-whatsapp'].forEach(id => {
    if ($(id)) $(id).value = '';
  });
  ['prod-category', 'prod-condition', 'prod-location', 'prod-delivery'].forEach(id => {
    if ($(id)) $(id).selectedIndex = 0;
  });
  ['name-count', 'desc-count'].forEach(id => {
    if ($(id)) $(id).textContent = '0';
  });

  setTimeout(() => switchView(user.role === 'admin' ? 'admin' : 'business-dashboard'), 1500);
};

// ===============================
// SECTION 12: CART
// Guests can ADD to cart (stored in localStorage)
// But CHECKOUT requires login
// ===============================
let cart = JSON.parse(localStorage.getItem('kagaCart') || '[]');

function saveCart() { localStorage.setItem('kagaCart', JSON.stringify(cart)); }

window.addToCart = function(productId) {
  // Guests CAN add to cart — no login needed here
  const products = getProducts();
  const p = products.find(pr => pr.id === productId);
  if (!p) return;

  const existing = cart.find(c => c.id === productId);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({
      id:    productId,
      name:  p.name,
      price: p.price,
      qty:   1,
      image: p.images && p.images[0] ? p.images[0] : '',
    });
  }
  saveCart();
  updateCartBadge();
  showToast('✅ "' + p.name + '" ' + t('toast-added-cart'));
};

// Cart view — requires login (handled in switchView)
// But if someone somehow gets to cart panel, show login prompt on checkout button
function renderCart() {
  const cartList = $('cart-list');
  const totalBar = $('cart-total-bar');
  if (!cartList) return;

  const user = getCurrentUser();

  if (cart.length === 0) {
    cartList.innerHTML = '<div class="empty-state" style="margin-top:20px;">' +
      '<span class="empty-icon">🛒</span>' +
      '<div class="empty-title">' + t('cart-empty') + '</div>' +
      '<button class="btn-empty" onclick="switchView(\'shop\')">' + t('cart-browse') + '</button>' +
    '</div>';
    if (totalBar) totalBar.style.display = 'none';
    return;
  }

  if (totalBar) totalBar.style.display = 'block';

  cartList.innerHTML = cart.map((item, i) => {
    const imgContent = item.image ? '<img src="' + item.image + '" alt="" />' : '📦';
    return '<div class="cart-item">' +
      '<div class="cart-item-img">' + imgContent + '</div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">TZS ' + Number(item.price).toLocaleString() + '</div>' +
        '<div class="qty-control">' +
          '<button class="qty-btn" onclick="changeQty(' + i + ', -1)">−</button>' +
          '<span class="qty-num">' + item.qty + '</span>' +
          '<button class="qty-btn" onclick="changeQty(' + i + ', 1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button onclick="removeFromCart(' + i + ')" style="background:none;border:none;font-size:18px;cursor:pointer;color:var(--text-light);">🗑️</button>' +
    '</div>';
  }).join('');

  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  const total    = subtotal + 5000;
  const subEl    = $('cart-subtotal');
  const totEl    = $('cart-grand-total');
  if (subEl) subEl.textContent = 'TZS ' + subtotal.toLocaleString();
  if (totEl) totEl.textContent = 'TZS ' + total.toLocaleString();

  // Checkout button — require login
  const checkoutBtn = $('cart-checkout-btn');
  if (checkoutBtn) {
    if (!user) {
      checkoutBtn.onclick = () => requireLogin('Ingia kwanza ili ufanye order / Login to place your order');
      checkoutBtn.textContent = '🔒 Login to Checkout';
    } else {
      checkoutBtn.onclick = () => switchView('delivery');
      checkoutBtn.textContent = t('btn-checkout') || 'Checkout';
    }
  }
}

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCart();
};

function updateCartBadge() {
  const badge = $('cart-count');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  if (badge) badge.textContent = total;
}

window.changeQty = function(index, delta) {
  cart[index].qty = Math.max(1, (cart[index].qty || 1) + delta);
  saveCart();
  updateCartBadge();
  renderCart();
};

// ===============================
// SECTION 13: DELIVERY
// (Login required — enforced by switchView)
// ===============================
function setupDelivery() {
  const form = $('delivery-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const user = getCurrentUser();
    if (!user) {
      requireLogin('Ingia kwanza ili kukamilisha order / Login to complete your order');
      return;
    }

    const orders = JSON.parse(localStorage.getItem('kagaOrders') || '[]');
    const order  = {
      id:       Date.now(),
      userId:   user.id,
      items:    cart.slice(),
      name:     $('del-name')     ? $('del-name').value     : '',
      phone:    $('del-phone')    ? $('del-phone').value    : '',
      address:  $('del-address')  ? $('del-address').value  : '',
      landmark: $('del-landmark') ? $('del-landmark').value : '',
      payment:  $('del-payment')  ? $('del-payment').value  : '',
      status:   'Processing',
      date:     new Date().toLocaleDateString(),
      total:    cart.reduce((s, i) => s + (i.price * i.qty), 0) + 5000,
    };
    orders.push(order);
    localStorage.setItem('kagaOrders', JSON.stringify(orders));

    cart = [];
    saveCart();
    updateCartBadge();
    renderCart();

    showToast(t('toast-order-placed'));
    setTimeout(() => switchView('customer-dashboard'), 1500);
  });
}

// ===============================
// SECTION 14: CUSTOMER DASHBOARD
// (Login required — enforced by switchView)
// ===============================
function loadCustomerOrders() {
  const el = $('customer-orders-list');
  if (!el) return;

  const user   = getCurrentUser();
  const orders = JSON.parse(localStorage.getItem('kagaOrders') || '[]')
    .filter(o => user && o.userId === user.id);

  if (orders.length === 0) {
    el.innerHTML = '<div class="empty-state">' +
      '<span class="empty-icon">📦</span>' +
      '<div class="empty-title">No orders yet</div>' +
      '<div class="empty-desc">Your orders will appear here once you make a purchase.</div>' +
      '<button class="btn-empty" onclick="switchView(\'shop\')">Browse Products</button>' +
    '</div>';
    return;
  }

  el.innerHTML = orders.reverse().map(o =>
    '<div class="order-card">' +
      '<div class="order-emoji">📦</div>' +
      '<div class="order-info">' +
        '<div class="order-name">' + o.items.map(i => i.name).join(', ') + '</div>' +
        '<div class="order-meta">Order #' + o.id + ' · ' + o.date + '</div>' +
      '</div>' +
      '<span class="order-status status-processing">' + o.status + '</span>' +
      '<div class="order-price">TZS ' + Number(o.total).toLocaleString() + '</div>' +
    '</div>'
  ).join('');
}

window.showDashTab = function(tab, btn) {
  document.querySelectorAll('.dash-tab-content, #dash-orders, #dash-saved, #dash-messages')
    .forEach(t => t.style.display = 'none');
  document.querySelectorAll('.dash-tab').forEach(b => b.classList.remove('active'));
  const el = $('dash-' + tab);
  if (el) el.style.display = 'block';
  if (btn) btn.classList.add('active');
};

// ===============================
// SECTION 15: BUSINESS DASHBOARD
// (Login required — enforced by switchView)
// ===============================
function loadBizDashboard() {
  const user = getCurrentUser();
  if (!user) return;

  const allProducts = getProducts().filter(p => p.sellerId === user.id);
  const approved    = allProducts.filter(p => p.status === 'approved');
  const orders      = JSON.parse(localStorage.getItem('kagaOrders') || '[]');

  const salesEl    = $('biz-stat-sales');
  const ordersEl   = $('biz-stat-orders');
  const productsEl = $('biz-stat-products');

  if (productsEl) productsEl.textContent = approved.length;
  if (ordersEl)   ordersEl.textContent   = orders.length;
  if (salesEl)    salesEl.textContent    = 'TZS ' + orders.reduce((s, o) => s + (o.total || 0), 0).toLocaleString();

  const listEl = $('biz-products-list');
  if (!listEl) return;

  if (allProducts.length === 0) {
    listEl.innerHTML = '<div class="empty-state">' +
      '<span class="empty-icon">🏪</span>' +
      '<div class="empty-title">No products yet</div>' +
      '<div class="empty-desc">Post your first product and start selling!</div>' +
      '<button class="btn-empty" onclick="switchView(\'add-product\')">Post a Product</button>' +
    '</div>';
    return;
  }

  listEl.innerHTML = '<table class="biz-products-table"><thead><tr>' +
    '<th>Product</th><th>Price</th><th>Stock</th><th>Status</th><th>Actions</th>' +
    '</tr></thead><tbody>' +
    allProducts.map(p =>
      '<tr>' +
        '<td>' + (p.images && p.images[0]
          ? '<img src="' + p.images[0] + '" style="width:32px;height:32px;object-fit:cover;border-radius:4px;margin-right:8px;vertical-align:middle;" />'
          : '📦 ') + p.name + '</td>' +
        '<td>TZS ' + Number(p.price).toLocaleString() + '</td>' +
        '<td>' + (p.stock || 1) + '</td>' +
        '<td><span class="order-status ' + (p.status === 'approved' ? 'status-delivered' : 'status-processing') + '">' +
          (p.status === 'approved' ? 'Active' : 'Pending') + '</span></td>' +
        '<td><button onclick="deleteMyProduct(' + p.id + ')" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;">Delete</button></td>' +
      '</tr>'
    ).join('') +
    '</tbody></table>';
}

window.deleteMyProduct = function(id) {
  if (!confirm('Delete this product?')) return;
  saveProducts(getProducts().filter(p => p.id !== id));
  loadBizDashboard();
  showToast('🗑️ Product deleted');
};

// ===============================
// SECTION 16: ADMIN
// (Login + admin role required — enforced by switchView)
// ===============================
function loadAdminStats() {
  const users    = getUsers();
  const products = getProducts();
  const pending  = products.filter(p => p.status === 'pending');
  const sellers  = users.filter(u => u.role === 'seller');

  const uEl  = $('admin-stat-users');
  const bEl  = $('admin-stat-biz');
  const pEl  = $('admin-stat-products');
  const peEl = $('admin-stat-pending');

  if (uEl)  uEl.textContent  = users.length;
  if (bEl)  bEl.textContent  = sellers.length;
  if (pEl)  pEl.textContent  = products.filter(p => p.status === 'approved').length;
  if (peEl) peEl.textContent = pending.length;
}

window.adminShowSection = function(section) {
  const area = $('admin-content-area');
  if (!area) return;

  const users    = getUsers();
  const products = getProducts();

  if (section === 'users') {
    area.innerHTML = '<div class="dash-section-title" style="margin-top:20px;">👥 All Users</div>' +
      (users.length === 0
        ? '<p style="color:var(--text-light);font-size:14px;">No users registered yet.</p>'
        : users.map(u =>
            '<div style="padding:12px 14px;border:1px solid var(--border);border-radius:10px;margin-bottom:8px;background:var(--surface);display:flex;align-items:center;gap:12px;">' +
              '<span style="font-size:22px;">' + (u.role === 'admin' ? '🛡️' : u.role === 'seller' ? '🏪' : '🛍️') + '</span>' +
              '<div style="flex:1;">' +
                '<div style="font-weight:600;font-size:13px;">' + u.name + '</div>' +
                '<div style="font-size:12px;color:var(--text-light);">' + u.email + ' · ' + u.role + ' · Joined ' + (u.joinDate || '—') + '</div>' +
              '</div>' +
              '<span style="font-size:11px;background:' + (u.status === 'pending' ? 'var(--gold-light)' : 'var(--brand-light)') + ';color:' + (u.status === 'pending' ? 'var(--gold)' : 'var(--brand-dark)') + ';padding:3px 10px;border-radius:999px;font-weight:600;">' + (u.status || 'active') + '</span>' +
              (u.status === 'pending' ? '<button onclick="adminApproveUser(' + u.id + ')" style="background:var(--brand);color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:12px;cursor:pointer;">Approve</button>' : '') +
            '</div>'
          ).join(''));
  }

  else if (section === 'pending-products') {
    const pending = products.filter(p => p.status === 'pending');
    area.innerHTML = '<div class="dash-section-title" style="margin-top:20px;">⏳ Pending Products (' + pending.length + ')</div>' +
      (pending.length === 0
        ? '<p style="color:var(--text-light);font-size:14px;">No pending products. 🎉</p>'
        : pending.map(p =>
            '<div style="padding:14px;border:1px solid var(--border);border-radius:10px;margin-bottom:10px;background:var(--surface);display:flex;align-items:center;gap:14px;">' +
              (p.images && p.images[0] ? '<img src="' + p.images[0] + '" style="width:56px;height:56px;object-fit:cover;border-radius:8px;flex-shrink:0;" />' : '<span style="font-size:36px;">📦</span>') +
              '<div style="flex:1;">' +
                '<div style="font-weight:600;font-size:14px;">' + p.name + '</div>' +
                '<div style="font-size:12px;color:var(--text-light);">By ' + p.sellerName + ' · TZS ' + Number(p.price).toLocaleString() + ' · ' + p.location + '</div>' +
                '<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">' + (p.description || '').slice(0, 80) + '...</div>' +
              '</div>' +
              '<div style="display:flex;flex-direction:column;gap:6px;">' +
                '<button onclick="adminApproveProduct(' + p.id + ')" style="background:var(--brand);color:#fff;border:none;border-radius:6px;padding:7px 14px;font-size:12px;cursor:pointer;font-weight:600;">✅ Approve</button>' +
                '<button onclick="adminRejectProduct(' + p.id + ')" style="background:var(--accent-light);color:var(--accent);border:1px solid var(--accent);border-radius:6px;padding:7px 14px;font-size:12px;cursor:pointer;font-weight:600;">❌ Reject</button>' +
              '</div>' +
            '</div>'
          ).join(''));
  }

  else if (section === 'all-products') {
    const approved = products.filter(p => p.status === 'approved');
    area.innerHTML = '<div class="dash-section-title" style="margin-top:20px;">📦 All Live Products (' + approved.length + ')</div>' +
      (approved.length === 0
        ? '<p style="color:var(--text-light);font-size:14px;">No approved products yet.</p>'
        : approved.map(p =>
            '<div style="padding:12px 14px;border:1px solid var(--border);border-radius:10px;margin-bottom:8px;background:var(--surface);display:flex;align-items:center;gap:12px;">' +
              (p.images && p.images[0] ? '<img src="' + p.images[0] + '" style="width:44px;height:44px;object-fit:cover;border-radius:6px;" />' : '<span style="font-size:28px;">📦</span>') +
              '<div style="flex:1;"><div style="font-weight:600;font-size:13px;">' + p.name + '</div><div style="font-size:12px;color:var(--text-light);">' + p.sellerName + ' · TZS ' + Number(p.price).toLocaleString() + '</div></div>' +
              '<button onclick="adminRejectProduct(' + p.id + ')" style="background:none;border:none;color:var(--accent);font-size:13px;cursor:pointer;">Remove</button>' +
            '</div>'
          ).join(''));
  }

  else if (section === 'businesses') {
    const sellers = users.filter(u => u.role === 'seller');
    area.innerHTML = '<div class="dash-section-title" style="margin-top:20px;">🏪 Registered Sellers (' + sellers.length + ')</div>' +
      (sellers.length === 0
        ? '<p style="color:var(--text-light);font-size:14px;">No sellers registered yet.</p>'
        : sellers.map(u =>
            '<div style="padding:12px 14px;border:1px solid var(--border);border-radius:10px;margin-bottom:8px;background:var(--surface);display:flex;align-items:center;gap:12px;">' +
              '<span style="font-size:24px;">🏪</span>' +
              '<div style="flex:1;"><div style="font-weight:600;font-size:13px;">' + (u.businessName || u.name) + '</div><div style="font-size:12px;color:var(--text-light);">' + u.email + ' · ' + (u.businessCat || '') + '</div></div>' +
              '<span style="font-size:11px;background:' + (u.status === 'pending' ? 'var(--gold-light)' : 'var(--brand-light)') + ';color:' + (u.status === 'pending' ? 'var(--gold)' : 'var(--brand-dark)') + ';padding:3px 10px;border-radius:999px;">' + (u.status || 'active') + '</span>' +
              (u.status === 'pending' ? '<button onclick="adminApproveUser(' + u.id + ')" style="background:var(--brand);color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:12px;cursor:pointer;">Approve</button>' : '') +
            '</div>'
          ).join(''));
  }

  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

window.adminApproveProduct = function(id) {
  const products = getProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx !== -1) {
    products[idx].status = 'approved';
    saveProducts(products);
    showToast('✅ Product approved and live!');
    loadAdminStats();
    adminShowSection('pending-products');
    renderHomeProducts();
  }
};

window.adminRejectProduct = function(id) {
  if (!confirm('Remove this product?')) return;
  saveProducts(getProducts().filter(p => p.id !== id));
  showToast('🗑️ Product removed');
  loadAdminStats();
  adminShowSection('pending-products');
};

window.adminApproveUser = function(id) {
  const users = getUsers();
  const idx   = users.findIndex(u => u.id === id);
  if (idx !== -1) {
    users[idx].status = 'active';
    saveUsers(users);
    showToast('✅ User approved!');
    loadAdminStats();
    adminShowSection('users');
  }
};

// ===============================
// SECTION 17: AUTH SYSTEM
// Updates header UI based on login state
// ===============================
function checkAuth() {
  const user      = getCurrentUser();
  const nameEl    = $('account-name');
  const roleEl    = $('account-role');
  const loginBtn  = $('header-login-btn');
  const adminItem = $('admin-menu-item');
  const bizItem   = $('biz-menu-item');

  if (user) {
    // Logged in — show user info
    if (nameEl)    nameEl.textContent = user.name;
    if (roleEl)    roleEl.textContent = user.role === 'admin'
      ? '🛡️ Administrator'
      : user.role === 'seller' ? '🏪 Seller' : '🛍️ Buyer';
    if (loginBtn)  loginBtn.innerHTML = '👤 ' + user.name.split(' ')[0];
    if (adminItem) adminItem.style.display = user.role === 'admin' ? 'flex' : 'none';
    if (bizItem)   bizItem.style.display   = (user.role === 'seller' || user.role === 'admin') ? 'flex' : 'none';
  } else {
    // Guest — show login prompt
    if (nameEl)    nameEl.textContent = t('account-guest') || 'Guest';
    if (roleEl)    roleEl.textContent = t('account-not-logged') || 'Not logged in';
    if (loginBtn)  loginBtn.innerHTML = '🔒 Login';
    if (adminItem) adminItem.style.display = 'none';
    if (bizItem)   bizItem.style.display   = 'none';
  }

  // Header login/account button
  if (loginBtn) {
    loginBtn.onclick = () => user
      ? switchView('account')
      : window.location.href = 'login.html';
  }

  // Logout
  const logoutItem = $('logout-menu-item');
  if (logoutItem) {
    logoutItem.style.display = user ? 'flex' : 'none';
    logoutItem.onclick = () => {
      localStorage.removeItem('kagaCurrentUser');
      showToast(t('toast-logged-out') || 'Logged out successfully');
      setTimeout(() => window.location.href = 'login.html', 900);
    };
  }
}

// ===============================
// SECTION 18: MESSENGER
// (Login required — enforced by switchView)
// ===============================
function setupMessenger() {
  const input   = $('chat-input');
  const sendBtn = $('send-btn');
  const msgs    = $('chat-messages');
  if (!input || !msgs) return;

  function sendMsg() {
    const text = input.value.trim();
    if (!text) return;
    const bubble = document.createElement('div');
    bubble.className = 'msg-bubble msg-out';
    bubble.textContent = text;
    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;
    input.value = '';
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.className = 'msg-bubble msg-in';
      reply.textContent = 'Asante! Tutawasiliana nawe hivi karibuni.';
      msgs.appendChild(reply);
      msgs.scrollTop = msgs.scrollHeight;
    }, 1000);
  }

  input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMsg(); });
  if (sendBtn) sendBtn.addEventListener('click', sendMsg);
}

// ===============================
// SECTION 19: SEARCH
// ===============================
function setupSearch() {
  const global = $('global-search-input');
  const shop   = $('shop-search-input');
  const hero   = $('hero-search-input');

  if (global) {
    global.addEventListener('keydown', e => {
      if (e.key === 'Enter' && global.value.trim()) {
        shopFilter.search = global.value.trim();
        switchView('shop');
      }
    });
  }
  if (shop) {
    shop.addEventListener('input', () => {
      shopFilter.search = shop.value.trim();
      renderShopProducts();
    });
  }
  if (hero) {
    hero.addEventListener('keydown', e => {
      if (e.key === 'Enter') doHeroSearch();
    });
  }
}

window.doHeroSearch = function() {
  const heroInput = $('hero-search-input');
  if (heroInput && heroInput.value.trim()) {
    shopFilter.search = heroInput.value.trim();
    switchView('shop');
  }
};

function setupPriceSlider() {
  const slider = $('price-slider');
  const label  = $('price-val');
  if (!slider) return;
  slider.addEventListener('input', () => {
    shopFilter.maxPrice = Number(slider.value);
    if (label) label.textContent = Number(slider.value).toLocaleString();
    renderShopProducts();
  });
}

function setupSort() {
  const select = $('sort-select');
  if (!select) return;
  select.addEventListener('change', () => renderShopProducts());
}

// ===============================
// SECTION 20: TOAST
// ===============================
function showToast(msg) {
  const existing = document.querySelector('.toast-msg');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.textContent = msg;
  toast.style.cssText =
    'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);' +
    'background:var(--brand-dark);color:#fff;padding:12px 20px;border-radius:999px;' +
    'font-size:13px;font-weight:500;z-index:9999;white-space:nowrap;' +
    'box-shadow:0 4px 20px rgba(0,0,0,0.2);';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity    = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ===============================
// SECTION 21: BOOT
// ===============================
document.addEventListener('DOMContentLoaded', function() {

  // No forced redirect — guests are welcome to browse
  checkAuth();
  renderCategories();
  renderHomeProducts();
  renderHomeBusinesses();
  setupSearch();
  setupPriceSlider();
  setupSort();
  setupMessenger();
  setupDelivery();
  updateCartBadge();
  renderCart();
  switchView('home');

  console.log("✅ Kaga's Market loaded — Option B auth active");
  console.log("   Guests: can browse home, shop, products, businesses");
  console.log("   Login required: cart checkout, add product, dashboards, messenger, delivery");
});
export { app };
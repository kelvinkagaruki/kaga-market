const products = [
  {
    id: 1,
    title: 'Fresh Market Basket',
    type: 'product',
    category: 'Groceries',
    price: 29.99,
    description: 'Local organic produce and pantry essentials delivered fresh daily.',
    vendor: "Kaga's Grocers",
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Handcrafted Beauty Kit',
    type: 'product',
    category: 'Beauty & Personal Care',
    price: 45.0,
    description: 'Premium natural skincare and self-care products from local artisans.',
    vendor: 'Luna Craft',
    rating: 4.9,
  },
  {
    id: 3,
    title: 'Electronics & Gadgets Pack',
    type: 'product',
    category: 'Electronics',
    price: 89.99,
    description: 'Quality electronics and gadgets at competitive prices with warranty.',
    vendor: 'TechHub Store',
    rating: 4.7,
  },
  {
    id: 4,
    title: 'Home Decor Bundle',
    type: 'product',
    category: 'Home & Garden',
    price: 65.0,
    description: 'Modern home decor items to enhance your living space.',
    vendor: 'HomeStyle Co',
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Fashion & Apparel Set',
    type: 'product',
    category: 'Fashion & Clothing',
    price: 120.0,
    description: 'Latest fashion clothing and accessories from top local designers.',
    vendor: "Kaga's Fashion",
    rating: 4.8,
  },
  {
    id: 6,
    title: 'Sports Equipment Pack',
    type: 'product',
    category: 'Sports & Fitness',
    price: 95.0,
    description: 'Professional-grade fitness and sports equipment for all levels.',
    vendor: 'Fit First',
    rating: 4.7,
  },
  {
    id: 7,
    title: 'Professional Repair Service',
    type: 'service',
    category: 'Home Services',
    price: 60.0,
    description: 'Expert home repair and maintenance services with fast turnaround.',
    vendor: 'QuickFix Services',
    rating: 4.9,
  },
  {
    id: 8,
    title: 'Personal Shopping Assistant',
    type: 'service',
    category: 'Delivery & Support',
    price: 30.0,
    description: 'Professional shopping and delivery assistance for your convenience.',
    vendor: "Kaga's Helpers",
    rating: 4.8,
  },
  {
    id: 9,
    title: 'Books & Educational Materials',
    type: 'product',
    category: 'Books & Education',
    price: 35.0,
    description: 'Curated selection of books and educational resources.',
    vendor: 'Knowledge Hub',
    rating: 4.7,
  },
  {
    id: 10,
    title: 'Direct Business Showcase',
    type: 'product',
    category: 'Business Marketplace',
    price: 49.99,
    description: 'Products posted directly by local businesses for fast, trusted delivery.',
    vendor: 'Direct Seller Hub',
    rating: 4.8,
  },
  {
    id: 11,
    title: 'Vendor Shop Starter Pack',
    type: 'product',
    category: 'Business Marketplace',
    price: 59.99,
    description: 'A special bundle featuring directly posted business products and services.',
    vendor: 'Vendor Village',
    rating: 4.6,
  },
];

const translations = {
  en: {
    'brand-title': "Kaga's Market",
    'brand-subtitle': 'Marketplace + Delivery Platform',
    'nav-products': 'Products',
    'nav-business': 'Business',
    'nav-services': 'Services',
    'nav-cart': 'Cart',
    'nav-home': 'Home',
    'nav-shop': 'Shop',
    'nav-account': 'Account',
    'nav-messenger': 'Messenger',
    'header-account': '👤 Account',
    'menu-profile': 'My Profile',
    'menu-orders': 'Order History',
    'menu-settings': 'Settings',
    'menu-logout': 'Logout',
    'profile-title': 'My Profile',
    'profile-subtitle': 'Manage your account information',
    'orders-title': 'Order History',
    'orders-subtitle': 'Track your past orders and deliveries',
    'settings-title': 'Settings',
    'settings-subtitle': 'Customize your experience',
    'settings-appearance': 'Appearance',
    'business-title': 'Business Listings',
    'business-subtitle': 'Browse direct business postings and vendor products',
    'settings-theme': 'Color Theme',
    'settings-color-scheme': 'Display Mode',
    'theme-light': 'Light',
    'theme-dark': 'Dark',
    'settings-fontsize': 'Font Size',
    'settings-account': 'Account Settings',
    'settings-location': 'Default Location',
    'settings-phone': 'Phone Number',
    'settings-username': 'Username',
    'btn-settings': 'Settings',
    'form-username': 'Username',
    'form-phone': 'Phone',
    'form-location': 'Location',
    'form-email': 'Email',
    'btn-back': 'Back',
    'btn-save': 'Save',
    'btn-add': 'Add to Cart',
    'btn-checkout': 'Proceed to Checkout',
    'btn-place-order': 'Place Order',
    'form-name': 'Full name',
    'form-address': 'Address',
    'form-city': 'City',
    'label-search': 'Search',
    'delivery-title': 'Delivery & Checkout',
    'delivery-subtitle': 'Enter address and delivery details to complete your order.',
    'delivery-option-label': 'Delivery option',
    'delivery-notes-label': 'Delivery notes',
    'delivery-total-label': 'Order total',
    'cart-title': 'Shopping Cart',
    'cart-subtitle': 'Review your items and proceed to delivery checkout',
    'cart-total-label': 'Order Total',
    'services-title': 'Services',
    'services-subtitle': 'Get professional help delivered to your location',
    'hero-title': 'Your Local Marketplace & Delivery Platform',
    'hero-subtitle': 'Shop from trusted local businesses and get fast delivery right to your door',
    'home-title': "Welcome to Kaga's Market",
    'home-subtitle': 'Fast access to local shops, products, orders, and messages.',
    'home-shop-cta': 'Browse the Shop',
    'home-messenger-cta': 'Open Messenger',
    'home-card-products': 'Top products',
    'home-card-products-desc': 'Discover curated local items and trending deals.',
    'home-card-businesses': 'Trusted shops',
    'home-card-businesses-desc': 'Shop from registered businesses and local vendors.',
    'home-card-account': 'Your account',
    'home-card-account-desc': 'Manage your details, settings, and preferences.',
    'home-card-messenger': 'Orders & alerts',
    'home-card-messenger-desc': 'Track orders and get notified right away.',
    'home-featured': 'Featured products',
    'shop-title': 'Shop',
    'shop-subtitle': 'One page for products, businesses, and local shops.',
    'messenger-title': 'Messenger',
    'messenger-subtitle': 'Order updates, notifications, and delivery alerts.',
    'notifications-title': 'Notifications',
    'browse-products': 'Browse Products',
    'explore-categories': 'Explore categories and find exactly what you need',
    'search-placeholder': 'Search by product or business name...',
    'delivery-name-placeholder': 'Your name',
    'delivery-phone-placeholder': 'Phone number',
    'delivery-address-placeholder': 'Street address',
    'delivery-city-placeholder': 'City',
    'delivery-notes-placeholder': 'Special instructions',
    'profile-username-placeholder': 'Your username',
    'profile-phone-placeholder': 'Phone number',
    'profile-location-placeholder': 'City/Area',
    'profile-email-placeholder': 'Email address',
    'settings-location-placeholder': 'City/Area',
    'settings-phone-placeholder': 'Phone number',
    'settings-username-placeholder': 'Username',
    'order-number': 'Order #',
    'order-date': 'Date:',
    'order-items': 'Items:',
    'order-total': 'Total:',
    'order-delivery': 'Delivery to:',
    'order-status': 'Status:',
    'alert-fill-fields': 'Please complete all delivery fields before placing your order.',
    'alert-order-success': 'Order placed successfully!',
    'alert-profile-updated': 'Profile updated successfully!',
    'alert-settings-saved': 'Settings saved successfully!',
    'alert-logout-confirm': 'Are you sure you want to logout?',
    'alert-logged-out': 'Logged out successfully',
    'lang-english': 'English',
    'lang-kiswahili': 'Kiswahili',
  },
  sw: {
    'brand-title': "Kaga's Market",
    'brand-subtitle': 'Soko ya Mahitaji + Jukwaa la Uhamiaji',
    'nav-products': 'Bidhaa',
    'nav-business': 'Biashara',
    'nav-services': 'Huduma',
    'nav-cart': 'Karata',
    'header-account': '👤 Akaunti',
    'menu-profile': 'Wasifu Wangu',
    'menu-orders': 'Historia ya Agizo',
    'menu-settings': 'Mipango',
    'menu-logout': 'Toka',
    'profile-title': 'Wasifu Wangu',
    'profile-subtitle': 'Dhibiti taarifa za akaunti yako',
    'orders-title': 'Historia ya Agizo',
    'orders-subtitle': 'Fuatilia agizo lako la zamani na uhamiaji',
    'settings-title': 'Mipango',
    'settings-subtitle': 'Kamatanisha uzoefu wako',
    'settings-appearance': 'Muonekano',
    'business-title': 'Orodha za Biashara',
    'business-subtitle': 'Vinjari bidhaa zilizowekwa moja kwa moja na wachuuzi wa ndani',
    'settings-theme': 'Rangi ya Kisimu',
    'settings-color-scheme': 'Hali ya Onyesho',
    'theme-light': 'Nuru',
    'theme-dark': 'Giza',
    'settings-fontsize': 'Ukubwa wa Herufi',
    'settings-account': 'Mipango ya Akaunti',
    'settings-location': 'Mahali Mbali Hapo Kwa Kawaida',
    'settings-phone': 'Nambari ya Simu',
    'settings-username': 'Jina la Mtumiaji',
    'form-username': 'Jina la Mtumiaji',
    'form-phone': 'Simu',
    'form-location': 'Mahali',
    'form-email': 'Barua Pepe',
    'btn-back': 'Rudi',
    'btn-save': 'Hifadhi',
    'btn-add': 'Ongeza katika Karata',
    'browse-products': 'Vinjari Bidhaa',
    'explore-categories': 'Tafuta kategori na pata kile unachotaka',
    'search-placeholder': 'Tafuta kwa jina la bidhaa au biashara...',
    'delivery-name-placeholder': 'Jina lako',
    'delivery-phone-placeholder': 'Nambari ya simu',
    'delivery-address-placeholder': 'Anwani ya barabara',
    'delivery-city-placeholder': 'Jiji',
    'delivery-notes-placeholder': 'Maelezo ya ziada',
    'profile-username-placeholder': 'Jina lako la mtumiaji',
    'profile-phone-placeholder': 'Nambari ya simu',
    'profile-location-placeholder': 'Jiji/Eneo',
    'profile-email-placeholder': 'Anwani ya barua pepe',
    'settings-location-placeholder': 'Jiji/Eneo',
    'settings-phone-placeholder': 'Nambari ya simu',
    'settings-username-placeholder': 'Jina la mtumiaji',
    'lang-english': 'Kiingereza',
    'lang-kiswahili': 'Kiswahili',
  },
};

const state = {
  cart: [],
  view: 'home',
  query: '',
  selectedCategory: 'All',
  selectedBusinessCategory: 'All Businesses',
  language: localStorage.getItem('language') || 'en',
  currentTheme: localStorage.getItem('theme') || 'default',
  displayMode: localStorage.getItem('displayMode') || 'light',
  fontSize: parseInt(localStorage.getItem('fontSize')) || 100,
  user: {
    username: localStorage.getItem('username') || 'Guest',
    phone: localStorage.getItem('phone') || '',
    location: localStorage.getItem('location') || '',
    email: localStorage.getItem('email') || '',
  },
  orders: JSON.parse(localStorage.getItem('orders')) || [],
  notifications: JSON.parse(localStorage.getItem('notifications')) || [
    { title: "Welcome to Kaga's Market", message: 'Start shopping or check your orders now.', time: 'Just now' },
    { title: 'Delivery reminder', message: 'Your next delivery can arrive today if ordered early.', time: 'Today' },
  ],
  delivery: {
    name: '',
    phone: '',
    address: '',
    city: '',
    method: 'standard',
    notes: '',
  },
};

const elements = {
  homeFeaturedList: document.getElementById('home-featured-list'),
  homePanel: document.getElementById('home-panel'),
  shopPanel: document.getElementById('shop-panel'),
  accountPanel: document.getElementById('account-panel'),
  messengerPanel: document.getElementById('messenger-panel'),
  productList: document.getElementById('product-list'),
  serviceList: document.getElementById('service-list'),
  categoryFilter: document.getElementById('category-filter'),
  cartList: document.getElementById('cart-list'),
  cartCount: document.getElementById('cart-count'),
  cartTotal: document.getElementById('cart-total'),
  checkoutBtn: document.getElementById('checkout-btn'),
  searchInput: document.getElementById('search-input'),
  productsPanel: document.getElementById('products-panel'),
  servicesPanel: document.getElementById('services-panel'),
  cartPanel: document.getElementById('cart-panel'),
  deliveryPanel: document.getElementById('delivery-panel'),
  profilePanel: document.getElementById('profile-panel'),
  settingsPanel: document.getElementById('settings-panel'),
  deliveryForm: document.getElementById('delivery-form'),
  deliveryName: document.getElementById('delivery-name'),
  deliveryPhone: document.getElementById('delivery-phone'),
  deliveryAddress: document.getElementById('delivery-address'),
  deliveryCity: document.getElementById('delivery-city'),
  deliveryMethod: document.getElementById('delivery-method'),
  deliveryNotes: document.getElementById('delivery-notes'),
  deliveryTotal: document.getElementById('delivery-total'),
  deliveryBackBtn: document.getElementById('delivery-back-btn'),
  showHomeBtn: document.getElementById('show-home-btn'),
  showShopBtn: document.getElementById('show-shop-btn'),
  showAccountBtn: document.getElementById('show-account-btn'),
  showMessengerBtn: document.getElementById('show-messenger-btn'),
  showCartBtn: document.getElementById('show-cart-btn'),
  accountMenuBtn: document.getElementById('account-menu-btn'),
  accountDropdown: document.getElementById('account-dropdown'),
  profileLink: document.getElementById('profile-link'),
  ordersLink: document.getElementById('orders-link'),
  settingsLink: document.getElementById('settings-link'),
  logoutLink: document.getElementById('logout-link'),
  businessPanel: document.getElementById('business-panel'),
  businessSearchInput: document.getElementById('business-search-input'),
  businessCategoryFilter: document.getElementById('business-category-filter'),
  businessList: document.getElementById('business-list'),
  productSelect: document.getElementById('product-select'),
  productImageInput: document.getElementById('product-image-input'),
  uploadPreview: document.getElementById('upload-preview'),
  uploadPreviewImage: document.getElementById('upload-preview-image'),
  languageSwitcher: document.getElementById('language-switcher'),
  profileForm: document.getElementById('profile-form'),
  profileUsername: document.getElementById('profile-username'),
  profilePhone: document.getElementById('profile-phone'),
  profileLocation: document.getElementById('profile-location'),
  profileEmail: document.getElementById('profile-email'),
  profileBackBtn: document.getElementById('profile-back-btn'),
  ordersList: document.getElementById('orders-list'),
  ordersBackBtn: document.getElementById('orders-back-btn'),
  settingsForm: document.getElementById('settings-form'),
  fontSizeInput: document.getElementById('font-size'),
  fontSizeDisplay: document.getElementById('font-size-display'),
  settingsLocation: document.getElementById('settings-location'),
  settingsPhone: document.getElementById('settings-phone'),
  settingsUsername: document.getElementById('settings-username'),
  displayModeSelector: document.getElementById('display-mode-selector'),
  settingsBackBtn: document.getElementById('settings-back-btn'),
  notificationList: document.getElementById('notification-list'),
};

const getCategories = () => {
  const allCategories = [...new Set(products.filter((item) => item.type === 'product').map((item) => item.category))];
  return ['All', ...allCategories.sort()];
};

const renderCategoryFilter = () => {
  const categories = getCategories();
  elements.categoryFilter.innerHTML = categories
    .map(
      (cat) =>
        `<button class="category-btn ${state.selectedCategory === cat ? 'active' : ''}" onclick="selectCategory('${cat}')">\n        ${cat}\n      </button>`
    )
    .join('');
};

window.selectCategory = (category) => {
  state.selectedCategory = category;
  renderCategoryFilter();
  renderCards();
};

const renderCards = () => {
  const activeProducts = products.filter((item) => item.type === 'product');
  const activeServices = products.filter((item) => item.type === 'service');

  let filteredProducts = activeProducts.filter((item) =>
    item.title.toLowerCase().includes(state.query.toLowerCase()) ||
    item.vendor.toLowerCase().includes(state.query.toLowerCase())
  );

  if (state.selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter((item) => item.category === state.selectedCategory);
  }

  const filteredServices = activeServices.filter((item) =>
    item.title.toLowerCase().includes(state.query.toLowerCase()) ||
    item.vendor.toLowerCase().includes(state.query.toLowerCase())
  );

  elements.productList.innerHTML = filteredProducts.length
    ? filteredProducts.map(createCardHtml).join('')
    : '<p class="no-results">No products found. Try a different search or category.</p>';
  elements.serviceList.innerHTML = filteredServices.length
    ? filteredServices.map(createCardHtml).join('')
    : '<p class="no-results">No services available right now.</p>';
  renderCart();
  renderHomeFeatured();
};

const getBusinessCategories = () => {
  const businessCategories = [...new Set(products.map((item) => item.category))];
  return ['All Businesses', ...businessCategories.sort()];
};

const renderBusinessCategoryFilter = () => {
  const categories = getBusinessCategories();
  elements.businessCategoryFilter.innerHTML = categories
    .map(
      (cat) =>
        `<button class="category-btn ${state.selectedBusinessCategory === cat ? 'active' : ''}" onclick="selectBusinessCategory('${cat}')">
        ${cat}
      </button>`
    )
    .join('');
};

window.selectBusinessCategory = (category) => {
  state.selectedBusinessCategory = category;
  renderBusinessCategoryFilter();
  renderBusinessCards();
};

const renderBusinessCards = () => {
  const businessItems = products.filter((item) => item.type === 'product');
  let filteredBusinesses = businessItems.filter((item) =>
    item.title.toLowerCase().includes(state.query.toLowerCase()) ||
    item.vendor.toLowerCase().includes(state.query.toLowerCase())
  );

  if (state.selectedBusinessCategory !== 'All Businesses') {
    filteredBusinesses = filteredBusinesses.filter((item) => item.category === state.selectedBusinessCategory);
  }

  elements.businessList.innerHTML = filteredBusinesses.length
    ? filteredBusinesses.map(createCardHtml).join('')
    : '<p class="no-results">No business shops match your search.</p>';
};

const populateProductSelect = () => {
  if (!elements.productSelect) return;
  elements.productSelect.innerHTML = products
    .filter((item) => item.type === 'product')
    .map((item) => `<option value="${item.id}">${item.title} — ${item.vendor}</option>`)
    .join('');
};

const handleProductImageFile = (event) => {
  const file = event.target.files[0];
  if (!file) {
    elements.uploadPreview.classList.add('hidden');
    elements.uploadPreviewImage.src = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    elements.uploadPreviewImage.src = reader.result;
    elements.uploadPreview.classList.remove('hidden');
  };
  reader.readAsDataURL(file);
};

const uploadProductImage = (event) => {
  event.preventDefault();
  const productId = parseInt(elements.productSelect.value, 10);
  const file = elements.productImageInput.files[0];

  if (!productId || !file) {
    alert('Please choose a product and select an image before uploading.');
    return;
  }

  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const reader = new FileReader();
  reader.onload = () => {
    product.image = reader.result;
    alert('Product image uploaded successfully.');
    elements.productImageInput.value = '';
    elements.uploadPreview.classList.add('hidden');
    renderCards();
    renderBusinessCards();
    renderHomeFeatured();
  };
  reader.readAsDataURL(file);
};

const createCardHtml = (item) => {
  const categoryHtml = item.category ? `<span class="category-badge">${item.category}</span>` : '';
  const ratingHtml = item.rating ? `<div class="rating">★ ${item.rating}</div>` : '';
  const imageHtml = item.image
    ? `<div class="card-image"><img src="${item.image}" alt="${item.title}" /></div>`
    : `<div class="card-image placeholder">📦</div>`;
  return `
    <article class="card">
      ${imageHtml}
      <div class="card-content">
        <div class="card-header">
          <h3>${item.title}</h3>
          ${categoryHtml}
        </div>
        ${ratingHtml}
        <p class="vendor">${item.vendor}</p>
        <p class="description">${item.description}</p>
        <p class="price">$${item.price.toFixed(2)}</p>
        <div class="actions">
          <button class="secondary-button" onclick="handleDetails(${item.id})">Details</button>
          <button class="primary-button" onclick="addToCart(${item.id})">Add Cart</button>
        </div>
      </div>
    </article>
  `;
};

const renderHomeFeatured = () => {
  if (!elements.homeFeaturedList) return;
  const featured = products.filter((item) => item.type === 'product').slice(0, 4);
  elements.homeFeaturedList.innerHTML = featured.length
    ? featured.map(createCardHtml).join('')
    : '<p class="no-results">No featured products available yet.</p>';
};

const renderNotifications = () => {
  if (!elements.notificationList) return;
  elements.notificationList.innerHTML = state.notifications
    .map(
      (notification) => `
      <div class="notification-item">
        <h4>${notification.title}</h4>
        <p>${notification.message}</p>
        <span>${notification.time}</span>
      </div>
    `
    )
    .join('');
};

window.handleDetails = (id) => {
  const item = products.find((entry) => entry.id === id);
  if (!item) return;
  alert(`${item.title} by ${item.vendor}\n\n${item.description}\n\nPrice: $${item.price.toFixed(2)}`);
};

window.addToCart = (id) => {
  const item = products.find((entry) => entry.id === id);
  if (!item) return;

  const cartItem = state.cart.find((entry) => entry.id === id);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({ ...item, quantity: 1 });
  }
  renderCart();
};

const calculateTotal = () => {
  return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const renderCart = () => {
  elements.cartList.innerHTML = state.cart.length
    ? state.cart.map(createCartHtml).join('')
    : '<p>Your cart is empty. Add products or services to start your order.</p>';

  const total = calculateTotal();
  elements.cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartTotal.textContent = `$${total.toFixed(2)}`;
  elements.checkoutBtn.disabled = total === 0;
  renderDeliverySummary();
};

const renderDeliverySummary = () => {
  if (!elements.deliveryTotal) return;
  elements.deliveryTotal.textContent = `$${calculateTotal().toFixed(2)}`;
};

const createCartHtml = (item) => {
  return `
    <div class="cart-item">
      <h3>${item.title}</h3>
      <p class="meta">${item.vendor}</p>
      <p>Quantity: ${item.quantity}</p>
      <p class="meta">Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
      <div class="actions">
        <button class="secondary-button" onclick="updateQuantity(${item.id}, -1)">-</button>
        <button class="secondary-button" onclick="updateQuantity(${item.id}, 1)">+</button>
        <button class="secondary-button" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    </div>
  `;
};

window.updateQuantity = (id, delta) => {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((entry) => entry.id !== id);
  }
  renderCart();
};

window.removeFromCart = (id) => {
  state.cart = state.cart.filter((entry) => entry.id !== id);
  renderCart();
};

const openDeliveryForm = () => {
  if (!state.cart.length) return;
  switchView('delivery');
  populateDeliveryFields();
};

const populateDeliveryFields = () => {
  elements.deliveryName.value = state.delivery.name;
  elements.deliveryPhone.value = state.delivery.phone;
  elements.deliveryAddress.value = state.delivery.address;
  elements.deliveryCity.value = state.delivery.city;
  elements.deliveryMethod.value = state.delivery.method;
  elements.deliveryNotes.value = state.delivery.notes;
  renderDeliverySummary();
};

const placeOrder = () => {
  const { name, phone, address, city, method } = state.delivery;
  if (!name || !phone || !address || !city) {
    alert('Please complete all delivery fields before placing your order.');
    return;
  }

  const total = calculateTotal();
  const methodText = method === 'express' ? 'Express delivery' : 'Standard delivery';
  alert(`Order placed for ${name}.\n${methodText}\nTotal: $${total.toFixed(2)}\nDelivery to: ${address}, ${city}`);

  state.orders.unshift({
    date: new Date().toLocaleDateString(),
    items: state.cart.map((item) => `${item.quantity}x ${item.title}`).join(', '),
    total,
    address,
    city,
    status: 'Delivered',
  });
  localStorage.setItem('orders', JSON.stringify(state.orders));

  state.cart = [];
  state.delivery = {
    name: '',
    phone: '',
    address: '',
    city: '',
    method: 'standard',
    notes: '',
  };
  renderCart();
  switchView('home');
};

const switchView = (view) => {
  state.view = view;
  elements.homePanel.classList.toggle('hidden', view !== 'home');
  elements.shopPanel.classList.toggle('hidden', view !== 'shop');
  elements.accountPanel.classList.toggle('hidden', view !== 'account');
  elements.settingsPanel.classList.toggle('hidden', view !== 'settings');
  elements.messengerPanel.classList.toggle('hidden', view !== 'messenger');
  elements.cartPanel.classList.toggle('hidden', view !== 'cart');
  elements.deliveryPanel.classList.toggle('hidden', view !== 'delivery');

  elements.showHomeBtn.classList.toggle('active', view === 'home');
  elements.showShopBtn.classList.toggle('active', view === 'shop');
  elements.showAccountBtn.classList.toggle('active', view === 'account');
  elements.showMessengerBtn.classList.toggle('active', view === 'messenger');
  elements.showCartBtn.classList.toggle('active', view === 'cart');

  if (view === 'shop') {
    elements.businessSearchInput.value = state.query;
    renderBusinessCategoryFilter();
    renderBusinessCards();
    renderCards();
  }

  if (view === 'home') {
    renderHomeFeatured();
  }

  closeAccountDropdown();
};

const translate = (key) => {
  const lang = state.language;
  return translations[lang]?.[key] || translations.en[key] || key;
};

const updateLanguage = () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translate(key);
  });
  document.getElementById('search-input').placeholder = translate('search-placeholder');
  localStorage.setItem('language', state.language);
  document.documentElement.lang = state.language;
  document.querySelectorAll('[data-placeholder-i18n]').forEach((el) => {
    const placeholderKey = el.getAttribute('data-placeholder-i18n');
    if (placeholderKey) {
      el.placeholder = translate(placeholderKey);
    }
  });
};

const toggleAccountDropdown = () => {
  elements.accountDropdown.classList.toggle('hidden');
};

const closeAccountDropdown = () => {
  elements.accountDropdown.classList.add('hidden');
};

const openProfile = () => {
  switchView('account');
  elements.profileUsername.value = state.user.username;
  elements.profilePhone.value = state.user.phone;
  elements.profileLocation.value = state.user.location;
  elements.profileEmail.value = state.user.email;
};

const saveProfile = () => {
  state.user.username = elements.profileUsername.value;
  state.user.phone = elements.profilePhone.value;
  state.user.location = elements.profileLocation.value;
  state.user.email = elements.profileEmail.value;
  
  localStorage.setItem('username', state.user.username);
  localStorage.setItem('phone', state.user.phone);
  localStorage.setItem('location', state.user.location);
  localStorage.setItem('email', state.user.email);
  
  alert('Profile updated successfully!');
};

const renderOrders = () => {
  if (!state.orders.length) {
    elements.ordersList.innerHTML = '<p>No orders yet. Start shopping to see your order history.</p>';
    return;
  }
  
  elements.ordersList.innerHTML = state.orders.map((order, idx) => `
    <div class="order-item">
      <h3>Order #${idx + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Items:</strong> ${order.items}</p>
      <p><strong>Total:</strong> $${order.total.toFixed(2)}</p>
      <p><strong>Delivery to:</strong> ${order.address}, ${order.city}</p>
      <p><strong>Status:</strong> <span class="status-badge">${order.status || 'Delivered'}</span></p>
    </div>
  `).join('');
};

const openOrders = () => {
  switchView('messenger');
  renderOrders();
  renderNotifications();
};

const applyTheme = (theme) => {
  state.currentTheme = theme;
  const root = document.documentElement;
  
  const themes = {
    default: { '--primary': '#0066cc', '--primary-dark': '#004499', '--accent': '#ff9900' },
    dark: { '--primary': '#1a1a1a', '--primary-dark': '#000000', '--accent': '#ffaa00' },
    green: { '--primary': '#10b981', '--primary-dark': '#059669', '--accent': '#3b82f6' },
    purple: { '--primary': '#8b5cf6', '--primary-dark': '#7c3aed', '--accent': '#ec4899' },
  };
  
  Object.entries(themes[theme] || themes.default).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  applyDisplayMode(state.displayMode);
  localStorage.setItem('theme', theme);
  renderCategoryFilter();
};

const applyDisplayMode = (mode) => {
  state.displayMode = mode;
  const root = document.documentElement;
  const modes = {
    light: {
      '--bg': '#f8fafb',
      '--surface': '#ffffff',
      '--text': '#1f2937',
      '--text-light': '#6b7280',
      '--border': '#e5e7eb',
      '--hover': '#f3f4f6',
    },
    dark: {
      '--bg': '#111827',
      '--surface': '#1f2937',
      '--text': '#f9fafb',
      '--text-light': '#d1d5db',
      '--border': '#374151',
      '--hover': '#1f2937',
    },
  };
  Object.entries(modes[mode] || modes.light).forEach(([key, value]) => root.style.setProperty(key, value));
  localStorage.setItem('displayMode', mode);
};

const applyFontSize = (size) => {
  state.fontSize = size;
  document.documentElement.style.fontSize = size + '%';
  elements.fontSizeDisplay.textContent = size + '%';
  localStorage.setItem('fontSize', size);
};

const saveSettings = () => {
  state.user.location = elements.settingsLocation.value;
  state.user.phone = elements.settingsPhone.value;
  state.user.username = elements.settingsUsername.value;
  if (elements.displayModeSelector) {
    state.displayMode = elements.displayModeSelector.value;
    applyDisplayMode(state.displayMode);
  }
  
  localStorage.setItem('location', state.user.location);
  localStorage.setItem('phone', state.user.phone);
  localStorage.setItem('username', state.user.username);
  localStorage.setItem('displayMode', state.displayMode);
  
  alert('Settings saved successfully!');
};

const openSettings = () => {
  switchView('settings');
  elements.settingsLocation.value = state.user.location;
  elements.settingsPhone.value = state.user.phone;
  elements.settingsUsername.value = state.user.username;
  if (elements.displayModeSelector) elements.displayModeSelector.value = state.displayMode;
  elements.fontSizeInput.value = state.fontSize;
  elements.fontSizeDisplay.textContent = state.fontSize + '%';
};

const logout = () => {
  if (confirm('Are you sure you want to logout?')) {
    state.user = { username: 'Guest', phone: '', location: '', email: '' };
    localStorage.clear();
    switchView('home');
    alert('Logged out successfully');
  }
};

window.selectCategory = (category) => {
  state.selectedCategory = category;
  renderCategoryFilter();
  renderCards();
};

elements.searchInput.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderCards();
  if (state.view === 'shop') renderBusinessCards();
});
elements.businessSearchInput.addEventListener('input', (event) => {
  state.query = event.target.value.trim();
  renderBusinessCards();
  renderCards();
});

// Global search functionality
const globalSearchInput = document.getElementById('global-search-input');
const searchResults = document.getElementById('search-results');
const searchResultsContent = document.getElementById('search-results-content');
const searchClearBtn = document.getElementById('search-clear-btn');

window.handleSearchResult = (id) => {
  const item = products.find(p => p.id === id);
  if (item) {
    globalSearchInput.value = '';
    searchResults.classList.add('hidden');
    searchClearBtn.classList.add('hidden');
    handleDetails(id);
  }
};

elements.showHomeBtn.addEventListener('click', () => switchView('home'));
elements.showShopBtn.addEventListener('click', () => switchView('shop'));
elements.showAccountBtn.addEventListener('click', () => switchView('account'));
elements.showMessengerBtn.addEventListener('click', () => switchView('messenger'));
elements.showCartBtn.addEventListener('click', () => switchView('cart'));
elements.checkoutBtn.addEventListener('click', openDeliveryForm);
elements.deliveryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  placeOrder();
});
elements.deliveryBackBtn.addEventListener('click', () => switchView('cart'));
elements.deliveryName.addEventListener('input', (event) => { state.delivery.name = event.target.value; });
elements.deliveryPhone.addEventListener('input', (event) => { state.delivery.phone = event.target.value; });
elements.deliveryAddress.addEventListener('input', (event) => { state.delivery.address = event.target.value; });
elements.deliveryCity.addEventListener('input', (event) => { state.delivery.city = event.target.value; });
elements.deliveryMethod.addEventListener('change', (event) => { state.delivery.method = event.target.value; renderDeliverySummary(); });
elements.deliveryNotes.addEventListener('input', (event) => { state.delivery.notes = event.target.value; });

elements.accountMenuBtn.addEventListener('click', toggleAccountDropdown);
elements.profileLink.addEventListener('click', openProfile);
elements.ordersLink.addEventListener('click', openOrders);
elements.settingsLink.addEventListener('click', openSettings);
elements.logoutLink.addEventListener('click', logout);
elements.languageSwitcher.addEventListener('change', (event) => {
  state.language = event.target.value;
  updateLanguage();
});

elements.profileForm.addEventListener('submit', (event) => {
  event.preventDefault();
  saveProfile();
});
elements.profileBackBtn.addEventListener('click', () => switchView('home'));

elements.settingsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  saveSettings();
});
elements.settingsBackBtn.addEventListener('click', () => switchView('account'));
elements.ordersBackBtn.addEventListener('click', () => switchView('home'));

elements.fontSizeInput.addEventListener('input', (event) => {
  applyFontSize(event.target.value);
});

if (elements.displayModeSelector) {
  elements.displayModeSelector.value = state.displayMode;
  elements.displayModeSelector.addEventListener('change', (event) => {
    applyDisplayMode(event.target.value);
  });
}

document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const theme = btn.getAttribute('data-theme');
    applyTheme(theme);
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.addEventListener('click', (event) => {
  if (!elements.accountMenuBtn.contains(event.target) && !elements.accountDropdown.contains(event.target)) {
    closeAccountDropdown();
  }
});

elements.languageSwitcher.value = state.language;
applyFontSize(state.fontSize);
applyTheme(state.currentTheme);
document.querySelectorAll('.color-btn').forEach((btn) => {
  if (btn.getAttribute('data-theme') === state.currentTheme) {
    btn.classList.add('selected');
  }
});
populateProductSelect();
updateLanguage();

if (elements.productImageInput) {
  elements.productImageInput.addEventListener('change', handleProductImageFile);
}
const uploadForm = document.getElementById('product-image-upload-form');
if (uploadForm) {
  uploadForm.addEventListener('submit', uploadProductImage);
}

// Hook search UI elements (global + messenger) and initialize placeholders
elements.globalSearchInput = document.getElementById('global-search-input');
elements.searchResults = document.getElementById('search-results');
elements.messengerSearchInput = document.getElementById('messenger-search-input');
if (elements.globalSearchInput) elements.globalSearchInput.placeholder = translate('search-placeholder');
if (elements.messengerSearchInput) elements.messengerSearchInput.placeholder = translate('search-placeholder');

// Global search behavior: searches products, notifications, and orders
const performGlobalSearch = (query) => {
  if (!elements.searchResults) return;
  const q = (query || '').trim().toLowerCase();
  if (!q) {
    elements.searchResults.classList.add('hidden');
    elements.searchResults.innerHTML = '';
    return;
  }

  const prodMatches = products.filter(p => (p.title + ' ' + p.vendor + ' ' + (p.category||'')).toLowerCase().includes(q)).slice(0, 6);
  const notifMatches = (state.notifications || []).filter(n => (n.title + ' ' + n.message).toLowerCase().includes(q)).slice(0, 4);
  const orderMatches = (state.orders || []).filter(o => (o.items + ' ' + (o.date||'') + ' ' + (o.address||'')).toLowerCase().includes(q)).slice(0, 4);

  let html = '';
  if (prodMatches.length) {
    html += '<div class="result-group"><strong>Products</strong>';
    prodMatches.forEach(p => html += `<div class="result-item" onclick="handleDetails(${p.id});document.getElementById('search-results').classList.add('hidden')">${p.title} — <span class="meta">${p.vendor}</span></div>`);
    html += '</div>';
  }
  if (notifMatches.length) {
    html += '<div class="result-group"><strong>Notifications</strong>';
    notifMatches.forEach(n => html += `<div class="result-item" onclick="switchView('messenger');document.getElementById('search-results').classList.add('hidden')"><strong>${n.title}</strong><div class="meta">${n.message}</div></div>`);
    html += '</div>';
  }
  if (orderMatches.length) {
    html += '<div class="result-group"><strong>Orders</strong>';
    orderMatches.forEach((o, idx) => html += `<div class="result-item" onclick="switchView('messenger');document.getElementById('search-results').classList.add('hidden')">Order #${idx+1} — ${o.items} — $${o.total.toFixed(2)}</div>`);
    html += '</div>';
  }

  elements.searchResults.innerHTML = html || '<div class="result-group"><em>No results</em></div>';
  elements.searchResults.classList.remove('hidden');
};

if (elements.globalSearchInput) {
  elements.globalSearchInput.addEventListener('input', (e) => performGlobalSearch(e.target.value));
  elements.globalSearchInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') { elements.searchResults.classList.add('hidden'); elements.globalSearchInput.value = ''; } });
}

// Messenger-specific search: filters notifications and orders in-place
if (elements.messengerSearchInput) {
  elements.messengerSearchInput.addEventListener('input', (e) => {
    const q = (e.target.value || '').trim().toLowerCase();
    const notifs = (state.notifications || []).filter(n => (n.title + ' ' + n.message).toLowerCase().includes(q));
    elements.notificationList.innerHTML = notifs.length ? notifs.map(n => `<div class="notification-item"><h4>${n.title}</h4><p>${n.message}</p><span>${n.time}</span></div>`).join('') : '<p class="no-results">No notifications match your search.</p>';
    const ords = (state.orders || []).filter(o => (o.items + ' ' + (o.date||'')).toLowerCase().includes(q));
    elements.ordersList.innerHTML = ords.length ? ords.map((order, idx) => `<div class="order-item"><h3>Order #${idx+1}</h3><p><strong>Date:</strong> ${order.date}</p><p><strong>Items:</strong> ${order.items}</p><p><strong>Total:</strong> $${order.total.toFixed(2)}</p></div>`).join('') : '<p class="no-results">No orders match your search.</p>';
  });
}

// Close search results when clicking outside
document.addEventListener('click', (e) => {
  const sr = elements.searchResults;
  if (sr && !sr.contains(e.target) && e.target !== elements.globalSearchInput) {
    sr.classList.add('hidden');
  }
});

renderCategoryFilter();
renderCards();

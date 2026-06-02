const products = [
  { id: 1, title: 'Fresh Market Basket', type: 'product', category: 'Groceries', price: 29.99, description: 'Local organic produce and pantry essentials delivered fresh daily.', vendor: "Kaga's Grocers", rating: 4.8 },
  { id: 2, title: 'Handcrafted Beauty Kit', type: 'product', category: 'Beauty & Personal Care', price: 45.0, description: 'Premium natural skincare and self-care products from local artisans.', vendor: 'Luna Craft', rating: 4.9 },
  { id: 3, title: 'Electronics & Gadgets Pack', type: 'product', category: 'Electronics', price: 89.99, description: 'Quality electronics and gadgets at competitive prices with warranty.', vendor: 'TechHub Store', rating: 4.7 },
  { id: 4, title: 'Home Decor Bundle', type: 'product', category: 'Home & Garden', price: 65.0, description: 'Modern home decor items to enhance your living space.', vendor: 'HomeStyle Co', rating: 4.6 },
  { id: 5, title: 'Fashion & Apparel Set', type: 'product', category: 'Fashion & Clothing', price: 120.0, description: 'Latest fashion clothing and accessories from top local designers.', vendor: "Kaga's Fashion", rating: 4.8 },
  { id: 6, title: 'Sports Equipment Pack', type: 'product', category: 'Sports & Fitness', price: 95.0, description: 'Professional-grade fitness and sports equipment for all levels.', vendor: 'Fit First', rating: 4.7 },
  { id: 7, title: 'Professional Repair Service', type: 'service', category: 'Home Services', price: 60.0, description: 'Expert home repair and maintenance services with fast turnaround.', vendor: 'QuickFix Services', rating: 4.9 },
  { id: 8, title: 'Personal Shopping Assistant', type: 'service', category: 'Delivery & Support', price: 30.0, description: 'Professional shopping and delivery assistance for your convenience.', vendor: "Kaga's Helpers", rating: 4.8 },
  { id: 9, title: 'Books & Educational Materials', type: 'product', category: 'Books & Education', price: 35.0, description: 'Curated selection of books and educational resources.', vendor: 'Knowledge Hub', rating: 4.7 },
  { id: 10, title: 'Direct Business Showcase', type: 'product', category: 'Business Marketplace', price: 49.99, description: 'Products posted directly by local businesses for fast, trusted delivery.', vendor: 'Direct Seller Hub', rating: 4.8 },
  { id: 11, title: 'Vendor Shop Starter Pack', type: 'product', category: 'Business Marketplace', price: 59.99, description: 'A special bundle featuring directly posted business products and services.', vendor: 'Vendor Village', rating: 4.6 },
];

const translations = {
  en: {
    'brand-title': "Kaga's Market",
    'brand-subtitle': 'Marketplace + Delivery Platform',
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
    'delivery-standard': 'Standard delivery',
    'delivery-express': 'Express delivery',
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
    'upload-image-title': 'Upload Product Image',
    'upload-image-desc': 'Businesses can attach a photo to any product listing.',
    'upload-select-product': 'Choose product',
    'upload-select-file': 'Select image',
    'upload-preview-title': 'Preview',
    'upload-submit': 'Upload Image',
    'account-title': 'Account',
    'account-subtitle': 'View and update your personal details.',
    'footer-text': 'Built for businesses and customers to connect with delivery-ready products and services.',
    'lang-english': 'English',
    'lang-kiswahili': 'Kiswahili',
  },
  // ✅ FIXED: Full Kiswahili translations added
  sw: {
    'brand-title': "Kaga's Market",
    'brand-subtitle': 'Soko ya Mahitaji + Jukwaa la Uhamiaji',
    'nav-home': 'Nyumbani',
    'nav-shop': 'Duka',
    'nav-account': 'Akaunti',
    'nav-messenger': 'Ujumbe',
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
    'settings-location': 'Mahali pa Kawaida',
    'settings-phone': 'Nambari ya Simu',
    'settings-username': 'Jina la Mtumiaji',
    'btn-settings': 'Mipango',
    'form-username': 'Jina la Mtumiaji',
    'form-phone': 'Simu',
    'form-location': 'Mahali',
    'form-email': 'Barua Pepe',
    'btn-back': 'Rudi',
    'btn-save': 'Hifadhi',
    'btn-add': 'Ongeza kwenye Kikapu',
    'btn-checkout': 'Endelea na Malipo',
    'btn-place-order': 'Weka Agizo',
    'form-name': 'Jina kamili',
    'form-address': 'Anwani',
    'form-city': 'Jiji',
    'label-search': 'Tafuta',
    'delivery-title': 'Uwasilishaji na Malipo',
    'delivery-subtitle': 'Ingiza anwani na maelezo ya uwasilishaji kukamilisha agizo lako.',
    'delivery-option-label': 'Chaguo la uwasilishaji',
    'delivery-standard': 'Uwasilishaji wa kawaida',
    'delivery-express': 'Uwasilishaji wa haraka',
    'delivery-notes-label': 'Maelezo ya uwasilishaji',
    'delivery-total-label': 'Jumla ya agizo',
    'cart-title': 'Kikapu cha Ununuzi',
    'cart-subtitle': 'Kagua vitu vyako na uendelee kwa uwasilishaji',
    'cart-total-label': 'Jumla ya Agizo',
    'services-title': 'Huduma',
    'services-subtitle': 'Pata msaada wa kitaalamu uwasilishwaji mahali pako',
    'hero-title': 'Soko Lako la Ndani & Jukwaa la Uwasilishaji',
    'hero-subtitle': 'Nunua kutoka kwa biashara za ndani na upate uwasilishaji wa haraka mlangoni kwako',
    'home-title': "Karibu Kaga's Market",
    'home-subtitle': 'Ufikiaji wa haraka wa maduka, bidhaa, maagizo, na ujumbe.',
    'home-shop-cta': 'Vinjari Duka',
    'home-messenger-cta': 'Fungua Ujumbe',
    'home-card-products': 'Bidhaa Bora',
    'home-card-products-desc': 'Gundua bidhaa za ndani na matoleo ya mtindo.',
    'home-card-businesses': 'Maduka Yanayoaminika',
    'home-card-businesses-desc': 'Nunua kutoka kwa biashara zilizosajiliwa na wachuuzi wa ndani.',
    'home-card-account': 'Akaunti Yako',
    'home-card-account-desc': 'Dhibiti maelezo, mipango, na mapendeleo yako.',
    'home-card-messenger': 'Maagizo na Arifa',
    'home-card-messenger-desc': 'Fuatilia maagizo na upate arifa mara moja.',
    'home-featured': 'Bidhaa Zilizoangaziwa',
    'shop-title': 'Duka',
    'shop-subtitle': 'Ukurasa mmoja wa bidhaa, biashara, na maduka ya ndani.',
    'messenger-title': 'Ujumbe',
    'messenger-subtitle': 'Masasisho ya maagizo, arifa, na tahadhari za uwasilishaji.',
    'notifications-title': 'Arifa',
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
    'upload-image-title': 'Pakia Picha ya Bidhaa',
    'upload-image-desc': 'Biashara zinaweza kuambatisha picha kwa orodha yoyote ya bidhaa.',
    'upload-select-product': 'Chagua bidhaa',
    'upload-select-file': 'Chagua picha',
    'upload-preview-title': 'Hakiki',
    'upload-submit': 'Pakia Picha',
    'account-title': 'Akaunti',
    'account-subtitle': 'Angalia na usasisha maelezo yako ya kibinafsi.',
    'footer-text': 'Imejengwa kwa biashara na wateja kuunganika na bidhaa na huduma tayari kwa uwasilishaji.',
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
  delivery: { name: '', phone: '', address: '', city: '', method: 'standard', notes: '' },
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
  const allCategories = [...new Set(products.filter(i => i.type === 'product').map(i => i.category))];
  return ['All', ...allCategories.sort()];
};

const renderCategoryFilter = () => {
  elements.categoryFilter.innerHTML = getCategories()
    .map(cat => `<button class="category-btn ${state.selectedCategory === cat ? 'active' : ''}" onclick="selectCategory('${cat}')">${cat}</button>`)
    .join('');
};

window.selectCategory = (category) => {
  state.selectedCategory = category;
  renderCategoryFilter();
  renderCards();
};

const renderCards = () => {
  const activeProducts = products.filter(i => i.type === 'product');
  const activeServices = products.filter(i => i.type === 'service');

  let filteredProducts = activeProducts.filter(i =>
    i.title.toLowerCase().includes(state.query.toLowerCase()) ||
    i.vendor.toLowerCase().includes(state.query.toLowerCase())
  );
  if (state.selectedCategory !== 'All') {
    filteredProducts = filteredProducts.filter(i => i.category === state.selectedCategory);
  }

  const filteredServices = activeServices.filter(i =>
    i.title.toLowerCase().includes(state.query.toLowerCase()) ||
    i.vendor.toLowerCase().includes(state.query.toLowerCase())
  );

  elements.productList.innerHTML = filteredProducts.length
    ? filteredProducts.map(createCardHtml).join('')
    : '<p class="no-results">No products found.</p>';
  elements.serviceList.innerHTML = filteredServices.length
    ? filteredServices.map(createCardHtml).join('')
    : '<p class="no-results">No services available right now.</p>';

  renderCart();
  renderHomeFeatured();
};

const getBusinessCategories = () => {
  const cats = [...new Set(products.map(i => i.category))];
  return ['All Businesses', ...cats.sort()];
};

const renderBusinessCategoryFilter = () => {
  elements.businessCategoryFilter.innerHTML = getBusinessCategories()
    .map(cat => `<button class="category-btn ${state.selectedBusinessCategory === cat ? 'active' : ''}" onclick="selectBusinessCategory('${cat}')">${cat}</button>`)
    .join('');
};

window.selectBusinessCategory = (category) => {
  state.selectedBusinessCategory = category;
  renderBusinessCategoryFilter();
  renderBusinessCards();
};

const renderBusinessCards = () => {
  let filtered = products.filter(i => i.type === 'product').filter(i =>
    i.title.toLowerCase().includes(state.query.toLowerCase()) ||
    i.vendor.toLowerCase().includes(state.query.toLowerCase())
  );
  if (state.selectedBusinessCategory !== 'All Businesses') {
    filtered = filtered.filter(i => i.category === state.selectedBusinessCategory);
  }
  elements.businessList.innerHTML = filtered.length
    ? filtered.map(createCardHtml).join('')
    : '<p class="no-results">No business shops match your search.</p>';
};

const populateProductSelect = () => {
  if (!elements.productSelect) return;
  elements.productSelect.innerHTML = products
    .filter(i => i.type === 'product')
    .map(i => `<option value="${i.id}">${i.title} — ${i.vendor}</option>`)
    .join('');
};

const handleProductImageFile = (event) => {
  const file = event.target.files[0];
  if (!file) { elements.uploadPreview.classList.add('hidden'); elements.uploadPreviewImage.src = ''; return; }
  const reader = new FileReader();
  reader.onload = () => { elements.uploadPreviewImage.src = reader.result; elements.uploadPreview.classList.remove('hidden'); };
  reader.readAsDataURL(file);
};

const uploadProductImage = (event) => {
  event.preventDefault();
  const productId = parseInt(elements.productSelect.value, 10);
  const file = elements.productImageInput.files[0];
  if (!productId || !file) { alert('Please choose a product and select an image before uploading.'); return; }
  const product = products.find(i => i.id === productId);
  if (!product) return;
  const reader = new FileReader();
  reader.onload = () => {
    product.image = reader.result;
    alert('Product image uploaded successfully.');
    elements.productImageInput.value = '';
    elements.uploadPreview.classList.add('hidden');
    renderCards(); renderBusinessCards(); renderHomeFeatured();
  };
  reader.readAsDataURL(file);
};

const createCardHtml = (item) => {
  const categoryHtml = item.category ? `<span class="category-badge">${item.category}</span>` : '';
  const ratingHtml = item.rating ? `<div class="rating">★ ${item.rating}</div>` : '';
  const imageHtml = item.image
    ? `<div class="card-image"><img src="${item.image}" alt="${item.title}" /></div>`
    : `<div class="card-image placeholder">📦</div>`;
  // ✅ FIXED: Currency changed from $ to TZS
  return `
    <article class="card">
      ${imageHtml}
      <div class="card-content">
        <div class="card-header"><h3>${item.title}</h3>${categoryHtml}</div>
        ${ratingHtml}
        <p class="vendor">${item.vendor}</p>
        <p class="description">${item.description}</p>
        <p class="price">TZS ${item.price.toLocaleString()}</p>
        <div class="actions">
          <button class="secondary-button" onclick="handleDetails(${item.id})">Details</button>
          <button class="primary-button" onclick="addToCart(${item.id})">Add Cart</button>
        </div>
      </div>
    </article>`;
};

const renderHomeFeatured = () => {
  if (!elements.homeFeaturedList) return;
  const featured = products.filter(i => i.type === 'product').slice(0, 4);
  elements.homeFeaturedList.innerHTML = featured.length
    ? featured.map(createCardHtml).join('')
    : '<p class="no-results">No featured products available yet.</p>';
};

const renderNotifications = () => {
  if (!elements.notificationList) return;
  elements.notificationList.innerHTML = state.notifications
    .map(n => `<div class="notification-item"><h4>${n.title}</h4><p>${n.message}</p><span>${n.time}</span></div>`)
    .join('');
};

window.handleDetails = (id) => {
  const item = products.find(e => e.id === id);
  if (!item) return;
  alert(`${item.title} by ${item.vendor}\n\n${item.description}\n\nPrice: TZS ${item.price.toLocaleString()}`);
};

window.addToCart = (id) => {
  const item = products.find(e => e.id === id);
  if (!item) return;
  const cartItem = state.cart.find(e => e.id === id);
  if (cartItem) { cartItem.quantity += 1; } else { state.cart.push({ ...item, quantity: 1 }); }
  renderCart();
};

const calculateTotal = () => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

const renderCart = () => {
  elements.cartList.innerHTML = state.cart.length
    ? state.cart.map(createCartHtml).join('')
    : '<p>Your cart is empty. Add products or services to start your order.</p>';

  const total = calculateTotal();
  elements.cartCount.textContent = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  // ✅ FIXED: Currency changed to TZS
  elements.cartTotal.textContent = `TZS ${total.toLocaleString()}`;
  // ✅ FIXED: Checkout button now enables correctly
  elements.checkoutBtn.disabled = state.cart.length === 0;
  renderDeliverySummary();
};

const renderDeliverySummary = () => {
  if (!elements.deliveryTotal) return;
  elements.deliveryTotal.textContent = `TZS ${calculateTotal().toLocaleString()}`;
};

const createCartHtml = (item) => `
  <div class="cart-item">
    <h3>${item.title}</h3>
    <p class="meta">${item.vendor}</p>
    <p>Quantity: ${item.quantity}</p>
    <p class="meta">Subtotal: TZS ${(item.price * item.quantity).toLocaleString()}</p>
    <div class="actions">
      <button class="secondary-button" onclick="updateQuantity(${item.id}, -1)">-</button>
      <button class="secondary-button" onclick="updateQuantity(${item.id}, 1)">+</button>
      <button class="secondary-button" onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  </div>`;

window.updateQuantity = (id, delta) => {
  const item = state.cart.find(e => e.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) state.cart = state.cart.filter(e => e.id !== id);
  renderCart();
};

window.removeFromCart = (id) => {
  state.cart = state.cart.filter(e => e.id !== id);
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
  // ✅ FIXED: Currency changed to TZS
  alert(`Order placed for ${name}.\n${methodText}\nTotal: TZS ${total.toLocaleString()}\nDelivery to: ${address}, ${city}`);

  state.orders.unshift({
    date: new Date().toLocaleDateString(),
    items: state.cart.map(i => `${i.quantity}x ${i.title}`).join(', '),
    total, address, city, status: 'Delivered',
  });
  localStorage.setItem('orders', JSON.stringify(state.orders));
  state.cart = [];
  state.delivery = { name: '', phone: '', address: '', city: '', method: 'standard', notes: '' };
  renderCart();
  switchView('home');
};
const switchView = (view) => {
  state.view = view;

  // =========================
  // PANEL VISIBILITY CONTROL
  // =========================
  const panels = [
    elements.homePanel,
    elements.shopPanel,
    elements.accountPanel,
    elements.messengerPanel,
    elements.cartPanel,
    elements.deliveryPanel,
    elements.settingsPanel
  ];

  panels.forEach(panel => {
    if (panel) panel.classList.add('hidden');
  });

  const map = {
    home: elements.homePanel,
    shop: elements.shopPanel,
    account: elements.accountPanel,
    messenger: elements.messengerPanel,
    cart: elements.cartPanel,
    delivery: elements.deliveryPanel,
    settings: elements.settingsPanel
  };

  if (map[view]) {
    map[view].classList.remove('hidden');
  }

  // =========================
  // DESKTOP BUTTONS ACTIVE STATE
  // =========================
  const buttons = [
    elements.showHomeBtn,
    elements.showShopBtn,
    elements.showAccountBtn,
    elements.showMessengerBtn,
    elements.showCartBtn
  ];

  buttons.forEach(btn => {
    if (btn) btn.classList.remove('active');
  });

  const activeMap = {
    home: elements.showHomeBtn,
    shop: elements.showShopBtn,
    account: elements.showAccountBtn,
    messenger: elements.showMessengerBtn,
    cart: elements.showCartBtn
  };

  if (activeMap[view]) {
    activeMap[view].classList.add('active');
  }

  // =========================
  // AUTO FEATURES PER VIEW
  // =========================
  if (view === 'shop') {
    renderBusinessCategoryFilter();
    renderBusinessCards();
    renderCards();
  }

  if (view === 'home') {
    renderHomeFeatured();
  }

  if (view === 'messenger') {
    renderNotifications();
    renderOrders();
  }

  closeAccountDropdown();
};

const translate = (key) => translations[state.language]?.[key] || translations.en[key] || key;

// ✅ FIXED: updateLanguage now also updates the mobile bottom nav
const updateLanguage = () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = translate(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
    el.placeholder = translate(el.getAttribute('data-placeholder-i18n'));
  });
  localStorage.setItem('language', state.language);
  document.documentElement.lang = state.language;
};

const toggleAccountDropdown = () => elements.accountDropdown.classList.toggle('hidden');
const closeAccountDropdown = () => elements.accountDropdown.classList.add('hidden');

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
  // ✅ FIXED: Currency changed to TZS
  elements.ordersList.innerHTML = state.orders.map((order, idx) => `
    <div class="order-item">
      <h3>Order #${idx + 1}</h3>
      <p><strong>Date:</strong> ${order.date}</p>
      <p><strong>Items:</strong> ${order.items}</p>
      <p><strong>Total:</strong> TZS ${order.total.toLocaleString()}</p>
      <p><strong>Delivery to:</strong> ${order.address}, ${order.city}</p>
      <p><strong>Status:</strong> <span class="status-badge">${order.status || 'Delivered'}</span></p>
    </div>`).join('');
};

const openOrders = () => {
  switchView('messenger');
  renderOrders();
  renderNotifications();
};

const applyTheme = (theme) => {
  state.currentTheme = theme;
  const themes = {
    default: { '--primary': '#0066cc', '--primary-dark': '#004499', '--accent': '#ff9900' },
    dark: { '--primary': '#1a1a1a', '--primary-dark': '#000000', '--accent': '#ffaa00' },
    green: { '--primary': '#10b981', '--primary-dark': '#059669', '--accent': '#3b82f6' },
    purple: { '--primary': '#8b5cf6', '--primary-dark': '#7c3aed', '--accent': '#ec4899' },
  };
  Object.entries(themes[theme] || themes.default).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
  applyDisplayMode(state.displayMode);
  localStorage.setItem('theme', theme);
  renderCategoryFilter();
};

const applyDisplayMode = (mode) => {
  state.displayMode = mode;
  const modes = {
    light: { '--bg': '#f8fafb', '--surface': '#ffffff', '--text': '#1f2937', '--text-light': '#6b7280', '--border': '#e5e7eb', '--hover': '#f3f4f6' },
    dark: { '--bg': '#111827', '--surface': '#1f2937', '--text': '#f9fafb', '--text-light': '#d1d5db', '--border': '#374151', '--hover': '#1f2937' },
  };
  Object.entries(modes[mode] || modes.light).forEach(([k, v]) => document.documentElement.style.setProperty(k, v));
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
  if (elements.displayModeSelector) { state.displayMode = elements.displayModeSelector.value; applyDisplayMode(state.displayMode); }
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

// --- Event Listeners ---
elements.searchInput.addEventListener('input', (e) => { state.query = e.target.value.trim(); renderCards(); if (state.view === 'shop') renderBusinessCards(); });
elements.businessSearchInput.addEventListener('input', (e) => { state.query = e.target.value.trim(); renderBusinessCards(); renderCards(); });
elements.showHomeBtn.addEventListener('click', () => switchView('home'));
elements.showShopBtn.addEventListener('click', () => switchView('shop'));
elements.showAccountBtn.addEventListener('click', () => switchView('account'));
elements.showMessengerBtn.addEventListener('click', () => switchView('messenger'));
elements.showCartBtn.addEventListener('click', () => switchView('cart'));
elements.checkoutBtn.addEventListener('click', openDeliveryForm);
elements.deliveryForm.addEventListener('submit', (e) => { e.preventDefault(); placeOrder(); });
elements.deliveryBackBtn.addEventListener('click', () => switchView('cart'));
elements.deliveryName.addEventListener('input', (e) => { state.delivery.name = e.target.value; });
elements.deliveryPhone.addEventListener('input', (e) => { state.delivery.phone = e.target.value; });
elements.deliveryAddress.addEventListener('input', (e) => { state.delivery.address = e.target.value; });
elements.deliveryCity.addEventListener('input', (e) => { state.delivery.city = e.target.value; });
elements.deliveryMethod.addEventListener('change', (e) => { state.delivery.method = e.target.value; renderDeliverySummary(); });
elements.deliveryNotes.addEventListener('input', (e) => { state.delivery.notes = e.target.value; });
elements.accountMenuBtn.addEventListener('click', toggleAccountDropdown);
elements.profileLink.addEventListener('click', openProfile);
elements.ordersLink.addEventListener('click', openOrders);
elements.settingsLink.addEventListener('click', openSettings);
elements.logoutLink.addEventListener('click', logout);

// ✅ FIXED: Language switcher now triggers full translation
elements.languageSwitcher.addEventListener('change', (e) => { state.language = e.target.value; updateLanguage(); });

elements.profileForm.addEventListener('submit', (e) => { e.preventDefault(); saveProfile(); });
elements.profileBackBtn.addEventListener('click', () => switchView('home'));
elements.settingsForm.addEventListener('submit', (e) => { e.preventDefault(); saveSettings(); });
elements.settingsBackBtn.addEventListener('click', () => switchView('account'));
elements.ordersBackBtn.addEventListener('click', () => switchView('home'));
elements.fontSizeInput.addEventListener('input', (e) => applyFontSize(e.target.value));

if (elements.displayModeSelector) {
  elements.displayModeSelector.value = state.displayMode;
  elements.displayModeSelector.addEventListener('change', (e) => applyDisplayMode(e.target.value));
}

document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const theme = btn.getAttribute('data-theme');
    applyTheme(theme);
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

document.addEventListener('click', (e) => {
  if (!elements.accountMenuBtn.contains(e.target) && !elements.accountDropdown.contains(e.target)) closeAccountDropdown();
});

// Global search
const globalSearchInput = document.getElementById('global-search-input');
const searchResults = document.getElementById('search-results');

const performGlobalSearch = (query) => {
  if (!searchResults) return;
  const q = (query || '').trim().toLowerCase();
  if (!q) { searchResults.classList.add('hidden'); searchResults.innerHTML = ''; return; }
  const prodMatches = products.filter(p => (p.title + ' ' + p.vendor + ' ' + (p.category || '')).toLowerCase().includes(q)).slice(0, 6);
  const notifMatches = state.notifications.filter(n => (n.title + ' ' + n.message).toLowerCase().includes(q)).slice(0, 4);
  const orderMatches = state.orders.filter(o => (o.items + ' ' + (o.date || '') + ' ' + (o.address || '')).toLowerCase().includes(q)).slice(0, 4);
  let html = '';
  if (prodMatches.length) {
    html += '<div class="result-group"><strong>Products</strong>';
    prodMatches.forEach(p => html += `<div class="result-item" onclick="handleDetails(${p.id});document.getElementById('search-results').classList.add('hidden')">${p.title} — <span>${p.vendor}</span></div>`);
    html += '</div>';
  }
  if (notifMatches.length) {
    html += '<div class="result-group"><strong>Notifications</strong>';
    notifMatches.forEach(n => html += `<div class="result-item" onclick="switchView('messenger');document.getElementById('search-results').classList.add('hidden')"><strong>${n.title}</strong><div>${n.message}</div></div>`);
    html += '</div>';
  }
  if (orderMatches.length) {
    html += '<div class="result-group"><strong>Orders</strong>';
    orderMatches.forEach((o, idx) => html += `<div class="result-item" onclick="switchView('messenger');document.getElementById('search-results').classList.add('hidden')">Order #${idx + 1} — ${o.items} — TZS ${o.total.toLocaleString()}</div>`);
    html += '</div>';
  }
  searchResults.innerHTML = html || '<div class="result-group"><em>No results</em></div>';
  searchResults.classList.remove('hidden');
};

if (globalSearchInput) {
  globalSearchInput.addEventListener('input', (e) => performGlobalSearch(e.target.value));
  globalSearchInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') { searchResults.classList.add('hidden'); globalSearchInput.value = ''; } });
}

const messengerSearchInput = document.getElementById('messenger-search-input');
if (messengerSearchInput) {
  messengerSearchInput.addEventListener('input', (e) => {
    const q = (e.target.value || '').trim().toLowerCase();
    const notifs = state.notifications.filter(n => (n.title + ' ' + n.message).toLowerCase().includes(q));
    elements.notificationList.innerHTML = notifs.length
      ? notifs.map(n => `<div class="notification-item"><h4>${n.title}</h4><p>${n.message}</p><span>${n.time}</span></div>`).join('')
      : '<p class="no-results">No notifications match your search.</p>';
    const ords = state.orders.filter(o => (o.items + ' ' + (o.date || '')).toLowerCase().includes(q));
    elements.ordersList.innerHTML = ords.length
      ? ords.map((o, idx) => `<div class="order-item"><h3>Order #${idx + 1}</h3><p><strong>Date:</strong> ${o.date}</p><p><strong>Items:</strong> ${o.items}</p><p><strong>Total:</strong> TZS ${o.total.toLocaleString()}</p></div>`).join('')
      : '<p class="no-results">No orders match your search.</p>';
  });
}

document.addEventListener('click', (e) => {
  if (searchResults && !searchResults.contains(e.target) && e.target !== globalSearchInput) searchResults.classList.add('hidden');
});

if (elements.productImageInput) elements.productImageInput.addEventListener('change', handleProductImageFile);
const uploadForm = document.getElementById('product-image-upload-form');
if (uploadForm) uploadForm.addEventListener('submit', uploadProductImage);

// ✅ Cart count badge style
const style = document.createElement('style');
style.textContent = `#cart-count { background: #ff3b30; color: white; border-radius: 50%; padding: 0.1rem 0.45rem; font-size: 0.75rem; font-weight: 700; margin-left: 0.25rem; }`;
document.head.appendChild(style);

// --- Init ---
elements.languageSwitcher.value = state.language;
applyFontSize(state.fontSize);
applyTheme(state.currentTheme);
document.querySelectorAll('.color-btn').forEach(btn => {
  if (btn.getAttribute('data-theme') === state.currentTheme) btn.classList.add('selected');
});
populateProductSelect();
updateLanguage();
renderCategoryFilter();
renderCards();
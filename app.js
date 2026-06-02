/**********************
 * LOAD / SAVE DATA
 **********************/
const savedData = localStorage.getItem("kagaMarket");

/**********************
 * PRODUCTS (STATIC)
 **********************/
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
];

/**********************
 * STATE (ONLY ONCE)
 **********************/
let state = {
  cart: [],
  view: 'home',
  query: '',
  selectedCategory: 'All',
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
  notifications: JSON.parse(localStorage.getItem('notifications')) || [],
  delivery: { name: '', phone: '', address: '', city: '', method: 'standard', notes: '' },
  products: []
};

/**********************
 * SAVE / LOAD STATE
 **********************/
function saveData() {
  localStorage.setItem("kagaMarket", JSON.stringify(state));
}

function loadData() {
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      state = { ...state, ...parsed };
    } catch (e) {
      console.error("Load error", e);
    }
  }
}

/**********************
 * ELEMENTS
 **********************/
const elements = {
  homePanel: document.getElementById('home-panel'),
  shopPanel: document.getElementById('shop-panel'),
  accountPanel: document.getElementById('account-panel'),
  messengerPanel: document.getElementById('messenger-panel'),
  cartPanel: document.getElementById('cart-panel'),
  deliveryPanel: document.getElementById('delivery-panel'),
  settingsPanel: document.getElementById('settings-panel'),
  adminPanel: document.getElementById('admin-panel'),

  productList: document.getElementById('product-list'),
  serviceList: document.getElementById('service-list'),
  cartList: document.getElementById('cart-list'),
  cartCount: document.getElementById('cart-count'),
  cartTotal: document.getElementById('cart-total'),

  searchInput: document.getElementById('search-input'),
  businessSearchInput: document.getElementById('business-search-input'),

  checkoutBtn: document.getElementById('checkout-btn'),
  notificationList: document.getElementById('notification-list'),
  ordersList: document.getElementById('orders-list')
};

/**********************
 * SWITCH VIEW (FIXED)
 **********************/
function switchView(view) {
  state.view = view;

  const panels = [
    elements.homePanel,
    elements.shopPanel,
    elements.accountPanel,
    elements.messengerPanel,
    elements.cartPanel,
    elements.deliveryPanel,
    elements.settingsPanel,
    elements.adminPanel
  ];

  panels.forEach(p => p && p.classList.add("hidden"));

  const map = {
    home: elements.homePanel,
    shop: elements.shopPanel,
    account: elements.accountPanel,
    messenger: elements.messengerPanel,
    cart: elements.cartPanel,
    delivery: elements.deliveryPanel,
    settings: elements.settingsPanel,
    admin: elements.adminPanel
  };

  if (map[view]) map[view].classList.remove("hidden");

  if (view === "shop") renderCards();
  if (view === "messenger") renderMessenger();
}

/**********************
 * CARDS
 **********************/
function createCard(item) {
  return `
  <div class="card">
    <h3>${item.title}</h3>
    <p>${item.vendor}</p>
    <p>${item.price} TZS</p>
    <button onclick="addToCart(${item.id})">Add</button>
  </div>`;
}

function renderCards() {
  const list = products.filter(p => p.type === "product");

  elements.productList.innerHTML =
    list.map(createCard).join("");
}

/**********************
 * CART
 **********************/
function addToCart(id) {
  const item = products.find(p => p.id === id);
  const existing = state.cart.find(p => p.id === id);

  if (existing) existing.quantity++;
  else state.cart.push({ ...item, quantity: 1 });

  renderCart();
}

function renderCart() {
  elements.cartList.innerHTML = state.cart
    .map(i => `<div>${i.title} x${i.quantity}</div>`)
    .join("");

  elements.cartCount.textContent = state.cart.reduce((a, b) => a + b.quantity, 0);

  const total = state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
  elements.cartTotal.textContent = "TZS " + total.toLocaleString();
}

/**********************
 * MESSENGER
 **********************/
function renderMessenger() {
  elements.notificationList.innerHTML =
    state.notifications.map(n =>
      `<div><b>${n.title}</b><p>${n.message}</p></div>`
    ).join("");

  elements.ordersList.innerHTML =
    state.orders.map(o =>
      `<div>Order - ${o.items} - TZS ${o.total}</div>`
    ).join("");
}

/**********************
 * ADMIN (FIXED)
 **********************/
function openAdmin() {
  let pass = prompt("Enter Admin Password:");
  if (pass === "1234") switchView("admin");
  else alert("Wrong password!");
}

function loadAdminProducts() {
  const container = document.getElementById("admin-products-container");
  container.innerHTML = "";

  state.products.forEach((p, i) => {
    container.innerHTML += `
      <div>
        <h3>${p.name}</h3>
        <button onclick="approveProduct(${i})">Approve</button>
        <button onclick="deleteProduct(${i})">Delete</button>
      </div>`;
  });
}

function loadPendingProducts() {
  const container = document.getElementById("admin-products-container");
  container.innerHTML = "";

  state.products
    .filter(p => !p.status || p.status === "pending")
    .forEach((p, i) => {
      container.innerHTML += `
        <div>
          <h3>${p.name}</h3>
          <button onclick="approveProduct(${i})">Approve</button>
          <button onclick="deleteProduct(${i})">Delete</button>
        </div>`;
    });
}

function approveProduct(i) {
  state.products[i].status = "approved";
  saveData();
  loadAdminProducts();
}

function deleteProduct(i) {
  state.products.splice(i, 1);
  saveData();
  loadAdminProducts();
}

/**********************
 * INIT
 **********************/
loadData();
renderCards();
renderCart();
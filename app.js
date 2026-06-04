// ===============================
// KAGA'S MARKET — APP.JS
// Matches the new index.html
// ===============================

// ===============================
// SAFE DOM HELPER
// ===============================
function $(id) {
  return document.getElementById(id);
}

// ===============================
// SAMPLE DATA
// ===============================
const categories = [
  { icon: "📱", name: "Electronics", count: "320+" },
  { icon: "👗", name: "Fashion",     count: "580+" },
  { icon: "🍎", name: "Groceries",   count: "210+" },
  { icon: "🏠", name: "Home",        count: "150+" },
  { icon: "💄", name: "Beauty",      count: "95+"  },
  { icon: "⚽", name: "Sports",      count: "70+"  },
  { icon: "📚", name: "Books",       count: "40+"  },
  { icon: "🔧", name: "Tools",       count: "60+"  },
];

const products = [
  { id: 1, icon: "📱", name: "Samsung Galaxy A15",  price: 450000, seller: "TechHub Tz",    category: "Electronics" },
  { id: 2, icon: "👟", name: "Nike Air Max",         price: 120000, seller: "Fashion Store", category: "Fashion"     },
  { id: 3, icon: "🧴", name: "Skincare Bundle",      price: 45000,  seller: "Beauty World",  category: "Beauty"      },
  { id: 4, icon: "🎧", name: "Bluetooth Earbuds",    price: 55000,  seller: "TechHub Tz",    category: "Electronics" },
  { id: 5, icon: "👗", name: "Kanga Print Dress",    price: 35000,  seller: "Mama Pita",     category: "Fashion"     },
  { id: 6, icon: "🔋", name: "Power Bank 20000mAh", price: 65000,  seller: "Tech Central",  category: "Electronics" },
  { id: 7, icon: "🍯", name: "Organic Honey 1kg",   price: 18000,  seller: "Farm Fresh Tz", category: "Groceries"   },
  { id: 8, icon: "🪑", name: "Office Chair",         price: 95000,  seller: "Furniture Hub", category: "Home"        },
];

const businesses = [
  { icon: "📱", name: "TechHub Tanzania",  type: "Electronics",       rating: "4.8", reviews: 128 },
  { icon: "👗", name: "Fashion Store Tz",  type: "Clothing & Shoes",  rating: "4.6", reviews: 84  },
  { icon: "🍎", name: "Farm Fresh Tz",     type: "Food & Groceries",  rating: "4.9", reviews: 210 },
  { icon: "💄", name: "Beauty World Tz",   type: "Beauty & Skincare", rating: "4.7", reviews: 67  },
];

const professionals = [
  { icon: "⚡", name: "Hassan Mwangi",    title: "Electrical Engineer", rate: "TZS 30,000/hr",  phone: "255700000001" },
  { icon: "🏗️", name: "Salim Contractor", title: "Building Contractor", rate: "TZS 50,000/day", phone: "255700000002" },
  { icon: "🔨", name: "Fundi Juma",       title: "General Fundi",       rate: "TZS 20,000/hr",  phone: "255700000003" },
  { icon: "💻", name: "Zawadi Tech",      title: "IT Support",          rate: "TZS 25,000/hr",  phone: "255700000004" },
];

// ===============================
// VIEW SWITCHER
// ===============================
const panelMap = {
  home:                 "home-panel",
  shop:                 "shop-panel",
  product:              "product-panel",
  businesses:           "businesses-panel",
  services:             "services-panel",
  "customer-dashboard": "customer-dashboard-panel",
  "business-dashboard": "business-dashboard-panel",
  admin:                "admin-panel",
  account:              "account-panel",
  messenger:            "messenger-panel",
  cart:                 "cart-panel",
  delivery:             "delivery-panel",
  settings:             "settings-panel",
};

const mobNavMap = {
  home:      "mob-home",
  shop:      "mob-shop",
  services:  "mob-services",
  messenger: "mob-messenger",
  account:   "mob-account",
};

window.switchView = function (view) {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));

  const panelId = panelMap[view];
  if (panelId) {
    const panel = $(panelId);
    if (panel) panel.classList.add("active");
    else console.warn("Panel element not found for:", view);
  } else {
    console.warn("Unknown view:", view);
  }

  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  const desktopBtn = document.querySelector(`.nav-btn[onclick*="'${view}'"]`);
  if (desktopBtn) desktopBtn.classList.add("active");

  document.querySelectorAll(".mob-nav-btn").forEach(b => b.classList.remove("active"));
  if (mobNavMap[view]) {
    const mobBtn = $(mobNavMap[view]);
    if (mobBtn) mobBtn.classList.add("active");
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ===============================
// CART SYSTEM
// ===============================
let cart = [];

window.addToCart = function (name, price) {
  cart.push({ name, price });
  updateCartBadge();
  renderCart();
  showToast('✅ "' + name + '" added to cart!');
};

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  updateCartBadge();
  renderCart();
};

function updateCartBadge() {
  const badge = $("cart-count");
  if (badge) badge.textContent = cart.length;
}

function renderCart() {
  const cartList = $("cart-list");
  const totalBar = $("cart-total-bar");
  if (!cartList) return;

  if (cart.length === 0) {
    cartList.innerHTML =
      '<p style="color:var(--text-light);font-size:14px;text-align:center;margin-top:40px;">' +
      'Your cart is empty. ' +
      '<button onclick="switchView(\'shop\')" style="background:none;border:none;color:var(--brand);cursor:pointer;font-size:14px;">Browse products →</button>' +
      '</p>';
    if (totalBar) totalBar.style.display = "none";
    return;
  }

  if (totalBar) totalBar.style.display = "block";

  cartList.innerHTML = cart.map(function(item, i) {
    return '<div class="cart-item">' +
      '<div class="cart-item-img">📦</div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">TZS ' + item.price.toLocaleString() + '</div>' +
      '</div>' +
      '<button onclick="removeFromCart(' + i + ')" style="background:none;border:none;font-size:18px;cursor:pointer;color:var(--text-light);" title="Remove">🗑️</button>' +
    '</div>';
  }).join("");

  var subtotal = cart.reduce(function(sum, item) { return sum + item.price; }, 0);
  var delivery = 5000;
  var total = subtotal + delivery;

  var subtotalEl = $("cart-subtotal");
  var totalEl    = $("cart-total");
  if (subtotalEl) subtotalEl.textContent = "TZS " + subtotal.toLocaleString();
  if (totalEl)    totalEl.textContent    = "TZS " + total.toLocaleString();
}

// ===============================
// PRODUCT PAGE
// ===============================
window.openProduct = function (name, price, icon, desc, seller) {
  icon   = icon   || "📦";
  desc   = desc   || "";
  seller = seller || "";

  var nameEl  = $("product-page-name");
  var priceEl = $("product-page-price");
  var mainImg = $("main-product-img");
  var descEl  = $("product-page-desc");

  if (nameEl)        nameEl.textContent  = name;
  if (priceEl)       priceEl.textContent = "TZS " + price.toLocaleString();
  if (mainImg)       mainImg.textContent = icon;
  if (descEl && desc) descEl.textContent = desc;

  switchView("product");
};

// ===============================
// RENDER: CATEGORIES
// ===============================
function renderCategories() {
  var grid = $("categories-grid");
  if (!grid) return;

  grid.innerHTML = categories.map(function(c) {
    return '<div class="category-card" onclick="filterShopByCategory(\'' + c.name + '\')">' +
      '<span class="category-icon">' + c.icon + '</span>' +
      '<div class="category-name">' + c.name + '</div>' +
      '<div class="category-count">' + c.count + '</div>' +
    '</div>';
  }).join("");
}

// ===============================
// RENDER: PRODUCT CARD
// ===============================
function renderProductCard(p) {
  return '<div class="product-card" onclick="openProduct(\'' + p.name.replace(/'/g, "\\'") + '\', ' + p.price + ', \'' + p.icon + '\', \'\', \'' + p.seller + '\')">' +
    '<div class="product-img">' + p.icon + '</div>' +
    '<div class="product-info">' +
      '<div class="product-name">' + p.name + '</div>' +
      '<div class="product-price">TZS ' + p.price.toLocaleString() + '</div>' +
      '<div class="product-seller">' + p.seller + '</div>' +
    '</div>' +
    '<div class="product-actions">' +
      '<button class="btn-cart" onclick="event.stopPropagation(); addToCart(\'' + p.name.replace(/'/g, "\\'") + '\', ' + p.price + ')">Add to Cart</button>' +
      '<a href="https://wa.me/255700000000?text=Hi! I am interested in ' + encodeURIComponent(p.name) + '" target="_blank">' +
        '<button class="btn-whatsapp" onclick="event.stopPropagation();" title="WhatsApp seller">💬</button>' +
      '</a>' +
    '</div>' +
  '</div>';
}

// ===============================
// RENDER: FEATURED PRODUCTS
// ===============================
function renderFeaturedProducts() {
  var el = $("featured-products");
  if (!el) return;
  el.innerHTML = products.map(renderProductCard).join("");
}

// ===============================
// RENDER: SHOP PRODUCTS
// ===============================
var currentCategory = "All";
var currentSearch   = "";

function renderShopProducts() {
  var el = $("shop-product-list");
  if (!el) return;

  var filtered = products.filter(function(p) {
    var matchCat    = currentCategory === "All" || p.category === currentCategory;
    var matchSearch = p.name.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1 ||
                      p.seller.toLowerCase().indexOf(currentSearch.toLowerCase()) !== -1;
    return matchCat && matchSearch;
  });

  var countEl = $("results-count");
  if (countEl) countEl.textContent = filtered.length + " product" + (filtered.length !== 1 ? "s" : "");

  if (filtered.length === 0) {
    el.innerHTML = '<p style="color:var(--text-light);font-size:14px;grid-column:1/-1;text-align:center;padding:40px 0;">No products found.</p>';
    return;
  }

  el.innerHTML = filtered.map(renderProductCard).join("");
}

window.filterShopByCategory = function (cat) {
  currentCategory = cat;
  switchView("shop");
  renderShopProducts();

  document.querySelectorAll(".filter-option").forEach(function(opt) {
    opt.classList.remove("active");
    if (opt.textContent.trim().indexOf(cat) !== -1) opt.classList.add("active");
  });
};

// ===============================
// RENDER: BUSINESSES
// ===============================
function renderBusinessCard(b) {
  var stars    = Math.round(parseFloat(b.rating));
  var starStr  = "★".repeat(stars) + "☆".repeat(5 - stars);
  return '<div class="business-card">' +
    '<div class="biz-header">' +
      '<div class="biz-logo">' + b.icon + '</div>' +
      '<div>' +
        '<div class="biz-name">' + b.name + '</div>' +
        '<div class="biz-type">' + b.type + '</div>' +
      '</div>' +
    '</div>' +
    '<span class="verified-badge">✅ Verified</span>' +
    '<div class="biz-rating">' + b.rating + ' ' + starStr + ' <span style="font-size:11px;color:var(--text-light);">(' + b.reviews + ')</span></div>' +
  '</div>';
}

function renderHomeBusinesses() {
  var el = $("home-businesses");
  if (!el) return;
  el.innerHTML = businesses.slice(0, 4).map(renderBusinessCard).join("");
}

function renderAllBusinesses() {
  var el = $("all-businesses");
  if (!el) return;
  el.innerHTML = businesses.map(renderBusinessCard).join("");
}

// ===============================
// RENDER: PROFESSIONALS
// ===============================
function renderProfessionals() {
  var el = $("professionals-list");
  if (!el) return;

  el.innerHTML = professionals.map(function(p) {
    return '<div class="professional-card">' +
      '<div class="pro-header">' +
        '<div class="pro-avatar">' + p.icon + '</div>' +
        '<div>' +
          '<div class="pro-name">' + p.name + '</div>' +
          '<div class="pro-title">' + p.title + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="pro-rate">💰 ' + p.rate + '</div>' +
      '<a href="https://wa.me/' + p.phone + '?text=Hi ' + encodeURIComponent(p.name) + ', I need your services." target="_blank">' +
        '<button class="btn-contact">💬 Contact via WhatsApp</button>' +
      '</a>' +
    '</div>';
  }).join("");
}

// ===============================
// SEARCH — GLOBAL (HEADER)
// ===============================
function setupGlobalSearch() {
  var input = $("global-search-input");
  if (!input) return;

  input.addEventListener("input", function() {
    if (input.value.trim().length > 1) {
      currentSearch = input.value.trim();
      switchView("shop");
      renderShopProducts();
    }
  });

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && input.value.trim()) {
      currentSearch = input.value.trim();
      switchView("shop");
      renderShopProducts();
    }
  });
}

// ===============================
// SEARCH — SHOP PANEL
// ===============================
function setupShopSearch() {
  var input = $("shop-search-input");
  if (!input) return;

  input.addEventListener("input", function() {
    currentSearch = input.value.trim();
    renderShopProducts();
  });
}

// ===============================
// SORT — SHOP
// ===============================
function setupSortSelect() {
  var select = document.querySelector(".sort-select");
  if (!select) return;

  select.addEventListener("change", function() {
    var val = select.value;
    if (val.indexOf("Low") !== -1) {
      products.sort(function(a, b) { return a.price - b.price; });
    } else if (val.indexOf("High") !== -1) {
      products.sort(function(a, b) { return b.price - a.price; });
    } else if (val.indexOf("Popular") !== -1) {
      products.sort(function() { return Math.random() - 0.5; });
    } else {
      products.sort(function(a, b) { return a.id - b.id; });
    }
    renderShopProducts();
    renderFeaturedProducts();
  });
}

// ===============================
// PRICE RANGE SLIDER
// ===============================
function setupPriceSlider() {
  var slider = $("price-slider");
  var label  = $("price-val");
  if (!slider || !label) return;

  slider.addEventListener("input", function() {
    var max = Number(slider.value);
    label.textContent = max.toLocaleString();

    var filtered = products.filter(function(p) { return p.price <= max; });
    var el = $("shop-product-list");
    if (el) {
      var countEl = $("results-count");
      if (countEl) countEl.textContent = filtered.length + " product" + (filtered.length !== 1 ? "s" : "");
      el.innerHTML = filtered.map(renderProductCard).join("");
    }
  });
}

// ===============================
// FILTER OPTIONS (click)
// ===============================
function setupFilterOptions() {
  document.querySelectorAll(".filter-option").forEach(function(opt) {
    if (opt.querySelector("input")) return;

    opt.addEventListener("click", function() {
      var group = opt.closest(".filter-group");
      if (group) group.querySelectorAll(".filter-option").forEach(function(o) { o.classList.remove("active"); });
      opt.classList.add("active");

      var text     = opt.textContent.trim().replace(/^[^\w]+/, "").trim();
      var catMatch = categories.find(function(c) { return text.indexOf(c.name) !== -1; });
      currentCategory = catMatch ? catMatch.name : "All";
      renderShopProducts();
    });
  });
}

// ===============================
// LANGUAGE SWITCHER
// ===============================
var translations = {
  en: {
    "brand-title":    "Kaga's Market",
    "brand-subtitle": "Marketplace & Delivery",
    "nav-home":       "Home",
    "nav-shop":       "Shop",
    "nav-businesses": "Businesses",
    "nav-services":   "Services",
  },
  sw: {
    "brand-title":    "Soko la Kaga",
    "brand-subtitle": "Soko & Uwasilishaji",
    "nav-home":       "Nyumbani",
    "nav-shop":       "Duka",
    "nav-businesses": "Biashara",
    "nav-services":   "Huduma",
  },
};

function setupLanguageSwitcher() {
  var switcher = $("language-switcher");
  if (!switcher) return;

  switcher.addEventListener("change", function() {
    var lang = switcher.value;
    var t    = translations[lang] || translations.en;
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
  });
}

// ===============================
// MESSENGER
// ===============================
function setupMessenger() {
  var input   = $("chat-input");
  var sendBtn = document.querySelector(".send-btn");
  var msgs    = document.querySelector(".chat-messages");
  if (!input || !msgs) return;

  function sendMsg() {
    var text = input.value.trim();
    if (!text) return;

    var bubble = document.createElement("div");
    bubble.className = "msg-bubble msg-out";
    bubble.textContent = text;
    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;
    input.value = "";

    setTimeout(function() {
      var reply = document.createElement("div");
      reply.className = "msg-bubble msg-in";
      reply.textContent = "Asante! Tutawasiliana nawe hivi karibuni.";
      msgs.appendChild(reply);
      msgs.scrollTop = msgs.scrollHeight;
    }, 1000);
  }

  input.addEventListener("keydown", function(e) { if (e.key === "Enter") sendMsg(); });
  if (sendBtn) sendBtn.addEventListener("click", sendMsg);

  document.querySelectorAll(".convo-item").forEach(function(item) {
    item.addEventListener("click", function() {
      document.querySelectorAll(".convo-item").forEach(function(i) { i.classList.remove("active"); });
      item.classList.add("active");
    });
  });
}

// ===============================
// DASHBOARD TABS
// ===============================
window.showDashTab = function (tab, btn) {
  document.querySelectorAll(".dash-tab-content").forEach(function(t) { t.style.display = "none"; });
  document.querySelectorAll(".dash-tab").forEach(function(b) { b.classList.remove("active"); });
  var tabEl = $("dash-" + tab);
  if (tabEl) tabEl.style.display = "block";
  if (btn)   btn.classList.add("active");
};

// ===============================
// DELIVERY FORM
// ===============================
function setupDeliveryForm() {
  var form = $("delivery-form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    showToast("🎉 Order placed! You'll get an SMS confirmation shortly.");
    cart = [];
    updateCartBadge();
    renderCart();
    switchView("home");
  });
}

// ===============================
// ADMIN FUNCTIONS
// ===============================
window.loadAdminProducts = function () {
  var box = $("admin-products-container");
  if (!box) return;
  box.innerHTML = products.map(function(p) {
    return '<div style="padding:10px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;background:var(--surface);display:flex;align-items:center;gap:12px;">' +
      '<span style="font-size:24px;">' + p.icon + '</span>' +
      '<div style="flex:1;">' +
        '<div style="font-weight:600;font-size:13px;">' + p.name + '</div>' +
        '<div style="font-size:12px;color:var(--text-light);">' + p.seller + ' · TZS ' + p.price.toLocaleString() + '</div>' +
      '</div>' +
      '<span style="font-size:11px;background:var(--brand-light);color:var(--brand-dark);padding:3px 8px;border-radius:999px;">Active</span>' +
    '</div>';
  }).join("");
};

window.loadPendingProducts = function () {
  var box = $("admin-products-container");
  if (!box) return;
  box.innerHTML =
    '<div style="padding:10px;border:1px solid var(--border);border-radius:8px;margin-bottom:8px;background:var(--surface);display:flex;align-items:center;gap:12px;">' +
      '<span style="font-size:24px;">🧪</span>' +
      '<div style="flex:1;"><div style="font-weight:600;font-size:13px;">Lab Equipment Set</div>' +
      '<div style="font-size:12px;color:var(--text-light);">SciStore Tz · TZS 320,000</div></div>' +
      '<span style="font-size:11px;background:var(--gold-light);color:var(--gold);padding:3px 8px;border-radius:999px;">Pending</span>' +
    '</div>' +
    '<div style="padding:10px;border:1px solid var(--border);border-radius:8px;background:var(--surface);display:flex;align-items:center;gap:12px;">' +
      '<span style="font-size:24px;">🪴</span>' +
      '<div style="flex:1;"><div style="font-weight:600;font-size:13px;">Indoor Plant Bundle</div>' +
      '<div style="font-size:12px;color:var(--text-light);">Green Thumb Tz · TZS 45,000</div></div>' +
      '<span style="font-size:11px;background:var(--gold-light);color:var(--gold);padding:3px 8px;border-radius:999px;">Pending</span>' +
    '</div>';
};

// ===============================
// TOAST NOTIFICATION
// ===============================
function showToast(message) {
  var existing = document.querySelector(".toast");
  if (existing) existing.remove();

  var toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  toast.style.cssText =
    "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);" +
    "background:var(--brand-dark);color:#fff;padding:12px 20px;" +
    "border-radius:999px;font-size:13px;font-weight:500;z-index:9999;" +
    "white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,0.2);";
  document.body.appendChild(toast);

  setTimeout(function() {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s";
    setTimeout(function() { toast.remove(); }, 300);
  }, 2500);
}

// ===============================
// SETTINGS PLACEHOLDER
// ===============================
window.openSettings = function () {
  switchView("settings");
};

// ===============================
// BOOT
// ===============================
document.addEventListener("DOMContentLoaded", function() {
  renderCategories();
  renderFeaturedProducts();
  renderShopProducts();
  renderHomeBusinesses();
  renderAllBusinesses();
  renderProfessionals();

  switchView("home");

  setupGlobalSearch();
  setupShopSearch();
  setupSortSelect();
  setupPriceSlider();
  setupFilterOptions();
  setupLanguageSwitcher();
  setupMessenger();
  setupDeliveryForm();

  updateCartBadge();
  renderCart();

  console.log("Kaga's Market app.js loaded successfully");
});
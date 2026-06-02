// ===============================
// KAGA MARKET - FIXED APP.JS
// ===============================

// Safe DOM helper
function $(id) {
  return document.getElementById(id);
}

// ===============================
// VIEW SYSTEM (MAIN FIX)
// ===============================
window.switchView = function (view) {
  const panels = document.querySelectorAll(".panel");

  panels.forEach(p => p.classList.add("hidden"));

  const target = $(view + "-panel");

  if (target) {
    target.classList.remove("hidden");
  } else {
    console.error("Panel not found:", view);
  }
};

// ===============================
// DEFAULT START VIEW
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  switchView("home");
  updateCartUI();
});

// ===============================
// CART SYSTEM (SAFE VERSION)
// ===============================
let cart = [];

function updateCartUI() {
  const count = $("cart-count");
  const total = $("cart-total");

  if (count) count.textContent = cart.length;

  let sum = 0;
  cart.forEach(item => sum += item.price || 0);

  if (total) total.textContent = "TZS " + sum;
}

// Example add-to-cart (you can connect it later)
window.addToCart = function (product) {
  cart.push(product);
  updateCartUI();
};

// ===============================
// SEARCH SAFETY (PREVENT CRASH)
// ===============================
const searchInput = $("global-search-input");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    console.log("Searching:", searchInput.value);
  });
}

// ===============================
// SETTINGS (PLACEHOLDER SAFE)
// ===============================
window.openSettings = function () {
  switchView("settings");
};

// ===============================
// ADMIN FUNCTIONS (FIX CRASH ISSUE)
// ===============================
window.loadAdminProducts = function () {
  const box = $("admin-products-container");
  if (box) {
    box.innerHTML = "<p>Loading all products...</p>";
  }
};

window.loadPendingProducts = function () {
  const box = $("admin-products-container");
  if (box) {
    box.innerHTML = "<p>Loading pending products...</p>";
  }
};

// ===============================
// ACCOUNT DROPDOWN SAFE TOGGLE
// ===============================
const accountBtn = $("account-menu-btn");
const dropdown = $("account-dropdown");

if (accountBtn && dropdown) {
  accountBtn.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });
}

// ===============================
// LOG SAFETY CHECK
// ===============================
console.log("Kaga Market app.js loaded successfully");
// ==========================================
// KAGA MARKET MAIN SCRIPT
// SAFE NAVIGATION & REAL-TIME PRODUCT SYSTEM
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// --- Firebase Configuration & Initialization ---
// Note: Replace with your specific Firebase Project Config if needed
const firebaseConfig = {
  apiKey: "AIzaSyA1...",
  authDomain: "kaga-market.firebaseapp.com",
  projectId: "kaga-market",
  storageBucket: "kaga-market.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123xyz"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Application State Management ---
const AppState = {
  products: [],
  filters: {
    searchQuery: "",
    category: ""
  }
};

// --- DOM Cache System (Performance Optimization) ---
const DOM = {
  get sections() { return document.querySelectorAll(".section"); },
  get navButtons() { return document.querySelectorAll("nav button"); },
  get productContainer() { return document.getElementById("product-container") || document.querySelector(".product-list"); },
  get searchInput() { return document.getElementById("search-input") || document.querySelector(".search-box"); },
  get categoryButtons() { return document.querySelectorAll(".category-btn, .category-link"); },
  get langSwitcher() { return document.getElementById("lang-switcher") || document.querySelector(".lang-btn"); }
};

// --- Initialization Event ---
document.addEventListener("DOMContentLoaded", function () {
  try {
    showSection("home");
    initProductListener();
    setupEventListeners();
  } catch (error) {
    console.error("Kaga Market Initialization Error:", error);
  }
});

// ==========================================
// NAVIGATION SYSTEM
// ==========================================
function showSection(sectionId) {
  const sections = DOM.sections;
  if (!sections || sections.length === 0) return;

  sections.forEach(sec => {
    sec.style.display = "none";
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = "block";
  } else {
    console.warn("Section not found: " + sectionId);
  }

  updateActiveNav(sectionId);
}

function updateActiveNav(sectionId) {
  const buttons = DOM.navButtons;
  if (!buttons || buttons.length === 0) return;

  buttons.forEach(btn => {
    btn.classList.remove("active");
    
    // Check both standard attributes and modern event targets safely
    const onClickAttr = btn.getAttribute("onclick");
    if (onClickAttr && onClickAttr.includes(sectionId)) {
      btn.classList.add("active");
    }
  });
}

// ==========================================
// REAL-TIME PRODUCT SYSTEM (FIRESTORE)
// ==========================================
function initProductListener() {
  const container = DOM.productContainer;
  if (!container) {
    console.warn("Product container element not found in DOM.");
    return;
  }

  // Display initial loading indicator
  renderUIState("loading");

  // Real-time listener: Handles fetching, automatic updates, and connection states
  onSnapshot(collection(db, "products"), (snapshot) => {
    AppState.products = [];
    
    snapshot.forEach((doc) => {
      AppState.products.push({ id: doc.id, ...doc.data() });
    });

    applyFiltersAndRender();
  }, (error) => {
    console.error("Firestore Fetch Error: ", error);
    renderUIState("error", "Failed to load products. Please check your connection.");
  });
}

// ==========================================
// SEARCH & FILTER ENGINE
// ==========================================
function applyFiltersAndRender() {
  const query = AppState.filters.searchQuery.toLowerCase().trim();
  const targetCategory = AppState.filters.category.toLowerCase().trim();

  const filtered = AppState.products.filter(product => {
    const matchesCategory = !targetCategory || 
                            (product.category && product.category.toLowerCase() === targetCategory);

    // Cross-reference against Name, Category, and Seller Name
    const matchesSearch = !query || 
                          (product.name && product.name.toLowerCase().includes(query)) ||
                          (product.category && product.category.toLowerCase().includes(query)) ||
                          (product.seller && product.seller.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  renderProducts(filtered);
}

// ==========================================
// DYNAMIC UI RENDERING & INSERTS
// ==========================================
function renderProducts(productsList) {
  const container = DOM.productContainer;
  if (!container) return;

  if (productsList.length === 0) {
    renderUIState("empty");
    return;
  }

  // Generate lightweight HTML Fragment to minimize DOM thrashing
  let htmlContent = "";
  productsList.forEach(product => {
    htmlContent += `
      <div class="product-card" data-id="${product.id}">
        <img src="${product.imageUrl || 'https://via.placeholder.com/150'}" alt="${product.name || 'Product'}" class="product-img" />
        <div class="product-info">
          <h3 class="product-title">${product.name || 'Untitled Item'}</h3>
          <p class="product-category">Category: ${product.category || 'General'}</p>
          <p class="product-seller">Seller: ${product.seller || 'Verified Seller'}</p>
          <span class="product-price">$${product.price || '0.00'}</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = htmlContent;
}

function renderUIState(state, customMessage = "") {
  const container = DOM.productContainer;
  if (!container) return;

  const states = {
    loading: `<div class="ui-state-msg info-msg"><span class="spinner"></span> Loading Kaga Market items...</div>`,
    empty: `<div class="ui-state-msg empty-msg">No products matches found.</div>`,
    error: `<div class="ui-state-msg error-msg">⚠️ ${customMessage || 'An unexpected error occurred.'}</div>`
  };

  container.innerHTML = states[state] || "";
}

// ==========================================
// SECURE EVENT ATTACHMENT HANDLERS
// ==========================================
function setupEventListeners() {
  // 1. Unified Debounced Search Event Listener
  const searchBar = DOM.searchInput;
  if (searchBar && !searchBar.dataset.listenerActive) {
    let debounceTimeout;
    searchBar.addEventListener("input", function (e) {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        AppState.filters.searchQuery = e.target.value;
        applyFiltersAndRender();
      }, 250); // 250ms efficiency debounce delay
    });
    searchBar.dataset.listenerActive = "true";
  }

  // 2. Category Filter Switchers
  const catButtons = DOM.categoryButtons;
  if (catButtons) {
    catButtons.forEach(btn => {
      if (!btn.dataset.listenerActive) {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          const selectedCat = btn.getAttribute("data-category") || btn.innerText;
          
          // Clear filter if "All" or duplicate is clicked, otherwise apply
          if (selectedCat.toLowerCase() === "all" || AppState.filters.category === selectedCat) {
            AppState.filters.category = "";
          } else {
            AppState.filters.category = selectedCat;
          }
          
          applyFiltersAndRender();
        });
        btn.dataset.listenerActive = "true";
      }
    });
  }

  // 3. Language Switcher Retainer
  const languageToggle = DOM.langSwitcher;
  if (languageToggle && !languageToggle.dataset.listenerActive) {
    languageToggle.addEventListener("click", function () {
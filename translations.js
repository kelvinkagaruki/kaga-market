bash

cat > /mnt/user-data/outputs/i18n.js << 'ENDOFFILE'
// ===============================
// KAGA'S MARKET — i18n.js
// Full Translation System
// English (en) + Kiswahili (sw)
// ===============================

const translations = {

  // ===========================
  // ENGLISH
  // ===========================
  en: {

    // --- BRAND ---
    'brand-title':            "Kaga's Market",
    'brand-subtitle':         'Marketplace & Delivery',

    // --- HEADER NAV ---
    'nav-home':               'Home',
    'nav-shop':               'Shop',
    'nav-businesses':         'Businesses',
    'nav-services':           'Services',
    'nav-account':            'Account',
    'nav-cart':               'Cart',
    'nav-chat':               'Chat',

    // --- HERO ---
    'hero-badge':             "Tanzania's Local Marketplace",
    'hero-title':             'Buy, Sell & Get It Delivered Today',
    'hero-subtitle':          'Connect with local sellers, verified businesses, and professional services across Tanzania.',
    'hero-search-placeholder':'What are you looking for?',
    'hero-search-btn':        'Search',
    'hero-btn-browse':        'Browse Products',
    'hero-btn-services':      'Find Services',

    // --- HOME SECTIONS ---
    'section-categories':     'Categories',
    'section-featured':       'Featured Products',
    'section-businesses':     'Verified Businesses',
    'see-all':                'See all →',

    // --- CATEGORIES ---
    'cat-electronics':        'Electronics',
    'cat-fashion':            'Fashion',
    'cat-groceries':          'Groceries',
    'cat-home':               'Home',
    'cat-beauty':             'Beauty',
    'cat-sports':             'Sports',
    'cat-books':              'Books',
    'cat-tools':              'Tools',

    // --- SHOP / MARKETPLACE ---
    'shop-title':             'Shop',
    'shop-search-placeholder':'Search products...',
    'sort-newest':            'Sort: Newest',
    'sort-low-high':          'Price: Low–High',
    'sort-high-low':          'Price: High–Low',
    'sort-popular':           'Most Popular',
    'filter-title':           'Filters',
    'filter-category':        'Category',
    'filter-price':           'Price Range (TZS)',
    'filter-location':        'Location',
    'filter-condition':       'Condition',
    'condition-new':          'New',
    'condition-used':         'Used',
    'btn-add-cart':           'Add to Cart',
    'btn-whatsapp':           'WhatsApp',
    'results-count':          'products',

    // --- PRODUCT PAGE ---
    'back-to-shop':           '← Back to Shop',
    'product-reviews':        'reviews',
    'seller-label':           'Verified Seller',
    'btn-wa-contact':         '💬 WhatsApp',
    'btn-add-to-cart':        '🛒 Add to Cart',
    'btn-save-item':          '❤️',

    // --- BUSINESSES ---
    'businesses-title':       'Verified Businesses',
    'verified-badge':         '✅ Verified',

    // --- SERVICES ---
    'services-title':         'Find Professionals',
    'services-engineers':     'Engineers',
    'services-contractors':   'Contractors',
    'services-fundis':        'Fundis',
    'services-cleaning':      'Cleaning',
    'services-auto':          'Auto Repair',
    'services-it':            'IT Support',
    'services-tutors':        'Tutors',
    'services-caterers':      'Caterers',
    'professionals-title':    'Top Professionals',
    'btn-contact-wa':         '💬 Contact via WhatsApp',
    'professionals-label':    'professionals',

    // --- CART ---
    'cart-title':             'My Cart',
    'cart-empty':             'Your cart is empty.',
    'cart-browse':            'Browse products →',
    'cart-subtotal':          'Subtotal',
    'cart-delivery':          'Delivery',
    'cart-total':             'Total',
    'btn-checkout':           'Proceed to Checkout',

    // --- DELIVERY ---
    'delivery-title':         'Delivery Details',
    'back-to-cart':           '← Back to Cart',
    'form-fullname':          'Full Name',
    'form-fullname-ph':       'e.g. Juma Ally',
    'form-phone':             'Phone Number',
    'form-phone-ph':          'e.g. 0754 000 000',
    'form-address':           'Delivery Address',
    'form-address-ph':        'Street, Area, City',
    'form-landmark':          'Nearest Landmark',
    'form-landmark-ph':       'e.g. Near Shoprite Kariakoo',
    'form-payment':           'Payment Method',
    'pay-mpesa':              'M-Pesa',
    'pay-tigo':               'Tigo Pesa',
    'pay-airtel':             'Airtel Money',
    'pay-cash':               'Cash on Delivery',
    'btn-place-order':        '📦 Place Order',

    // --- ACCOUNT ---
    'account-guest':          'Guest User',
    'account-not-logged':     'Not logged in',
    'menu-orders':            'My Orders',
    'menu-saved':             'Saved Items',
    'menu-business':          'My Business',
    'menu-messages':          'Messages',
    'menu-admin':             'Admin Panel',
    'menu-logout':            'Log Out',

    // --- CUSTOMER DASHBOARD ---
    'dashboard-title':        'My Dashboard',
    'dash-orders':            '📦 Orders',
    'dash-saved':             '❤️ Saved',
    'dash-messages':          '💬 Messages',
    'no-saved':               'No saved items yet. ❤️',
    'no-messages':            'No messages yet. Go to 💬 Messenger.',
    'order-delivered':        'Delivered',
    'order-shipped':          'Shipped',
    'order-processing':       'Processing',

    // --- BUSINESS DASHBOARD ---
    'biz-dashboard-title':    'Business Dashboard',
    'stat-sales':             'Total Sales',
    'stat-orders':            'Orders',
    'stat-products':          'Products',
    'stat-customers':         'Customers',
    'biz-products-title':     'My Products',
    'biz-orders-title':       'Recent Orders',
    'col-product':            'Product',
    'col-price':              'Price',
    'col-stock':              'Stock',
    'col-status':             'Status',
    'col-actions':            'Actions',
    'btn-edit':               'Edit',
    'status-active':          'Active',
    'status-pending':         'Pending',

    // --- ADMIN DASHBOARD ---
    'admin-title':            'Admin Dashboard',
    'admin-subtitle':         "Manage the entire Kaga's Market platform",
    'admin-users':            'Total Users',
    'admin-businesses':       'Businesses',
    'admin-products':         'Products',
    'admin-orders':           'Orders Today',
    'admin-revenue':          'Revenue (TZS)',
    'admin-manage-users':     'Manage Users',
    'admin-manage-users-desc':'View, ban or verify users',
    'admin-manage-biz':       'Manage Businesses',
    'admin-manage-biz-desc':  'Approve or reject listings',
    'admin-manage-prod':      'Manage Products',
    'admin-manage-prod-desc': 'Review pending products',
    'admin-reports':          'Reports',
    'admin-reports-desc':     'Sales, traffic, complaints',
    'admin-stats':            'Statistics',
    'admin-stats-desc':       'Platform analytics',
    'admin-settings':         'Settings',
    'admin-settings-desc':    'Platform configuration',

    // --- MESSENGER ---
    'messenger-title':        'Messages',
    'chat-placeholder':       'Type a message...',
    'chat-online':            '● Online',

    // --- FOOTER ---
    'footer-about':           "Kaga's Market",
    'footer-about-us':        'About Us',
    'footer-how':             'How It Works',
    'footer-contact':         'Contact Us',
    'footer-buyers':          'For Buyers',
    'footer-browse':          'Browse Products',
    'footer-track':           'Track Order',
    'footer-returns':         'Returns',
    'footer-sellers':         'For Sellers',
    'footer-register-biz':    'Register Business',
    'footer-seller-guide':    'Seller Guide',
    'footer-pricing':         'Pricing',
    'footer-legal':           'Legal',
    'footer-privacy':         'Privacy Policy',
    'footer-terms':           'Terms of Use',
    'footer-cookie':          'Cookie Policy',
    'footer-copy':            "© 2025 Kaga's Market · Built for Tanzania 🇹🇿",

    // --- LOGIN PAGE ---
    'login-tagline':          "Tanzania's Local Marketplace",
    'login-headline':         "Your gateway to Tanzania's marketplace",
    'login-desc':             'Join thousands of buyers, sellers and service providers building their business with Kaga\'s Market.',
    'login-stat-users':       'Registered Users',
    'login-stat-biz':         'Verified Businesses',
    'login-stat-products':    'Products Listed',
    'trust-secure':           '🔒 Secure Login',
    'trust-made':             '🇹🇿 Made for Tanzania',
    'trust-support':          '💬 WhatsApp Support',
    'role-buyer':             'Buyer',
    'role-buyer-desc':        'Shop & order',
    'role-seller':            'Seller',
    'role-seller-desc':       'Sell products',
    'role-admin':             'Admin',
    'role-admin-desc':        'Manage platform',
    'tab-signin':             'Sign In',
    'tab-register':           'Create Account',
    'login-title':            'Welcome back 👋',
    'login-subtitle':         'Sign in to your buyer account',
    'label-email':            'Email Address',
    'email-ph':               'your@email.com',
    'label-password':         'Password',
    'password-ph':            'Enter your password',
    'label-admin-key':        'Admin Secret Key',
    'admin-key-ph':           'Enter admin secret key',
    'forgot-password':        'Forgot password?',
    'btn-signin':             'Sign In',
    'or-continue':            'or continue with',
    'no-account':             "Don't have an account?",
    'create-free':            'Create one free',
    'reg-title':              'Create Account',
    'reg-subtitle':           'Join as a buyer on Kaga\'s Market',
    'step-personal':          'Personal Info',
    'step-account':           'Account Setup',
    'step-final':             'Final Step',
    'label-fullname':         'Full Name',
    'fullname-ph':            'e.g. Juma Ally',
    'label-phone':            'Phone Number',
    'phone-ph':               'e.g. 0754 000 000',
    'label-location':         'Location',
    'location-ph':            'Select your city',
    'btn-continue':           'Continue →',
    'btn-back':               '← Back',
    'label-confirm-pass':     'Confirm Password',
    'confirm-ph':             'Repeat your password',
    'label-biz-name':         'Business Name',
    'biz-name-ph':            'e.g. TechHub Tanzania',
    'label-biz-cat':          'Business Category',
    'label-biz-wa':           'WhatsApp Business Number',
    'terms-text':             "I agree to Kaga's Market",
    'terms-link':             'Terms of Service',
    'terms-and':              'and',
    'privacy-link':           'Privacy Policy',
    'marketing-text':         'Receive updates, promotions and news via email',
    'btn-create-account':     'Create Account 🎉',
    'have-account':           'Already have an account?',
    'sign-in-link':           'Sign in',
    'forgot-title':           'Reset Password',
    'forgot-subtitle':        "Enter your email and we'll send you a reset link.",
    'btn-send-reset':         'Send Reset Link',

    // --- TOAST / ALERTS ---
    'toast-added-cart':       'added to cart!',
    'toast-order-placed':     "🎉 Order placed! You'll get an SMS confirmation shortly.",
    'toast-logged-out':       '👋 Logged out successfully',
    'toast-login-first':      '🔒 Please login first',
    'toast-admin-only':       '🚫 Admin access only',
    'toast-seller-only':      '🚫 Seller accounts only',
    'toast-coming-soon':      'login coming soon!',
  },

  // ===========================
  // KISWAHILI
  // ===========================
  sw: {

    // --- BRAND ---
    'brand-title':            "Soko la Kaga",
    'brand-subtitle':         'Soko & Utoaji wa Bidhaa',

    // --- HEADER NAV ---
    'nav-home':               'Nyumbani',
    'nav-shop':               'Duka',
    'nav-businesses':         'Biashara',
    'nav-services':           'Huduma',
    'nav-account':            'Akaunti',
    'nav-cart':               'Kikapu',
    'nav-chat':               'Mazungumzo',

    // --- HERO ---
    'hero-badge':             'Soko la Hapa Tanzania',
    'hero-title':             'Nunua, Uza & Pokea Utoaji Leo',
    'hero-subtitle':          'Unganika na wauzaji wa karibu, biashara zilizothibitishwa, na huduma za kitaalamu Tanzania nzima.',
    'hero-search-placeholder':'Unatafuta nini?',
    'hero-search-btn':        'Tafuta',
    'hero-btn-browse':        'Angalia Bidhaa',
    'hero-btn-services':      'Tafuta Huduma',

    // --- HOME SECTIONS ---
    'section-categories':     'Makundi',
    'section-featured':       'Bidhaa Maarufu',
    'section-businesses':     'Biashara Zilizothibitishwa',
    'see-all':                'Ona zote →',

    // --- CATEGORIES ---
    'cat-electronics':        'Elektroniki',
    'cat-fashion':            'Mitindo',
    'cat-groceries':          'Mboga na Vyakula',
    'cat-home':               'Nyumba',
    'cat-beauty':             'Urembo',
    'cat-sports':             'Michezo',
    'cat-books':              'Vitabu',
    'cat-tools':              'Zana',

    // --- SHOP / MARKETPLACE ---
    'shop-title':             'Duka',
    'shop-search-placeholder':'Tafuta bidhaa...',
    'sort-newest':            'Panga: Mpya Zaidi',
    'sort-low-high':          'Bei: Chini–Juu',
    'sort-high-low':          'Bei: Juu–Chini',
    'sort-popular':           'Maarufu Zaidi',
    'filter-title':           'Vichujio',
    'filter-category':        'Kundi',
    'filter-price':           'Kiwango cha Bei (TZS)',
    'filter-location':        'Mahali',
    'filter-condition':       'Hali',
    'condition-new':          'Mpya',
    'condition-used':         'Iliyotumika',
    'btn-add-cart':           'Ongeza Kikapuni',
    'btn-whatsapp':           'WhatsApp',
    'results-count':          'bidhaa',

    // --- PRODUCT PAGE ---
    'back-to-shop':           '← Rudi Dukani',
    'product-reviews':        'maoni',
    'seller-label':           'Muuzaji Aliyethibitishwa',
    'btn-wa-contact':         '💬 WhatsApp',
    'btn-add-to-cart':        '🛒 Ongeza Kikapuni',
    'btn-save-item':          '❤️',

    // --- BUSINESSES ---
    'businesses-title':       'Biashara Zilizothibitishwa',
    'verified-badge':         '✅ Imethibitishwa',

    // --- SERVICES ---
    'services-title':         'Tafuta Wataalamu',
    'services-engineers':     'Wahandisi',
    'services-contractors':   'Wakandarasi',
    'services-fundis':        'Mafundi',
    'services-cleaning':      'Usafi',
    'services-auto':          'Ukarabati wa Gari',
    'services-it':            'Msaada wa IT',
    'services-tutors':        'Walimu',
    'services-caterers':      'Wapishi',
    'professionals-title':    'Wataalamu Bora',
    'btn-contact-wa':         '💬 Wasiliana kupitia WhatsApp',
    'professionals-label':    'wataalamu',

    // --- CART ---
    'cart-title':             'Kikapu Changu',
    'cart-empty':             'Kikapu chako kiko wazi.',
    'cart-browse':            'Angalia bidhaa →',
    'cart-subtotal':          'Jumla Ndogo',
    'cart-delivery':          'Utoaji',
    'cart-total':             'Jumla',
    'btn-checkout':           'Endelea Kulipa',

    // --- DELIVERY ---
    'delivery-title':         'Maelezo ya Utoaji',
    'back-to-cart':           '← Rudi Kikapuni',
    'form-fullname':          'Jina Kamili',
    'form-fullname-ph':       'mfano: Juma Ally',
    'form-phone':             'Nambari ya Simu',
    'form-phone-ph':          'mfano: 0754 000 000',
    'form-address':           'Anwani ya Utoaji',
    'form-address-ph':        'Mtaa, Eneo, Jiji',
    'form-landmark':          'Alama ya Karibu',
    'form-landmark-ph':       'mfano: Karibu na Shoprite Kariakoo',
    'form-payment':           'Njia ya Malipo',
    'pay-mpesa':              'M-Pesa',
    'pay-tigo':               'Tigo Pesa',
    'pay-airtel':             'Airtel Money',
    'pay-cash':               'Pesa Taslimu',
    'btn-place-order':        '📦 Weka Agizo',

    // --- ACCOUNT ---
    'account-guest':          'Mgeni',
    'account-not-logged':     'Haujaingia',
    'menu-orders':            'Maagizo Yangu',
    'menu-saved':             'Vilivyohifadhiwa',
    'menu-business':          'Biashara Yangu',
    'menu-messages':          'Ujumbe',
    'menu-admin':             'Dashibodi ya Msimamizi',
    'menu-logout':            'Toka Nje',

    // --- CUSTOMER DASHBOARD ---
    'dashboard-title':        'Dashibodi Yangu',
    'dash-orders':            '📦 Maagizo',
    'dash-saved':             '❤️ Vilivyohifadhiwa',
    'dash-messages':          '💬 Ujumbe',
    'no-saved':               'Hakuna vitu vilivyohifadhiwa bado. ❤️',
    'no-messages':            'Hakuna ujumbe bado. Nenda kwa 💬 Mazungumzo.',
    'order-delivered':        'Imetolewa',
    'order-shipped':          'Imesafirishwa',
    'order-processing':       'Inashughulikiwa',

    // --- BUSINESS DASHBOARD ---
    'biz-dashboard-title':    'Dashibodi ya Biashara',
    'stat-sales':             'Mauzo Yote',
    'stat-orders':            'Maagizo',
    'stat-products':          'Bidhaa',
    'stat-customers':         'Wateja',
    'biz-products-title':     'Bidhaa Zangu',
    'biz-orders-title':       'Maagizo ya Hivi Karibuni',
    'col-product':            'Bidhaa',
    'col-price':              'Bei',
    'col-stock':              'Hesabu',
    'col-status':             'Hali',
    'col-actions':            'Vitendo',
    'btn-edit':               'Hariri',
    'status-active':          'Inafanya Kazi',
    'status-pending':         'Inasubiri',

    // --- ADMIN DASHBOARD ---
    'admin-title':            'Dashibodi ya Msimamizi',
    'admin-subtitle':         'Simamia jukwaa zima la Soko la Kaga',
    'admin-users':            'Watumiaji Wote',
    'admin-businesses':       'Biashara',
    'admin-products':         'Bidhaa',
    'admin-orders':           'Maagizo Leo',
    'admin-revenue':          'Mapato (TZS)',
    'admin-manage-users':     'Simamia Watumiaji',
    'admin-manage-users-desc':'Angalia, zuia au thibitisha watumiaji',
    'admin-manage-biz':       'Simamia Biashara',
    'admin-manage-biz-desc':  'Idhinisha au kataa orodha',
    'admin-manage-prod':      'Simamia Bidhaa',
    'admin-manage-prod-desc': 'Kagua bidhaa zinazosubiri',
    'admin-reports':          'Ripoti',
    'admin-reports-desc':     'Mauzo, trafiki, malalamiko',
    'admin-stats':            'Takwimu',
    'admin-stats-desc':       'Uchanganuzi wa jukwaa',
    'admin-settings':         'Mipangilio',
    'admin-settings-desc':    'Usanidi wa jukwaa',

    // --- MESSENGER ---
    'messenger-title':        'Ujumbe',
    'chat-placeholder':       'Andika ujumbe...',
    'chat-online':            '● Mtandaoni',

    // --- FOOTER ---
    'footer-about':           'Soko la Kaga',
    'footer-about-us':        'Kuhusu Sisi',
    'footer-how':             'Jinsi Inavyofanya Kazi',
    'footer-contact':         'Wasiliana Nasi',
    'footer-buyers':          'Kwa Wanunuzi',
    'footer-browse':          'Angalia Bidhaa',
    'footer-track':           'Fuatilia Agizo',
    'footer-returns':         'Marejesho',
    'footer-sellers':         'Kwa Wauzaji',
    'footer-register-biz':    'Sajili Biashara',
    'footer-seller-guide':    'Mwongozo wa Muuzaji',
    'footer-pricing':         'Bei',
    'footer-legal':           'Kisheria',
    'footer-privacy':         'Sera ya Faragha',
    'footer-terms':           'Masharti ya Matumizi',
    'footer-cookie':          'Sera ya Vidakuzi',
    'footer-copy':            "© 2025 Soko la Kaga · Imejengwa kwa Tanzania 🇹🇿",

    // --- LOGIN PAGE ---
    'login-tagline':          'Soko la Hapa Tanzania',
    'login-headline':         'Lango lako la kuingia sokoni Tanzania',
    'login-desc':             'Jiunge na maelfu ya wanunuzi, wauzaji na watoa huduma wanaojenga biashara zao na Soko la Kaga.',
    'login-stat-users':       'Watumiaji Waliojisajili',
    'login-stat-biz':         'Biashara Zilizothibitishwa',
    'login-stat-products':    'Bidhaa Zilizoorodheshwa',
    'trust-secure':           '🔒 Kuingia Salama',
    'trust-made':             '🇹🇿 Imefanywa kwa Tanzania',
    'trust-support':          '💬 Msaada wa WhatsApp',
    'role-buyer':             'Mnunuzi',
    'role-buyer-desc':        'Nunua na uagize',
    'role-seller':            'Muuzaji',
    'role-seller-desc':       'Uza bidhaa',
    'role-admin':             'Msimamizi',
    'role-admin-desc':        'Simamia jukwaa',
    'tab-signin':             'Ingia',
    'tab-register':           'Fungua Akaunti',
    'login-title':            'Karibu tena 👋',
    'login-subtitle':         'Ingia kwenye akaunti yako ya mnunuzi',
    'label-email':            'Anwani ya Barua Pepe',
    'email-ph':               'barua@yako.com',
    'label-password':         'Neno la Siri',
    'password-ph':            'Weka neno lako la siri',
    'label-admin-key':        'Ufunguo wa Siri wa Msimamizi',
    'admin-key-ph':           'Weka ufunguo wa siri wa msimamizi',
    'forgot-password':        'Umesahau neno la siri?',
    'btn-signin':             'Ingia',
    'or-continue':            'au endelea na',
    'no-account':             'Huna akaunti?',
    'create-free':            'Fungua bure',
    'reg-title':              'Fungua Akaunti',
    'reg-subtitle':           'Jiunge kama mnunuzi kwenye Soko la Kaga',
    'step-personal':          'Taarifa za Kibinafsi',
    'step-account':           'Usanidi wa Akaunti',
    'step-final':             'Hatua ya Mwisho',
    'label-fullname':         'Jina Kamili',
    'fullname-ph':            'mfano: Juma Ally',
    'label-phone':            'Nambari ya Simu',
    'phone-ph':               'mfano: 0754 000 000',
    'label-location':         'Mahali',
    'location-ph':            'Chagua jiji lako',
    'btn-continue':           'Endelea →',
    'btn-back':               '← Rudi',
    'label-confirm-pass':     'Thibitisha Neno la Siri',
    'confirm-ph':             'Rudia neno lako la siri',
    'label-biz-name':         'Jina la Biashara',
    'biz-name-ph':            'mfano: TechHub Tanzania',
    'label-biz-cat':          'Aina ya Biashara',
    'label-biz-wa':           'Nambari ya WhatsApp ya Biashara',
    'terms-text':             'Nakubaliana na Soko la Kaga',
    'terms-link':             'Masharti ya Huduma',
    'terms-and':              'na',
    'privacy-link':           'Sera ya Faragha',
    'marketing-text':         'Pokea masasisho, matangazo na habari kupitia barua pepe',
    'btn-create-account':     'Fungua Akaunti 🎉',
    'have-account':           'Una akaunti tayari?',
    'sign-in-link':           'Ingia',
    'forgot-title':           'Rejesha Neno la Siri',
    'forgot-subtitle':        'Weka barua pepe yako na tutakutumia kiungo cha kurejesha.',
    'btn-send-reset':         'Tuma Kiungo cha Kurejesha',

    // --- TOAST / ALERTS ---
    'toast-added-cart':       'imeongezwa kikapuni!',
    'toast-order-placed':     '🎉 Agizo limewekwa! Utapata uthibitisho kupitia SMS hivi karibuni.',
    'toast-logged-out':       '👋 Umetoka nje kwa mafanikio',
    'toast-login-first':      '🔒 Tafadhali ingia kwanza',
    'toast-admin-only':       '🚫 Msimamizi peke yake',
    'toast-seller-only':      '🚫 Akaunti za wauzaji peke yake',
    'toast-coming-soon':      'inakuja hivi karibuni!',
  },
};

// ===============================
// LANGUAGE ENGINE
// ===============================

// Get saved language or default to English
let currentLanguage = localStorage.getItem('kagaLang') || 'en';

// ---- Apply translations to entire page ----
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // 1. data-i18n — text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!t[key]) return;
    // Don't overwrite elements that contain child elements (icons etc)
    if (el.children.length === 0) {
      el.textContent = t[key];
    }
  });

  // 2. data-i18n-ph — placeholder attribute
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key]) el.setAttribute('placeholder', t[key]);
  });

  // 3. data-i18n-title — title/tooltip attribute
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key]) el.setAttribute('title', t[key]);
  });

  // 4. data-i18n-html — innerHTML (for bold/links inside)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key]) el.innerHTML = t[key];
  });

  // 5. Update document language attribute
  document.documentElement.lang = lang;
}

// ---- Switch language and save preference ----
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('kagaLang', lang);
  applyTranslations(lang);
  updateLangSwitcherUI(lang);
}

// ---- Keep language switcher UI in sync ----
function updateLangSwitcherUI(lang) {
  // Works for both <select> and custom button switchers
  const selects = document.querySelectorAll('#language-switcher, .lang-switcher');
  selects.forEach(el => {
    if (el.tagName === 'SELECT') {
      el.value = lang;
    }
  });

  // Button-style switchers
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
  });
}

// ---- Get a single translated string (use in JS) ----
function t(key) {
  return (translations[currentLanguage] && translations[currentLanguage][key])
    || (translations['en'] && translations['en'][key])
    || key;
}

// ---- Auto-wire all language switchers on the page ----
function wireLanguageSwitchers() {
  // <select id="language-switcher">
  document.querySelectorAll('#language-switcher, .lang-switcher').forEach(el => {
    if (el.tagName === 'SELECT') {
      el.value = currentLanguage;
      el.addEventListener('change', () => setLanguage(el.value));
    }
  });

  // <button data-lang-btn="en"> / <button data-lang-btn="sw">
  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang-btn')));
  });
}

// ---- Run on page load ----
document.addEventListener('DOMContentLoaded', () => {
  wireLanguageSwitchers();
  applyTranslations(currentLanguage);
  updateLangSwitcherUI(currentLanguage);
});
ENDOFFILE
Output

exit code 0
Do
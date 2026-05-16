// MAINTENANCE MODE - Set to true to activate maintenance screen globally
const MAINTENANCE_MODE = false;

if (MAINTENANCE_MODE && !window.location.pathname.endsWith('maintenance.html')) {
  window.location.href = 'maintenance.html';
} else if (!MAINTENANCE_MODE && window.location.pathname.endsWith('maintenance.html')) {
  window.location.href = 'index.html';
}
// ════════════════════════
// === CATEGORY LABELS & META ===
const catLabels = {
  bags: 'Bags', wallets: 'Wallets', belts: 'Belts', accessories: 'Accessories', footwear: 'Footwear',
  watches: 'Watches', travel: 'Travel', tech: 'Tech', office: 'Office', lifestyle: 'Lifestyle',
  gifting: 'Gifting', grooming: 'Grooming', apparel: 'Apparel', home: 'Home', collections: 'Collections'
};
const categories = ['bags', 'wallets', 'belts', 'accessories', 'footwear', 'watches', 'travel', 'tech', 'office', 'lifestyle', 'gifting', 'grooming', 'apparel', 'home', 'collections'];
const baseImages = {
  bags: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
  wallets: "https://images.unsplash.com/photo-1627123424574-724758594e93",
  belts: "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c4",
  accessories: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  footwear: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  watches: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
  travel: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  tech: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  office: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
  lifestyle: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  gifting: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
  grooming: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
  apparel: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  home: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  collections: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
};

// === ACTIVE PRODUCTS (80) ===
const products = [];
for (let i = 1; i <= 80; i++) {
  const cat = categories[i % categories.length];
  products.push({
    id: i,
    name: `Vantage ${catLabels[cat]} ${i > 20 ? 'Elite' : 'Classic'} ${i}`,
    cat: cat,
    price: (Math.floor(Math.random() * 200) + 40) * 450,
    badge: i < 10 ? "New" : (i % 12 === 0 ? "Best Seller" : ""),
    img: `${baseImages[cat]}?q=80&w=800&auto=format&fit=crop&sig=${i}`,
    desc: "Exquisite handcrafted leather piece designed for longevity and timeless style."
  });
}

// === MANUAL OVERRIDES ===
const overrides = [
  {
    id: 1, name: "AJ Vantage Executive Briefcase", cat: "bags", price: 85000,
    img: "assets/products/Ashfaq.png",
    gallery: ["assets/products/Ashfaq.png", "assets/products/Ashfaq2.png", "assets/products/Jareed.jpg"],
    desc: "A masterpiece of utility and style. Handcrafted with precision, triple-reinforced stitching and premium full-grain leather.",
    sizes: ['Standard', 'Executive XL', 'Custom Fit'],
    colors: [
      { name: 'Midnight Black', hex: '#111111', stock: true },
      { name: 'Saddle Brown', hex: '#5d3a1a', stock: true },
      { name: 'Navy Blue', hex: '#1e3a5f', stock: true },
      { name: 'Hunter Green', hex: '#1b3022', stock: false }
    ],
    specs: { "Material": "Full-Grain Italian Leather", "Hardware": "Solid Brass", "Dimensions": "16\" x 12\" x 4\"", "Weight": "3.5 lbs", "Lining": "Reinforced Suede" },
    reviews: [{ user: "Sarah L.", rating: 5, comment: "The quality is unmatched. Truly a lifetime piece." }, { user: "David K.", rating: 5, comment: "Worth every rupee. The leather feels incredible." }],
    shipping: "Free global express shipping via DHL. 3-5 business days.",
    additionalInfo: "Includes a custom dust bag and a lifetime warranty certificate."
  },
  {
    id: 2, name: "Noir Edition Leather Wallet", cat: "wallets", price: 12500,
    img: "assets/products/Ashfaq.png",
    gallery: ["assets/products/Ashfaq.png", "assets/products/Ashfaq2.png"],
    desc: "Minimalist design, maximum security. Designed for the modern professional who values precision and privacy.",
    sizes: ['Slim', 'Bi-Fold', 'XL', 'Card Holder'],
    colors: [
      { name: 'Obsidian Noir', hex: '#0a0a0a', stock: true },
      { name: 'Carbon Gray', hex: '#333333', stock: true },
      { name: 'Deep Burgundy', hex: '#4a0e0e', stock: true },
      { name: 'Tan', hex: '#c8956c', stock: false }
    ],
    specs: { "Material": "Nappa Leather", "RFID Block": "Yes", "Dimensions": "4.1\" x 3.2\" x 0.4\"", "Weight": "0.15 lbs", "Capacity": "6-8 Cards" },
    reviews: [{ user: "M. Ashfaq", rating: 5, comment: "Perfectly minimal. Exactly what I needed." }],
    shipping: "Standard shipping: 2-3 business days. Express: 24 hours.",
    additionalInfo: "Packaged in a signature AJ Vantage gift box."
  },
  {
    id: 3, name: "AJ Vantage Classic Belt", cat: "belts", price: 8500,
    img: "assets/products/Ashfaq.png",
    gallery: ["assets/products/Ashfaq.png", "assets/products/Ashfaq2.png"],
    desc: "Classic aesthetic meets uncompromising durability. Handcrafted to be the last belt you ever buy.",
    sizes: ['30', '32', '34', '36', '38', '40', '42'],
    colors: [
      { name: 'Antique Black', hex: '#111111', stock: true },
      { name: 'Vintage Brown', hex: '#3d2b1f', stock: true },
      { name: 'Mahogany', hex: '#4b2a1a', stock: true },
      { name: 'Tan', hex: '#b87333', stock: true }
    ],
    specs: { "Material": "Vegetable Tanned Leather", "Buckle": "Stainless Steel", "Width": "1.5 inches", "Edge": "Hand-burnished" },
    reviews: [{ user: "Chris T.", rating: 5, comment: "Solid build, the leather is thick and premium." }],
    shipping: "Ships in 1-2 business days.",
    additionalInfo: "Vegetable tanned leather will develop a beautiful patina over time."
  }
];
overrides.forEach(ov => { const p = products.find(x => x.id === ov.id); if (p) Object.assign(p, ov); });

const ghostProducts = [];
for (let i = 81; i <= 500; i++) {
  const cat = categories[i % categories.length];
  ghostProducts.push({ id: i, name: `COMING SOON!!!${i}`, cat: cat, price: 0, badge: "Nov 2026", isGhost: true, desc: "A visionary design currently under development in our artisan studio. Launching soon." });
}

// === PRE-OWNED LUXURY ===
/**
 * TO EDIT PRE-OWNED ITEMS:
 * 1. Modify the array below. Each item supports 'id', 'cat', 'name', 'price', 'img', 'desc', 'gallery', 'specs', and 'reviews'.
 * 2. Specs: Add key-value pairs (e.g., 'Year': '1984').
 * 3. Reviews: Add objects with 'user', 'rating' (1-5), and 'comment'.
 */
const preOwnedProducts = [
  {
    id: 'po-01', cat: 'electronics', name: 'VR BOX 360 Degree', price: 2000, img: 'assets/pre-owned/vr1.JPG', badge: 'PRE-OWNED',
    desc: 'Original 1984 AJ Heritage Aviator. Refurbished full-grain leather with brass hardware.', isPreOwned: true,
    waLink: "https://wa.me/p/26829750430017600/94704800058",
    fbLink: "https://wa.me/p/27409471035327754/94704800058",
    gallery: ['assets/pre-owned/vr1.JPG', 'assets/pre-owned/vr2.JPG', 'assets/pre-owned/vr3.JPG', 'assets/pre-owned/vr4.JPG'],
    color: { name: 'White', hex: '#ffffffff' }, sizes: ['Free Size'],
    specs: { 'Year': '2013', 'Condition': 'Excellent Condition', 'Curated By': 'M. Ashfaq' },
    reviews: [{ user: "MOD", rating: 0, comment: "No Reviews Yet" }]
  },
  {
    id: 'po-02', cat: 'electronics', name: 'Samsung Galaxy A15 (Used)', price: 38000, img: 'assets/pre-owned/sa2.png', badge: 'PRE-OWNED',
    desc: 'Samsung Galaxy A15 (Used); with 265GB and with the color of Blue Black', isPreOwned: true,
    waLink: "https://wa.me/p/7890123456/94704800058",
    fbLink: "https://www.facebook.com/marketplace/item/987654321/",
    color: { name: 'Black Blue', hex: '#040720', name: 'White', hex: '#ffffffff' }, sizes: ['256GB'],
    gallery: ['assets/pre-owned/sa1.png', 'assets/pre-owned/sa2.png', 'assets/preo-owned/sa3.png', 'assets/pre-owned/sa4.png', 'assets/pre-owned/sa5.jpg'],
    specs: { 'Year': '2023', 'RAM': '8GB + Expandable RAM', 'Condition': 'Used', 'Internal Storage': '256GB', 'Battery': '5000mah', 'Processor': 'Mediatek Helio G99', 'OS': 'Android 16 | One UI 8' },
    reviews: [{ user: "MOD", rating: 0, comment: "No Reviews Yet" }]
  },
  {
    id: 'po-03', cat: 'bags', name: 'Artisan Portfolio Case', price: 32000, img: 'assets/pre-owned/sa1.png', badge: 'Rare',
    desc: 'Hand-stitched portfolio case from our 2020 archive. Minimalist and professional.', isPreOwned: true,
    color: { name: 'Chestnut', hex: '#8b4513' }, sizes: ['L'],
    specs: { 'Year': '2020', 'Condition': 'Excellent', 'Dimensions': '14" x 10"' },
    reviews: [{ user: "Marco G.", rating: 5, comment: "Professionalism in a bag. Exceptional quality." }]
  },
  {
    id: 'po-04', cat: 'accessories', name: 'Vintage Key Organizer', price: 4200, img: 'assets/pre-owned/sa3.png', badge: 'Classic',
    desc: 'A timeless accessory to keep your keys organized and silent.', isPreOwned: true,
    color: { name: 'Tan', hex: '#d2b48c' }, sizes: ['One Size'],
    specs: { 'Condition': 'Good', 'Material': 'Tanned Leather' },
    reviews: [{ user: "Jane F.", rating: 4, comment: "Great patina, very functional." }]
  },
  {
    id: 'po-05', cat: 'belts', name: 'Signature Buckle Belt', price: 8500, img: 'assets/pre-owned/sa4.png', badge: 'Steal',
    desc: 'Solid brass buckle with hand-burnished leather strap.', isPreOwned: true,
    color: { name: 'Black', hex: '#000000' }, sizes: ['34', '36'],
    specs: { 'Condition': 'Fair', 'Buckle': 'Brass' },
    reviews: [{ user: "Tom H.", rating: 4, comment: "A bit worn but solid. Great price." }]
  },
  {
    id: 'po-06', cat: 'bags', name: 'Classic Saddle Bag', price: 28000, img: 'assets/pre-owned/sa5.jpg', badge: 'Verified',
    desc: 'Timeless saddle design with adjustable shoulder strap.', isPreOwned: true,
    color: { name: 'Mahogany', hex: '#4b2a1a' }, sizes: ['M'],
    specs: { 'Condition': 'Excellent', 'Style': 'Crossbody' },
    reviews: [{ user: "Sofia L.", rating: 5, comment: "Exactly as described. Beautiful mahogany shade." }]
  },
  {
    id: 'po-07', cat: 'wallets', name: 'Bi-Fold Stealth Wallet', price: 5500, img: 'assets/pre-owned/sa2.png', badge: 'Updated',
    desc: 'Ultra-slim bi-fold wallet for the modern minimalist.', isPreOwned: true,
    color: { name: 'Onyx', hex: '#0a0a0a' }, sizes: ['One Size'],
    specs: { 'Condition': 'Mint', 'Capacity': '6 Cards' },
    reviews: []
  },
  {
    id: 'po-08', cat: 'accessories', name: 'Leather Watch Roll', price: 12000, img: 'assets/pre-owned/vr2.JPG', badge: 'Premium',
    desc: 'Securely travel with your timepieces in this handcrafted roll.', isPreOwned: true,
    color: { name: 'Coffee', hex: '#6f4e37' }, sizes: ['3-Watch'],
    specs: { 'Condition': 'New Old Stock', 'Lining': 'Suede' },
    reviews: [{ user: "Winston B.", rating: 5, comment: "Perfect for my collection." }]
  },
  {
    id: 'po-09', cat: 'bags', name: 'Overnight Duffle (2018)', price: 48000, img: 'assets/pre-owned/vr3.JPG', badge: 'Archival',
    desc: 'Spacious duffle bag from our 2018 travel collection.', isPreOwned: true,
    color: { name: 'Tobacco', hex: '#b05e3c' }, sizes: ['XL'],
    specs: { 'Year': '2018', 'Condition': 'Great', 'Volume': '45L' },
    reviews: []
  },
  {
    id: 'po-10', cat: 'accessories', name: 'Minimalist Glasses Case', price: 3800, img: 'assets/pre-owned/sa1.png', badge: 'Curated',
    desc: 'Protect your eyewear with this slim, hard-shell leather case.', isPreOwned: true,
    color: { name: 'Sand', hex: '#c2b280' }, sizes: ['One Size'],
    specs: { 'Condition': 'Mint' },
    reviews: []
  },
  {
    id: 'po-11', cat: 'bags', name: 'Artisan Messenger Bag', price: 35000, img: 'assets/pre-owned/vr4.JPG', badge: 'Unique',
    desc: 'A rugged yet refined messenger bag for daily use.', isPreOwned: true,
    color: { name: 'Olive', hex: '#556b2f' }, sizes: ['M'],
    specs: { 'Condition': 'Excellent' },
    reviews: []
  },
  {
    id: 'po-12', cat: 'wallets', name: 'Zip-Around Travel Wallet', price: 9500, img: 'assets/pre-owned/sa2.png', badge: 'Functional',
    desc: 'Large wallet designed to hold passport, cards, and currency.', isPreOwned: true,
    color: { name: 'Sienna', hex: '#a0522d' }, sizes: ['One Size'],
    specs: { 'Condition': 'Good' },
    reviews: []
  },
  {
    id: 'po-13', cat: 'belts', name: 'Dress Leather Belt', price: 7200, img: 'assets/pre-owned/sa4.png', badge: 'Formal',
    desc: 'Perfect for formal occasions. Polished leather with silver buckle.', isPreOwned: true,
    color: { name: 'Black', hex: '#000000' }, sizes: ['32', '34'],
    specs: { 'Condition': 'Excellent' },
    reviews: []
  },
  {
    id: 'po-14', cat: 'bags', name: 'Compact Crossbody', price: 18000, img: 'assets/pre-owned/sa5.jpg', badge: 'Lightweight',
    desc: 'The perfect companion for your essentials during city walks.', isPreOwned: true,
    color: { name: 'Slate', hex: '#708090' }, sizes: ['S'],
    specs: { 'Condition': 'Mint' },
    reviews: []
  },
  {
    id: 'po-15', cat: 'accessories', name: 'Braided Leather Keychain', price: 2500, img: 'assets/pre-owned/sa3.png', badge: 'Artisan',
    desc: 'Intricately braided leather keychain with heavy-duty clip.', isPreOwned: true,
    color: { name: 'Rust', hex: '#b7410e' }, sizes: ['One Size'],
    specs: { 'Condition': 'Excellent' },
    reviews: []
  },
  {
    id: 'po-16', cat: 'bags', name: 'Executive Laptop Sleeve', price: 14500, img: 'assets/pre-owned/sa1.png', badge: 'Tech',
    desc: 'Padded laptop sleeve for 14" devices. Premium leather finish.', isPreOwned: true,
    color: { name: 'Navy', hex: '#000080' }, sizes: ['14"'],
    specs: { 'Condition': 'Mint' },
    reviews: []
  },
  {
    id: 'po-17', cat: 'wallets', name: 'Minimal Card sleeve', price: 3000, img: 'assets/pre-owned/sa2.png', badge: 'Essentials',
    desc: 'The slimmest card sleeve for those who carry only the basics.', isPreOwned: true,
    color: { name: 'Grey', hex: '#808080' }, sizes: ['One Size'],
    specs: { 'Condition': 'Excellent' },
    reviews: []
  },
  {
    id: 'po-18', cat: 'accessories', name: 'Leather Luggage Tag', price: 3500, img: 'assets/pre-owned/vr1.JPG', badge: 'Travel',
    desc: 'Identify your luggage in style with this durable tag.', isPreOwned: true,
    color: { name: 'Burgundy', hex: '#800020' }, sizes: ['One Size'],
    specs: { 'Condition': 'Mint' },
    reviews: []
  },
  {
    id: 'po-19', cat: 'belts', name: 'Casual Jean Belt', price: 6800, img: 'assets/pre-owned/sa4.png', badge: 'Daily',
    desc: 'Sturdy leather belt designed to age beautifully with your jeans.', isPreOwned: true,
    color: { name: 'Tan', hex: '#d2b48c' }, sizes: ['36', '38'],
    specs: { 'Condition': 'Good' },
    reviews: []
  },
  {
    id: 'po-20', cat: 'bags', name: 'Vintage Briefcase (1990)', price: 42000, img: 'assets/pre-owned/vr4.JPG', badge: 'Grail',
    desc: 'A piece of history. Solid build briefcase from the early 90s.', isPreOwned: true,
    color: { name: 'Chocolate', hex: '#3d2b1f' }, sizes: ['L'],
    specs: { 'Year': '1990', 'Condition': 'Excellent' },
    reviews: []
  }
];

// === PRODUCT COLOR OVERRIDES ===
const productColorOverrides = [];

// === ASSEMBLE MASTER LISTS ===
let allProducts = [...products, ...ghostProducts];
allProducts.forEach(p => { if (!p.color) p.color = '#888888'; });
productColorOverrides.forEach(ov => { const p = allProducts.find(x => x.id === ov.id); if (p && ov.color) p.color = ov.color; });
preOwnedProducts.forEach(p => { p.isPreOwned = true; if (!p.sizes) p.sizes = ['One Size']; });
const globalProducts = [...allProducts, ...preOwnedProducts];



const catIcons = {
  bags: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 0 0-8 0v2"/></svg>`,
  wallets: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="5" width="20" height="14" rx="3"/><path d="M17 9h2v4h-2a2 2 0 010-4z"/></svg>`,
  belts: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="9" width="22" height="6" rx="1"/><rect x="9" y="7" width="6" height="10" rx="1"/></svg>`,
  accessories: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 2v4m0 12v4M2 12h4m12 0h4"/></svg>`,
  footwear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 18h18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm0 0l1-6 4-2 2-6h4l1 3 3 1 3 4v6"/></svg>`,
  watches: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="7"/><path d="M12 9v3l2 1"/><path d="M9 2h6m-6 20h6"/></svg>`,
  travel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 2v4M8 2v4m-5 4h18m-1 11a2 2 0 01-2 2H6a2 2 0 01-2-2V10h16v11z"/></svg>`,
  tech: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
  office: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`,
  lifestyle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
  gifting: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M12 8V5a3 3 0 10-6 0v3m6 0v-3a3 3 0 116 0v3M3 12h18"/></svg>`,
  grooming: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 3a2 2 0 00-2 2v15a1 1 0 001 1h12a1 1 0 001-1V5a2 2 0 00-2-2H7z"/><path d="M12 8v4"/></svg>`,
  apparel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 1.88V9a6 6 0 0012 0V5a2 2 0 014 0v4a6 6 0 0012 0v-3.66a2 2 0 00-1.28-1.88z"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M9 22V12h6v10"/></svg>`,
  collections: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`
};

function getIcon(cat) { return catIcons[cat] || catIcons.bags; }
function fmtLKR(v) { return 'RS. ' + Math.round(v).toLocaleString(); }

/* === State === */
function getCart() {
  try {
    let c = JSON.parse(localStorage.getItem('aj_cart') || '[]');
    if (c.length > 0 && typeof c[0] === 'number') { c = []; setCart(c); }
    return Array.isArray(c) ? c : [];
  } catch (e) { return []; }
}
function setCart(c) { localStorage.setItem('aj_cart', JSON.stringify(c)); updateCartBadge(); }
function getWish() {
  try {
    let w = JSON.parse(localStorage.getItem('aj_wish') || '[]');
    return Array.isArray(w) ? w : [];
  } catch (e) { return []; }
}
function setWish(w) { localStorage.setItem('aj_wish', JSON.stringify(w)); }

function updateCartBadge() {
  const c = getCart();
  document.querySelectorAll('#cartCount,.cart-badge').forEach(el => {
    el.textContent = c.length;
    el.style.display = c.length ? 'flex' : 'none';
  });
  updateFloatingCart();
}

function updateFloatingCart() {
  const c = getCart();
  let floatCart = document.getElementById('aj-float-cart');
  if (!floatCart) {
    floatCart = document.createElement('div');
    floatCart.id = 'aj-float-cart';
    floatCart.style.cssText = 'position:fixed;top:50%;right:20px;transform:translateY(-50%);background:var(--primary);color:#000;border-radius:30px;padding:12px 20px;font-weight:800;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,0.5);display:none;flex-direction:column;align-items:center;gap:4px;z-index:9999;transition:all 0.3s ease;';
    floatCart.onclick = () => location.href = 'cart.html';
    floatCart.onmouseenter = () => floatCart.style.transform = 'translateY(-50%) scale(1.05)';
    floatCart.onmouseleave = () => floatCart.style.transform = 'translateY(-50%) scale(1)';
    document.body.appendChild(floatCart);
  }

  if (c.length === 0) {
    floatCart.style.display = 'none';
    return;
  }

  let subtotal = 0;
  let count = 0;
  c.forEach(item => {
    const p = globalProducts.find(x => x.id === item.id);
    if (p) {
      subtotal += p.price * item.qty;
      count += item.qty;
    }
  });

  floatCart.style.display = 'flex';
  floatCart.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
    <div style="font-size:12px;">${count} ITEMS</div>
    <div style="font-size:14px;">${fmtLKR(subtotal)}</div>
  `;
}

function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  const msgEl = document.getElementById('toastMsg');
  if (msgEl) msgEl.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

function expandImage(src) {
  let modal = document.querySelector('.image-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
      <div class="image-modal-close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </div>
      <img class="image-modal-content" src="" alt="Expanded View">
    `;
    modal.onclick = (e) => {
      if (!e.target.closest('.image-modal-content')) modal.classList.remove('active');
    };
    modal.querySelector('.image-modal-close').onclick = () => modal.classList.remove('active');
    document.body.appendChild(modal);
  }
  const img = modal.querySelector('.image-modal-content');
  img.src = src;
  setTimeout(() => modal.classList.add('active'), 10);
}

function toggleFaq(btn) {
  const item = btn.parentElement;
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

function isLoggedIn() { return localStorage.getItem('aj_logged_in') === 'true'; }

async function deleteAccount() {
  const user = auth.currentUser;
  if (!user) return;
  showDeleteModal();
}

function showDeleteModal() {
  let m = document.getElementById('ajv-delete-modal');
  if (m) { m.style.display = 'flex'; return; }
  m = document.createElement('div');
  m.id = 'ajv-delete-modal';
  m.style.cssText = 'position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.7);backdrop-filter:blur(12px);';
  m.innerHTML = `
    <div style="background:var(--surface);border:1.5px solid rgba(239,68,68,.3);border-radius:24px;padding:2rem;max-width:380px;width:90%;text-align:center;">
      <div style="width:48px;height:48px;border-radius:50%;background:rgba(239,68,68,.1);display:flex;align-items:center;justify-content:center;margin:0 auto 1rem;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
      </div>
      <h3 style="font-size:1.2rem;font-weight:800;margin-bottom:.5rem;">Delete Account</h3>
      <p style="font-size:.84rem;color:var(--text-muted);margin-bottom:1.2rem;line-height:1.7;">This permanently deletes your account and all data. Type <strong>DELETE</strong> to confirm.</p>
      <input type="text" id="deleteConfirmInput" placeholder="Type DELETE" style="width:100%;padding:14px;border:1.5px solid var(--border);border-radius:var(--radius-full);font-size:14px;font-weight:700;text-align:center;margin-bottom:1rem;background:var(--surface-dim);font-family:var(--font);color:var(--text);outline:none;">
      <div style="display:flex;gap:.75rem;">
        <button onclick="document.getElementById('ajv-delete-modal').style.display='none'" style="flex:1;padding:14px;border-radius:var(--radius-full);border:1.5px solid var(--border);font-size:13px;font-weight:700;cursor:pointer;background:none;font-family:var(--font);color:var(--text);">Cancel</button>
        <button id="deleteConfirmBtn" onclick="executeDeleteAccount()" style="flex:1;padding:14px;border-radius:var(--radius-full);background:#ef4444;color:#fff;font-size:13px;font-weight:700;cursor:pointer;border:none;opacity:.4;pointer-events:none;font-family:var(--font);transition:opacity .3s;">Delete Forever</button>
      </div>
    </div>`;
  document.body.appendChild(m);
  m.querySelector('#deleteConfirmInput').addEventListener('input', (e) => {
    const btn = document.getElementById('deleteConfirmBtn');
    if (e.target.value === 'DELETE') { btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; }
    else { btn.style.opacity = '.4'; btn.style.pointerEvents = 'none'; }
  });
  m.addEventListener('click', (e) => { if (e.target === m) m.style.display = 'none'; });
}

async function executeDeleteAccount() {
  const user = auth.currentUser;
  if (!user) return;
  toast('Initiating Deletion...');
  try {
    // Delete customer document directly via UID
    await db.collection('customers').doc(user.uid).delete();
    await user.delete();
    localStorage.clear();
    toast('Account deleted. See you around.');
    setTimeout(() => location.href = 'index.html', 1500);
  } catch (error) {
    if (error.code === 'auth/requires-recent-login') {
      toast('Security: Please re-login to delete account');
      document.getElementById('ajv-delete-modal').style.display = 'none';
      setTimeout(() => auth.signOut(), 2000);
    } else {
      toast('Deletion Failed: ' + error.message);
    }
  }
}

let loginAttempts = 0;
async function trackLoginAttempt(success) {
  if (success) {
    loginAttempts = 0;
  } else {
    loginAttempts++;
    if (loginAttempts >= 2) {
      toast("Multiple Failed attempts. Try, Forgot Password?");
      // Small delay before suggesting reset
      setTimeout(() => {
        if (confirm("Would you like to Reset your Password?")) {
          const email = document.getElementById('loginEmail')?.value;
          if (email) handleForgotPassword(email);
          else toast("Enter Email First");
        }
      }, 1000);
    }
  }
}

function addToCart(id, qty = 1, size = 'Default', color = 'Default') {
  if (!isLoggedIn()) {
    toast('Account Required | Redirecting to Login Page');
    setTimeout(() => location.href = 'login.html', 1500);
    return;
  }
  const p = globalProducts.find(x => x.id == id);
  if (p && p.isGhost) { toast('Sneak Peek Only — Launching Nov 2026'); return; }

  const c = getCart();
  // Check if same product + size + color exists
  const existing = c.find(item => item.id == id && item.size === size && item.color === color);

  if (p && p.isPreOwned) {
    if (existing || qty > 1) {
      toast("Pre-Owned Item: Limited to 1 unit");
      return;
    }
  }

  if (existing) {
    existing.qty += qty;
    toast('Cart Updated');
  } else {
    c.push({ id, qty, size, color, cartId: Date.now() + Math.random() });
    toast('Added to cart');
  }
  setCart(c);
}

function toggleWish(id) {
  if (!isLoggedIn()) {
    toast('Account Required | Redirecting to Login Page');
    setTimeout(() => location.href = 'login.html', 1500);
    return;
  }
  let w = getWish();
  if (w.some(x => x == id)) {
    w = w.filter(x => x != id);
    setWish(w);
    toast('Removed from Wishlist');
  } else {
    w.push(id);
    setWish(w);
    toast('Added to wishlist');
  }

  // Re-render UI to update heart color
  if (window.location.pathname.includes('wishlist.html') && typeof renderWishlist === 'function') renderWishlist();
  else if (typeof renderProducts === 'function') renderProducts();
}

function goProduct(id) { location.href = `product.html?id=${id}`; }

function filterCat(cat) {
  const url = new URL(window.location);
  url.searchParams.set('cat', cat);
  url.searchParams.set('page', '1');
  window.history.pushState({}, '', url);
  renderProducts();

  // Update UI Pills
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${cat}'`));
  });
}

function openSocial(channel, pid) {
  if (!firebase.auth().currentUser) {
    toast('Account Required | Redirecting to Login');
    setTimeout(() => location.href = 'login.html', 1500);
    return;
  }

  const p = allProducts.find(x => x.id === pid) || preOwnedProducts.find(x => x.id === pid);
  if (p) {
    if (channel === 'wa' && p.waLink) {
      window.open(p.waLink, '_blank');
      return;
    }
    if (channel === 'fb' && p.fbLink) {
      window.open(p.fbLink, '_blank');
      return;
    }
  }

  // Fallbacks
  const url = channel === 'wa' ? 'https://wa.me/c/94704800058' : 'https://www.facebook.com/marketplace/profile/61587322066412';
  window.open(url, '_blank');
}

/* === Master Rendering === */
function cardHTML(p, i, wish) {
  const isGhost = p.isGhost;
  const inWish = wish.includes(p.id);
  const isPreOwned = p.isPreOwned === true;

  return `<div class="product-card reveal ${isGhost ? 'ghost-card' : ''} ${isPreOwned ? 'pre-owned-card' : ''}" 
    style="animation-delay:${(i % 12) * 50}ms; --p-color:${p.color || '#888888'}" 
    onclick="${isGhost ? 'toast(\'Sneak Peek: Launching Nov 2026\')' : isPreOwned ? 'toast(\'Limited Edition: Only 1 Unit Available\'); goProduct(\'' + p.id + '\')' : `goProduct('${p.id}')`}"
    ondblclick="event.stopPropagation(); expandImage('${p.img}')">
    
    <div class="product-img-area">
      ${isGhost ? `<div class="ghost-placeholder">${getIcon(p.cat)}</div>` : `<img src="${p.img}" alt="${p.name}" class="p-img-main">`}
      ${p.badge ? `<span class="badge-status ${isGhost ? 'coming-soon' : ''}">${p.badge}</span>` : (isPreOwned ? '<span class="badge-status" style="background:var(--grad3);color:#000;font-weight:900;">PRE-OWNED</span>' : '')}
      
      ${!isGhost ? `
      <div class="p-social-overlay">
        <button class="p-social-btn wa" onclick="event.stopPropagation(); openSocial('wa', '${p.id}')" title="WhatsApp Catalog">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.029c0 2.119.549 4.187 1.59 6.037L0 24l6.105-1.602a11.834 11.834 0 005.937 1.587h.005c6.637 0 12.032-5.391 12.036-12.028.003-3.218-1.252-6.242-3.541-8.53z"/></svg>
        </button>
        <button class="p-social-btn fb" onclick="event.stopPropagation(); openSocial('fb', '${p.id}')" title="Facebook Marketplace">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </button>
      </div>
      ` : ''}
      
      ${!isGhost ? `<button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="event.stopPropagation();toggleWish('${p.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>` : ''}
    </div>
    <div class="product-info">
      <div class="product-cat">${catLabels[p.cat] || p.cat || (isPreOwned ? 'Pre-Owned' : '')}</div>
      <div class="product-name">${p.name}</div>
    </div>
    <div class="product-bot">
      <div style="display:flex; flex-direction:column; gap:4px;">
        <span class="product-price">${isGhost ? 'Coming Soon' : fmtLKR(p.price)}</span>
        <span style="font-size:9px; font-weight:800; color:var(--primary); opacity:0.8; letter-spacing:1px;">AJ-#${String(p.id).toUpperCase()}</span>
      </div>
      ${!isGhost ? `<button class="add-to-cart" onclick="event.stopPropagation();addToCart('${p.id}')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>` : ''}
    </div>
  </div>`;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  const wish = getWish();
  const urlParams = new URLSearchParams(window.location.search);
  const page = parseInt(urlParams.get('page') || '1');
  const cat = urlParams.get('cat') || 'all';
  const isShop = window.location.pathname.includes('shop.html');
  const isPreOwned = typeof window.isPreOwnedPage !== 'undefined' && window.isPreOwnedPage;

  let sourceArray = isPreOwned ? preOwnedProducts : products;
  let filtered = isPreOwned ? preOwnedProducts : allProducts;

  if (isPreOwned) {
    if (cat !== 'all') {
      filtered = preOwnedProducts.filter(p => p.cat === cat);
    } else {
      filtered = preOwnedProducts;
    }
    const countEl = document.getElementById('resultCount');
    if (countEl) countEl.textContent = `${filtered.length} Authentic Pieces Found`;
  } else if (cat !== 'all') {
    filtered = sourceArray.filter(p => p.cat === cat);
  } else if (isShop && cat === 'all') {
    if (page === 1) filtered = products.slice(0, 40);
    else if (page === 2) filtered = products.slice(40, 80);
    else if (page === 3) filtered = ghostProducts.slice(0, 8);
  } else if (!isShop) {
    filtered = products.slice(0, 9);
  }

  let html = '';
  if (isShop && page === 3 && cat === 'all') {
    html = `<div class="coming-soon-poster reveal" style = "grid-column:1/-1; background: var(--text); border-radius: var(--radius-xl); padding: 80px 40px; text-align: center; color: #fff; margin-bottom: 40px; position:relative; overflow:hidden" >
      <div style="position:absolute; top:0; left:0; width:100%; height:100%; opacity:0.1; background-image: radial-gradient(circle at 50% 50%, var(--primary), transparent)"></div>
      <div style="position:relative; z-index:1">
        <div style="font-size: 14px; font-weight: 800; letter-spacing: 4px; color: var(--primary); margin-bottom: 24px;">AJ VANTAGE EXPANSION</div>
        <h2 style="font-size: clamp(32px, 4vw, 56px); font-weight: 800; margin-bottom: 20px; letter-spacing: -2px;">The Grand Collection</h2>
        <p style="max-width: 600px; margin: 0 auto; color: rgba(255,255,255,0.6); font-size: 18px; line-height: 1.6;">Our master artisans are perfecting 420+ new luxury concepts. The full artisan database launches this November.</p>
        <div style="margin-top: 40px; display: flex; align-items: center; justify-content: center; gap: 32px;">
          <div style="text-align: left;"><div style="font-size: 32px; font-weight: 800; color: var(--primary);">420+</div><div style="font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px;">Designs Pending</div></div>
          <div style="width: 1px; height: 40px; background: rgba(255,255,255,0.1);"></div>
          <div style="text-align: left;"><div style="font-size: 32px; font-weight: 800; color: var(--primary);">Nov 24</div><div style="font-size: 11px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px;">Official Launch</div></div>
        </div>
      </div>
    </div> `;
    html += `<div style = "grid-column:1/-1; margin:40px 0 20px; text-align:center;" > <h3 style="font-size:24px; font-weight:700">Sneak Peek of the Future</h3></div> `;
    html += filtered.map((p, i) => cardHTML(p, i, wish)).join('');
  } else {
    html = filtered.map((p, i) => cardHTML(p, i, wish)).join('');
  }

  grid.innerHTML = html || '<div class="empty-state">No products found</div>';
  renderPagination(page, isShop && cat === 'all');
  setTimeout(observeReveals, 50);
}

function renderPagination(current, show) {
  const wrap = document.getElementById('pagination');
  if (!wrap) return;
  if (!show) { wrap.innerHTML = ''; return; }

  let html = `
    <a href="?page=${Math.max(1, current - 1)}" class="page-btn ${current === 1 ? 'disabled' : ''}" onclick="if(${current === 1})return false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
    </a>
    <a href="?page=1" class="page-btn ${current === 1 ? 'active' : ''}">1</a>
    <a href="?page=2" class="page-btn ${current === 2 ? 'active' : ''}">2</a>
    <a href="?page=3" class="page-btn ${current === 3 ? 'active' : ''}">3</a>
    <a href="?page=${Math.min(3, current + 1)}" class="page-btn ${current === 3 ? 'disabled' : ''}" onclick="if(${current === 3})return false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  `;
  wrap.innerHTML = html;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!container) return;
  const cart = getCart();
  const empty = document.getElementById('emptyCart');
  const layout = document.querySelector('.cart-layout');
  const sub = document.getElementById('cartSub');

  if (!cart.length) {
    if (layout) layout.style.display = 'none';
    if (empty) empty.style.display = 'flex';
    if (sub) sub.style.display = 'none';
    return;
  }

  if (layout) layout.style.display = 'grid';
  if (empty) empty.style.display = 'none';
  if (sub) sub.style.display = 'block';

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const p = globalProducts.find(x => x.id === item.id);
    if (!p) return '';
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-card reveal" onclick="location.href='product.html?id=${p.id}'" style="cursor:pointer">
        <div class="cart-img">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div style="flex:1">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${catLabels[p.cat]}</div>
          <div style="font-size:18px; font-weight:800; margin-bottom:4px;">${p.name}</div>
          <div style="font-size:13px; color:var(--text-light); margin-bottom:8px;">${item.color !== 'Default' ? item.color + ' / ' : ''}${item.size !== 'Default' ? 'Size ' + item.size : ''}</div>
          
          <div style="display:flex; align-items:center; gap:15px; margin-top:10px;">
            <div class="qty-picker" style="margin:0; padding:4px 8px; scale:0.9; transform-origin:left;" onclick="event.stopPropagation()">
              <button class="qty-btn" onclick="updateCartQty('${item.cartId}', -1)">−</button>
              <span class="qty-val" style="min-width:20px; text-align:center;">${item.qty}</span>
              <button class="qty-btn" onclick="updateCartQty('${item.cartId}', 1)">+</button>
            </div>
            <div style="font-size:16px; font-weight:700; color:var(--primary);">${fmtLKR(itemTotal)}</div>
          </div>
        </div>
        <button class="cart-remove-btn" onclick="event.stopPropagation(); removeFromCart('${item.cartId}')">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </button>
      </div>
    `;
  }).join('');
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const subEl = document.getElementById('subtotal');
  const taxEl = document.getElementById('tax');
  const totalEl = document.getElementById('total');

  if (subEl) subEl.textContent = fmtLKR(subtotal);
  if (taxEl) taxEl.textContent = fmtLKR(tax);
  if (totalEl) totalEl.textContent = fmtLKR(total);

  setTimeout(observeReveals, 50);
}

function removeFromCart(cartId) {
  let c = getCart();
  c = c.filter(item => item.cartId != cartId);
  setCart(c);
  renderCartItems();
  toast('Item Removed from Cart');
}

function updateCartQty(cartId, delta) {
  let c = getCart();
  const item = c.find(x => x.cartId == cartId);
  if (item) {
    item.qty = Math.max(1, Math.min(10, item.qty + delta));
    setCart(c);
    renderCartItems();
  }
}

function renderSlider() {
  const track = document.getElementById('sliderTrack');
  if (!track) return;
  const wish = getWish();
  const featured = products.slice(-9).reverse();
  track.innerHTML = featured.map((p, i) => cardHTML(p, i, wish)).join('');
  setTimeout(observeReveals, 50);
}

function renderHomeCategories() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;
  const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  const catsToRender = isIndex ? categories.slice(0, 6) : categories;
  grid.innerHTML = catsToRender.map(cat => `
    <div class="category-card reveal" onclick="location.href='shop.html?cat=${cat}'">
      <div class="cat-icon-wrap">${getIcon(cat)}</div>
      <span class="cat-card-name">${catLabels[cat]}</span>
    </div>
  `).join('');
}

function observeReveals() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

function checkAccountAndGo(event) {
  if (event) event.preventDefault();
  if (isLoggedIn()) {
    location.href = 'profile.html';
  } else {
    const hasAccount = localStorage.getItem('aj_has_account') === 'true';
    location.href = 'login.html';
  }
}

function renderHeaderAuth() {
  const actions = document.querySelector('.header-actions');
  if (!actions) return;

  const user = (typeof firebase !== 'undefined' && firebase.auth) ? firebase.auth().currentUser : null;

  // Remove existing auth related elements but keep cart/wishlist
  const existingAvatar = actions.querySelector('.avatar');
  const existingAuthGroup = actions.querySelector('.header-auth-group');
  if (existingAvatar) existingAvatar.remove();
  if (existingAuthGroup) existingAuthGroup.remove();

  if (user) {
    const avatar = document.createElement('a');
    avatar.href = 'profile.html';
    avatar.className = 'avatar active';
    avatar.textContent = user.email ? user.email.charAt(0).toUpperCase() : 'A';
    actions.appendChild(avatar);
  } else {
    const authGroup = document.createElement('div');
    authGroup.className = 'header-auth-group';
    authGroup.style.display = 'flex';
    authGroup.style.gap = '10px';
    authGroup.innerHTML = `
      <a href="login.html" class="btn-outline" style="padding: 10px 20px; font-size: 13px;">Sign In</a>
      <a href="signup.html" class="btn-primary" style="padding: 10px 20px; font-size: 13px;">Sign Up</a>
    `;
    actions.appendChild(authGroup);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log("AJ VANTAGE: Core logic initializing...");
  try {
    // 1. Sync Firebase Auth State (Unified Global Listener)
    if (typeof firebase !== 'undefined' && firebase.auth) {
      firebase.auth().onAuthStateChanged(async (user) => {
        try {
          if (user) {
            localStorage.setItem('aj_logged_in', 'true');
            localStorage.setItem('aj_user_email', user.email);
            localStorage.setItem('aj_has_account', 'true');

            if (firebase.firestore) {
              const _db = (typeof db !== 'undefined') ? db : firebase.firestore();

              // Record last seen
              _db.collection('customers').doc(user.uid).set({
                lastSeen: firebase.firestore.FieldValue.serverTimestamp()
              }, { merge: true }).catch(() => { });

              // Handle Profile Redirection Logic
              const doc = await _db.collection('customers').doc(user.uid).get();
              if (doc.exists) {
                const data = doc.data();
                localStorage.setItem('aj_user_phone', data.phone || '');

                // Profile redirection removed to prevent refresh loops.
              }
            }
          } else {
            localStorage.removeItem('aj_logged_in');
            localStorage.removeItem('aj_user_email');

            // Only show welcome popup if we are on index.html or root
            if (pathname === '/' || pathname.endsWith('index.html') || pathname.endsWith('/PROJECT_ECOM/') || pathname === '') {
              setTimeout(injectWelcomePopup, 3000); // 3-second delay for better impact
            }
          }
          renderHeaderAuth();
        } catch (e) {
          console.warn("Auth check error", e);
          renderHeaderAuth();
        }
      });
    }

    renderHeaderAuth();
    updateCartBadge();
    if (document.getElementById('productGrid')) renderProducts();
    if (document.getElementById('sliderTrack')) renderSlider();
    if (document.getElementById('categoryGrid')) renderHomeCategories();
    if (document.getElementById('cartItems')) renderCartItems();

    if (typeof observeReveals === 'function') observeReveals();
    else console.warn("observeReveals not found");
  } catch (err) {
    console.error("AJ VANTAGE: Fatal crash in DOMContentLoaded", err);
  }
});

/* === SECURITY & SYSTEM LOGIC === */

// System checks disabled to prioritize visibility
async function checkSiteStatus() { }
async function detectIPAndRedirect() { }

async function handleForgotPassword(email) {
  if (!email) { toast("Email Required for Reset"); return; }
  try {
    await auth.sendPasswordResetEmail(email);
    toast("Hooray!, Reset link sent to your Email.");
  } catch (error) {
    toast("Reset Failed: " + error.message);
  }
}

async function handleSignOut() {
  try {
    await auth.signOut();
    localStorage.removeItem('aj_logged_in');
    localStorage.removeItem('aj_user_email');
    localStorage.removeItem('ajv_cart');
    localStorage.removeItem('ajv_wishlist');
    localStorage.removeItem('ajv_popup_shown');
    localStorage.removeItem('aj_cart');
    localStorage.removeItem('aj_wish');
    sessionStorage.removeItem('aj_welcomed'); // Clear so popup shows again on next visit
    toast("Signing out securely...");
    setTimeout(() => location.href = 'index.html', 1000);
  } catch (e) {
    location.href = 'index.html';
  }
}

/* === SEARCH LOGIC === */
function levenshtein(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}

function fuzzyMatch(str, query) {
  if (str.includes(query)) return true;
  const words = str.split(' ');
  const qWords = query.split(' ');
  for (let qw of qWords) {
    if (qw.length < 3) continue;
    for (let w of words) {
      if (w.length < 3) continue;
      if (levenshtein(w, qw) <= 2) return true;
    }
  }
  return false;
}

/* === SEARCH LOGIC — STRUCTURED DROPDOWN === */
function filterSearch(query) {
  const q = query.toLowerCase().trim();
  let resultsList = document.getElementById('aj-search-results');
  const searchPill = document.querySelector('.search-pill');

  if (!resultsList) {
    resultsList = document.createElement('div');
    resultsList.id = 'aj-search-results';
    resultsList.className = 'search-results-list';
    if (searchPill) searchPill.style.position = 'relative';
    searchPill?.appendChild(resultsList);
  }

  if (!q) {
    resultsList.classList.remove('active');
    return;
  }

  const filtered = globalProducts.filter(p =>
    fuzzyMatch(p.name.toLowerCase(), q) ||
    (p.cat && fuzzyMatch(p.cat.toLowerCase(), q)) ||
    (catLabels[p.cat] && fuzzyMatch(catLabels[p.cat].toLowerCase(), q))
  ).slice(0, 10); // Limit to top 10

  if (filtered.length === 0) {
    resultsList.innerHTML = '<div style="padding:20px;text-align:center;font-size:13px;color:var(--text-light); font-weight: 500;">No results found for "' + q + '"</div>';
  } else {
    resultsList.innerHTML = filtered.map(p => `
      <div class="search-result-item" onclick="location.href='product.html?id=${p.id}'" style="display: flex; flex-direction: column; gap: 8px; padding: 12px; border-bottom: 1px solid var(--border);">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="search-result-img-wrap" style="width: 50px; height: 50px;">
            <img src="${p.img}" class="search-result-img" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">
          </div>
          <div class="search-result-info">
            <div class="search-result-name" style="font-weight: 600; font-size: 14px;">${p.name}</div>
            <div class="search-result-cat" style="font-size: 11px; color: var(--text-light); text-transform: uppercase;">${catLabels[p.cat] || p.cat}</div>
            <div class="search-result-price" style="font-size: 13px; font-weight: 700;">${p.isGhost ? 'Coming Soon' : fmtLKR(p.price)}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  resultsList.classList.add('active');
}

// Close search on click outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-pill')) {
    document.getElementById('aj-search-results')?.classList.remove('active');
  }
});

// Update all search inputs to use the new logic
document.addEventListener('DOMContentLoaded', () => {
  const searchInputs = document.querySelectorAll('.search-pill input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => filterSearch(e.target.value));
    input.addEventListener('focus', (e) => { if (e.target.value) filterSearch(e.target.value); });
  });
});

/* === MOBILE MENU === */
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');
  if (nav && overlay) {
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  }
}

document.getElementById('navOverlay')?.addEventListener('click', toggleMobileMenu);

/* === INPUT SANITIZATION === */
function sanitizeText(str, maxLen) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}
function sanitizePhone(str) {
  if (!str) return '';
  return str.replace(/[^\d+]/g, '').slice(0, 15);
}

// Premium Cinematic Maintenance Screen
function showErrorBoundary() {
  document.body.innerHTML = `
    <div style="height:100vh; width:100vw; background:#000; display:flex; align-items:center; justify-content:center; color:#fff; font-family:'Plus Jakarta Sans', sans-serif; text-align:center; padding:20px; position:relative; overflow:hidden;">
      <!-- Cinematic Background Effect -->
      <div style="position:absolute; inset:0; background: radial-gradient(circle at 50% 50%, rgba(255,109,46,0.1), transparent 70%); opacity:0.8;"></div>
      <div style="position:absolute; inset:0; background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png'); opacity:0.1;"></div>
      
      <div class="reveal active" style="max-width:600px; position:relative; z-index:2;">
        <div style="display:inline-block; padding:12px 24px; background:rgba(255,109,46,0.1); border:1px solid rgba(255,109,46,0.3); border-radius:99px; color:#ff6d2e; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:3px; margin-bottom:30px;">System Refinement</div>
        <img src="assets/brand/AJ3.png" style="width:140px; margin:0 auto 40px; filter:brightness(10); display:block;">
        <h1 style="font-size:clamp(32px, 5vw, 48px); font-weight:900; margin-bottom:24px; letter-spacing:-1.5px; line-height:1.1;">Perfecting the <span style="color:#ff6d2e;">Standard</span></h1>
        <p style="font-size:18px; color:rgba(255,255,255,0.6); line-height:1.8; margin-bottom:48px;">Our digital flagship is undergoing a cinematic transformation. We are refining every pixel to bring you an uncompromising luxury experience. </p>
        <div style="display:flex; justify-content:center; gap:20px;">
          <a href="https://wa.me/94721226766" style="text-decoration:none; background:#ff6d2e; color:white; font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:2px; padding:18px 36px; border-radius:99px; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); box-shadow:0 10px 30px rgba(255,109,46,0.3);">Contact Concierge</a>
          <a href="mailto:support@ajvantage.com" style="text-decoration:none; background:rgba(255,255,255,0.05); color:white; font-size:13px; font-weight:800; text-transform:uppercase; letter-spacing:2px; padding:18px 36px; border-radius:99px; border:1px solid rgba(255,255,255,0.1); transition:all 0.4s;">Inquire via Email</a>
        </div>
      </div>
    </div>
  `;
  document.body.style.overflow = 'hidden';
}

// Maintenance mode flag — set window.AJV_MAINTENANCE = true in any page to force show
// window.AJV_MAINTENANCE check removed to keep pages visible

/* === OFFLINE DETECTION REMOVED BY USER REQUEST === */

/* === DIRECT TRANSMISSION / ENQUIRY === */
async function submitEnquiry() {
  const btn = document.getElementById('enqSubmitBtn');
  const name = document.getElementById('enqName').value.trim();
  const email = document.getElementById('enqEmail').value.trim();
  const subject = document.getElementById('enqSubject').value.trim();
  const message = document.getElementById('enqMessage').value.trim();

  if (!name || !email || !subject || !message) {
    toast('Please Fill in All Fields');
    return;
  }

  btn.disabled = true;
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="loader" style="width:16px;height:16px;border-width:2px;border-style:solid;border-color:#000 transparent #000 transparent;border-radius:50%;display:inline-block;margin-right:8px;animation:spin 1s linear infinite;"></span> Sending...';

  try {
    await db.collection('enquiries').add({
      name,
      email,
      subject,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'new'
    });

    toast('Transmission secured and sent. We will contact you soon.');
    document.getElementById('supportForm').reset();
  } catch (err) {
    console.error('Enquiry Error:', err);
    toast('Failed to send transmission. Please try again.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }
}

/* === WELCOME POPUP === */
function injectWelcomePopup() {
  // Show only if not seen this session
  if (sessionStorage.getItem('aj_welcomed') === '1') return;
  sessionStorage.setItem('aj_welcomed', '1');

  if (document.getElementById('ajvPopup')) return;

  const popup = document.createElement('div');
  popup.id = 'ajvPopup';
  popup.style.cssText = 'position:fixed;inset:0;z-index:8000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.65);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);opacity:0;transition:opacity .4s ease;';
  popup.innerHTML = `
    <div id="ajvPopupPanel" style="max-width:420px;width:90%;background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:2.5rem;text-align:center;transform:scale(.92);opacity:0;transition:transform .45s ease,opacity .45s ease;position:relative;">
      <button onclick="closeWelcomePopup()" style="position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;background:var(--surface-dim,#f5f5f5);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-muted);">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      <div style="width:48px;height:48px;border-radius:12px;background:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
      </div>
      <div style="font-size:11px;font-weight:800;letter-spacing:3px;color:var(--primary);margin-bottom:6px;text-transform:uppercase;">AJ VANTAGE</div>
      <h2 style="font-size:1.5rem;font-weight:800;margin-bottom:8px;letter-spacing:-.5px;color:var(--text);">Welcome to AJ VANTAGE</h2>
      <p style="font-size:.84rem;color:var(--text-muted);line-height:1.7;margin-bottom:1.5rem;">Sri Lanka's curated marketplace for premium pre-owned and brand new goods.</p>
      <a href="signup.html" style="display:block;width:100%;padding:14px;background:var(--primary);color:#fff;font-weight:700;font-size:14px;border-radius:99px;text-align:center;margin-bottom:10px;text-decoration:none;">Create Account</a>
      <a href="login.html" style="display:block;width:100%;padding:14px;border-radius:99px;border:1.5px solid var(--border);font-size:14px;font-weight:700;text-align:center;color:var(--text);text-decoration:none;margin-bottom:16px;">Log In</a>
      <p style="font-size:.75rem;color:var(--text-light);">Just browsing? <a href="#" onclick="closeWelcomePopup();return false" style="color:var(--primary);font-weight:700;text-decoration:none;">Continue as guest →</a></p>
    </div>
  `;
  document.body.appendChild(popup);
  popup.addEventListener('click', e => { if (e.target.id === 'ajvPopup') closeWelcomePopup(); });
  requestAnimationFrame(() => {
    popup.style.opacity = '1';
    const panel = document.getElementById('ajvPopupPanel');
    if (panel) { panel.style.transform = 'scale(1)'; panel.style.opacity = '1'; }
  });
}

window.closeWelcomePopup = function () {
  const popup = document.getElementById('ajvPopup');
  if (!popup) return;
  const panel = document.getElementById('ajvPopupPanel');
  panel.style.transform = 'scale(.92)';
  panel.style.opacity = '0';
  popup.style.opacity = '0';
  setTimeout(() => popup.remove(), 400);
};

// Global Auth Initializer removed as it is now merged into the main DOMContentLoaded listener at the top of the file.

// === DATABASE INTEGRITY MONITOR (Offline Alerts Removed) ===
(function () {
  if (typeof firebase !== 'undefined' && firebase.firestore) {
    firebase.firestore().enableNetwork().catch(() => { });

    // Periodically ping Firestore for integrity without showing UI alerts
    setInterval(async () => {
      try {
        await firebase.firestore().collection('_integrity').doc('ping').set({ t: Date.now() }, { merge: true });
      } catch (e) { }
    }, 60000); // Every 60s
  }
})();

// ═══ SMART AUTH CORE ═══
window.checkUserStatus = async function (email) {
  if (!email || !email.includes('@')) return null;
  try {
    const methods = await firebase.auth().fetchSignInMethodsForEmail(email);
    return methods.length > 0; // true = exists (login), false = new (signup)
  } catch (error) {
    console.error("User Account Status Failed", error);
    return null;
  }
};

window.handleSmartAuth = async function () {
  const email = document.getElementById('loginEmail').value.trim();
  const pass = document.getElementById('loginPass').value;
  const btn = document.querySelector('.auth-btn');

  if (!email || !email.includes('@')) { toast('Enter a Valid Email Address'); return; }
  if (pass.length < 6) { toast('Password must be 6+ Characters'); return; }

  const originalBtnText = btn.innerText;
  btn.innerText = "Verifying Account...";
  btn.disabled = true;

  try {
    // Attempt direct login first
    try {
      const cred = await firebase.auth().signInWithEmailAndPassword(email, pass);
      await syncUserToFirestore(cred.user, false);
      toast('Welcome Back!');

      // Redirect based on current page
      setTimeout(() => {
        if (window.location.href.includes('login.html')) {
          location.href = 'index.html';
        }
      }, 1000);
      return;
    } catch (loginErr) {
      if (loginErr.code === 'auth/user-not-found') {
        toast('Account Not Found. Redirecting to Signup...');
        setTimeout(() => location.href = 'signup.html', 1500);
        return;
      } else if (loginErr.code === 'auth/wrong-password') {
        toast('Incorrect Password. Please try again.');
        btn.innerText = originalBtnText;
        btn.disabled = false;
        return;
      } else {
        throw loginErr; // Throw other errors to the main catch block
      }
    }
  } catch (error) {
    console.error("SmartAuth Error:", error);
    toast(error.message);
    btn.innerText = originalBtnText;
    btn.disabled = false;
  }
};

async function syncUserToFirestore(user, isNew) {
  const now = firebase.firestore.FieldValue.serverTimestamp();

  if (isNew) {
    // Note: Standard signup handles this in signup.html
    // This is a fallback for other creation methods
    const phone = prompt("Enter Phone Number for Signup");
    if (!phone) return;

    await firebase.firestore().collection('customers').doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      phone: phone,
      memberSince: new Date().toISOString().split('T')[0],
      homeBranch: "katugastota",
      tier: "Bronze",
      points: 0,
      totalSpent: 0,
      profileComplete: false,
      createdAt: now
    });
  } else {
    // Direct update via UID
    await firebase.firestore().collection('customers').doc(user.uid).update({
      lastLogin: now
    }).catch(e => console.log("New user sync pending..."));
  }
}

window.handleForgotPassword = async function (email) {
  if (!email || !email.includes('@')) {
    toast('Please Enter a Valid Email Address');
    return;
  }

  try {
    await firebase.auth().sendPasswordResetEmail(email);
    toast('Password reset link sent to your email.');
  } catch (error) {
    console.error("Password Reset Error:", error);
    toast('Error sending reset link. Please Try Again.');
  }
};

/* ============================================================
   === PREMIUM CHATBOT LOGIC ===
   ============================================================ */
let chatState = { step: 'init', lastQuery: '' };

window.toggleChat = function () {
  const w = document.getElementById('chatWrapper');
  if (w) w.classList.toggle('active');
};

window.sendChatMessage = async function () {
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatMessages');
  const text = input.value.trim();
  if (!text || !body) return;

  // Add User Message
  const uMsg = document.createElement('div');
  uMsg.className = 'chat-bubble user';
  uMsg.textContent = text;
  body.appendChild(uMsg);
  input.value = '';
  body.scrollTop = body.scrollHeight;

  // Bot response delay
  setTimeout(async () => {
    const bMsg = document.createElement('div');
    bMsg.className = 'chat-bubble bot';
    let reply = "";
    const t = text.toLowerCase();

    if (chatState.step === 'await_order') {
      reply = `Order ${text.toUpperCase()} is currently being processed and will be dispatched via DHL Express shortly.`;
      chatState.step = 'await_feedback';
    } else if (chatState.step === 'await_feedback') {
      if (t.includes('yes') || t.includes('y')) {
        reply = "Excellent. AJ VANTAGE is at your service. Anything else?";
      } else {
        reply = "I apologize for the inconvenience. Our executive support team has been notified.";
      }
      chatState.step = 'init';
    } else {
      if (t.includes('hi') || t.includes('hello')) {
        reply = "Welcome to the AJ VANTAGE Private Suite. How can I assist you today?";
      } else if (t.includes('order')) {
        reply = "Please provide your Order ID for real-time tracking.";
        chatState.step = 'await_order';
      } else if (t.includes('shipping') || t.includes('track')) {
        reply = "We offer global insured shipping via DHL Express. Deliveries typically arrive within 7-14 business days.";
        chatState.step = 'await_feedback';
      } else if (t.includes('return') || t.includes('refund')) {
        reply = "Our policy allows for returns within 30 days of delivery for a full refund or exchange.";
        chatState.step = 'await_feedback';
      } else if (t.includes('material') || t.includes('leather')) {
        reply = "AJ VANTAGE exclusively uses premium full-grain leather, hand-finished for an elite patina over time.";
        chatState.step = 'await_feedback';
      } else if (t.includes('price') || t.includes('cost')) {
        reply = "All prices are listed in LKR. We accept all major cards and local bank transfers.";
        chatState.step = 'await_feedback';
      } else {
        reply = "I've logged your request. Our assistant will provide a more detailed response shortly.";
        // Log to Firebase
        if (typeof db !== 'undefined') {
          try {
            await db.collection('chatbot_queries').add({
              query: text,
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
          } catch (e) { console.error("Chat Log Error:", e); }
        }
      }
    }

    bMsg.textContent = reply;
    body.appendChild(bMsg);

    if (chatState.step === 'await_feedback') {
      setTimeout(() => {
        const fMsg = document.createElement('div');
        fMsg.className = 'chat-bubble bot';
        fMsg.textContent = "Did this assist you adequately? (Yes / No)";
        body.appendChild(fMsg);
        body.scrollTop = body.scrollHeight;
      }, 800);
    }
    body.scrollTop = body.scrollHeight;
  }, 800);
};

/* ============================================================
   === GLOBAL HEADER AUTH STATE + WHATSAPP FLOAT BUTTON ===
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged(user => {
      const avatar = document.querySelector('a.avatar');
      if (!avatar) return;

      if (user) {
        avatar.style.display = 'flex';
        firebase.firestore().collection('customers').doc(user.uid).get().then(doc => {
          const initial = (doc.exists && doc.data().name)
            ? doc.data().name.charAt(0).toUpperCase()
            : user.email.charAt(0).toUpperCase();
          avatar.textContent = initial;
        }).catch(() => {
          avatar.textContent = user.email.charAt(0).toUpperCase();
        });
      } else {
        avatar.style.display = 'none';
      }
    });
  }

  // Floating WhatsApp button removed per user request

  observeReveals();
});

function observeReveals() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.classList.add('active');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

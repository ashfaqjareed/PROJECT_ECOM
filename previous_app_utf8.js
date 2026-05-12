/* === AJ VANTAGE ΓÇö Core Logic & Configuration === */

// ΓòÉΓòÉΓòÉ MAINTENANCE MODE ΓòÉΓòÉΓòÉ
// To activate: change false ΓåÆ true, save, push to GitHub
const MAINTENANCE_MODE = false;

if (MAINTENANCE_MODE) {
  document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.className = 'maintenance-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:var(--bg);z-index:2147483647;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px;opacity:0;transition:opacity 0.8s ease;';
    overlay.innerHTML = `
      <div style="max-width:500px;background:var(--surface);border:1px solid var(--border);border-radius:32px;padding:60px 40px;box-shadow:var(--shadow-lg);">
        <div style="width:80px;height:80px;margin:0 auto 30px;background:rgba(255,109,46,0.1);border-radius:24px;display:flex;align-items:center;justify-content:center;transform:rotate(-10deg);border:1px solid rgba(255,109,46,0.2);">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h1 style="font-family:var(--font);font-size:22px;font-weight:800;color:var(--text);margin-bottom:20px;text-transform:uppercase;letter-spacing:2px;">AJ VANTAGE ΓÇö EVOLVING</h1>
        <p style="font-family:var(--font);font-size:16px;color:var(--text-muted);line-height:1.8;margin-bottom:32px;">We are currently refining the platform. Our digital atelier will reopen shortly.</p>
        <div style="display:inline-flex;align-items:center;gap:12px;padding:12px 24px;background:var(--surface-dim);border-radius:100px;border:1px solid var(--border);">
           <span style="width:8px;height:8px;background:#10b981;border-radius:50%;display:inline-block;animation:pulse 2s infinite;"></span>
           <span style="font-family:var(--font);font-size:12px;color:var(--text);text-transform:uppercase;letter-spacing:1px;font-weight:600;">System Integrity Active</span>
        </div>
      </div>
      <style>
        @keyframes pulse { 0% { opacity: 0.4; } 50% { opacity: 1; transform: scale(1.2); } 100% { opacity: 0.4; } }
        body { background: var(--bg) !important; }
      </style>
    `;
    document.body.innerHTML = '';
    document.body.appendChild(overlay);
    setTimeout(() => overlay.style.opacity = '1', 100);
    document.body.style.overflow = 'hidden';
  });
}
// ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ

// ΓòÉΓòÉΓòÉ PRE-OWNED PRODUCT EDITOR ΓòÉΓòÉΓòÉ
const preOwnedProducts = [
  { id: 'po-01', name: 'Vintage Herm├¿s Birkin 35', price: 675000, img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3', desc: 'Authentic 1998 production. Gold hardware. Pristine condition.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Gold', hex: '#b8860b' }, sizes: ['One Size'] },
  { id: 'po-02', name: 'Rolex Submariner 16610', price: 425000, img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49', desc: 'Full set with box and papers. Serviced 2024.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Steel', hex: '#71797E' }, sizes: ['One Size'] },
  { id: 'po-03', name: 'Louis Vuitton Keepall 55', price: 185000, img: 'https://images.unsplash.com/photo-1547949003-9792a18a2601', desc: 'Monogram canvas. Classic travel staple. Light patina.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Monogram Brown', hex: '#6b4226' }, sizes: ['55cm'] },
  { id: 'po-04', name: 'Cartier Love Bracelet', price: 315000, img: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142', desc: '18K Yellow Gold. Includes screwdriver and certificate.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Yellow Gold', hex: '#d4af37' }, sizes: ['16', '17', '18', '19'] },
  { id: 'po-05', name: 'Chanel Classic Flap Bag', price: 495000, img: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6', desc: 'Caviar leather. Silver-tone hardware. 2020 production.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Black', hex: '#111111' }, sizes: ['Medium'] },
  { id: 'po-06', name: 'Patek Philippe Nautilus', price: 950000, img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d', desc: 'Blue dial. Iconic design. Collector grade condition.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Blue', hex: '#1e3a5f' }, sizes: ['One Size'] },
  { id: 'po-07', name: 'Gucci Jackie 1961', price: 145000, img: 'https://images.unsplash.com/photo-1591561954557-26941169b49e', desc: 'Reinvigorated classic. Emerald green leather.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Emerald Green', hex: '#046307' }, sizes: ['Medium'] },
  { id: 'po-08', name: 'Dior Lady Dior Large', price: 225000, img: 'https://images.unsplash.com/photo-1566150905458-1bf1fd113961', desc: 'Lambskin Cannage. Gold charms. Excellent condition.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Black', hex: '#111111' }, sizes: ['Large'] },
  { id: 'po-09', name: 'Prada Re-Edition 2005', price: 95000, img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7', desc: 'Nylon shoulder bag. Saffiano trim. Black.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Black', hex: '#111111' }, sizes: ['One Size'] },
  { id: 'po-10', name: 'Omega Speedmaster Pro', price: 275000, img: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3', desc: 'The Moonwatch. Hesalite crystal. Manual wind.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Steel Black', hex: '#2c2c2c' }, sizes: ['One Size'] },
  { id: 'po-11', name: 'Saint Laurent Loulou', price: 165000, img: 'https://images.unsplash.com/photo-1559563458-527698bf5295', desc: 'Quilted leather. YSL monogram. Dark grey.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Dark Grey', hex: '#4a4a4a' }, sizes: ['Medium'] },
  { id: 'po-12', name: 'Bottega Veneta Pouch', price: 135000, img: 'https://images.unsplash.com/photo-1594093515514-ed5e59aa65a1', desc: 'Intrecciato weave. Soft calfskin. Camel color.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Camel', hex: '#c19a6b' }, sizes: ['One Size'] },
  { id: 'po-13', name: 'Fendi Peekaboo ISeeU', price: 245000, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa', desc: 'Leather handbag with twist lock. Grey.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Grey', hex: '#808080' }, sizes: ['Medium'] },
  { id: 'po-14', name: 'Balenciaga City Bag', price: 85000, img: 'https://images.unsplash.com/photo-1579609598065-79f8e5bcfb70', desc: 'Classic motor bag. Distressed leather. Black.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Black', hex: '#111111' }, sizes: ['Medium'] },
  { id: 'po-15', name: 'Celine Belt Bag Micro', price: 155000, img: 'https://images.unsplash.com/photo-1547005327-ef75a6961556', desc: 'Grained calfskin. Minimalist luxury. Light taupe.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Light Taupe', hex: '#b39b86' }, sizes: ['Micro'] },
  { id: 'po-16', name: 'Goyard St. Louis GM', price: 195000, img: 'https://images.unsplash.com/photo-1566150905458-1bf1fd113961', desc: 'Goyardine canvas. Reversible tote. Green.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Green', hex: '#2d5a27' }, sizes: ['GM'] },
  { id: 'po-17', name: 'Rimowa Classic Cabin', price: 115000, img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60', desc: 'Aluminum suitcase. TSA locks. Multiwheel system.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Silver', hex: '#c0c0c0' }, sizes: ['Cabin'] },
  { id: 'po-18', name: 'Tiffany T Square Ring', price: 75000, img: 'https://images.unsplash.com/photo-1515562141207-7a18b5ce7142', desc: '18K White Gold. Sleek modern design.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'White Gold', hex: '#e8e8e0' }, sizes: ['5', '6', '7', '8'] },
  { id: 'po-19', name: 'Audemars Piguet Royal Oak', price: 1250000, img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49', desc: 'Rose gold. Selfwinding. Iconic octagonal bezel.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Rose Gold', hex: '#b76e79' }, sizes: ['One Size'] },
  { id: 'po-20', name: 'Burberry Vintage Trench', price: 65000, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab', desc: 'Made in England. Heritage gabardine. Honey.', isPreOwned: true, stock: 1, maxQty: 1, color: { name: 'Honey', hex: '#c8a951' }, sizes: ['M'] }
];
// ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ

// ΓòÉΓòÉΓòÉ MAIN PRODUCT EDITOR (500 items) ΓòÉΓòÉΓòÉ
// Edit by product id below:

const categories = ['bags', 'wallets', 'belts', 'accessories', 'footwear', 'watches', 'travel', 'tech', 'office', 'lifestyle', 'gifting', 'grooming', 'apparel', 'home', 'collections'];
const catLabels = {
  bags: 'Bags', wallets: 'Wallets', belts: 'Belts', accessories: 'Accessories', footwear: 'Footwear',
  watches: 'Watches', travel: 'Travel', tech: 'Tech', office: 'Office', lifestyle: 'Lifestyle',
  gifting: 'Gifting', grooming: 'Grooming', apparel: 'Apparel', home: 'Home', collections: 'Collections'
};

const products = [];
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

// Generate 80 Active Products
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

// === MANUAL PRODUCT Information Enter ===
const overrides = [
  {
    id: 1,
    name: "AJ Vantage Executive Briefcase",
    cat: "bags",
    price: 85,
    img: "assets/products/Ashfaq.png",
    gallery: ["assets/products/Ashfaq.png", "assets/products/Ashfaq2.png", "assets/products/Jareed.jpg"],
    desc: "A masterpiece of utility and style. Handcrafted with precision, this briefcase features triple-reinforced stitching and premium full-grain leather.",
    sizes: ['Standard', 'Executive XL', 'Custom Fit'],
    colors: [
      { name: 'Midnight Black', hex: '#111111', stock: true },
      { name: 'Saddle Brown', hex: '#5d3a1a', stock: true },
      { name: 'Navy Blue', hex: '#1e3a5f', stock: true },
      { name: 'Hunter Green', hex: '#1b3022', stock: false }
    ],
    specs: {
      "Material": "Full-Grain Italian Leather",
      "Hardware": "Solid Brass",
      "Dimensions": "16\" x 12\" x 4\"",
      "Weight": "3.5 lbs",
      "Lining": "Reinforced Suede"
    },
    reviews: [
      { user: "Sarah L.", rating: 5, comment: "The quality is unmatched. Truly a lifetime piece." },
      { user: "David K.", rating: 5, comment: "Worth every rupee. The leather feels incredible." }
    ],
    shipping: "Free global express shipping via DHL. 3-5 business days.",
    additionalInfo: "Includes a custom dust bag and a lifetime warranty certificate."
  },
  {
    id: 2,
    name: "Noir Edition Leather Wallet",
    cat: "wallets",
    price: 12500,
    img: "assets/products/Ashfaq.png",
    gallery: ["assets/products/Ashfaq.png", "assets/products/Ashfaq2.png"],
    desc: "Minimalist design, maximum security. The Noir Edition is designed for the modern professional who values precision and privacy.",
    sizes: ['Slim', 'Bi-Fold', 'XL', 'Card Holder'],
    colors: [
      { name: 'Obsidian Noir', hex: '#0a0a0a', stock: true },
      { name: 'Carbon Gray', hex: '#333333', stock: true },
      { name: 'Deep Burgundy', hex: '#4a0e0e', stock: true },
      { name: 'Tan', hex: '#c8956c', stock: false }
    ],
    specs: {
      "Material": "Nappa Leather",
      "RFID Block": "Yes",
      "Dimensions": "4.1\" x 3.2\" x 0.4\"",
      "Weight": "0.15 lbs",
      "Capacity": "6-8 Cards"
    },
    reviews: [
      { user: "M. Ashfaq", rating: 5, comment: "Perfectly minimal. Exactly what I needed." }
    ],
    shipping: "Standard shipping: 2-3 business days. Express: 24 hours.",
    additionalInfo: "Packaged in a signature AJ Vantage gift box."
  },
  {
    id: 3,
    name: "AJ Vantage Classic Belt",
    cat: "belts",
    price: 8500,
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
    specs: {
      "Material": "Vegetable Tanned Leather",
      "Buckle": "Stainless Steel",
      "Width": "1.5 inches",
      "Edge": "Hand-burnished"
    },
    reviews: [
      { user: "Chris T.", rating: 5, comment: "Solid build, the leather is thick and premium." }
    ],
    shipping: "Ships in 1-2 business days.",
    additionalInfo: "Vegetable tanned leather will develop a beautiful patina over time."
  },

];

overrides.forEach(ov => {
  const p = products.find(x => x.id === ov.id);
  if (p) Object.assign(p, ov);
});

// Generate 420 Ghost Products (Coming Soon)
const ghostProducts = [];
for (let i = 81; i <= 500; i++) {
  const cat = categories[i % categories.length];
  ghostProducts.push({
    id: i,
    name: `COMING SOON!!!${i}`,
    cat: cat,
    price: 0,
    badge: "Nov 2026",
    isGhost: true,
    desc: "A visionary design currently under development in our artisan studio. Launching soon."
  });
}

// ΓòÉΓòÉΓòÉ PRODUCT COLOR EDITOR ΓòÉΓòÉΓòÉ
// Find product by id below and edit the 'color' field:
// Example: { id:'prod-042', color:'#a78bfa' }
const productColorOverrides = [
  { id: '', color: '' },
];
// ΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉΓòÉ

const allProducts = [...products, ...ghostProducts];

// Apply default colors and overrides
allProducts.forEach(p => {
  if (!p.color) p.color = '#888888';
});
productColorOverrides.forEach(ov => {
  const p = allProducts.find(x => x.id === ov.id);
  if (p && ov.color) p.color = ov.color;
});

// Combine with preOwned for search/general lookups if needed
// However, Pre-owned lives strictly in pre-owned.html
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
  let c = JSON.parse(localStorage.getItem('aj_cart') || '[]');
  // Migration for old cart array of IDs
  if (c.length > 0 && typeof c[0] === 'number') { c = []; setCart(c); }
  return c;
}
function setCart(c) { localStorage.setItem('aj_cart', JSON.stringify(c)); updateCartBadge(); }
function getWish() { return JSON.parse(localStorage.getItem('aj_wish') || '[]'); }
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
    await db.collection('users').doc(user.uid).delete();
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
  const p = globalProducts.find(x => x.id === id);
  if (p && p.isGhost) { toast('Sneak Peek Only ΓÇö Launching Nov 2026'); return; }

  const c = getCart();
  // Check if same product + size + color exists
  const existing = c.find(item => item.id === id && item.size === size && item.color === color);

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
  if (w.includes(id)) { w = w.filter(x => x !== id); setWish(w); toast('Removed from Wishlist'); }
  else { w.push(id); setWish(w); toast('Added to wishlist'); }

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

/* === Master Rendering === */
function cardHTML(p, i, wish) {
  const isGhost = p.isGhost;
  const inWish = wish.includes(p.id);
  const isPreOwned = p.isPreOwned === true;

  return `<div class="product-card reveal ${isGhost ? 'ghost-card' : ''} ${isPreOwned ? 'pre-owned-card' : ''}" 
    style="animation-delay:${(i % 12) * 50}ms; --p-color:${p.color || '#888888'}" 
    onclick="${isGhost ? 'toast(\'Coming Soon November 2026\')' : isPreOwned ? 'toast(\'Limited Edition: Only 1 Unit Available\'); goProduct(\'' + p.id + '\')' : `goProduct(${p.id})`}"
    ondblclick="event.stopPropagation(); expandImage('${p.img}')">
    
    <div class="product-img-area">
      ${isGhost ? `<div class="ghost-placeholder">${getIcon(p.cat)}</div>` : `<img src="${p.img}" alt="${p.name}" class="p-img-main">`}
      ${p.badge ? `<span class="badge-status ${isGhost ? 'coming-soon' : ''}">${p.badge}</span>` : (isPreOwned ? '<span class="badge-status" style="background:var(--grad3);color:#000;font-weight:900;">PRE-OWNED</span>' : '')}
      
      <div class="p-color-dot" title="Product Primary Color"></div>
      
      ${!isGhost ? `<button class="wishlist-btn ${inWish ? 'active' : ''}" onclick="event.stopPropagation();toggleWish(${p.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>` : ''}
    </div>
    <div class="product-info">
      <div class="product-cat">${catLabels[p.cat] || p.cat || (isPreOwned ? 'Pre-Owned' : '')}</div>
      <div class="product-name">${p.name}</div>
    </div>
    <div class="product-bot">
      <span class="product-price">${isGhost ? 'Coming Soon' : fmtLKR(p.price)}</span>
      ${!isGhost ? `<button class="add-to-cart" onclick="event.stopPropagation();addToCart(${p.id})">
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
    // Pre-owned page doesn't use standard pagination/category filtering for now
    // It shows all 20 curated pieces
    filtered = preOwnedProducts;
  } else if (cat !== 'all') {
    filtered = sourceArray.filter(p => p.cat === cat);
  } else if (isShop && cat === 'all') {
    if (page === 1) filtered = products.slice(0, 40);
    else if (page === 2) filtered = products.slice(40, 80);
    else if (page === 3) filtered = ghostProducts.slice(0, 8);
  } else if (!isShop) {
    filtered = products.slice(0, 8);
  }

  let html = '';
  if (isShop && page === 3 && cat === 'all') {
    html = `<div class="coming-soon-poster reveal" style="grid-column:1/-1; background: var(--text); border-radius: var(--radius-xl); padding: 80px 40px; text-align: center; color: #fff; margin-bottom: 40px; position:relative; overflow:hidden">
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
    </div>`;
    html += `<div style="grid-column:1/-1; margin:40px 0 20px; text-align:center;"><h3 style="font-size:24px; font-weight:700">Sneak Peek of the Future</h3></div>`;
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
              <button class="qty-btn" onclick="updateCartQty('${item.cartId}', -1)">ΓêÆ</button>
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
    location.href = hasAccount ? 'login.html' : 'signup.html';
  }
}

function renderHeaderAuth() {
  const actions = document.querySelector('.header-actions');
  const avatar = document.querySelector('.avatar');
  if (!actions) return;

  if (!isLoggedIn()) {
    if (avatar) avatar.remove();
    if (!document.querySelector('.header-auth-group')) {
      const authGroup = document.createElement('div');
      authGroup.className = 'header-auth-group';
      authGroup.style.display = 'flex';
      authGroup.style.gap = '10px';
      authGroup.innerHTML = `
        <a href="login.html" onclick="checkAccountAndGo(event)" class="btn-outline" style="padding: 10px 20px; font-size: 13px;">Sign In</a>
        <a href="signup.html" class="btn-primary" style="padding: 10px 20px; font-size: 13px;">Sign Up</a>
      `;
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if (mobileBtn) actions.insertBefore(authGroup, mobileBtn);
      else actions.appendChild(authGroup);
    }
  } else {
    if (!avatar) {
      const av = document.createElement('a');
      av.href = 'profile.html';
      av.className = 'avatar';
      av.onclick = (e) => checkAccountAndGo(e);
      av.textContent = localStorage.getItem('aj_user_email')?.charAt(0).toUpperCase() || 'A';

      const authGroup = document.querySelector('.header-auth-group');
      if (authGroup) authGroup.remove();

      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if (mobileBtn) actions.insertBefore(av, mobileBtn);
      else actions.appendChild(av);
    } else {
      avatar.onclick = (e) => checkAccountAndGo(e);
      avatar.textContent = localStorage.getItem('aj_user_email')?.charAt(0).toUpperCase() || 'A';
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Global Fail-Safe Check (Non-blocking)
  checkSiteStatus();

  // 2. IP Based Onboarding
  detectIPAndRedirect();

  // 3. Sync Firebase Auth State
  if (typeof auth !== 'undefined') {
    auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('aj_logged_in', 'true');
        localStorage.setItem('aj_user_email', user.email);
        localStorage.setItem('aj_has_account', 'true');
        // Update user activity timestamp
        db.collection('users').doc(user.uid).set({ lastSeen: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      } else {
        localStorage.removeItem('aj_logged_in');
        localStorage.removeItem('aj_user_email');
      }
      renderHeaderAuth();
    });
  }

  renderHeaderAuth();
  updateCartBadge();
  if (document.getElementById('productGrid')) renderProducts();
  if (document.getElementById('sliderTrack')) renderSlider();
  if (document.getElementById('categoryGrid')) renderHomeCategories();
  if (document.getElementById('cartItems')) renderCartItems();
  observeReveals();
});

/* === SECURITY & SYSTEM LOGIC === */

async function checkSiteStatus() {
  try {
    // Check global status in Firestore
    const statusDoc = await db.collection('system').doc('status').get();
    if (statusDoc.exists && statusDoc.data().active === false) {
      showFailSafe(statusDoc.data().message || "AJ VANTAGE is currently undergoing secure maintenance.");
    }
  } catch (e) {
    console.warn("System check offline.");
  }
}

function showFailSafe(msg) {
  let overlay = document.getElementById('aj-fail-safe');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'aj-fail-safe';
    overlay.style.cssText = 'position:fixed;inset:0;background:#000;z-index:100000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;color:#fff;';
    overlay.innerHTML = `
      <img src="assets/brand/AJ3.png" style="height:40px; margin-bottom:40px;">
      <h1 style="font-size:32px; font-weight:800; margin-bottom:20px; letter-spacing:-1px;">System Restricted</h1>
      <p style="color:var(--text-muted); max-width:500px; line-height:1.6; margin-bottom:32px;">${msg}</p>
      <div style="padding:12px 24px; border:1px solid var(--border); border-radius:var(--radius); font-family:monospace; font-size:12px; color:var(--primary);">ERROR_CODE: 0x5173_MNT</div>
    `;
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
  }
}

async function detectIPAndRedirect() {
  const onboarded = localStorage.getItem('aj_onboarded');
  const loggedIn = isLoggedIn();
  const isAuthPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('signup.html');

  if (onboarded || loggedIn || isAuthPage) return;

  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();

    if (data.country_name) {
      localStorage.setItem('aj_onboarded', 'true');
      toast(`New User detected from ${data.city || data.country_name}. Redirecting to Sign Up Page`);
      setTimeout(() => {
        if (!isLoggedIn()) location.href = 'signup.html';
      }, 2500);
    }
  } catch (e) {
    console.warn("IP Tracking Blocked");
  }
}

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
    toast("Signing out securely...");
    setTimeout(() => location.href = 'index.html', 1000);
  } catch (e) {
    location.href = 'index.html';
  }
}

/* === CHATBOT LOGIC === */
function toggleChat() {
  const w = document.getElementById('chatWindow');
  if (w) w.classList.toggle('open');
}

let chatState = { step: 'init', lastQuery: '' };

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatBody');
  const text = input.value.trim();
  if (!text) return;

  // User Message
  const uMsg = document.createElement('div');
  uMsg.className = 'chat-msg user';
  uMsg.textContent = text;
  body.appendChild(uMsg);
  input.value = '';
  body.scrollTop = body.scrollHeight;

  // Bot Logic
  setTimeout(async () => {
    const bMsg = document.createElement('div');
    bMsg.className = 'chat-msg bot';
    let reply = "";
    const t = text.toLowerCase();

    if (chatState.step === 'await_order') {
      reply = `Order ${text.toUpperCase()} is currently en route via DHL.`;
      chatState.step = 'await_feedback';
    } else if (chatState.step === 'await_feedback') {
      if (t === 'yes' || t === 'y') {
        reply = "Excellent. Let me know if you need anything else.";
      } else {
        reply = "I apologize. Please use the Direct Transmission form for further assistance.";
      }
      chatState.step = 'init';
    } else {
      if (t.includes('hi') || t.includes('hello')) {
        reply = "Welcome to AJ VANTAGE. How may I assist you?";
      } else if (t.includes('order')) {
        reply = "Please provide your Order Number.";
        chatState.step = 'await_order';
      } else if (t.includes('shipping') || t.includes('track')) {
        reply = "We ship globally via DHL Express (7-14 days).";
        chatState.step = 'await_feedback';
      } else if (t.includes('return') || t.includes('refund')) {
        reply = "Returns are accepted within 30 days of delivery.";
        chatState.step = 'await_feedback';
      } else if (t.includes('price') || t.includes('cost')) {
        reply = "All prices are listed in LKR.";
        chatState.step = 'await_feedback';
      } else if (t.includes('material') || t.includes('leather')) {
        reply = "We exclusively use full-grain leather.";
        chatState.step = 'await_feedback';
      } else if (t.includes('contact') || t.includes('support')) {
        reply = "You may use the Direct Transmission form on this page.";
        chatState.step = 'await_feedback';
      } else {
        reply = "I don't have an answer for that yet. I have forwarded your query to our team.";
        try {
          await db.collection('chatbot_unknowns').add({
            query: text,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          });
        } catch (e) { console.error(e); }
      }
    }

    bMsg.textContent = reply;
    body.appendChild(bMsg);

    if (chatState.step === 'await_feedback') {
      setTimeout(() => {
        const fMsg = document.createElement('div');
        fMsg.className = 'chat-msg bot';
        fMsg.textContent = "Did this resolve your query? (Yes / No)";
        body.appendChild(fMsg);
        body.scrollTop = body.scrollHeight;
      }, 800);
    }

    body.scrollTop = body.scrollHeight;
  }, 600);
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

/* === SEARCH LOGIC ΓÇö STRUCTURED DROPDOWN === */
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
      <div class="search-result-item" onclick="location.href='product.html?id=${p.id}'">
        <div class="search-result-img-wrap">
          <img src="${p.img}" class="search-result-img" alt="${p.name}">
        </div>
        <div class="search-result-info">
          <div class="search-result-name">${p.name}</div>
          <div class="search-result-cat">${catLabels[p.cat] || p.cat}</div>
          <div class="search-result-price">${p.isGhost ? 'Coming Soon' : fmtLKR(p.price)}</div>
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

/* === ERROR BOUNDARY === */
let _ebErrorCount = 0;
const _ebThreshold = 3; // Only show after 3+ rapid critical errors

window.addEventListener('error', (event) => {
  // Skip script loading errors, image errors, network errors
  if (!event.message) return;
  const msg = event.message || '';
  // Only count genuine runtime JS crashes
  if (msg.includes('is not defined') || msg.includes('is not a function') || msg.includes('Cannot read properties')) {
    _ebErrorCount++;
    if (_ebErrorCount >= _ebThreshold) showErrorBoundary();
  }
});

window.addEventListener('unhandledrejection', (event) => {
  const msg = event?.reason?.message || '';
  // Only trigger on Firebase auth/firestore failures that block the app
  if (msg.includes('auth/network-request-failed') || msg.includes('unavailable')) {
    _ebErrorCount++;
    if (_ebErrorCount >= _ebThreshold) showErrorBoundary();
  }
});

function showErrorBoundary() {
  if (document.getElementById('error-boundary')) return; // Only show once
  const el = document.createElement('div');
  el.id = 'error-boundary';
  el.innerHTML = `
    <div class="eb-backdrop"></div>
    <div class="eb-panel">
      <div class="eb-header" style="display:flex; justify-content:center; margin-bottom:2rem;">
        <img src="assets/brand/AJ3.png" alt="AJ Vantage" style="height:48px; width:auto; filter: drop-shadow(0 0 10px rgba(167,139,250,0.3));">
      </div>
      <div class="eb-code">SYSTEM MAINTENANCE ΓÇö 2026</div>
      <h2 class="eb-title">Premium Service Resuming Soon</h2>
      <p class="eb-msg">AJ VANTAGE is undergoing a scheduled aesthetic upgrade or server maintenance to ensure your experience remains elite. We appreciate your patience.</p>
      <div class="eb-actions">
        <button onclick="location.reload()" class="eb-btn-primary">Verify Connection</button>
        <a href="index.html" class="eb-btn-ghost">Return to Site</a>
      </div>
      <p class="eb-footer">AJ Compliance: Maintenance Protocol Active</p>
    </div>`;
  document.body.appendChild(el);
}

// Maintenance mode flag ΓÇö set window.AJV_MAINTENANCE = true in any page to force show
if (window.AJV_MAINTENANCE === true) showErrorBoundary();

/* === OFFLINE DETECTION === */
window.addEventListener('offline', () => {
  if (document.getElementById('offline-banner')) return;
  const b = document.createElement('div');
  b.id = 'offline-banner';
  b.textContent = 'YOU ARE OFFLINE ΓÇö Check your connection';
  document.body.prepend(b);
});
window.addEventListener('online', () => document.getElementById('offline-banner')?.remove());

/* === DIRECT TRANSMISSION / ENQUIRY === */
async function submitEnquiry() {
  const btn = document.getElementById('enqSubmitBtn');
  const name = document.getElementById('enqName').value.trim();
  const email = document.getElementById('enqEmail').value.trim();
  const subject = document.getElementById('enqSubject').value.trim();
  const message = document.getElementById('enqMessage').value.trim();

  if (!name || !email || !subject || !message) {
    toast('Please fill all fields.');
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
  if (sessionStorage.getItem('aj_welcomed') === '1') return;

  const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  const delay = isIndex ? 7000 : 0;

  setTimeout(() => {
    if (sessionStorage.getItem('aj_welcomed') === '1') return;
    sessionStorage.setItem('aj_welcomed', '1');

    if (document.getElementById('ajvPopup')) return;

    const popup = document.createElement('div');
    popup.id = 'ajvPopup';
    popup.style.cssText = 'position:fixed;inset:0;z-index:8000;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.75);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);opacity:0;transition:opacity .4s ease;';

    popup.innerHTML = `
      <div id="ajvPopupPanel" style="max-width:420px;width:90%;background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:2.5rem;text-align:center;transform:scale(.92);opacity:0;transition:transform .45s ease,opacity .45s ease;position:relative;">
        <button onclick="closeWelcomePopup()" style="position:absolute;top:16px;right:16px;width:32px;height:32px;border-radius:50%;background:var(--surface-dim);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-muted);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div style="width:48px;height:48px;border-radius:12px;background:var(--primary);display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
        </div>
        <div style="font-size:1.1rem;font-weight:800;letter-spacing:-.5px;margin-bottom:8px;color:var(--primary);">AJ VANTAGE</div>
        <h2 style="font-size:1.5rem;font-weight:800;margin-bottom:8px;letter-spacing:-.5px;color:var(--text);">Welcome to AJ VANTAGE</h2>
        <p style="font-size:.84rem;color:var(--text-muted);line-height:1.7;margin-bottom:1.5rem;">Sri Lanka's curated marketplace for premium pre-owned and new products.</p>
        <div id="popupAuthContent"></div>
      </div>
    `;
    document.body.appendChild(popup);

    const panel = document.getElementById('ajvPopupPanel');
    const content = document.getElementById('popupAuthContent');
    const user = typeof firebase !== 'undefined' && firebase.auth ? firebase.auth().currentUser : null;

    if (user) {
      const firstName = (user.displayName || 'Member').split(' ')[0];
      content.innerHTML = `
        <p style="font-size:.9rem;color:var(--text-muted);margin-bottom:1.2rem;">Welcome back, <strong>${firstName}</strong>! Ready to shop?</p>
        <a href="profile.html" style="display:block;width:100%;padding:14px;background:var(--primary);color:#fff;font-weight:700;font-size:14px;border-radius:var(--radius-full);text-align:center;margin-bottom:10px;text-decoration:none;transition:transform .2s;">Go to Dashboard ΓåÆ</a>
        <button onclick="closeWelcomePopup()" style="width:100%;padding:14px;border-radius:var(--radius-full);border:1.5px solid var(--border);font-size:14px;font-weight:700;cursor:pointer;background:none;font-family:var(--font);color:var(--text);">Continue Shopping ΓåÆ</button>`;
    } else {
      content.innerHTML = `
        <p style="font-size:.84rem;color:var(--text-muted);margin-bottom:1.2rem;line-height:1.7;">Create a free account to place orders and save your wishlist.</p>
        <a href="signup.html" style="display:block;width:100%;padding:14px;background:var(--primary);color:#fff;font-weight:700;font-size:14px;border-radius:var(--radius-full);text-align:center;margin-bottom:10px;text-decoration:none;">Create Account</a>
        <a href="login.html" style="display:block;width:100%;padding:14px;border-radius:var(--radius-full);border:1.5px solid var(--border);font-size:14px;font-weight:700;text-align:center;color:var(--text);text-decoration:none;margin-bottom:16px;">Log In</a>
        <p style="font-size:.75rem;color:var(--text-light);">Just browsing? <a href="#" onclick="closeWelcomePopup();return false" style="color:var(--primary);font-weight:700;text-decoration:none;">Continue as guest ΓåÆ</a></p>`;
    }

    requestAnimationFrame(() => {
      popup.style.opacity = '1';
      panel.style.transform = 'scale(1)';
      panel.style.opacity = '1';
    });

    const dismissHandler = (e) => {
      if (e.target.id === 'ajvPopup') closeWelcomePopup();
    };
    popup.addEventListener('click', dismissHandler);

    const closeOnScrollOrClick = (e) => {
      if (!popup.contains(e.target) && e.target.id !== 'ajvPopup') {
        closeWelcomePopup();
      }
    };
    window.addEventListener('scroll', closeWelcomePopup, { once: true, passive: true });

  }, delay);
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

document.addEventListener('DOMContentLoaded', () => {
  if (typeof firebase !== 'undefined' && firebase.auth) {
    firebase.auth().onAuthStateChanged(() => {
      injectWelcomePopup();
    });
  } else {
    injectWelcomePopup();
  }
});

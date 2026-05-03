/* === AJ VANTAGE — 500+ Product Catalog Master Logic === */

const categories = ['bags','wallets','belts','accessories','footwear','watches','travel','tech','office','lifestyle','gifting','grooming','apparel','home','collections'];
const catLabels = {
  bags:'Bags', wallets:'Wallets', belts:'Belts', accessories:'Accessories', footwear:'Footwear', 
  watches:'Watches', travel:'Travel', tech:'Tech', office:'Office', lifestyle:'Lifestyle', 
  gifting:'Gifting', grooming:'Grooming', apparel:'Apparel', home:'Home', collections:'Collections'
};

const products = [];
const baseImages = {
  bags: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa",
  wallets: "https://images.unsplash.com/photo-1627123424574-724758594e93",
  belts: "https://images.unsplash.com/photo-1624222247344-550fb8ecf7c4",
  accessories: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  footwear: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  watches: "https://images.unsplash.com/photo-1524592093825-d3450917036d",
  travel: "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  tech: "https://images.unsplash.com/photo-1526733158272-60b4944e8744",
  office: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
  lifestyle: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  gifting: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
  grooming: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
  apparel: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  home: "https://images.unsplash.com/photo-1484101403033-5710672163cd",
  collections: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
};

// Generate 80 Active Products
for(let i=1; i<=80; i++) {
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

// Generate 420 Ghost Products (Coming Soon)
const ghostProducts = [];
for(let i=81; i<=500; i++) {
  const cat = categories[i % categories.length];
  ghostProducts.push({
    id: i,
    name: `Artisan Concept #${i}`,
    cat: cat,
    price: 0,
    badge: "Nov 2024",
    isGhost: true,
    desc: "A visionary design currently under development in our artisan studio. Launching soon."
  });
}

const allProducts = [...products, ...ghostProducts];

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

function getIcon(cat){ return catIcons[cat] || catIcons.bags; }
function fmtLKR(v){ return 'Rs. ' + Math.round(v).toLocaleString(); }

/* === State === */
function getCart(){ 
  let c = JSON.parse(localStorage.getItem('aj_cart')||'[]'); 
  // Migration for old cart array of IDs
  if(c.length > 0 && typeof c[0] === 'number') { c = []; setCart(c); }
  return c;
}
function setCart(c){ localStorage.setItem('aj_cart',JSON.stringify(c)); updateCartBadge(); }
function getWish(){ return JSON.parse(localStorage.getItem('aj_wish')||'[]'); }
function setWish(w){ localStorage.setItem('aj_wish',JSON.stringify(w)); }

function updateCartBadge(){
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
  if(!floatCart) {
    floatCart = document.createElement('div');
    floatCart.id = 'aj-float-cart';
    floatCart.style.cssText = 'position:fixed;top:50%;right:20px;transform:translateY(-50%);background:var(--primary);color:#000;border-radius:30px;padding:12px 20px;font-weight:800;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,0.5);display:none;flex-direction:column;align-items:center;gap:4px;z-index:9999;transition:all 0.3s ease;';
    floatCart.onclick = () => location.href = 'cart.html';
    floatCart.onmouseenter = () => floatCart.style.transform = 'translateY(-50%) scale(1.05)';
    floatCart.onmouseleave = () => floatCart.style.transform = 'translateY(-50%) scale(1)';
    document.body.appendChild(floatCart);
  }
  
  if(c.length === 0) {
    floatCart.style.display = 'none';
    return;
  }
  
  let subtotal = 0;
  let count = 0;
  c.forEach(item => {
    const p = allProducts.find(x => x.id === item.id);
    if(p) {
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

function toast(msg){
  const t = document.getElementById('toast');
  if(!t) return;
  const msgEl = document.getElementById('toastMsg');
  if(msgEl) msgEl.textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=> t.classList.remove('show'), 2400);
}

function toggleFaq(btn){
  const item = btn.parentElement;
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  if(!isActive) item.classList.add('active');
}

function isLoggedIn(){ return localStorage.getItem('aj_logged_in') === 'true'; }

function deleteAccount(){
  if(confirm("Are you sure you want to delete your AJ VANTAGE account? This action cannot be undone.")) {
    localStorage.removeItem('aj_logged_in');
    localStorage.removeItem('aj_user_email');
    localStorage.removeItem('aj_cart');
    localStorage.removeItem('aj_wish');
    toast("Account permanently deleted");
    setTimeout(() => location.href = 'signup.html', 1500);
  }
}

function addToCart(id, qty = 1, size = 'Default', color = 'Default'){
  if(!isLoggedIn()){
    toast('Membership Required — Redirecting to Login');
    setTimeout(() => location.href = 'login.html', 1500);
    return;
  }
  const p = allProducts.find(x => x.id === id);
  if(p && p.isGhost) { toast('Sneak Peak Only — Launching Nov'); return; }
  const c = getCart();
  // Check if same product + size + color exists
  const existing = c.find(item => item.id === id && item.size === size && item.color === color);
  if(existing) {
    existing.qty += qty;
    toast('Cart updated');
  } else {
    c.push({ id, qty, size, color, cartId: Date.now() + Math.random() });
    toast('Added to cart');
  }
  setCart(c);
}

function toggleWish(id){
  if(!isLoggedIn()){
    toast('Membership Required — Please Log In');
    setTimeout(() => location.href = 'login.html', 1500);
    return;
  }
  let w = getWish();
  if(w.includes(id)){ w = w.filter(x=>x!==id); setWish(w); toast('Removed from wishlist'); }
  else { w.push(id); setWish(w); toast('Added to wishlist'); }
  
  // Re-render UI to update heart color
  if(window.location.pathname.includes('wishlist.html') && typeof renderWishlist === 'function') renderWishlist();
  else if(typeof renderProducts === 'function') renderProducts();
}

function goProduct(id){ location.href = `product.html?id=${id}`; }

function filterCat(cat){
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
function cardHTML(p, i, wish){
  const isGhost = p.isGhost;
  const inWish = wish.includes(p.id);
  return `<div class="product-card reveal ${isGhost?'ghost-card':''}" style="animation-delay:${(i%12)*50}ms" onclick="${isGhost?'toast(\'Coming Soon November 2024\')':`goProduct(${p.id})`}">
    <div class="product-img-area">
      ${isGhost ? `<div class="ghost-placeholder">${getIcon(p.cat)}</div>` : `<img src="${p.img}" alt="${p.name}" class="p-img-main">`}
      ${p.badge ? `<span class="badge-status ${isGhost?'coming-soon':''}">${p.badge}</span>` : ''}
      ${!isGhost ? `<button class="wishlist-btn ${inWish?'active':''}" onclick="event.stopPropagation();toggleWish(${p.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>` : ''}
    </div>
    <div class="product-info">
      <div class="product-cat">${catLabels[p.cat]||p.cat}</div>
      <div class="product-name">${p.name}</div>
    </div>
    <div class="product-bot">
      <span class="product-price">${isGhost?'Coming Soon':fmtLKR(p.price)}</span>
      ${!isGhost ? `<button class="add-to-cart" onclick="event.stopPropagation();addToCart(${p.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </button>` : ''}
    </div>
  </div>`;
}

function renderProducts(){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  const wish = getWish();
  const urlParams = new URLSearchParams(window.location.search);
  const page = parseInt(urlParams.get('page') || '1');
  const cat = urlParams.get('cat') || 'all';
  const isShop = window.location.pathname.includes('shop.html');

  let filtered = allProducts;
  if(cat !== 'all') {
    filtered = products.filter(p => p.cat === cat);
    // If no active products in this cat, maybe show ghost? 
    // For now, just filter active ones.
  }

  if(isShop && cat === 'all'){
    if(page === 1) filtered = products.slice(0, 40);
    else if(page === 2) filtered = products.slice(40, 80);
    else if(page === 3) filtered = ghostProducts.slice(0, 8); // Sneak peak
  } else if (isShop && cat !== 'all') {
    // Basic pagination for category filtering
    const perPage = 40;
    filtered = filtered.slice((page-1)*perPage, page*perPage);
  } else if (!isShop) {
    // For Home page "Recent Drops"
    filtered = products.slice(0, 8);
  }

  let html = '';
  if(isShop && page === 3 && cat === 'all'){
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
    html += `<div style="grid-column:1/-1; margin:40px 0 20px; text-align:center;"><h3 style="font-size:24px; font-weight:700">Sneak Peak of the Future</h3></div>`;
    html += filtered.map((p,i) => cardHTML(p,i,wish)).join('');
  } else {
    html = filtered.map((p,i) => cardHTML(p,i,wish)).join('');
  }

  grid.innerHTML = html || '<div class="empty-state">No products found</div>';
  renderPagination(page, isShop && cat === 'all');
  setTimeout(observeReveals, 50);
}

function renderPagination(current, show){
  const wrap = document.getElementById('pagination');
  if(!wrap) return;
  if(!show) { wrap.innerHTML = ''; return; }
  
  let html = `
    <a href="?page=${Math.max(1, current-1)}" class="page-btn ${current===1?'disabled':''}" onclick="if(${current===1})return false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
    </a>
    <a href="?page=1" class="page-btn ${current===1?'active':''}">1</a>
    <a href="?page=2" class="page-btn ${current===2?'active':''}">2</a>
    <a href="?page=3" class="page-btn ${current===3?'active':''}">3</a>
    <a href="?page=${Math.min(3, current+1)}" class="page-btn ${current===3?'disabled':''}" onclick="if(${current===3})return false">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
    </a>
  `;
  wrap.innerHTML = html;
}

function renderCartItems(){
  const container = document.getElementById('cartItems');
  if(!container) return;
  const cart = getCart();
  const empty = document.getElementById('emptyCart');
  const layout = document.querySelector('.cart-layout');
  const sub = document.getElementById('cartSub');

  if(!cart.length){
    if(layout) layout.style.display = 'none';
    if(empty) empty.style.display = 'flex';
    if(sub) sub.style.display = 'none';
    return;
  }

  if(layout) layout.style.display = 'grid';
  if(empty) empty.style.display = 'none';
  if(sub) sub.style.display = 'block';

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const p = allProducts.find(x => x.id === item.id);
    if(!p) return '';
    const itemTotal = p.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-card reveal">
        <div class="cart-img">
          <img src="${p.img}" alt="${p.name}">
        </div>
        <div style="flex:1">
          <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${catLabels[p.cat]}</div>
          <div style="font-size:18px; font-weight:800; margin-bottom:4px;">${p.name}</div>
          <div style="font-size:13px; color:var(--text-light); margin-bottom:8px;">${item.color !== 'Default' ? item.color + ' / ' : ''}${item.size !== 'Default' ? 'Size ' + item.size : ''}</div>
          <div style="font-size:16px; font-weight:700; color:var(--primary);">${item.qty} × ${fmtLKR(p.price)}</div>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart('${item.cartId}')">
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

  if(subEl) subEl.textContent = fmtLKR(subtotal);
  if(taxEl) taxEl.textContent = fmtLKR(tax);
  if(totalEl) totalEl.textContent = fmtLKR(total);
  
  setTimeout(observeReveals, 50);
}

function removeFromCart(cartId){
  let c = getCart();
  c = c.filter(item => item.cartId != cartId);
  setCart(c);
  renderCartItems();
  toast('Item removed from cart');
}

function renderSlider(){
  const track = document.getElementById('sliderTrack');
  if(!track) return;
  const wish = getWish();
  const featured = products.slice(-9).reverse();
  track.innerHTML = featured.map((p,i)=> cardHTML(p,i,wish)).join('');
  setTimeout(observeReveals, 50);
}

function renderHomeCategories(){
  const grid = document.getElementById('categoryGrid');
  if(!grid) return;
  const isIndex = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
  const catsToRender = isIndex ? categories.slice(0, 6) : categories;
  grid.innerHTML = catsToRender.map(cat => `
    <div class="category-card reveal" onclick="location.href='shop.html?cat=${cat}'">
      <div class="cat-icon-wrap">${getIcon(cat)}</div>
      <span class="cat-card-name">${catLabels[cat]}</span>
    </div>
  `).join('');
}

function observeReveals(){
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  },{ threshold:0.05 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

window.addEventListener('scroll',()=>{
  const h = document.getElementById('header');
  if(h) h.classList.toggle('scrolled', window.scrollY > 40);
},{passive:true});

function renderHeaderAuth() {
  const actions = document.querySelector('.header-actions');
  const avatar = document.querySelector('.avatar');
  if(!actions) return;
  
  if(!isLoggedIn()) {
    if(avatar) avatar.remove();
    if(!document.querySelector('.header-auth-group')) {
      const authGroup = document.createElement('div');
      authGroup.className = 'header-auth-group';
      authGroup.style.display = 'flex';
      authGroup.style.gap = '10px';
      authGroup.innerHTML = `
        <a href="login.html" class="btn-outline" style="padding: 10px 20px; font-size: 13px;">Sign In</a>
        <a href="signup.html" class="btn-primary" style="padding: 10px 20px; font-size: 13px;">Sign Up</a>
      `;
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if(mobileBtn) actions.insertBefore(authGroup, mobileBtn);
      else actions.appendChild(authGroup);
    }
  } else {
    if(!avatar) {
      const av = document.createElement('a');
      av.href = 'profile.html';
      av.className = 'avatar';
      av.textContent = localStorage.getItem('aj_user_email')?.charAt(0).toUpperCase() || 'A';
      
      const authGroup = document.querySelector('.header-auth-group');
      if(authGroup) authGroup.remove();
      
      const mobileBtn = document.querySelector('.mobile-menu-btn');
      if(mobileBtn) actions.insertBefore(av, mobileBtn);
      else actions.appendChild(av);
    } else {
      avatar.textContent = localStorage.getItem('aj_user_email')?.charAt(0).toUpperCase() || 'A';
    }
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  renderHeaderAuth();
  updateCartBadge();
  if(document.getElementById('productGrid')) renderProducts();
  if(document.getElementById('sliderTrack')) renderSlider();
  if(document.getElementById('categoryGrid')) renderHomeCategories();
  if(document.getElementById('cartItems')) renderCartItems();
  observeReveals();
});

/* === CHATBOT LOGIC === */
function toggleChat() {
  const w = document.getElementById('chatWindow');
  if(w) w.classList.toggle('open');
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const body = document.getElementById('chatBody');
  const text = input.value.trim();
  if(!text) return;
  
  // User Message
  const uMsg = document.createElement('div');
  uMsg.className = 'chat-msg user';
  uMsg.textContent = text;
  body.appendChild(uMsg);
  input.value = '';
  body.scrollTop = body.scrollHeight;

  // Bot Logic (No Emotions, Logic Only)
  setTimeout(() => {
    const bMsg = document.createElement('div');
    bMsg.className = 'chat-msg bot';
    let reply = "I understand. Our collections are crafted for maximum utility and durability.";
    const t = text.toLowerCase();
    
    if(t.includes('shipping') || t.includes('track')) reply = "We ship globally via DHL Express (7-14 days). You can track your order in the Profile section.";
    else if(t.includes('return') || t.includes('refund')) reply = "Returns are accepted within 30 days of delivery, provided the item is unused and in original packaging.";
    else if(t.includes('price') || t.includes('cost')) reply = "All prices are listed in LKR. Our pricing reflects the premium materials and artisanal labor invested.";
    else if(t.includes('material') || t.includes('leather')) reply = "We exclusively use full-grain leather, sourced ethically and treated for longevity.";
    else if(t.includes('contact') || t.includes('support')) reply = "You may use the Direct Transmission form on this page or email m.ashfaqjareed@gmail.com.";
    
    bMsg.textContent = reply;
    body.appendChild(bMsg);
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

function filterSearch(query) {
  const q = query.toLowerCase();
  const grid = document.getElementById('productGrid');
  const count = document.getElementById('resultCount');
  if(!grid) return;

  const filtered = allProducts.filter(p => 
    fuzzyMatch(p.name.toLowerCase(), q) || 
    (p.cat && fuzzyMatch(p.cat.toLowerCase(), q)) ||
    (catLabels[p.cat] && fuzzyMatch(catLabels[p.cat].toLowerCase(), q))
  );
  
  if(filtered.length === 0){
    grid.innerHTML = '<div style="grid-column:1/-1;padding:100px 0;text-align:center;color:var(--text-light);font-weight:700;">No products found matching your search.</div>';
    renderPagination(1, false);
  } else {
    const wish = getWish();
    grid.innerHTML = filtered.map((p,i) => cardHTML(p,i,wish)).join('');
    renderPagination(1, false); 
  }
  if(count) count.textContent = `Showing ${filtered.length} products`;
}

document.getElementById('searchInput')?.addEventListener('input', (e) => filterSearch(e.target.value));

/* === MOBILE MENU === */
function toggleMobileMenu() {
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('navOverlay');
  if(nav && overlay) {
    nav.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
  }
}

document.getElementById('navOverlay')?.addEventListener('click', toggleMobileMenu);

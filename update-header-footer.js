const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && !f.includes('login') && !f.includes('signup'));

const desktopNavTemplate = (active) => `    <nav class="desktop-nav">
      <a href="index.html"${active === 'index' ? ' class="active"' : ''}>Home</a>
      <a href="shop.html"${active === 'shop' || active === 'product' ? ' class="active"' : ''}>Shop</a>
      <a href="collections.html"${active === 'collections' ? ' class="active"' : ''}>Collections</a>
      <a href="support.html"${active === 'support' || active === 'contact' ? ' class="active"' : ''}>Support</a>
    </nav>`;

const mobileNavTemplate = (active) => `  <nav class="mobile-nav" id="mobileNav">
    <a href="index.html"${active === 'index' ? ' class="active"' : ''}>Home</a>
    <a href="shop.html"${active === 'shop' || active === 'product' ? ' class="active"' : ''}>Shop</a>
    <a href="collections.html"${active === 'collections' ? ' class="active"' : ''}>Collections</a>
    <a href="support.html"${active === 'support' || active === 'contact' ? ' class="active"' : ''}>Support</a>
  </nav>`;

const footerTemplate = `  <footer>
    <div class="f-grid">
      <div class="f-about">
        <div class="logo"><img src="assets/brand/AJ2.png" alt="AJ Vantage Logo" class="site-logo"></div>
        <p>Premium leather goods crafted with passion since 2026. Our collection consists of 80% new and 20% selectively curated pre-owned pieces available across our Website, WhatsApp Catalog, and Facebook Marketplace.</p>
      </div>
      <div class="f-col">
        <h4>Shopping</h4>
        <a href="shop.html">Shop</a>
        <a href="collections.html">Collections</a>
        <a href="shop.html?new=true">New Collections</a>
        <a href="shop.html">Products</a>
      </div>
      <div class="f-col">
        <h4>Support</h4>
        <a href="support.html">FAQ</a>
        <a href="support.html">Help Center</a>
        <a href="payment.html">Payment Methods</a>
      </div>
      <div class="f-col">
        <h4>Legal</h4>
        <a href="about.html">About Us</a>
        <a href="legal.html#privacy">Privacy Policy</a>
        <a href="legal.html#terms">Terms of Service</a>
        <a href="legal.html#shipping">Shipping Policy</a>
      </div>
    </div>
    <div class="f-bottom"><span>© 2026 AJ Vantage. All rights reserved.</span><span class="sri-tag">CRAFTED IN SRI LANKA 🇱🇰</span></div>
  </footer>`;

files.forEach(file => {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');
  let active = file.replace('.html', '');
  
  // Replace desktop nav
  content = content.replace(/<nav class="desktop-nav">[\s\S]*?<\/nav>/, desktopNavTemplate(active));
  
  // Replace mobile nav
  content = content.replace(/<nav class="mobile-nav" id="mobileNav">[\s\S]*?<\/nav>/, mobileNavTemplate(active));
  
  // Replace footer
  content = content.replace(/<footer[\s\S]*?<\/footer>/, footerTemplate);
  
  // GLOBAL ASSET PATH CORRECTIONS
  content = content.replace(/src=["']AJ2\.png["']/g, 'src="assets/brand/AJ2.png"');
  content = content.replace(/href=["']AJ\.png["']/g, 'href="assets/brand/AJ.png"');
  content = content.replace(/src=["']AJ\.png["']/g, 'src="assets/brand/AJ.png"');
  content = content.replace(/src=["']Ashfaq\.png["']/g, 'src="assets/products/Ashfaq.png"');
  content = content.replace(/src=["']Ashfaq2\.png["']/g, 'src="assets/products/Ashfaq2.png"');
  content = content.replace(/src=["']Jareed\.jpg["']/g, 'src="assets/products/Jareed.jpg"');
  content = content.replace(/src=["']Jareed2\.png["']/g, 'src="assets/products/Jareed2.png"');

  fs.writeFileSync(path.join(dir, file), content);
});

console.log('Headers and Footers updated in ' + files.length + ' files.');

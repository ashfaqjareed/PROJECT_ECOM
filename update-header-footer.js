const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const headerTopBar = `
  <div id="ajv-top-banner" style="background: #ff6d2e; padding: 14px 0; position: relative; z-index: 1100; overflow: hidden; box-shadow: 0 4px 20px rgba(255,109,46,0.4); border-bottom: 1px solid rgba(255,255,255,0.1);">
    <div style="position: absolute; inset: 0; opacity: 0.2; background-image: url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E&quot;); pointer-events: none;"></div>
    <div class="banner-track">
      <div class="banner-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
        <span class="banner-text">WELCOME TO AJ VANTAGE — LAUNCHING ON JULY 1ST</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
      </div>
      <div class="banner-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
        <span class="banner-text">CRAFTED FOR THE MODERN CONNOISSEUR — WORLDWIDE SHIPPING</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
      </div>
      <div class="banner-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
        <span class="banner-text">WELCOME TO AJ VANTAGE — LAUNCHING ON JULY 1ST</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
      </div>
      <div class="banner-item">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
        <span class="banner-text">CRAFTED FOR THE MODERN CONNOISSEUR — WORLDWIDE SHIPPING</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v9c0 5 8 10 9 10 1 0 9-5 9-10V7l-9-5z"/></svg>
      </div>
    </div>
  </div>
`;

// This script is now deactivated to prevent duplicate injections. 
// Use it only for global design updates if needed, but carefully.
console.log('Automated header/footer injection deactivated to prevent duplication. Manual cleanup performed.');

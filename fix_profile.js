const fs = require('fs');

let html = fs.readFileSync('profile.html', 'utf-8');

// Update CSS
const css_old = ".profile-container { max-width:1400px; margin:140px auto 80px; padding:0 40px; display:grid; grid-template-columns:320px 1fr; gap:32px; align-items:start; }";
const css_new = `    .profile-container {
      max-width: 1100px;
      width: 95%;
      margin: 140px auto 80px;
      padding: 0;
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 2rem;
      align-items: start;
    }
    .profile-sidebar {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 28px;
      padding: 36px;
      position: sticky;
      top: 130px;
      text-align: center;
      box-shadow: var(--shadow-lg);
    }
    .btn-delete-account {
      background: transparent;
      border: 1px solid #ef4444;
      color: #ef4444;
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.8rem;
      transition: all 0.2s;
      width: 100%;
    }
    .btn-delete-account:hover {
      background: #ef4444;
      color: white;
    }
    .right-tab {
      background: none; border: none; padding: 0.8rem 1.5rem; font-size: 0.95rem; font-weight: 700; color: var(--text-muted); cursor: pointer; border-bottom: 2px solid transparent; transition: 0.2s;
    }
    .right-tab:hover { color: var(--text); }
    .right-tab.active { color: var(--primary); border-bottom-color: var(--primary); }
`;
html = html.replace(css_old, css_new);

// Remove old profile-sidebar class definition from <style> to prevent conflicts
html = html.replace(/\.profile-sidebar\s*\{[^}]*\}/, "");

// Replace Sidebar
const sidebar_start = html.indexOf('<aside class="profile-sidebar">');
const sidebar_end = html.indexOf('</aside>', sidebar_start) + '</aside>'.length;

const new_sidebar = `<aside class="profile-sidebar">
      <div class="avatar-ring" onclick="document.getElementById('dpFileInput').click()" title="Click to change profile photo">
        <div class="avatar-inner" id="userInitial">V</div>
      </div>
      <h2 class="user-name" id="userNameDisplay" style="margin-bottom:0;">Loading...</h2>
      <p class="user-email" id="userEmailDisplay" style="margin-bottom:0;">—</p>
      
      <button class="btn-action" onclick="switchTab('settings', document.querySelector('.right-tab[data-tab=\\'settings\\']'))" style="padding: 0.6rem 1.2rem; font-size: 0.8rem; border-radius: 8px; margin-top: 0.5rem; width: 100%;">Edit Profile</button>
      
      <hr style="border: 0; border-top: 1px solid var(--border); width: 100%; margin: 1rem 0;">

      <button onclick="handleSignOut()" style="background: transparent; border: 1px solid var(--border); color: var(--text); padding: 0.6rem 1.2rem; border-radius: 8px; cursor: pointer; font-size: 0.8rem; transition: all 0.2s; width: 100%;">Sign Out</button>
      <button class="btn-delete-account" onclick="handleDeleteAccount()">Delete Account</button>
    </aside>`;

html = html.substring(0, sidebar_start) + new_sidebar + html.substring(sidebar_end);

// Replace Main Content Top with Tabs
const main_start = html.indexOf('<main class="profile-main">') + '<main class="profile-main">'.length;
const new_tabs = `
      <!-- RIGHT TABS HEADER -->
      <div style="display: flex; gap: 1rem; border-bottom: 1px solid var(--border); margin-bottom: 2rem; overflow-x: auto;">
        <button class="right-tab active" data-tab="orders" onclick="switchTab('orders', this)">Orders</button>
        <button class="right-tab" onclick="location.href='wishlist.html'">Wishlist</button>
        <button class="right-tab" data-tab="payments" onclick="switchTab('payments', this)">Payment Methods</button>
        <button class="right-tab" data-tab="settings" onclick="switchTab('settings', this)">Settings</button>
      </div>
`;
html = html.substring(0, main_start) + new_tabs + html.substring(main_start);

// Modify Details Section
html = html.replace('id="detailsSection" class="profile-section active"', 'id="settingsSection" class="profile-section"');

// Hide Danger zone and payment preference from Settings tab since it was moved
const danger_zone_rx = /<!-- Payment Preference -->.*?<\/div>\s*<!-- Danger zone -->.*?<\/div>/s;
html = html.replace(danger_zone_rx, '');

// Modify Orders Section
html = html.replace('id="ordersSection" class="profile-section"', 'id="ordersSection" class="profile-section active"');

// Add Payments Section
const payments_section = `
      <!-- ── PAYMENTS SECTION ── -->
      <div id="paymentsSection" class="profile-section">
        <h1 style="font-size:30px;font-weight:900;margin-bottom:8px;letter-spacing:-1px;">Payment Methods</h1>
        <p style="color:var(--text-muted);font-size:13px;margin-bottom:32px;">Manage your saved payment methods and payout preferences.</p>
        
        <div style="margin-bottom: 40px;">
          <h3 style="font-size:14px;font-weight:800;margin-bottom:12px;">Saved Methods</h3>
          <div style="padding: 30px; border: 1px dashed var(--border); border-radius: 12px; text-align: center; color: var(--text-muted); font-size: 13px; margin-bottom: 16px;">
            No payment methods saved yet.
          </div>
          <button class="btn-outline" style="width: 100%; border: 1px solid var(--primary); color: var(--primary); padding: 12px; border-radius: 8px; font-weight: 700; cursor: pointer; background: transparent;">[+] Add payment method</button>
        </div>

        <div style="padding:28px;background:var(--surface-dim);border-radius:20px;border:1px solid var(--border);">
          <h3 style="font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px;color:var(--primary);">Preferred Payment Options</h3>
          <p style="font-size: 14px; line-height: 1.6; font-weight: 600;">
            We accept Bank Transfer, FriMi, and LankaPay QR.<br>
            For international orders: PayPal — <a href="https://paypal.me/AJVantage" target="_blank" style="color: var(--primary); text-decoration: none;">paypal.me/AJVantage</a>
          </p>
        </div>
      </div>
`;
const sec_start = html.indexOf('<!-- ── SECURITY SECTION ── -->');
html = html.substring(0, sec_start) + payments_section + html.substring(sec_start);

// Update JS switchTab function
html = html.replace("const map = { details: 'detailsSection', orders: 'ordersSection', security: 'securitySection' };", "const map = { settings: 'settingsSection', orders: 'ordersSection', payments: 'paymentsSection', security: 'securitySection' };");
html = html.replace("document.querySelectorAll('.s-nav-link').forEach(l => l.classList.remove('active'));", "document.querySelectorAll('.right-tab').forEach(l => l.classList.remove('active'));");

fs.writeFileSync('profile.html', html, 'utf-8');
console.log('Updated profile.html successfully!');

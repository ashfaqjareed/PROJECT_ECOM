const fs = require('fs');
const path = require('path');

const targetDir = __dirname;
const files = fs.readdirSync(targetDir).filter(f => f.endsWith('.html'));

const replacement = `<a href="login.html" id="nav-signin" style="font-size:14px;font-weight:700;text-decoration:none;color:var(--text);display:none;">Sign In</a>
      <a href="signup.html" id="nav-signup" class="btn-primary" style="padding:6px 14px;font-size:12px;border-radius:20px;display:none;">Sign Up</a>
      <a href="profile.html" id="nav-profile" class="avatar hidden" style="display:none;">A</a>`;

for (const file of files) {
    const filePath = path.join(targetDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('<a href="profile.html" class="avatar">A</a>')) {
        content = content.replace('<a href="profile.html" class="avatar">A</a>', replacement);
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${file}`);
    }
}

const cssPath = path.join(targetDir, 'styles.css');
fs.appendFileSync(cssPath, '\n.hidden { display: none !important; }\n');

const appJsPath = path.join(targetDir, 'app.js');
fs.appendFileSync(appJsPath, `\n
// === AUTH STATE LISTENER (NAVBAR) ===
if (typeof auth !== 'undefined') {
  auth.onAuthStateChanged((user) => {
    const signInBtn = document.getElementById('nav-signin');
    const signUpBtn = document.getElementById('nav-signup');
    const profileBtn = document.getElementById('nav-profile');
    
    if (user) {
      if (signInBtn) signInBtn.classList.add('hidden');
      if (signUpBtn) signUpBtn.classList.add('hidden');
      if (profileBtn) {
        profileBtn.classList.remove('hidden');
        profileBtn.style.display = 'flex'; // override inline none
        // Display initial or name
        if (user.displayName) {
          profileBtn.textContent = user.displayName.charAt(0).toUpperCase();
        } else {
          profileBtn.textContent = 'U';
        }
      }
    } else {
      if (signInBtn) { signInBtn.classList.remove('hidden'); signInBtn.style.display = 'block'; }
      if (signUpBtn) { signUpBtn.classList.remove('hidden'); signUpBtn.style.display = 'block'; }
      if (profileBtn) profileBtn.classList.add('hidden');
    }
  });
}
`);
console.log('Done updating styles.css and app.js');

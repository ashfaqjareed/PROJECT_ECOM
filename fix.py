import os, glob, re

target_dir = r'c:\Users\Ashfaq Jareed\Downloads\ANTIGRAVITY\PROJECT_ECOM'
html_files = glob.glob(os.path.join(target_dir, '*.html'))

replacement = '''<a href="login.html" id="nav-signin" style="font-size:14px;font-weight:700;text-decoration:none;color:var(--text);display:none;">Sign In</a>
      <a href="signup.html" id="nav-signup" class="btn-primary" style="padding:6px 14px;font-size:12px;border-radius:20px;display:none;">Sign Up</a>
      <a href="profile.html" id="nav-profile" class="avatar hidden" style="display:none;">A</a>'''

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    if '<a href="profile.html" class="avatar">A</a>' in content:
        content = content.replace('<a href="profile.html" class="avatar">A</a>', replacement)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated {os.path.basename(f)}')

# Append .hidden to styles.css
css_path = os.path.join(target_dir, 'styles.css')
with open(css_path, 'a', encoding='utf-8') as f:
    f.write('\n.hidden { display: none !important; }\n')

# Append auth state change to app.js
app_js_path = os.path.join(target_dir, 'app.js')
with open(app_js_path, 'a', encoding='utf-8') as f:
    f.write('''\n
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
''')
print('Done updating styles.css and app.js')

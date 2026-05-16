const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We are looking for: <a href="legal.html#shipping">Shipping Policy</a>
  // We'll append <a href="security.html">Security Suite</a> right below it.
  
  if (content.includes('href="legal.html#shipping"')) {
    if (!content.includes('href="security.html"')) {
      content = content.replace(
        '<a href="legal.html#shipping">Shipping Policy</a>',
        '<a href="legal.html#shipping">Shipping Policy</a>\n        <a href="security.html">Security Suite</a>'
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
console.log('Done.');

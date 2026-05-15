const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const indexHtml = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const headerMatch = indexHtml.match(/<header class="header" id="header">([\s\S]*?)<\/header>/);

if (!headerMatch) {
  console.error("Could not find header in index.html");
  process.exit(1);
}

const headerContent = headerMatch[0];

files.forEach(file => {
  if (file === 'index.html') return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace existing header or top nav with the new header
  const newContent = content.replace(/<header class="header" id="header"[\s\S]*?<\/header>/, headerContent);

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated header in ${file}`);
  } else {
    // maybe it doesn't have the exact header tag, let's try broader replacement
    const newContent2 = content.replace(/<header[\s\S]*?<\/header>/, headerContent);
    if (content !== newContent2) {
      fs.writeFileSync(filePath, newContent2);
      console.log(`Updated header in ${file}`);
    }
  }
});

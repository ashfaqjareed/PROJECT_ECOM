const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if(!content.includes('<link rel="icon"')) {
    content = content.replace('<head>', '<head>\n  <link rel="icon" type="image/png" href="logo.png">');
  }
  content = content.replace(/<span class=\"logo-aj\">AJ<\/span><span class=\"logo-vantage\">VANTAGE<\/span>/gi, '<img src=\"logo.png\" alt=\"AJ Vantage Logo\" class=\"site-logo\">');
  content = content.replace(/<span class=\"logo-aj\">AJ<\/span><span class=\"logo-vantage\">Vantage<\/span>/gi, '<img src=\"logo.png\" alt=\"AJ Vantage Logo\" class=\"site-logo\">');
  content = content.replace(/<span class=\"logo-aj\">AJ<\/span><span class=\"logo-vantage\">Vantage<\/span>/gi, '<img src=\"logo.png\" alt=\"AJ Vantage Logo\" class=\"site-logo\">');
  
  fs.writeFileSync(f, content);
});
console.log('Done');

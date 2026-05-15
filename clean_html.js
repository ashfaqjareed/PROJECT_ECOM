const fs = require('fs');

const files = ['shop.html', 'pre-owned.html', 'index.html'];

files.forEach(file => {
    const filePath = `c:\\Users\\Ashfaq Jareed\\Downloads\\ANTIGRAVITY\\PROJECT_ECOM\\${file}`;
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove duplicated top banners
    const bannerRegex = /<div id="ajv-top-banner"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
    const matches = content.match(bannerRegex);
    if (matches && matches.length > 1) {
        content = content.replace(bannerRegex, (match, offset, full) => {
            return offset === full.indexOf(match) ? match : '';
        });
    }

    // Remove duplicate headers/footers
    // (Simplified cleanup for common duplication markers)
    content = content.replace(/<header[\s\S]*?<\/header>[\s\S]*?<header[\s\S]*?<\/header>/g, (match) => {
        return match.split('</header>')[0] + '</header>';
    });

    // Remove large whitespace blocks
    content = content.replace(/\n\s{20,}/g, '\n  ');

    fs.writeFileSync(filePath, content);
});

console.log('HTML files cleaned and structural duplication removed.');

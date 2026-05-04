const fs = require('fs');
const path = require('path');
const replacements = {
    'â€”': '—',
    'â€“': '–',
    'â€¢': '•',
    'Â©': '©',
    'Â': '',
    'âˆ’': '−',
    'â ¤ï¸ ': '❤️',
    'âœ”': '✔',
    'Ã—': '×'
};

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    let changed = false;
    for (const [key, val] of Object.entries(replacements)) {
        if (content.includes(key)) {
            content = content.split(key).join(val);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(path.join(__dirname, file), content, 'utf8');
        console.log('Cleaned: ' + file);
    }
});

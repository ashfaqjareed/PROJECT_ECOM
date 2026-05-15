const fs = require('fs');

const filePath = 'c:\\Users\\Ashfaq Jareed\\Downloads\\ANTIGRAVITY\\PROJECT_ECOM\\app.js';
let content = fs.readFileSync(filePath, 'utf8');

// Fix extra </button> after </svg>
// This happens if the corruption replaced some internal tag with </button> incorrectly or just appended it.
// We'll search for </svg></button> and replace with </svg> if there's no matching <button> right before.
// Actually, in this file, </svg></button> is almost always a mistake unless it's a social button we fixed earlier.
// But wait, cardHTML has social buttons that DO need </button>.

// Let's be more specific. 
// In the 'getIcon' or 'floatCart' areas, it's definitely a mistake.

content = content.replace(/<\/svg><\/button>/g, (match, offset) => {
    // Look back to see if there's a <button nearby
    const lookback = content.slice(Math.max(0, offset - 100), offset);
    if (lookback.includes('<button')) {
        return '</svg></button>'; // Keep it
    }
    return '</svg>'; // Remove it
});

// Also fix </svg></button> in getIcon specifically
content = content.replace(/<\/svg><\/button>`,/g, '</svg>`,');

fs.writeFileSync(filePath, content);
console.log('SVG button fix complete.');

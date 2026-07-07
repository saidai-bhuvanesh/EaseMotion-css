/**
 * PROPOSED BUILD SCRIPT FOR MAINTAINERS
 * 
 * To implement automated minification requested in #33440, 
 * save this script in `scripts/bundle.js`.
 */

const CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');

function build() {
    // 1. Read the source CSS (concatenated output)
    const sourcePath = path.join(__dirname, '../easemotion.css');
    
    if (!fs.existsSync(sourcePath)) {
        console.error('❌ easemotion.css not found. Run concatenation first.');
        process.exit(1);
    }
    
    const source = fs.readFileSync(sourcePath, 'utf8');

    // 2. Minify using clean-css
    const output = new CleanCSS({ level: 2 }).minify(source);

    if (output.errors.length > 0) {
        console.error('❌ Minification errors:', output.errors);
        process.exit(1);
    }

    // 3. Write minified file
    const minPath = path.join(__dirname, '../easemotion.min.css');
    fs.writeFileSync(minPath, output.styles);
    
    console.log(`✅ Built easemotion.min.css (${output.stats.minifiedSize} bytes)`);
}

build();

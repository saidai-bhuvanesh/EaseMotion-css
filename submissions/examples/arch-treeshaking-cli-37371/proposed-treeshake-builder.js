/**
 * PROPOSED TREESHAKING BUILD SCRIPT FOR MAINTAINERS
 * 
 * To implement the feature requested in #37371, maintainers can 
 * integrate this script as `scripts/build-custom.js`.
 */

const fs = require('fs');
const path = require('path');
// Note: Requires 'clean-css' dependency
const CleanCSS = require('clean-css');

function buildCustomBundle() {
    const configPath = path.join(process.cwd(), 'easemotion.config.json');
    
    if (!fs.existsSync(configPath)) {
        console.error('❌ easemotion.config.json not found in the current directory.');
        process.exit(1);
    }

    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    let concatenatedSource = '';
    const rootDir = path.join(__dirname, '..');

    // Helper to resolve and append files based on the config array
    const appendFiles = (category, files) => {
        if (!files || !Array.isArray(files)) return;
        
        files.forEach(file => {
            // e.g. "components/buttons.css"
            const filePath = path.join(rootDir, category, `${file}.css`);
            if (fs.existsSync(filePath)) {
                concatenatedSource += `/* --- ${category}/${file} --- */\n`;
                concatenatedSource += fs.readFileSync(filePath, 'utf8') + '\n\n';
            } else {
                console.warn(`⚠️ Warning: Module ${category}/${file}.css not found. Skipped.`);
            }
        });
    };

    // 1. Core modules (variables and base are almost always required)
    appendFiles('core', config.core);

    // 2. Components
    appendFiles('components', config.components);

    // 3. Animations
    appendFiles('animations', config.animations);
    
    // 4. Utilities
    appendFiles('core', config.utilities); // utilities are often in core/utilities.css or similar

    if (concatenatedSource.trim().length === 0) {
        console.error('❌ Output bundle is empty. Check your easemotion.config.json.');
        process.exit(1);
    }

    // Minify output
    const output = new CleanCSS({ level: 2 }).minify(concatenatedSource);
    
    const outPath = path.join(process.cwd(), 'dist', 'easemotion.custom.min.css');
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, output.styles);
    
    console.log(`✅ Custom bundle created: easemotion.custom.min.css (${output.stats.minifiedSize} bytes)`);
}

// buildCustomBundle();

const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');
const TurndownService = require('turndown');

// Initialize turndown for HTML to Markdown conversion
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Read and parse the projects data from TypeScript file
const projectsFilePath = path.join(__dirname, '../src/data/projects.ts');
const projectsFileContent = fs.readFileSync(projectsFilePath, 'utf8');

// Extract projects array using regex (simple approach)
const projectsMatch = projectsFileContent.match(/export const projects: Project\[\] = \[([\s\S]*)\];/);
if (!projectsMatch) {
    throw new Error('Could not parse projects from projects.ts');
}

// Parse the projects array (eval is used here for simplicity - in production use a proper parser)
const projectsArrayString = '[' + projectsMatch[1] + ']';
const projects = eval(projectsArrayString);

// Password for decryption - you'll need to set this
const PASSWORD = process.env.ENCRYPTION_PASSWORD || '4321';

// Unescape function (polyfill for deprecated unescape)
function unescapeContent(str) {
    // Handle %uxxxx Unicode sequences
    str = str.replace(/%u([0-9A-Fa-f]{4})/g, (match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
    });

    // Handle %xx sequences
    str = str.replace(/%([0-9A-Fa-f]{2})/g, (match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
    });

    return str;
}

// Decrypt content using the same logic as EncryptedProject.tsx
function decryptContent(encryptedContent, password) {
    try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedContent.trim(), password);
        let content = decryptedBytes.toString(CryptoJS.enc.Utf8);

        if (!content) {
            throw new Error('Decryption failed - empty result');
        }

        // Decode Base64
        const base64Parsed = CryptoJS.enc.Base64.parse(content);
        content = CryptoJS.enc.Utf8.stringify(base64Parsed);

        // Unescape
        content = unescapeContent(content);

        return content;
    } catch (error) {
        console.error('Decryption error:', error.message);
        throw error;
    }
}

// Convert slug to filename
function slugToFilename(slug) {
    return slug.toLowerCase().replace(/_/g, '-') + '.md';
}

// Main function
function main() {
    console.log('Starting content decryption...\n');

    const contentDir = path.join(__dirname, '../content/projects');

    // Ensure directory exists
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
    }

    projects.forEach((project) => {
        console.log(`Processing: ${project.title}`);

        try {
            // Decrypt the content
            const decryptedHTML = decryptContent(project.encryptedContent, PASSWORD);

            // Convert HTML to Markdown
            const markdownContent = turndownService.turndown(decryptedHTML);

            // Create frontmatter
            const frontmatter = `---
title: "${project.title}"
date: "${project.date}"
image: "${project.imageSrc}"
encrypted: true
---

`;

            // Combine frontmatter and content
            const fullContent = frontmatter + markdownContent;

            // Write to file
            const filename = slugToFilename(project.slug);
            const filepath = path.join(contentDir, filename);
            fs.writeFileSync(filepath, fullContent, 'utf8');

            console.log(`  ✓ Created: ${filename}`);
        } catch (error) {
            console.error(`  ✗ Failed to decrypt ${project.slug}:`, error.message);
        }
    });

    console.log('\n✅ Decryption complete!');
    console.log(`Files created in: ${contentDir}`);
}

// Run the script
main();

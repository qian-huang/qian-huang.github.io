const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const CryptoJS = require('crypto-js');

// Load environment variables from .env.local
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

// Password for encryption
const PASSWORD = process.env.ENCRYPTION_PASSWORD || 'default';

// Escape function (opposite of unescape)
function escapeContent(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);
        if (code > 255) {
            // Unicode character - use %uxxxx format
            result += '%u' + code.toString(16).padStart(4, '0');
        } else if (code > 127 || code === 37) { // % sign
            // Extended ASCII or special chars - use %xx format
            result += '%' + code.toString(16).padStart(2, '0');
        } else {
            result += str[i];
        }
    }
    return result;
}

// Encrypt content using the same logic as the original
function encryptContent(content, password) {
    try {
        // Escape the content
        const escaped = escapeContent(content);

        // Encode to Base64
        const base64 = CryptoJS.enc.Utf8.parse(escaped).toString(CryptoJS.enc.Base64);

        // Encrypt with AES
        const encrypted = CryptoJS.AES.encrypt(base64, password).toString();

        return encrypted;
    } catch (error) {
        console.error('Encryption error:', error.message);
        throw error;
    }
}

// Convert filename to slug
function filenameToSlug(filename) {
    return filename.replace('.md', '').replace(/-/g, '-');
}

// Main function
function main() {
    console.log('Generating projects.ts from Markdown files...\n');

    const contentDir = path.join(__dirname, '../content/projects');
    const outputPath = path.join(__dirname, '../src/data/projects.ts');

    // Read all markdown files
    const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

    if (files.length === 0) {
        console.error('No markdown files found in content/projects/');
        process.exit(1);
    }

    const projects = [];

    files.forEach((filename) => {
        console.log(`Processing: ${filename}`);

        try {
            const filepath = path.join(contentDir, filename);
            const fileContent = fs.readFileSync(filepath, 'utf8');

            // Parse frontmatter and content
            const { data, content } = matter(fileContent);

            // Generate slug from filename
            const slug = filenameToSlug(filename);

            // Encrypt Markdown content directly (no HTML conversion)
            let finalContent = content;
            if (data.encrypted) {
                finalContent = encryptContent(content, PASSWORD);
                console.log(`  ✓ Encrypted Markdown content`);
            }

            // Create project object
            projects.push({
                slug: slug,
                title: data.title,
                date: data.date,
                imageSrc: data.image,
                encryptedContent: finalContent
            });

            console.log(`  ✓ Added to projects array`);
        } catch (error) {
            console.error(`  ✗ Failed to process ${filename}:`, error.message);
        }
    });

    // Sort by date (newest first)
    projects.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate TypeScript file
    let output = `// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// This file is generated from content/projects/*.md
// Run: npm run generate-projects or node scripts/generate-projects.js

export interface Project {
  slug: string;
  title: string;
  date: string;
  imageSrc: string;
  encryptedContent: string;
}

export const projects: Project[] = [
`;

    projects.forEach((project, index) => {
        output += `  {\n`;
        output += `    slug: "${project.slug}",\n`;
        output += `    title: "${project.title}",\n`;
        output += `    date: "${project.date}",\n`;
        output += `    imageSrc: "${project.imageSrc}",\n`;
        output += `    encryptedContent: "${project.encryptedContent}"\n`;
        output += `  }${index < projects.length - 1 ? ',' : ''}\n`;
    });

    output += `];\n`;

    // Write to file
    fs.writeFileSync(outputPath, output, 'utf8');

    console.log(`\n✅ Generated: ${outputPath}`);
    console.log(`   ${projects.length} projects processed`);
}

// Run the script
main();

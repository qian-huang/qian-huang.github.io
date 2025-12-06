# Content Management

This project uses Markdown files as the source of truth for project content.

## Directory Structure

```
content/
  projects/
    beautiful-dashboard.md
    guided-workflow.md
    ...
```

## Editing Content

1. Edit any Markdown file in `content/projects/`
2. The file has frontmatter at the top:

```markdown
---
title: "Project Title"
date: "2018-07-20"
image: "/images/project-cover.png"
encrypted: true
---

### Overview

Your content here in **Markdown** format...

- Bullet points
- Use standard Markdown syntax
- Images: ![alt text](/images/example.png)
```

3. Save the file
4. Run `npm run dev` - the content will be automatically converted to HTML, encrypted, and included

## Adding New Projects

1. Create a new `.md` file in `content/projects/`
2. Add frontmatter with title, date, image, and `encrypted: true`
3. Write your content
4. The filename becomes the URL slug (e.g., `my-project.md` → `/work/my-project`)

## How It Works

- **Source**: Markdown files in `content/projects/` (using standard Markdown syntax)
- **Build Script**: `scripts/generate-projects.js` reads Markdown files, encrypts the Markdown directly, generates `src/data/projects.ts`
- **Runtime**: `EncryptedProject.tsx` component decrypts Markdown and renders it using `react-markdown`
- **Styling**: You control all styling in your Markdown files - the component just renders what you write
- **Password**: Stored in `.env.local` (create from `.env.local.example`)

## Scripts

- `npm run generate-projects` - Manually regenerate projects.ts
- `npm run dev` - Auto-generates then starts dev server
- `npm run build` - Auto-generates then builds for production

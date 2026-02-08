# Professional Portfolio - Manish Yadav

A modern, recruiter-friendly personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features
- **Modern UI/UX**: Clean, minimal design with a professional dark mode.
- **Responsive**: Fully optimized for mobile, tablet, and desktop.
- **Interactive**: Smooth animations and glassmorphism effects.
- **Sections**: 
  - Hero (Headline + CTAs)
  - About (Professional Bio)
  - Skills (Categorized technical stack)
  - Projects (Featured work with source & demo links)
  - Experience (Internships & Education timeline)
  - Certifications (Professional achievements)
  - Contact (Form & Social links)

## Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Outfit (Display) & Inter (Sans)

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment Guide

### Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Connect your repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite and deploy your project.

### GitHub Pages
1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Update `vite.config.js` to include the base path:
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```
3. Add deployment scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

### Netlify
1. Drag and drop the `dist` folder to Netlify, or connect your GitHub repo for automated deployments.

## Customization
- **Details**: Edit `src/components/` files to update your personal information.
- **Theme**: Modify `tailwind.config.js` to change primary colors or fonts.
- **Images**: Replace unsplash URLs in `Projects.jsx` with your actual project screenshots.

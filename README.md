# Dwipayan Mitra - Personal Portfolio

Welcome to my personal portfolio website, a modern and responsive showcase of my skills, projects, and experience as a full-stack developer.

![Portfolio Preview 1](/public/images/preview/portfolio-desktop-preview-1.png)
![Portfolio Preview 2](/public/images/preview/portfolio-desktop-preview-2.png)
![Portfolio Preview 3](/public/images/preview/portfolio-desktop-preview-3.png)

## 🌐 Live Demo

[https://dwipayan-mitra-portfolio.vercel.app](https://dwipayan-mitra-portfolio.vercel.app)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Components](#components)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark/Light Theme**: Toggle between dark and light modes with system preference detection
- **Smooth Animations**: Elegant animations and transitions using Framer Motion
- **Modern UI**: Clean and contemporary design with Tailwind CSS
- **SEO Optimized**: Proper meta tags and Open Graph integration
- **Performance Focused**: Optimized for fast loading and smooth interactions
- **Cross-Browser Compatible**: Works across all modern browsers

## 🛠 Technologies Used

- [Next.js 16.0.0](https://nextjs.org/) - React-based web application framework
- [React 19.2.0](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion 12.23.24](https://www.framer.com/motion/) - Production-ready motion library for React
- [next-themes 0.4.6](https://github.com/pacocoursey/next-themes) - Perfect Next.js dark mode implementation
- [ESLint 9](https://eslint.org/) - JavaScript linting utility

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile/          # Profile pictures
│   │   ├── projects/         # Project images
│   │   └── svgs/             # SVG icons
│   ├── All-Texts/            # Content text files
│   └── Dwipayan_Mitra_Resume.pdf
├── src/
│   ├── components/           # Reusable components
│   ├── pages/                # Page components
│   └── styles/               # Global and module styles
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
└── package.json             # Project dependencies and scripts
```

## 📄 Pages

- **Home** (`/`): Landing page with introduction and call-to-action
- **About** (`/about`): Detailed information about skills, experience, and education
- **Projects** (`/projects`): Showcase of featured projects and portfolio work

## 🧩 Components

- `AnimatedText`: Text with typing animation effect
- `Education`: Timeline of educational background
- `Experience`: Professional experience timeline
- `Footer`: Site footer with contact information
- `HireMe`: Floating call-to-action button
- `Icons`: Collection of SVG icons
- `Layout`: Main layout wrapper
- `LiIcon`: Animated list item icons
- `Logo`: Personal brand logo
- `NavBar`: Navigation bar with theme toggle
- `Skills`: Visual representation of technical skills
- `TransitionEffect`: Page transition animations
- `theme-provider`: Theme context provider

## ▶️ Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files in the `src/pages/` directory. The page auto-updates as you edit the file.

## 📜 Available Scripts

- `npm run dev`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm run start`: Runs the built app in production mode
- `npm run lint`: Runs ESLint to check for code issues

## ☁️ Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS utilities
- [Framer Motion Documentation](https://www.framer.com/docs/) - learn about animations

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

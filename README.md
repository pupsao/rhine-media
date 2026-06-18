# Rhine Media Landing Page

🌍 **Live Demo:** [https://pupsao.github.io/rhine-media/](https://pupsao.github.io/rhine-media/)

A premium, high-performance, and fully responsive landing page built with modern frontend technologies. This project demonstrates best practices in clean architecture, componentization, and performance optimization for React applications.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v7
- **Styling:** SCSS (Sass) with a centralized design system
- **Animations:** AOS (Animate On Scroll)
- **Icons:** Lucide React
- **Backend / Database:** Supabase (for handling contact form submissions)

## 🏗️ Architecture & Best Practices

1. **Clean Component Architecture:** The application is split into highly reusable and semantic components (`HeroSection`, `Features`, `StatsBand`, etc.). Each component is strictly scoped with its own SCSS file.
2. **Separation of Concerns:** All static text, statistics, and list items are extracted into a central `content.json` file. This allows non-developers to update website copy without touching the React logic.
3. **Optimized Styling:** 
   - No CSS-in-JS overhead; pure, highly optimized SCSS.
   - Global variables (`_variables.scss`) for a centralized color and typography system.
   - Heavy use of CSS Grid and Flexbox for fully responsive layouts without media-query bloat.
   - Native CSS `scroll-padding-top` used for perfectly offset anchor scrolling, eliminating the need for heavy JavaScript scroll event listeners.
4. **Performance First:** 
   - AOS library used for lightweight, hardware-accelerated scroll animations.
   - State updates are strictly boolean-checked to prevent unnecessary React re-renders.

## 🔌 Supabase Integration (Contact Form)

The contact form on the `/contact` page is fully functional and connected to a **Supabase** backend. When a user submits a message, the data is directly inserted into the Supabase database. 

To make this work locally, you need to create a `.env` file in the root of the project with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🛠️ Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 🌐 Deployment (GitHub Pages)

This project is pre-configured for automatic deployment to GitHub pages using the `gh-pages` package. 

To deploy a new version:
1. Ensure your `vite.config.js` has the correct `base: '/rhine-media/'` path.
2. Run the deploy script:
   ```bash
   npm run deploy
   ```
*(Note: A custom `predeploy` script automatically generates a `404.html` fallback file to ensure React Router works correctly on GitHub Pages).*

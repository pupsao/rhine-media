# Rhine Media Landing Page

🌍 **Live Demo:** [https://pupsao.github.io/rhine-media/](https://pupsao.github.io/rhine-media/)

A responsive landing page for a media buying agency, built with React and SCSS.

## 🚀 Tech Stack

- **Framework:** React 19 + Vite
- **Routing:** React Router v7 (SPA with `NavLink` for active states)
- **Styling:** SCSS (Sass) with a centralized design system
- **Animations:** AOS (Animate On Scroll), refreshed on route changes
- **Icons:** Lucide React
- **Backend / Database:** Supabase (contact form submissions)

## 🏗️ Architecture

1. **Component Structure:** The app is split into page-scoped components (`HeroSection`, `Features`, `StatsBand`, etc.), each with its own `.scss` file.
2. **Content Separation:** Static text and data are stored in `content.json`, keeping components focused on layout and logic.
3. **Styling Approach:**
   - SCSS with global variables (`_variables.scss`) and mixins.
   - CSS Grid and Flexbox for responsive layouts.
   - No CSS-in-JS; styles are compiled at build time.
4. **Forms:** The contact form uses the `FormData` API to collect values on submit (uncontrolled inputs), with GDPR consent tracking.

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

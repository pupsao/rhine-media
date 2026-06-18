# Rhine Media Landing Page

🌍 **Live Demo:** [https://pupsao.github.io/rhine-media/](https://pupsao.github.io/rhine-media/)

A responsive landing page built for a media buying agency using React and SCSS.

## Project Structure

- **Framework:** React 19 + Vite
- **Routing:** React Router v7
- **Styling:** Vanilla SCSS. 
  - `src/styles/` contains global variables (`_variables.scss`), mixins (`_mixins.scss`), and base resets (`_base.scss`).
  - Components are scoped to their own folders with local `.scss` files (e.g., `HeroSection/HeroSection.scss`).
- **Icons:** `lucide-react`
- **Animations:** AOS (Animate On Scroll) is used for scroll-based fade effects.

## Component Architecture

To keep the application clean and maintainable:
- The UI is broken down into modular components: `Header`, `HeroSection`, `PortfolioGrid`, `StatsBand`, `TrafficSources`, etc.
- Static text and data (like FAQ items, feature lists, and stats) have been extracted into a single `src/data/content.json` file. This prevents UI components from becoming bloated with static text and makes editing easier.

## Contact Form Properties

The form located on the `/contact` page is fully functional and connected to **Supabase**. It is built with simplicity and performance in mind:

- **Uncontrolled Inputs:** The form uses native HTML uncontrolled inputs rather than binding a React state (`useState`) to every single input field.
- **Data Collection:** On submission (`onSubmit`), it uses the native browser `FormData` API to collect all field values at once. This completely eliminates unnecessary component re-renders while the user is typing.
- **Supabase Integration:** The collected data is sent directly to a Supabase table. 
- **Feedback States & UX:** The component tracks submission states (`idle`, `sending`, `success`, `error`). Upon success or error, it displays a relevant message and disables the form for 5 seconds. After the 5-second timeout, the form is automatically cleared (or unblocked) so the user can submit again if needed.

To connect your own database locally, create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is configured for deployment to GitHub Pages. Running `npm run deploy` will build the project and push the output to the `gh-pages` branch. A `predeploy` script automatically copies `index.html` to `404.html` to ensure React Router works correctly on GitHub Pages servers.

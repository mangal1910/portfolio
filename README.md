# Mangal Kumar | Software Engineer Portfolio

A premium, high-fidelity professional portfolio showcasing profiles, skills, projects, achievements, and certifications with a stunning **Cyberpunk Neon Lighting** aesthetic. Engineered with **Vite, React, and Tailwind CSS (v4)**, supporting smooth transitions between Dark Mode and Light Mode.

This codebase has been built with **modular sections in individual files** to make it incredibly easy for you to maintain, update, and deploy in the future.

---

## 🌟 Key Features

*   **Cyber Neon Aesthetics**: Vibrant glowing accents, custom obsidian backgrounds, translucent glassmorphism (`backdrop-blur`), and neon drop-shadows.
*   **Theme Toggle Engine**: Full support for Dark Mode (cyber obsidian with cyan/magenta glows) and Light Mode (crisp white/slate with soft blue/rose glows) that respects and persists user settings in `localStorage`.
*   **Typewriter Role Animation**: Dynamic typed tagline showcasing your core specializations.
*   **Interactive Skills Matrix**: Tech stacks grouped into glowing containers, complemented by glowing progress gauges for soft skills.
*   **Vertical Milestones Timeline**: A sleek education history tracker built with glowing gradient rails and timeline nodes.
*   **Verified Credentials**: Clean verification badges highlighting competitive coding, academic certifications, and successful releases.
*   **Responsive Input Fields**: Form lines that dynamically hum and glow with border light states when focused.
*   **100% Responsive Grid**: Seamlessly optimized for all breakpoints—looks outstanding on mobile, tablet, and wide-screen monitors.

---

## 🛠️ Technology Stack

*   **Framework**: [React.js (v19)](https://react.dev/)
*   **Build Utility**: [Vite (v8)](https://vite.dev/) — enables instant Hot Module Replacement (HMR).
*   **Styling**: [Tailwind CSS (v4)](https://tailwindcss.com/) — utilizing `@theme` inside CSS for unified design tokens.
*   **Icons**: [Lucide React (v0.460)](https://lucide.dev/) — clean, minimalist high-tech indicator icons.

---

## 📂 Project Structure & Modular Files

To make modifications simple, every logical block is separated into its own component file under the `src/` directory:

```text
Portfolio/
├── index.html              # Core HTML file (optimized SEO titles and meta tags)
├── package.json            # Project dependencies & build scripts
├── vite.config.js          # Vite configurations integrated with Tailwind CSS v4
└── src/
    ├── App.jsx             # Main layout, dynamic mesh, and dark/light toggle logic
    ├── index.css           # Custom typography, fonts, keyframe animations, and scrollbars
    ├── assets/
    │   └── profile.jpeg    # Your circular profile image wrapped in neon pulses
    └── components/         # Modular section files (Edit these to update content)
        ├── Navbar.jsx      # Sticky navbar andSun/Moon theme toggle trigger
        ├── Hero.jsx        # Circular profile photo container, typed tagline, and CTAs
        ├── SocialProfiles.jsx # LinkedIn, GitHub, and HackerRank brand glowing cards
        ├── Skills.jsx      # Technical tech stack grids (Languages, Frontend, Backend)
        ├── SoftSkills.jsx  # Problem Solving and Adaptability radial progress meters
        ├── Projects.jsx    # Velos and Telecom Churn Prediction display grids
        ├── Education.jsx   # Vertical academic timeline and glowing nodes
        ├── Certifications.jsx # Verification credential badges
        ├── Achievements.jsx # Star competitive ratings and live release badges
        ├── Contact.jsx     # Glowing interactive feedback submit form
        └── Footer.jsx      # Scroll-to-top shortcut and footer links
```

---

## 🚀 How to Run Locally

You can launch a local development server on your machine in just a few steps:

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 2. Install Dependencies
Open your command prompt or terminal in the project folder and run:
```bash
npm install
```

### 3. Start Local Development Server
Compile and launch the local server by running:
```bash
npm run dev
```
Once the command finishes, press `Ctrl` and click the **`http://localhost:5173`** link in your terminal to see your glowing portfolio live!

---

## ✍️ How to Personalize Your Content

Updating the portfolio is very simple. Locate the component file for the section you want to modify under `src/components/` and edit the static data objects:

### 📸 1. Swap Your Profile Picture
We generated a professional technology avatar for you. To replace it with your own photo:
1. Copy your personal photo (in `.jpeg`, `.jpg`, or `.png` format).
2. Save it inside the **`src/assets/`** directory.
3. Rename the file to **`profile.jpeg`** (replacing the placeholder).
4. The application will instantly reload and display your new photo within the glowing neon rings!

### 🔗 2. Update Social Links (`src/components/SocialProfiles.jsx`)
Edit the `profiles` array to change URLs or details for your profiles:
```javascript
const profiles = [
  {
    name: 'LinkedIn',
    username: '@your-handle',
    url: 'https://www.linkedin.com/in/your-profile-url/',
    // ...
  }
];
```

### 💼 3. Manage Projects (`src/components/Projects.jsx`)
Update, remove, or add new projects inside the `projects` array:
```javascript
const projects = [
  {
    id: 'velos',
    title: 'Velos',
    subtitle: 'Modern E-commerce Platform',
    description: '...',
    features: [ 'Feature 1', 'Feature 2' ],
    tech: ['React.js', 'Redux', 'Tailwind CSS'],
    deployUrl: 'https://velosecom.netlify.app/',
    githubUrl: 'https://github.com/mangal1910',
    // ...
  }
];
```

### 📈 4. Adjust Skills & Progress (`src/components/Skills.jsx` & `SoftSkills.jsx`)
*   To add new technical skills, edit the `skillCategories` arrays in `Skills.jsx`.
*   To edit soft skill percentages or descriptions, edit the `softSkills` array in `SoftSkills.jsx`.

---

## 📦 Deploying to the Web

Once you are ready to publish your portfolio to the public, the easiest way is to use **Netlify** or **Vercel**:

### Option A: Netlify (Recommended)
1. Commit your codebase to a repository on GitHub.
2. Sign in to [Netlify](https://www.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Link your GitHub account and select your portfolio repository.
4. Netlify will automatically detect the Vite build settings:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5. Click **"Deploy site"** and your portfolio will be live in seconds!

### Option B: Vercel
1. Sign in to [Vercel](https://vercel.com/) and click **"Add New" > "Project"**.
2. Select your GitHub repository.
3. Vercel will automatically configure Vite. Click **"Deploy"** and you're good to go!

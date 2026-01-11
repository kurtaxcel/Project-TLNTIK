# Project TLNTIK: The Nasugbu Trilogy 🏔️

> "To bridge the gap between the raw beauty of Nasugbu's peaks and the modern hiker's journey."

**Project TLNTIK** is a modern, immersive web application designed to showcase the famous hiking trilogy in Brgy. Kayrilaw, Nasugbu, Batangas: **Mt. Talamitam**, **Mt. Lantik**, and **Mt. Apayang**.

This initiative combines eco-tourism promotion with modern web technologies, providing hikers with accurate trail data, verified guide directories, and a seamless planning experience.

## 🌟 Key Features

* **Immersive "Heritage" Design:** A premium visual identity using deep greens, glassmorphism, and smooth scroll animations.
* **Smart Dark Mode:** A system-aware theme toggle that adapts typography and contrast for night-time readability.
* **Interactive Guide Directory:** A trusted list of verified local guides with direct "Call" and "Message" integration.
* **Deep Linking:** "View Details" functionality that smoothly navigates and scrolls to specific mountain sections.
* **Admin Panel:** Full CRUD (Create, Read, Update, Delete) functionality for managing mountain data with form validation.
* **API Integration:** Seamless backend connectivity with insforge.dev for dynamic content management and data persistence.
* **Fallback System:** Intelligent fallback to local mock data when API is unavailable, ensuring uninterrupted user experience.
* **Dynamic Content Management:** Real-time mountain data updates without requiring code deployments.
* **Performance First:** Built with Vite and React for lightning-fast loading, even on mobile data.

## ⛰️ The Trilogy

* **Mt. Talamitam:** 630 MASL — "The Rolling Grasslands"
* **Mt. Lantik:** 660 MASL — "The Spear's Point"
* **Mt. Apayang:** 652 MASL — "The Mossy Frontier"

## 🛠️ Tech Stack

* **Frontend:** React (v18), Vite
* **Styling:** Tailwind CSS, PostCSS, Autoprefixer
* **Animations:** Framer Motion
* **Icons:** Lucide React
* **Routing:** React Router DOM (v6)
* **Backend Integration:** insforge.dev API
* **State Management:** Custom React Hooks (useMountains, useMountain, useTheme)
* **Development Tools:** ESLint for code quality

## 🚀 Getting Started

Follow these steps to run the project locally.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/kurtaxcel/Project-TLNTIK.git
    cd project-tlntik
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Development Server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

## 📂 Project Structure

```
/src
├── /components
│   ├── /admin       # Admin Panel Components (MountainForm)
│   ├── /common      # Reusable UI (SectionHeading, Buttons)
│   ├── /home        # Hero section & Landing components
│   ├── /layout      # Navbar (Glassmorphic) & Footer
│   └── /mountains   # Mountain Showcase Cards
├── /data            # Mock Data for Mountains & Guides
├── /hooks           # Custom Logic (useTheme, useMountains, useMountain)
├── /pages           # Main Views (Home, Trilogy, Guide, About, Admin)
├── /services        # API Integration (api.js, mountainService.js)
├── /utils           # Utility Functions (testApi.js)
└── App.jsx          # Routing & Scroll Logic
```

## 👨‍💻 Author

**Kurt Axcel N. Peñano**  
Full Stack Developer & Hiker

- **Facebook:** [itzmekurt.axcel](https://facebook.com/itzmekurt.axcel)
- **Instagram:** [@kurt.visual](https://www.instagram.com/kurt.visual/)
- **LinkedIn:** [Kurt Axcel Peñano](https://linkedin.com/in/peñanokurtaxcel)

---

May the Lord bless us.

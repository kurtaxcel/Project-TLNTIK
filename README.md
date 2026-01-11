# Project TLNTIK: The Nasugbu Trilogy 🏔️

> "To bridge the gap between the raw beauty of Nasugbu's peaks and the modern hiker's journey."

**Project TLNTIK** is a modern, immersive web application designed to showcase the famous hiking trilogy in Brgy. Kayrilaw, Nasugbu, Batangas: **Mt. Talamitam**, **Mt. Lantik**, and **Mt. Apayang**.

This initiative combines eco-tourism promotion with modern web technologies, providing hikers with accurate trail data, verified guide directories, and a seamless planning experience.

## 🌟 Key Features

* **Immersive "Heritage" Design:** A premium visual identity using deep greens, glassmorphism, and smooth scroll animations.
* **Smart Dark Mode:** A system-aware theme toggle that adapts typography and contrast for night-time readability.
* **Interactive Guide Directory:** A trusted list of verified local guides with direct "Call" and "Message" integration.
* **Deep Linking:** "View Details" functionality that smoothly navigates and scrolls to specific mountain sections.
* **Advanced Admin Panel:** Full CRUD (Create, Read, Update, Delete) functionality with comprehensive form validation, real-time error handling, and data sanitization.
* **Robust API Architecture:** Multi-layered service architecture with `ApiService` and `MountainService` for seamless backend connectivity with insforge.dev.
* **Intelligent Fallback System:** Automatic fallback to local mock data when API is unavailable, ensuring 100% uptime and uninterrupted user experience.
* **Enhanced State Management:** Custom React hooks (`useMountains`, `useMountain`, `useTheme`) for optimized data flow and state synchronization.
* **API Testing & Validation:** Built-in API testing utilities and data validation to ensure data integrity and system reliability.
* **Dynamic Content Management:** Real-time mountain data updates without requiring code deployments, with instant UI synchronization.
* **Performance First:** Built with Vite and React for lightning-fast loading, even on mobile data, with optimized bundle splitting.

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
* **Backend Integration:** insforge.dev API with proxy configuration
* **API Layer:** Custom service architecture (`ApiService`, `MountainService`)
* **State Management:** Custom React Hooks (`useMountains`, `useMountain`, `useTheme`)
* **Data Validation:** Built-in form validation and data sanitization
* **Testing Utilities:** API integration testing (`testApi.js`)
* **Development Tools:** ESLint for code quality, Vite dev server with HMR

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
│   ├── /admin       # Admin Panel Components (MountainForm with validation)
│   ├── /common      # Reusable UI Components (SectionHeading, Buttons)
│   ├── /home        # Hero Section & Landing Components
│   ├── /layout      # Navigation (Glassmorphic Navbar) & Footer
│   └── /mountains   # Mountain Showcase Cards with Deep Linking
├── /data            # Mock Data (Mountains & Guides) for Fallback System
├── /hooks           # Custom React Hooks for State Management
│   ├── useMountains.js  # CRUD operations with API fallback
│   ├── useMountain.js   # Individual mountain data management
│   └── useTheme.js      # Dark/Light mode state management
├── /pages           # Main Application Views
│   ├── Home.jsx         # Landing page with hero section
│   ├── Trilogy.jsx      # Mountain showcase with deep linking
│   ├── Guide.jsx        # Guide directory with contact integration
│   ├── About.jsx        # Project information and developer details
│   └── Admin.jsx        # Content management dashboard
├── /services        # API Integration Layer
│   ├── api.js           # Base API service with error handling
│   └── mountainService.js # Mountain-specific CRUD operations
├── /utils           # Utility Functions & Testing
│   └── testApi.js       # API integration testing utilities
├── index.css        # Global Styles & Tailwind Imports
├── main.jsx         # React Application Entry Point
└── App.jsx          # Routing, Scroll Logic & App Structure
```

## 👨‍💻 Author

**Kurt Axcel N. Peñano**  
Full Stack Developer & Hiker

- **Facebook:** [itzmekurt.axcel](https://facebook.com/itzmekurt.axcel)
- **Instagram:** [@kurt.visual](https://www.instagram.com/kurt.visual/)
- **LinkedIn:** [Kurt Axcel Peñano](https://linkedin.com/in/peñanokurtaxcel)

---

May the Lord bless us.

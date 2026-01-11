# 📘 Development Documentation: Project TLNTIK

**Version:** 2.0.0
**Developer:** Kurt Axcel N. Peñano
**Date:** January 2026

---

## 1. 💡 Brainstorming & Ideation

The concept was born from a personal passion: **Hiking meets Technology**.

The existing resources for the Nasugbu Trilogy (Talamitam, Lantik, Apayang) were scattered across old blogs and social media posts. The goal was to centralize this into a "Premium Digital Ambassador" for Brgy. Kayrilaw.

**Core Pillars Identified:**
1.  **Visuals First:** The mountains are beautiful; the site must be too.
2.  **Trust:** Hikers need verified info (Guides, IDs).
3.  **Usability:** It must work on mobile phones at the jump-off point.

---

## 2. 🏗️ The 10-Phase Execution Plan

To avoid "tutorial hell," we followed a strict architectural roadmap that evolved as the project grew:

### Original Foundation (Phases 1-7)
* **Phase 1: Foundation:** Locked in the "Nature" color palette (`#1A3C34`, `#F2A900`) and configured Tailwind.
* **Phase 2: Skeleton:** Established React Router structure (`App.jsx`) before building UI.
* **Phase 3: Core Components:** Built the "Glassmorphic Navbar" and "Parallax Hero" as independent units.
* **Phase 4: Data Layer:** Created a mock API (`mountains.js`) to simulate backend data flow.
* **Phase 5: Page Assembly:** Connected components to create the Home and Trilogy views.
* **Phase 6: The Polish:** Added Dark Mode, scroll animations, and transition effects.
* **Phase 7: Integration:** Connected to `insforge.dev` for headless content management.

### Advanced Features (Phases 8-10)
* **Phase 8: API Architecture:** Built comprehensive API service layer with `api.js` and `mountainService.js` for robust backend communication.
* **Phase 9: Admin Panel:** Developed full CRUD functionality with `MountainForm` component, form validation, and error handling for content management.
* **Phase 10: Resilience & Testing:** Implemented intelligent fallback systems, API testing utilities, and enhanced state management with custom hooks.

---

## 3. 🚧 Challenges & Solutions

Developing Version 1 came with specific technical hurdles. Here is how we solved them:

### Challenge A: The "Broken Layout" after Reset
* **Issue:** After resetting the folder structure, the site loaded as unstyled HTML. Tailwind classes were ignored.
* **Root Cause:** Missing `postcss.config.js` and `src/main.jsx`.
* **Solution:** Re-initialized the Vite entry point and created the PostCSS configuration to allow Tailwind to process styles.

### Challenge B: Navbar Visibility
* **Issue:** The "Glass" Navbar looked great on the Home page (Dark Image) but the white text disappeared on the Trilogy page (White Background).
* **Solution:** Implemented a "Smart Navbar" using `useLocation`.
    * *Logic:* If `path === '/'`, force White text. If `path === '/trilogy'`, switch to Green text. If `scrolled`, revert to White.

### Challenge C: Dark Mode Readability
* **Issue:** Toggling Dark Mode made text invisible because `text-nature-900` (Dark Green) persisted on a `bg-nature-900` background.
* **Solution:** Implemented the `dark:` variant strategy.
    * *Code:* `className="text-nature-900 dark:text-white"`
    * This ensures high contrast in both modes automatically.

### Challenge D: Deep Linking
* **Issue:** Clicking "View Details" on the Home page didn't scroll to the specific mountain on the Trilogy page.
* **Solution:** Created a `<ScrollToTop />` helper component that detects URL hashes (e.g., `#lantik`) and triggers `element.scrollIntoView()`.

### Challenge E: API Integration & Data Management
* **Issue:** Transitioning from static mock data to dynamic API-driven content while maintaining reliability.
* **Root Cause:** Need for robust error handling, data validation, and fallback mechanisms when API is unavailable.
* **Solution:** Implemented a layered architecture:
    * *Service Layer:* `mountainService.js` handles all API communication with proper error handling
    * *Fallback Strategy:* `useMountains` hook automatically falls back to mock data when API fails
    * *State Management:* Custom hooks manage loading states, errors, and data synchronization

### Challenge F: Admin Panel Security & Validation
* **Issue:** Creating a secure, user-friendly admin interface for content management without compromising data integrity.
* **Solution:** Built comprehensive form validation system:
    * *Client-side Validation:* Real-time form validation with error messaging
    * *Data Sanitization:* Slug generation and input cleaning
    * *User Experience:* Loading states, confirmation dialogs, and success feedback

---

## 4. 🎨 Design System

* **Typography:** *Playfair Display* (Headings) for heritage/prestige, *Inter* (Body) for readability.
* **Color Palette:**
    * **Nature (Primary):** Deep Jungle Green
    * **Sun (Accent):** Sunrise Gold
    * **Mist (Background):** Off-white / Fog
* **User Experience:** Focused on "Micro-interactions" (hover scales, fade-ins) to make the site feel alive without slowing it down.

---

## 5. 🙏 Message of Gratitude

Project TLNTIK is more than just code; it is a tribute to the mountains that have given us peace and adventure.

I am incredibly grateful for the tools that allow us to build these experiences—React, Vite, and the open-source community. This documentation serves as a log of the journey, proving that with a clear plan and persistence, we can build digital experiences that honor the physical world.

**The Summit Awaits.**

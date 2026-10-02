# CULINAIRE — Culinary Masterclass & Chef Guides Platform

> **"Learn the Craft. Master the Plate."**

CULINAIRE is an ultra-premium, responsive editorial web application designed for high-end culinary education. It connects cooking enthusiasts with world-renowned executive chefs through structured masterclasses, detailed technique guides, and signature recipes.

---

## 🌟 Key Features

1. **Cinematic Hero & Editorial Aesthetics**
   - Deep Espresso (`#211A17`), Warm Ivory (`#F7F3EC`), and Copper (`#B66A3C`) color system.
   - High-contrast Playfair Display & Inter typography combination.
   - Micro-animations, subtle image zooms, and glassmorphism headers.

2. **Masterclasses & Interactive Curriculum**
   - Filter by category (World Cuisine, Sauces, Pastry, Fundamentals) and difficulty.
   - Interactive lesson checklist with course progress percentage tracking stored in `localStorage`.
   - Instructor biographies and student rating metrics.

3. **Executive Chef Roster & Magazine Profiles**
   - Editorial profile cards for Michelin-starred chefs and master artisans.
   - Profile pages featuring biographies, awards, associated courses, and signature dishes.

4. **Recipes & Step-by-Step Cooking**
   - Recipe search bar with instant ingredient and title matching.
   - Interactive ingredient checkboxes and print-ready kitchen layout (`window.print()`).
   - Chef technique callouts ("Texture matters more than time").

5. **Technique Guides & Editorial Articles**
   - Long-form articles with drop caps, pull quotes, technique cards, and sticky table of contents.

6. **Authentication & User Dashboard**
   - Frontend authentication simulator (Login & Registration) storing sessions in `localStorage`.
   - Dashboard displaying course progress, completed lessons, learning hours, and saved recipes.
   - Simulated Admin Preview mode demonstrating platform management options.

7. **Global Search, Favorites & Dark Mode**
   - Fullscreen modal search activated via `Search` icon or `ESC` keyboard shortcut.
   - Heart favorites system persisting saved recipes and masterclasses.
   - Ultra-refined editorial dark mode toggle with preference persistence.

---

## 📁 Project Structure

```
/culinaire
│
├── index.html
├── masterclasses.html
├── masterclass-detail.html
├── chefs.html
├── chef-profile.html
├── recipes.html
├── recipe-detail.html
├── guides.html
├── guide-detail.html
├── about.html
├── contact.html
├── login.html
├── register.html
├── dashboard.html
├── profile.html
├── favorites.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── images/
│       ├── hero_chef.jpg
│       ├── masterclass_sauces.jpg
│       └── masterclass_indian.jpg
│
└── README.md
```

---

## 🚀 How to Run Locally

1. Open `index.html` directly in any standard modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge).
2. Alternatively, run a lightweight static file server:
   ```bash
   npx serve ./
   ```
3. Navigate to `http://localhost:3000` to experience the complete platform.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic document structure & accessibility labels.
- **CSS3 & Bootstrap 5**: Custom CSS variables, responsive grid system, dark mode overrides.
- **Vanilla JavaScript ES6+**: Data store, filtering, search overlay, interactive progress tracking, and `localStorage` persistence.

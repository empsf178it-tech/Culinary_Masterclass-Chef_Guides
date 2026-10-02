/**
 * CULINAIRE — Masterclass & Chef Guides
 * Main Application Logic & Data System
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. MASTER DATA STORE
     ========================================================================== */
  const CULINAIRE_DATA = {
    chefs: [
      {
        id: 'chef-arjun-rao',
        name: 'Chef Arjun Rao',
        specialty: 'Modern Indian Cuisine',
        location: 'Mumbai & London',
        experience: '18 Years',
        masterclassesCount: 3,
        recipesCount: 14,
        bio: 'Trained at legendary kitchens across New Delhi, Paris, and London, Chef Arjun Rao revolutionizes regional Indian culinary traditions using modern gastronomy techniques, precision spice architecture, and refined aesthetics.',
        awards: ['2 Michelin Stars', 'Asia\'s 50 Best Chefs 2024', 'Culinary Innovator Award'],
        image: 'assets/images/chef_arjun.jpg'
      },
      {
        id: 'chef-sofia-moretti',
        name: 'Chef Sofia Moretti',
        specialty: 'Artisan Pasta & Italian Regional',
        location: 'Bologna, Italy',
        experience: '15 Years',
        masterclassesCount: 4,
        recipesCount: 22,
        bio: 'Born in Bologna, Sofia learned the sacred geometry of handmade pasta from her grandmother before perfecting high-end Italian dining across Milan and Florence. Her masterclasses honor centuries of Italian craftsmanship.',
        awards: ['Three Forks Gambero Rosso', 'Master Pasta Artisan 2023'],
        image: 'assets/images/chef_sofia.jpg'
      },
      {
        id: 'chef-antoine-laurent',
        name: 'Chef Antoine Laurent',
        specialty: 'French Classical Sauces & Haute Cuisine',
        location: 'Lyon & Paris, France',
        experience: '24 Years',
        masterclassesCount: 5,
        recipesCount: 18,
        bio: 'Former Executive Chef at Le Grand Véfour, Chef Antoine Laurent demystifies the fundamental sauces and precision reduction methods that form the bedrock of Western classical gastronomy.',
        awards: ['Meilleur Ouvrier de France (MOF)', 'Legion of Culinary Honor'],
        image: 'assets/images/hero_chef.jpg'
      },
      {
        id: 'chef-elena-rossi',
        name: 'Chef Elena Rossi',
        specialty: 'Modern Pastry & Confectionery',
        location: 'Vienna & Rome',
        experience: '12 Years',
        masterclassesCount: 2,
        recipesCount: 16,
        bio: 'Blending architecture with sugar craft, Elena Rossi redefines classic European pastries with architectural geometry, balanced sweetness, and delicate fruit infusions.',
        awards: ['World Pastry Champion 2022', 'Best European Dessert Creation'],
        image: 'assets/images/chef_elena.jpg'
      },
      {
        id: 'chef-daniel-kim',
        name: 'Chef Daniel Kim',
        specialty: 'Asian Contemporary Fusion',
        location: 'Seoul & Tokyo',
        experience: '16 Years',
        masterclassesCount: 3,
        recipesCount: 12,
        bio: 'Mastering ferments, dashi extraction, and charcoal searing, Daniel Kim bridges traditional Korean and Japanese culinary philosophies with contemporary global techniques.',
        awards: ['Asia Culinary Icon 2023', 'Michelin Innovation Star'],
        image: 'assets/images/chef_daniel.jpg'
      }
    ],

    masterclasses: [
      {
        id: 'mc-modern-indian',
        title: 'Modern Indian Cuisine',
        chefId: 'chef-arjun-rao',
        chefName: 'Chef Arjun Rao',
        category: 'World Cuisine',
        difficulty: 'Intermediate',
        lessonsCount: 12,
        rating: 4.9,
        studentsCount: 3420,
        duration: '4h 15m',
        image: 'assets/images/masterclass_indian.jpg',
        featured: true,
        description: 'Master the intricate architecture of Indian spices, slow-caramelization foundations, and modern plating techniques to create Michelin-level Indian courses.',
        lessons: [
          { id: 'les-1', title: '01 — Understanding Indian Spice Architecture', duration: '18m', free: true },
          { id: 'les-2', title: '02 — Building the Perfect Masala Base', duration: '24m', free: true },
          { id: 'les-3', title: '03 — Regional Flavor Profiles & Oils', duration: '22m', free: false },
          { id: 'les-4', title: '04 — Balancing Heat, Acidity & Sweetness', duration: '20m', free: false },
          { id: 'les-5', title: '05 — Slow Cooking & Emulsification Techniques', duration: '35m', free: false },
          { id: 'les-6', title: '06 — Plating Modern Indian Gastronomy', duration: '28m', free: false }
        ]
      },
      {
        id: 'mc-french-sauces',
        title: 'French Sauce Fundamentals',
        chefId: 'chef-antoine-laurent',
        chefName: 'Chef Antoine Laurent',
        category: 'Sauces',
        difficulty: 'Beginner',
        lessonsCount: 8,
        rating: 4.9,
        studentsCount: 5120,
        duration: '3h 40m',
        image: 'assets/images/masterclass_sauces.jpg',
        featured: true,
        description: 'Explore the 5 Mother Sauces of French gastronomy, stock reduction secrets, and pan deglazing to elevate every dish you prepare.',
        lessons: [
          { id: 'les-101', title: '01 — Stock Crafting: Brown Veal & Poultry Stocks', duration: '30m', free: true },
          { id: 'les-102', title: '02 — The Art of Roux: White, Blonde & Brown', duration: '15m', free: true },
          { id: 'les-103', title: '03 — Velouté & Béchamel Precision', duration: '25m', free: false },
          { id: 'les-104', title: '04 — Emulsions: Hollandaise & Béarnaise', duration: '28m', free: false }
        ]
      },
      {
        id: 'mc-artisan-pasta',
        title: 'Artisan Pasta from Scratch',
        chefId: 'chef-sofia-moretti',
        chefName: 'Chef Sofia Moretti',
        category: 'Cooking Fundamentals',
        difficulty: 'Intermediate',
        lessonsCount: 10,
        rating: 5.0,
        studentsCount: 6890,
        duration: '4h 50m',
        image: 'assets/images/masterclass_pasta.jpg',
        featured: true,
        description: 'Learn dough hydration ratios, hand-kneading mechanics, egg yolk enriched pasta doughs, and hand-cut shapes like Tagliatelle and Pappardelle.',
        lessons: [
          { id: 'les-201', title: '01 — Flour Science & Hydration Ratios', duration: '20m', free: true },
          { id: 'les-202', title: '02 — Hand Kneading & Gluten Rest', duration: '25m', free: true },
          { id: 'les-203', title: '03 — Rolling Paper-Thin Sheets', duration: '32m', free: false },
          { id: 'les-204', title: '04 — Stuffed Pasta Shapes: Tortellini & Ravioli', duration: '40m', free: false }
        ]
      },
      {
        id: 'mc-modern-pastry',
        title: 'The Modern Pastry Kitchen',
        chefId: 'chef-elena-rossi',
        chefName: 'Chef Elena Rossi',
        category: 'Pastry',
        difficulty: 'Advanced',
        lessonsCount: 14,
        rating: 4.9,
        studentsCount: 2150,
        duration: '5h 30m',
        image: 'assets/images/masterclass_pastry.jpg',
        featured: true,
        description: 'Unlock mirror glazes, mousse stabilization, tempered chocolate rings, and architectural tart shell construction.',
        lessons: [
          { id: 'les-301', title: '01 — Chocolate Tempering & Seed Method', duration: '28m', free: true },
          { id: 'les-302', title: '02 — Fruit Gelées & Acid Balance', duration: '22m', free: false }
        ]
      },
      {
        id: 'mc-sourdough-craft',
        title: 'Artisan Sourdough & Ancient Grains',
        chefId: 'chef-sofia-moretti',
        chefName: 'Chef Sofia Moretti',
        category: 'Cooking Fundamentals',
        difficulty: 'Intermediate',
        lessonsCount: 9,
        rating: 4.95,
        studentsCount: 4120,
        duration: '4h 10m',
        image: 'assets/images/masterclass_sourdough.jpg',
        featured: false,
        description: 'Master wild yeast cultivation, autolyse science, open-crumb hydration control, and Dutch oven baking mechanics.'
      },
      {
        id: 'mc-sushi-mastery',
        title: 'Edomae Sushi & Knife Mastery',
        chefId: 'chef-daniel-kim',
        chefName: 'Chef Daniel Kim',
        category: 'World Cuisine',
        difficulty: 'Advanced',
        lessonsCount: 16,
        rating: 4.98,
        studentsCount: 5430,
        duration: '6h 00m',
        image: 'assets/images/masterclass_sushi.jpg',
        featured: false,
        description: 'Learn fish curing, Shari rice seasoning, Yanagiba knife sharpening, and delicate Nigiri shaping.'
      },
      {
        id: 'mc-emulsions-glazes',
        title: 'High Emulsions & Reduction Glazes',
        chefId: 'chef-antoine-laurent',
        chefName: 'Chef Antoine Laurent',
        category: 'Sauces',
        difficulty: 'Advanced',
        lessonsCount: 11,
        rating: 4.92,
        studentsCount: 3180,
        duration: '4h 25m',
        image: 'assets/images/masterclass_glazes.jpg',
        featured: false,
        description: 'Master Demi-Glace reductions, Beurre Blanc stability, and aromatic herb oil infusions.'
      },
      {
        id: 'mc-choux-pastry',
        title: 'Choux Pastry & Éclairs Architecture',
        chefId: 'chef-elena-rossi',
        chefName: 'Chef Elena Rossi',
        category: 'Pastry',
        difficulty: 'Intermediate',
        lessonsCount: 12,
        rating: 4.89,
        studentsCount: 2950,
        duration: '3h 50m',
        image: 'assets/images/masterclass_pastry.jpg',
        featured: false,
        description: 'Learn precision steam expansion, Craquelin crunch tops, and velvet Crème Pâtissière fillings.'
      },
      {
        id: 'mc-asian-fermentation',
        title: 'Contemporary Asian Fermentation & Umami',
        chefId: 'chef-daniel-kim',
        chefName: 'Chef Daniel Kim',
        category: 'World Cuisine',
        difficulty: 'Advanced',
        lessonsCount: 14,
        rating: 4.96,
        studentsCount: 3840,
        duration: '5h 15m',
        image: 'assets/images/masterclass_fermentation.jpg',
        featured: false,
        description: 'Master Koji cultivation, black garlic aging, artisan miso fermentations, and umami extraction techniques.'
      }
    ],

    recipes: [
      {
        id: 'rec-tagliatelle-sage',
        title: 'Handmade Tagliatelle with Brown Butter & Crispy Sage',
        chefName: 'Chef Sofia Moretti',
        category: 'Dinner',
        cuisine: 'Italian',
        prepTime: '45 mins',
        cookTime: '15 mins',
        servings: 4,
        difficulty: 'Intermediate',
        image: 'assets/images/recipe_tagliatelle.jpg',
        ingredients: [
          '300g Tipo 00 Flour',
          '3 large organic egg yolks + 1 whole egg',
          '100g unsalted European butter',
          '15 fresh sage leaves',
          '60g Parmigiano-Reggiano (24 months aged)',
          'Flaky sea salt & freshly cracked black pepper'
        ],
        steps: [
          { step: 1, title: 'Form the Flour Well', text: 'Mound the Tipo 00 flour on a clean marble surface. Make a wide well in the center and add the egg yolks and whole egg.' },
          { step: 2, title: 'Incorporate & Knead', text: 'Using a fork, gently beat the eggs, gradually pulling flour from the inner walls until a shaggy dough forms. Knead vigorously by hand for 10 minutes until smooth and elastic.' },
          { step: 3, title: 'Rest & Roll', text: 'Wrap dough tightly in plastic wrap and rest at room temperature for 30 minutes. Roll out using a wooden pin until translucent, then fold and slice into 8mm ribbons.' },
          { step: 4, title: 'Brown Butter Sauce', text: 'Melt European butter in a heavy copper pan over medium heat. Cook until foaming subsides and golden brown specks appear. Add sage leaves until crisp.' },
          { step: 5, title: 'Emulsify & Finish', text: 'Boil tagliatelle in salted water for 90 seconds. Transfer directly into the butter pan with 60ml pasta water. Toss vigorously with Parmigiano-Reggiano to form a glossy glaze.' }
        ],
        chefNote: 'Texture matters more than time. Ensure your butter reaches a warm nutty aroma (noisette) without burning before adding sage.'
      },
      {
        id: 'rec-spiced-lamb',
        title: 'Cardamom Spiced Duck with Saffron Foam',
        chefName: 'Chef Arjun Rao',
        category: 'Dinner',
        cuisine: 'Indian',
        prepTime: '30 mins',
        cookTime: '25 mins',
        servings: 2,
        difficulty: 'Advanced',
        image: 'assets/images/recipe_duck.jpg',
        ingredients: [
          '2 Gressingham duck breasts',
          '1 tbsp crushed green cardamom pods',
          '1 tsp Kashmiri chili powder',
          '0.5g Kashmiri saffron threads soaked in warm milk',
          '150ml rich duck or poultry demi-glace',
          '200ml whole milk for lecithin foam'
        ],
        steps: [
          { step: 1, title: 'Score & Spice', text: 'Cross-hatch duck skin delicately without piercing the meat. Rub with crushed cardamom, sea salt, and Kashmiri chili.' },
          { step: 2, title: 'Cold Pan Sear', text: 'Place duck skin-side down in a cold cast iron skillet. Render fat over medium-low heat for 12 minutes until crisp.' },
          { step: 3, title: 'Baste & Rest', text: 'Flip and sear meat side for 2 minutes. Rest meat for 8 minutes before slicing.' }
        ],
        chefNote: 'Cold pan rendering guarantees razor-thin, crispy duck skin while keeping the breast tender pink medium-rare.'
      },
      {
        id: 'rec-french-demi-glace',
        title: 'Pan-Seared Tenderloin with Velvety Red Wine Demi-Glace',
        chefName: 'Chef Antoine Laurent',
        category: 'Meat',
        cuisine: 'French',
        prepTime: '20 mins',
        cookTime: '30 mins',
        servings: 2,
        difficulty: 'Intermediate',
        image: 'assets/images/recipe_wagyu.jpg',
        ingredients: [
          '2 center-cut beef filet mignons (200g each)',
          '200ml rich veal stock reduction',
          '100ml Pinot Noir or Bordeaux red wine',
          '2 shallots finely brunoised',
          '30g cold unsalted butter cubed'
        ],
        steps: [
          { step: 1, title: 'Sear Beef', text: 'Sear beef tenderloin fillets in high-smoke oil until deeply caramelized crust forms. Remove and keep warm.' },
          { step: 2, title: 'Deglaze & Reduce', text: 'Sweat shallots in pan drippings. Pour in red wine, scraping up all fond. Reduce wine by two-thirds.' },
          { step: 3, title: 'Mount with Butter (Monter au Beurre)', text: 'Whisk in dark stock reduction, then remove from heat and mount with cold butter cubes for high sheen gloss.' }
        ],
        chefNote: 'Never boil a sauce after mounting with cold butter, or the emulsion will separate.'
      }
    ],

    guides: [
      {
        id: 'guide-knife-skills',
        title: 'The Complete Guide to Professional Knife Skills',
        category: 'Knife Skills',
        readTime: '8 min read',
        author: 'Chef Antoine Laurent',
        date: 'October 2026',
        summary: 'Learn the claw grip, blade pivot points, julienne, brunoise, and how to maintain razor-sharp Japanese steel.',
        image: 'assets/images/equipment_knife.jpg',
        content: `
          <p class="drop-cap">A chef’s knife is an extension of the human hand. Before mastering complex reductions or heat control, every serious cook must align their stance, grip, and blade motion.</p>
          <h3 class="font-heading my-4">1. The Pinch Grip</h3>
          <p>Avoid wrapping all four fingers around the handle. Instead, pinch the heel of the blade between your thumb and index finger. This yields 100% control over the center of gravity.</p>
          <blockquote class="my-4 p-4 bg-surface border-start border-3 border-accent italic">
            "Precision is born from posture. The guiding hand forms the claw, guarding fingertips while steering the blade."
          </blockquote>
          <h3 class="font-heading my-4">2. Cut Geometry: Brunoise vs Chiffonade</h3>
          <p>Brunoise requires 2mm x 2mm x 2mm cubes. First cut uniform julienne matchsticks, then line up cleanly and cut perpendicularly with a rhythmic rocking motion.</p>
        `
      },
      {
        id: 'guide-flavor-building',
        title: 'Understanding Flavor Architecture & Balance',
        category: 'Seasoning',
        readTime: '10 min read',
        author: 'Chef Arjun Rao',
        date: 'September 2026',
        summary: 'How to balance fat, acid, salt, heat, and umami to elevate home cooking to restaurant standards.',
        image: 'assets/images/recipe_starter.jpg',
        content: `
          <p class="drop-cap">Great cooking is not merely following a list of quantities; it is the continuous calibration of taste on your palate throughout the cooking arc.</p>
          <h3 class="font-heading my-4">The Role of Acid in Rich Dishes</h3>
          <p>When a gravy or butter sauce tastes heavy or flat, adding more salt will not fix it. A dash of aged sherry vinegar, citrus zest, or amchur cuts through lipid heaviness and awakens tastebuds.</p>
        `
      },
      {
        id: 'guide-plating-mastery',
        title: 'Restaurant-Style Plating Principles at Home',
        category: 'Plating',
        readTime: '6 min read',
        author: 'Chef Elena Rossi',
        date: 'August 2026',
        summary: 'Visual hierarchy, odd numbers, negative space, and height dynamics on dark ceramic plates.',
        image: 'assets/images/recipe_veloute.jpg',
        content: `
          <p class="drop-cap">We eat with our eyes first. Plating is the art of communicating intention, warmth, and texture before the first forkful.</p>
        `
      }
    ]
  };

  /* ==========================================================================
     2. LOCAL STORAGE MANAGEMENT
     ========================================================================== */
  const Storage = {
    getUser: () => JSON.parse(localStorage.getItem('culinaire_user')) || null,
    setUser: (user) => localStorage.setItem('culinaire_user', JSON.stringify(user)),
    clearUser: () => localStorage.removeItem('culinaire_user'),

    getFavorites: () => JSON.parse(localStorage.getItem('culinaire_favs')) || { recipes: [], masterclasses: [], guides: [] },
    setFavorites: (favs) => localStorage.setItem('culinaire_favs', JSON.stringify(favs)),

    getProgress: () => JSON.parse(localStorage.getItem('culinaire_progress')) || {},
    setProgress: (prog) => localStorage.setItem('culinaire_progress', JSON.stringify(prog)),

    getTheme: () => localStorage.getItem('culinaire_theme') || 'light',
    setTheme: (theme) => localStorage.setItem('culinaire_theme', theme)
  };

  window.Storage = Storage;

  // Toast Helper (Hoisted Function)
  function showToast(message, type = 'info') {
    let container = document.querySelector('.culinaire-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'culinaire-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'culinaire-toast';
    const icon = type === 'success' ? 'bi-check-circle-fill text-success' : 'bi-info-circle-fill text-accent';
    toast.innerHTML = `<i class="bi ${icon} fs-5"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  window.showToast = showToast;

  /* ==========================================================================
     3. APP INIT & NAVBAR CONTROLLER
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initBrandLogoSVG();
    initNavbar();
    initMobileNav();
    initSearchOverlay();
    initAuthUI();
    initAuthModal();
    initFavoritesModal();
    initDashboardDrawer();
    initGlobalFavorites();
    initScrollReveal();
    initPageSpecific();
  });

  // Vector SVG Brand Logo Emblem Initializer
  function initBrandLogoSVG() {
    const svgMark = `
      <span class="brand-logo-icon">
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1.5" y="1.5" width="29" height="29" rx="8" stroke="url(#brandLogoGoldGrad)" stroke-width="1.5" fill="rgba(184, 115, 51, 0.1)"/>
          <path d="M16 6.5L18.1 11.6L23.5 12.2L19.5 15.8L20.6 21.2L16 18.5L11.4 21.2L12.5 15.8L8.5 12.2L13.9 11.6L16 6.5Z" fill="url(#brandLogoGoldGrad)"/>
          <path d="M8 24.5H24" stroke="url(#brandLogoGoldGrad)" stroke-width="1.8" stroke-linecap="round"/>
          <defs>
            <linearGradient id="brandLogoGoldGrad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stop-color="#B87333"/>
              <stop offset="0.5" stop-color="#F5D061"/>
              <stop offset="1" stop-color="#D4AF37"/>
            </linearGradient>
          </defs>
        </svg>
      </span>
    `;

    document.querySelectorAll('.brand-logo').forEach(brandEl => {
      if (!brandEl.querySelector('.brand-logo-icon')) {
        brandEl.insertAdjacentHTML('afterbegin', svgMark);
      }
    });
  }

  // Scroll Reveal Animations
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.card-culinaire, .hero-editorial, .section-padding .heading-editorial, .section-padding .heading-section, .kpi-card, .sidebar-widget, .timeline-item, .chef-card-luxury');
    reveals.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.style.transitionDelay = `${(index % 4) * 0.15}s`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(el => observer.observe(el));
  }

  // Theme Controller
  function initTheme() {
    const savedTheme = Storage.getTheme() || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // Navbar Controller
  function initNavbar() {
    const navbar = document.querySelector('.culinaire-navbar');
    if (!navbar) return;

    if (navbar.classList.contains('navbar-internal')) {
      document.body.classList.add('has-navbar-internal');
    }

    const isHomeTransparent = navbar.classList.contains('navbar-transparent') || navbar.dataset.transparent === 'true';
    if (isHomeTransparent) {
      navbar.dataset.transparent = 'true';
    }

    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPos > 15) {
        navbar.classList.add('navbar-scrolled');
        if (navbar.dataset.transparent === 'true') {
          navbar.classList.remove('navbar-transparent');
        }
      } else {
        navbar.classList.remove('navbar-scrolled');
        if (navbar.dataset.transparent === 'true' && !navbar.classList.contains('navbar-internal')) {
          navbar.classList.add('navbar-transparent');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleScroll);
    document.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile Navigation Drawer
  function initMobileNav() {
    const trigger = document.querySelector('.hamburger-btn');
    const backdrop = document.querySelector('.mobile-nav-backdrop');
    const panel = document.querySelector('.mobile-nav-panel');
    const closeBtn = document.querySelector('.mobile-nav-close');

    if (!trigger || !panel) return;

    const openMenu = () => {
      backdrop.classList.add('active');
      panel.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      backdrop.classList.remove('active');
      panel.classList.remove('active');
      document.body.style.overflow = '';
    };

    trigger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);
  }

  // Helper to close mobile hamburger drawer when modal triggers are activated
  function closeMobileNavIfOpen() {
    const backdrop = document.querySelector('.mobile-nav-backdrop');
    const panel = document.querySelector('.mobile-nav-panel');
    if (backdrop && panel) {
      backdrop.classList.remove('active');
      panel.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Global Master Click Delegation Listener for All Nav Buttons & Modals
  document.addEventListener('click', (e) => {
    // 1. Search Modal Trigger
    const searchBtn = e.target.closest('.search-trigger-btn, .open-search-modal');
    if (searchBtn) {
      e.preventDefault();
      closeMobileNavIfOpen();
      if (typeof window.openSearchModal === 'function') window.openSearchModal();
      return;
    }

    // 2. Favorites Modal Trigger
    const favBtn = e.target.closest('.favorites-trigger-btn, a[href*="favorites.html"], .open-favorites-modal');
    if (favBtn) {
      e.preventDefault();
      closeMobileNavIfOpen();
      if (typeof window.openFavModal === 'function') window.openFavModal();
      return;
    }

    // 3. Auth Modal Trigger (Sign In / Register / Person Icon)
    const authBtn = e.target.closest('.auth-trigger-btn, a[href*="login.html"], a[href*="register.html"], .open-auth-modal');
    if (authBtn) {
      e.preventDefault();
      closeMobileNavIfOpen();
      const href = authBtn.getAttribute('href') || '';
      const tab = href.includes('register') ? 'register' : 'login';
      if (typeof window.openAuthModal === 'function') window.openAuthModal(tab);
      return;
    }
  });

  // Global Search Overlay System
  function initSearchOverlay() {
    let overlay = document.querySelector('.search-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'search-overlay';
      document.body.appendChild(overlay);
    }

    // Always inject standardized luxury search modal container
    overlay.innerHTML = `
      <div class="search-modal-container">
        <div class="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary-subtle">
          <div>
            <span class="badge badge-editorial mb-1"><i class="bi bi-search me-1"></i>GLOBAL SEARCH</span>
            <h4 class="font-heading mb-0 fs-3 text-main">Search CULINAIRE</h4>
          </div>
          <button class="search-close-btn" aria-label="Close search">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>

        <div class="search-input-group mb-4">
          <i class="bi bi-search search-icon-inside"></i>
          <input type="text" class="search-input-field" placeholder="Search masterclasses, recipes, chefs, techniques..." autofocus autocomplete="off">
        </div>

        <div class="search-results-box">
          <div class="text-center py-4">
            <i class="bi bi-search text-accent fs-2 mb-2 d-block opacity-50"></i>
            <p class="text-muted small mb-0">Start typing to search across all masterclasses, recipes, and chef guides...</p>
          </div>
        </div>
      </div>
    `;

    const closeBtn = overlay.querySelector('.search-close-btn');
    const input = overlay.querySelector('.search-input-field');
    const resultsContainer = overlay.querySelector('.search-results-box');

    const openSearch = () => {
      overlay.classList.add('active');
      if (input) {
        input.value = '';
        if (resultsContainer) {
          resultsContainer.innerHTML = `
            <div class="text-center py-4">
              <i class="bi bi-search text-accent fs-2 mb-2 d-block opacity-50"></i>
              <p class="text-muted small mb-0">Start typing to search across all masterclasses, recipes, and chef guides...</p>
            </div>
          `;
        }
        setTimeout(() => input.focus(), 150);
      }
    };

    const closeSearch = () => {
      overlay.classList.remove('active');
    };

    window.openSearchModal = openSearch;

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeSearch();
      }
    });

    if (input && resultsContainer) {
      input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
          resultsContainer.innerHTML = `
            <div class="text-center py-4">
              <i class="bi bi-search text-accent fs-2 mb-2 d-block opacity-50"></i>
              <p class="text-muted small mb-0">Start typing to search across all masterclasses, recipes, and chef guides...</p>
            </div>
          `;
          return;
        }

        const matchedRecipes = CULINAIRE_DATA.recipes.filter(r => r.title.toLowerCase().includes(query) || r.cuisine.toLowerCase().includes(query));
        const matchedMC = CULINAIRE_DATA.masterclasses.filter(m => m.title.toLowerCase().includes(query) || m.category.toLowerCase().includes(query));
        const matchedChefs = CULINAIRE_DATA.chefs.filter(c => c.name.toLowerCase().includes(query) || c.specialty.toLowerCase().includes(query));

        let html = '';

        if (matchedRecipes.length) {
          html += '<div class="search-result-group-title">Recipes</div>';
          matchedRecipes.forEach(r => {
            html += `<a href="recipe-detail.html?id=${r.id}" class="search-result-item">
              <img src="${r.image}" alt="${r.title}" class="search-result-img">
              <div class="flex-grow-1 min-w-0">
                <div class="fw-semibold text-truncate mb-0">${r.title}</div>
                <div class="text-muted small">${r.author || 'Chef Master'} &bull; ${r.prepTime || '15 mins'}</div>
              </div>
              <span class="badge badge-editorial flex-shrink-0">${r.cuisine}</span>
            </a>`;
          });
        }

        if (matchedMC.length) {
          html += '<div class="search-result-group-title">Masterclasses</div>';
          matchedMC.forEach(m => {
            html += `<a href="masterclass-detail.html?id=${m.id}" class="search-result-item">
              <img src="${m.image}" alt="${m.title}" class="search-result-img">
              <div class="flex-grow-1 min-w-0">
                <div class="fw-semibold text-truncate mb-0">${m.title}</div>
                <div class="text-muted small">${m.chefName} &bull; ${m.duration}</div>
              </div>
              <span class="badge bg-warning text-dark font-heading fw-bold flex-shrink-0">${m.difficulty}</span>
            </a>`;
          });
        }

        if (matchedChefs.length) {
          html += '<div class="search-result-group-title">Master Chefs</div>';
          matchedChefs.forEach(c => {
            html += `<a href="masterclasses.html" class="search-result-item">
              <img src="${c.image}" alt="${c.name}" class="search-result-img rounded-circle">
              <div class="flex-grow-1 min-w-0">
                <div class="fw-semibold text-truncate mb-0">${c.name}</div>
                <div class="text-muted small">${c.specialty}</div>
              </div>
              <span class="badge bg-secondary flex-shrink-0">${c.location}</span>
            </a>`;
          });
        }

        if (!html) {
          html = `
            <div class="text-center py-4">
              <i class="bi bi-search-heart text-muted fs-2 mb-2 d-block"></i>
              <p class="text-muted mb-0">No matching results found for "<span class="text-main fw-semibold">${query}</span>"</p>
            </div>
          `;
        }

        resultsContainer.innerHTML = html;
      });
    }
  }

  // Global Auth Modal Controller
  function initAuthModal() {
    let overlay = document.querySelector('#auth-modal-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'auth-modal-overlay';
      overlay.id = 'auth-modal-overlay';
      overlay.innerHTML = `
        <div class="auth-modal-card">
          <button class="auth-modal-close" id="auth-modal-close-btn" aria-label="Close"><i class="bi bi-x-lg"></i></button>

          <div class="text-center mb-4">
            <span class="brand-logo fs-3">CULINAIRE <span class="brand-accent-dot"></span></span>
            <p class="text-muted small mt-1 mb-0">Masterclass & Chef Guides Atelier</p>
          </div>

          <div class="auth-modal-tabs">
            <button class="auth-modal-tab-btn active" data-tab="login">Sign In</button>
            <button class="auth-modal-tab-btn" data-tab="register">Create Account</button>
          </div>

          <!-- Google Quick Auth -->
          <button type="button" class="btn-google-auth w-100 mb-3" id="google-login-btn">
            <svg class="google-icon" width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          <div class="auth-divider mb-4">
            <span>OR EMAIL PORTAL</span>
          </div>

          <!-- Sign In Form -->
          <form id="modal-login-form" class="auth-form-animated">
            <div class="auth-input-group mb-3">
              <i class="bi bi-envelope auth-input-icon"></i>
              <input type="email" id="modal-login-email" class="auth-input-field ps-5" placeholder="Email Address" required value="chef.student@culinaire.com">
            </div>
            <div class="auth-input-group mb-3">
              <i class="bi bi-lock auth-input-icon"></i>
              <input type="password" id="modal-login-pass" class="auth-input-field ps-5" placeholder="Password" required value="••••••••">
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <label class="form-check-label small text-muted">
                <input type="checkbox" class="form-check-input me-1" checked> Remember me
              </label>
              <a href="#" class="small text-accent text-decoration-none" onclick="showToast('Password reset link sent to your email', 'info'); return false;">Forgot Password?</a>
            </div>
            <button type="submit" class="btn-culinaire btn-culinaire-accent w-100 py-3 text-uppercase font-heading fw-bold tracking-wider">
              LOG IN TO PORTAL <i class="bi bi-arrow-right ms-1"></i>
            </button>
          </form>

          <!-- Create Account Form -->
          <form id="modal-register-form" class="auth-form-animated d-none">
            <div class="auth-input-group mb-3">
              <i class="bi bi-person auth-input-icon"></i>
              <input type="text" id="modal-reg-name" class="auth-input-field ps-5" placeholder="Full Name" required value="Marcus Vance">
            </div>
            <div class="auth-input-group mb-3">
              <i class="bi bi-envelope auth-input-icon"></i>
              <input type="email" id="modal-reg-email" class="auth-input-field ps-5" placeholder="Email Address" required value="marcus.vance@culinaire.com">
            </div>
            <div class="auth-input-group mb-3">
              <i class="bi bi-lock auth-input-icon"></i>
              <input type="password" id="modal-reg-pass" class="auth-input-field ps-5" placeholder="Create Password" required value="••••••••">
            </div>
            <button type="submit" class="btn-culinaire btn-culinaire-primary w-100 py-3 text-uppercase font-heading fw-bold tracking-wider">
              CREATE ACCOUNT <i class="bi bi-person-plus ms-1"></i>
            </button>
          </form>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    const openModal = (initialTab = 'login') => {
      overlay.classList.add('active');
      switchTab(initialTab);
    };

    window.openAuthModal = openModal;

    const closeModal = () => {
      overlay.classList.remove('active');
    };

    const urlParams = new URLSearchParams(window.location.search);
    const authParam = urlParams.get('auth');
    if (authParam === 'login' || authParam === 'register') {
      setTimeout(() => openModal(authParam), 150);
    }

    const switchTab = (tabName) => {
      const tabBtns = overlay.querySelectorAll('.auth-modal-tab-btn');
      const loginForm = overlay.querySelector('#modal-login-form');
      const regForm = overlay.querySelector('#modal-register-form');

      tabBtns.forEach(btn => {
        if (btn.dataset.tab === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      if (tabName === 'login') {
        loginForm.classList.remove('d-none');
        loginForm.classList.add('animate-form-in');
        regForm.classList.add('d-none');
      } else {
        loginForm.classList.add('d-none');
        regForm.classList.remove('d-none');
        regForm.classList.add('animate-form-in');
      }
    };

    // Global Click Delegation for opening Auth Modal & Google Login
    document.addEventListener('click', (e) => {
      const googleBtn = e.target.closest('#google-login-btn');
      if (googleBtn) {
        e.preventDefault();
        showToast('Connecting to Google Account...', 'info');
        setTimeout(() => {
          const user = {
            name: 'Julian Vance (Google)',
            email: 'julian.vance@gmail.com',
            initials: 'JV',
            role: 'Executive Member'
          };
          Storage.setUser(user);
          initAuthUI();
          closeModal();
          showToast(`Successfully logged in with Google as ${user.name}!`, 'success');
        }, 800);
        return;
      }

      const trigger = e.target.closest('a[href*="login.html"], a[href*="register.html"], .auth-trigger-btn, .open-auth-modal');
      if (trigger) {
        e.preventDefault();
        const tab = (trigger.getAttribute('href') || '').includes('register') ? 'register' : 'login';
        openModal(tab);
        return;
      }

      const closeBtn = e.target.closest('#auth-modal-close-btn');
      if (closeBtn || e.target === overlay) {
        closeModal();
      }

      const tabBtn = e.target.closest('.auth-modal-tab-btn');
      if (tabBtn) {
        switchTab(tabBtn.dataset.tab);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });

    // Login Form Submit
    const loginForm = overlay.querySelector('#modal-login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = overlay.querySelector('#modal-login-email').value || 'chef.student@culinaire.com';
        const name = email.split('@')[0].replace('.', ' ');
        const user = {
          name: name.charAt(0).toUpperCase() + name.slice(1),
          email: email,
          initials: name.substring(0, 2).toUpperCase(),
          role: 'Executive Member'
        };
        Storage.setUser(user);
        initAuthUI();
        closeModal();
        showToast(`Welcome back, ${user.name}!`, 'success');
      });
    }

    // Register Form Submit
    const regForm = overlay.querySelector('#modal-register-form');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = overlay.querySelector('#modal-reg-name').value || 'New Student';
        const email = overlay.querySelector('#modal-reg-email').value || 'student@culinaire.com';
        const user = {
          name: name,
          email: email,
          initials: name.substring(0, 2).toUpperCase(),
          role: 'Executive Member'
        };
        Storage.setUser(user);
        initAuthUI();
        closeModal();
        showToast(`Account created! Welcome to CULINAIRE, ${user.name}!`, 'success');
      });
    }
  }

  // Global Favorites Modal Controller
  function initFavoritesModal() {
    let overlay = document.querySelector('#favorites-modal-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'favorites-modal-overlay';
      overlay.id = 'favorites-modal-overlay';
      overlay.innerHTML = `
        <div class="favorites-modal-card">
          <button class="auth-modal-close" id="fav-modal-close-btn" aria-label="Close"><i class="bi bi-x-lg"></i></button>
          <div class="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
            <h4 class="font-heading mb-0 fs-4"><i class="bi bi-heart-fill text-danger me-2"></i>Your Favorites</h4>
            <span class="badge badge-editorial" id="fav-modal-count-badge">0 Saved</span>
          </div>
          <div class="fav-modal-list" id="fav-modal-list-body">
            <!-- Dynamic populated favorites -->
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    const openFavModal = () => {
      renderFavModalContent();
      overlay.classList.add('active');
    };

    window.openFavModal = openFavModal;

    const closeFavModal = () => {
      overlay.classList.remove('active');
    };

    const renderFavModalContent = () => {
      const favObj = Storage.getFavorites();
      const favMC = favObj.masterclasses || [];
      const favRecipes = favObj.recipes || [];

      const listBody = overlay.querySelector('#fav-modal-list-body');
      const countBadge = overlay.querySelector('#fav-modal-count-badge');
      const totalCount = favMC.length + favRecipes.length;

      if (countBadge) countBadge.textContent = `${totalCount} Saved`;

      if (totalCount === 0) {
        listBody.innerHTML = `
          <div class="text-center py-5">
            <i class="bi bi-heart text-muted opacity-50 fs-1 mb-3 d-block"></i>
            <h6 class="font-heading text-main fs-5 mb-2">No Favorites Saved Yet</h6>
            <p class="text-muted small max-w-sm mx-auto mb-4">Click the heart icon on any masterclass or recipe to save it here for instant access.</p>
            <a href="masterclasses.html" class="btn-culinaire btn-culinaire-outline btn-sm">BROWSE MASTERCLASSES</a>
          </div>
        `;
        return;
      }

      let html = '';

      if (favMC.length) {
        html += '<h6 class="text-overline mb-2">Saved Masterclasses</h6>';
        favMC.forEach(id => {
          const item = CULINAIRE_DATA.masterclasses.find(m => m.id === id);
          if (item) {
            html += `
              <div class="fav-modal-item">
                <img src="${item.image}" alt="${item.title}" class="fav-modal-thumb">
                <div class="flex-grow-1 min-w-0">
                  <h6 class="font-body fw-semibold text-truncate mb-1"><a href="masterclass-detail.html?id=${item.id}">${item.title}</a></h6>
                  <span class="text-muted small"><i class="bi bi-person me-1"></i>${item.chefName}</span>
                </div>
                <button class="btn-icon btn-sm remove-fav-modal-btn text-danger border-0 bg-transparent" data-type="masterclass" data-id="${item.id}" title="Remove">
                  <i class="bi bi-trash fs-6"></i>
                </button>
              </div>
            `;
          }
        });
      }

      if (favRecipes.length) {
        html += '<h6 class="text-overline mt-3 mb-2">Saved Recipes & Guides</h6>';
        favRecipes.forEach(id => {
          const item = CULINAIRE_DATA.recipes.find(r => r.id === id);
          if (item) {
            html += `
              <div class="fav-modal-item">
                <img src="${item.image}" alt="${item.title}" class="fav-modal-thumb">
                <div class="flex-grow-1 min-w-0">
                  <h6 class="font-body fw-semibold text-truncate mb-1"><a href="recipe-detail.html?id=${item.id}">${item.title}</a></h6>
                  <span class="text-muted small"><i class="bi bi-clock me-1"></i>${item.cookTime}</span>
                </div>
                <button class="btn-icon btn-sm remove-fav-modal-btn text-danger border-0 bg-transparent" data-type="recipe" data-id="${item.id}" title="Remove">
                  <i class="bi bi-trash fs-6"></i>
                </button>
              </div>
            `;
          }
        });
      }

      listBody.innerHTML = html;
    };

    // Global Click Listener for opening Favorites Modal
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('a[href*="favorites.html"], .favorites-trigger-btn, .open-favorites-modal');
      if (trigger) {
        e.preventDefault();
        openFavModal();
        return;
      }

      const closeBtn = e.target.closest('#fav-modal-close-btn');
      if (closeBtn || e.target === overlay) {
        closeFavModal();
      }

      const removeBtn = e.target.closest('.remove-fav-modal-btn');
      if (removeBtn) {
        e.preventDefault();
        const type = removeBtn.dataset.type;
        const id = removeBtn.dataset.id;
        const favs = Storage.getFavorites();
        const key = type === 'recipe' ? 'recipes' : 'masterclasses';
        const index = favs[key].indexOf(id);
        if (index > -1) {
          favs[key].splice(index, 1);
          Storage.setFavorites(favs);
          renderFavModalContent();
          showToast('Removed from favorites', 'info');
        }
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeFavModal();
      }
    });
  }

  // Global Popup Dashboard Modal Card System (With 4 Inner Left Sidebar Menus)
  function initDashboardDrawer() {
    let overlay = document.querySelector('#dashboard-modal-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'dashboard-modal-overlay';
      overlay.id = 'dashboard-modal-overlay';

      const user = Storage.getUser() || {
        name: 'Chef Auguste',
        email: 'auguste@culinaire.com',
        initials: 'CA',
        role: 'Intermediate Member'
      };

      overlay.innerHTML = `
        <div class="dashboard-modal-card">
          <!-- 1. Left Sidebar Navigation Menu (4 Menus) -->
          <div class="dash-modal-sidebar">
            <div>
              <div class="dash-sidebar-header">
                <span class="brand-logo fs-4">CULINAIRE <span class="brand-accent-dot"></span></span>
                <p class="text-muted small mb-0 mt-1">Student Portal</p>
              </div>

              <!-- 4 Side Menu Tabs -->
              <div class="dash-menu-nav">
                <button type="button" class="dash-menu-tab-btn active" data-tab="overview">
                  <i class="bi bi-speedometer2 me-2"></i>Overview
                </button>
                <button type="button" class="dash-menu-tab-btn" data-tab="courses">
                  <i class="bi bi-journal-bookmark me-2"></i>My Courses
                </button>
                <button type="button" class="dash-menu-tab-btn" data-tab="live">
                  <i class="bi bi-broadcast me-2"></i>Live Sessions
                </button>
                <button type="button" class="dash-menu-tab-btn" data-tab="settings">
                  <i class="bi bi-person-gear me-2"></i>Settings
                </button>
              </div>
            </div>

            <!-- Sidebar Footer -->
            <div class="pt-3 border-top">
              <button type="button" class="btn btn-link text-danger text-decoration-none p-0 small fw-semibold logout-btn">
                <i class="bi bi-box-arrow-right me-1"></i> Sign Out
              </button>
            </div>
          </div>

          <!-- 2. Main Content Area -->
          <div class="dash-modal-main">
            <div class="dash-modal-header">
              <h5 class="font-heading mb-0 fs-4 text-main" id="dash-modal-title">Executive Overview</h5>
              <button class="auth-modal-close" id="dash-modal-close-btn" aria-label="Close"><i class="bi bi-x-lg"></i></button>
            </div>

            <div class="dash-modal-body">
              <!-- TAB 1: OVERVIEW -->
              <div class="dash-tab-panel active" id="dash-panel-overview">
                <!-- User Profile Banner -->
                <div class="drawer-profile-card d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center gap-3">
                    <div class="drawer-avatar-circle">${user.initials || 'CA'}</div>
                    <div>
                      <span class="badge badge-editorial mb-1"><i class="bi bi-star-fill text-accent me-1"></i>${user.role || 'Intermediate Member'}</span>
                      <h5 class="font-heading mb-0 text-main fs-4">Welcome back, ${user.name.split(' ')[0]}</h5>
                      <span class="text-muted small"><i class="bi bi-geo-alt me-1"></i>London, UK &bull; Active Scholar</span>
                    </div>
                  </div>
                </div>

                <!-- 4 KPI Stat Cards -->
                <div class="drawer-kpi-grid">
                  <div class="drawer-kpi-card text-center">
                    <div class="drawer-kpi-icon mx-auto"><i class="bi bi-journal-bookmark"></i></div>
                    <h4 class="font-heading text-main fs-3 mb-0">2</h4>
                    <span class="text-muted small text-uppercase tracking-wider">Courses</span>
                  </div>
                  <div class="drawer-kpi-card text-center">
                    <div class="drawer-kpi-icon mx-auto"><i class="bi bi-check2-circle"></i></div>
                    <h4 class="font-heading text-main fs-3 mb-0">9</h4>
                    <span class="text-muted small text-uppercase tracking-wider">Lessons</span>
                  </div>
                  <div class="drawer-kpi-card text-center">
                    <div class="drawer-kpi-icon mx-auto"><i class="bi bi-clock-history"></i></div>
                    <h4 class="font-heading text-main fs-3 mb-0">14h</h4>
                    <span class="text-muted small text-uppercase tracking-wider">Hours</span>
                  </div>
                  <div class="drawer-kpi-card text-center">
                    <div class="drawer-kpi-icon mx-auto"><i class="bi bi-trophy"></i></div>
                    <h4 class="font-heading text-main fs-3 mb-0">Rank 2</h4>
                    <span class="text-muted small text-uppercase tracking-wider">Rank</span>
                  </div>
                </div>

                <!-- Active Course Progress -->
                <div class="mb-3">
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <h6 class="text-overline mb-0">Continue Learning</h6>
                    <span class="badge bg-success-subtle text-success border border-success-subtle">65% Done</span>
                  </div>
                  <div class="drawer-course-card">
                    <div class="d-flex align-items-center gap-3 mb-3">
                      <img src="assets/images/masterclass_indian.jpg" alt="Modern Indian Cuisine" class="rounded" width="64" height="48" style="object-fit:cover;">
                      <div>
                        <h6 class="font-heading mb-1 text-main fs-6"><a href="masterclass-detail.html?id=mc-modern-indian" class="text-main">Modern Indian Cuisine</a></h6>
                        <span class="text-muted small"><i class="bi bi-person me-1"></i>Chef Arjun Rao &bull; Lesson 07 of 12</span>
                      </div>
                    </div>
                    <div class="drawer-progress-bar mb-3">
                      <div class="drawer-progress-fill" style="width: 65%;"></div>
                    </div>
                    <a href="masterclass-detail.html?id=mc-modern-indian" class="btn-culinaire btn-culinaire-accent w-100 py-2 text-uppercase fs-7">
                      RESUME LESSON 07 <i class="bi bi-play-circle ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>

              <!-- TAB 2: MY COURSES -->
              <div class="dash-tab-panel" id="dash-panel-courses">
                <h6 class="text-overline mb-3">Your Active & Completed Courses</h6>
                
                <div class="card p-3 mb-3 border">
                  <div class="d-flex align-items-center gap-3">
                    <img src="assets/images/masterclass_indian.jpg" class="rounded" width="80" height="60" style="object-fit:cover;">
                    <div class="flex-grow-1">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <h6 class="font-heading mb-0 fs-6">Modern Indian Cuisine</h6>
                        <span class="badge bg-accent text-white">65% Progress</span>
                      </div>
                      <span class="text-muted small">12 Lessons &bull; Chef Arjun Rao</span>
                      <div class="progress mt-2" style="height:5px;">
                        <div class="progress-bar bg-accent" style="width:65%"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card p-3 mb-3 border">
                  <div class="d-flex align-items-center gap-3">
                    <img src="assets/images/masterclass_pasta.jpg" class="rounded" width="80" height="60" style="object-fit:cover;">
                    <div class="flex-grow-1">
                      <div class="d-flex justify-content-between align-items-center mb-1">
                        <h6 class="font-heading mb-0 fs-6">Artisan Pasta Geometry</h6>
                        <span class="badge bg-success text-white">100% Completed</span>
                      </div>
                      <span class="text-muted small">8 Lessons &bull; Chef Sofia Moretti</span>
                      <div class="progress mt-2" style="height:5px;">
                        <div class="progress-bar bg-success" style="width:100%"></div>
                      </div>
                    </div>
                  </div>
                  <button class="btn-culinaire btn-culinaire-outline btn-sm mt-3 w-100" onclick="showToast('Downloading Artisan Pasta Certificate (PDF)...', 'success')">
                    <i class="bi bi-download me-1"></i> DOWNLOAD CERTIFICATE
                  </button>
                </div>
              </div>

              <!-- TAB 3: LIVE SESSIONS -->
              <div class="dash-tab-panel" id="dash-panel-live">
                <h6 class="text-overline mb-3">Live Chef Broadcasts & Masterclasses</h6>

                <div class="card p-3 mb-3 border">
                  <div class="d-flex align-items-center gap-3">
                    <img src="assets/images/chef_arjun.jpg" class="rounded-circle" width="56" height="56" style="object-fit:cover;">
                    <div class="flex-grow-1">
                      <span class="badge bg-danger text-white mb-1"><i class="bi bi-broadcast me-1"></i>LIVE STREAM TODAY</span>
                      <h6 class="font-heading mb-1 fs-6">Precision Spice Architecture</h6>
                      <span class="text-muted small"><i class="bi bi-person me-1"></i>Chef Arjun Rao &bull; Today at 7:00 PM GMT</span>
                    </div>
                  </div>
                  <button class="btn-culinaire btn-culinaire-accent btn-sm mt-3 w-100" onclick="showToast('RSVP Confirmed! Live stream link sent to your email.', 'success')">
                    JOIN LIVE BROADCAST <i class="bi bi-arrow-right ms-1"></i>
                  </button>
                </div>

                <div class="card p-3 mb-3 border">
                  <div class="d-flex align-items-center gap-3">
                    <img src="assets/images/chef_sofia.jpg" class="rounded-circle" width="56" height="56" style="object-fit:cover;">
                    <div class="flex-grow-1">
                      <span class="badge bg-secondary text-white mb-1">UPCOMING WORKSHOP</span>
                      <h6 class="font-heading mb-1 fs-6">Handmade Ravioli & Emulsion Secret</h6>
                      <span class="text-muted small"><i class="bi bi-person me-1"></i>Chef Sofia Moretti &bull; Oct 5 at 4:30 PM GMT</span>
                    </div>
                  </div>
                  <button class="btn-culinaire btn-culinaire-outline btn-sm mt-3 w-100" onclick="showToast('Added to your calendar schedule!', 'info')">
                    <i class="bi bi-calendar-plus me-1"></i> RESERVE SEAT
                  </button>
                </div>
              </div>

              <!-- TAB 4: SETTINGS -->
              <div class="dash-tab-panel" id="dash-panel-settings">
                <h6 class="text-overline mb-3">Profile Preferences & Account Settings</h6>

                <form id="dash-settings-form" onsubmit="showToast('Profile updated successfully!', 'success'); return false;">
                  <div class="mb-3">
                    <label class="form-label small text-muted">Full Name</label>
                    <input type="text" class="form-control" value="${user.name}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label small text-muted">Email Address</label>
                    <input type="email" class="form-control" value="${user.email}">
                  </div>
                  <div class="mb-3">
                    <label class="form-label small text-muted">Culinary Level</label>
                    <select class="form-select">
                      <option selected>Intermediate Member</option>
                      <option>Professional Chef</option>
                      <option>Master Pastry Artisan</option>
                    </select>
                  </div>
                  <button type="submit" class="btn-culinaire btn-culinaire-accent w-100 py-2 mt-2">
                    SAVE PREFERENCES <i class="bi bi-check-lg ms-1"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    const openModal = () => {
      overlay.classList.add('active');
    };

    const closeModal = () => {
      overlay.classList.remove('active');
    };

    const switchTab = (tabName) => {
      const tabBtns = overlay.querySelectorAll('.dash-menu-tab-btn');
      const tabPanels = overlay.querySelectorAll('.dash-tab-panel');
      const titleEl = overlay.querySelector('#dash-modal-title');

      const titleMap = {
        overview: 'Executive Overview',
        courses: 'My Enrolled Courses',
        live: 'Live Chef Sessions',
        settings: 'Account & Settings'
      };

      if (titleEl && titleMap[tabName]) {
        titleEl.textContent = titleMap[tabName];
      }

      tabBtns.forEach(btn => {
        if (btn.dataset.tab === tabName) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      tabPanels.forEach(panel => {
        if (panel.id === `dash-panel-${tabName}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    };

    window.openDashboardDrawer = openModal;

    // Auto open if openDashboard param is in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('openDashboard') === 'true') {
      setTimeout(() => openModal(), 150);
    }

    // Global Click Listener for Popup Dashboard & Side Menu Tabs
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('a[href*="dashboard.html"], .open-dashboard-btn');
      if (trigger) {
        e.preventDefault();
        openModal();
        return;
      }

      const closeBtn = e.target.closest('#dash-modal-close-btn');
      if (closeBtn || e.target === overlay) {
        closeModal();
      }

      const tabBtn = e.target.closest('.dash-menu-tab-btn');
      if (tabBtn) {
        switchTab(tabBtn.dataset.tab);
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Auth UI Sync
  function initAuthUI() {
    const user = Storage.getUser();
    const navAuthContainer = document.querySelectorAll('.auth-nav-slot');

    navAuthContainer.forEach(slot => {
      if (user) {
        slot.innerHTML = `
          <div class="dropdown d-inline-block">
            <button class="btn-culinaire btn-culinaire-outline py-2 px-3 dropdown-toggle text-capitalize" type="button" data-bs-toggle="dropdown">
              <i class="bi bi-person-circle me-1"></i> ${user.name.split(' ')[0]}
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><a class="dropdown-item" href="dashboard.html"><i class="bi bi-speedometer2 me-2"></i>Dashboard</a></li>
              <li><a class="dropdown-item" href="profile.html"><i class="bi bi-person-gear me-2"></i>Profile Settings</a></li>
              <li><a class="dropdown-item" href="favorites.html"><i class="bi bi-heart me-2"></i>Favorites</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-danger logout-btn" href="#"><i class="bi bi-box-arrow-right me-2"></i>Logout</a></li>
            </ul>
          </div>
        `;
      } else {
        slot.innerHTML = '';
      }
    });

    document.querySelectorAll('.logout-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        Storage.clearUser();
        showToast('Logged out successfully', 'info');
        setTimeout(() => window.location.href = 'index.html', 1000);
      });
    });
  }

  // Favorites Handler
  function initGlobalFavorites() {
    document.addEventListener('click', (e) => {
      const favBtn = e.target.closest('.fav-toggle-btn');
      if (!favBtn) return;

      e.preventDefault();
      const type = favBtn.dataset.type;
      const id = favBtn.dataset.id;
      const favs = Storage.getFavorites();

      const key = type === 'recipe' ? 'recipes' : 'masterclasses';
      const index = favs[key].indexOf(id);

      if (index > -1) {
        favs[key].splice(index, 1);
        favBtn.classList.remove('active');
        favBtn.querySelector('i').className = 'bi bi-heart';
        showToast('Removed from favorites', 'info');
      } else {
        favs[key].push(id);
        favBtn.classList.add('active');
        favBtn.querySelector('i').className = 'bi bi-heart-fill text-danger';
        showToast('Saved to your favorites', 'success');
      }

      Storage.setFavorites(favs);
    });
  }

  /* ==========================================================================
     4. PAGE SPECIFIC HANDLERS
     ========================================================================== */
  function initPageSpecific() {
    if (document.querySelector('#masterclass-grid-container')) initMasterclassFilters();
    if (document.querySelector('#course-detail-title') || document.querySelector('#lessons-list-container')) initMasterclassDetail();
    if (document.querySelector('#recipes-grid-container')) initRecipeFilters();
    if (document.querySelector('#recipe-detail-title')) initRecipeDetail();
    if (document.querySelector('#contact-form')) initContactForm();
    if (document.querySelector('#login-form')) initLoginForm();
    if (document.querySelector('#register-form')) initRegisterForm();
    if (document.querySelector('#favorites-recipes-container')) initFavoritesPage();
    if (document.querySelector('#profile-form')) initProfilePage();
  }

  // Masterclass Filtering Logic
  function initMasterclassFilters() {
    const grid = document.querySelector('#masterclass-grid-container');
    if (!grid) return;

    const renderGrid = (items) => {
      const favs = Storage.getFavorites().masterclasses;
      if (!items || items.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted fs-5">No masterclasses found in this category.</p></div>';
        return;
      }
      grid.innerHTML = items.map(mc => {
        const isFav = favs.includes(mc.id);
        return `
          <div class="col-md-6 col-lg-4">
            <div class="card-culinaire card-hover-tilt revealed">
              <div class="card-img-wrapper">
                <img src="${mc.image}" alt="${mc.title}" loading="lazy">
                <button class="btn-icon fav-toggle-btn position-absolute top-0 end-0 m-3 ${isFav ? 'active' : ''}" data-type="masterclass" data-id="${mc.id}">
                  <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
                </button>
              </div>
              <div class="card-body-custom">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="badge-editorial">${mc.category}</span>
                  <span class="text-muted small"><i class="bi bi-star-fill text-warning me-1"></i>${mc.rating}</span>
                </div>
                <h3 class="card-title-custom"><a href="masterclass-detail.html?id=${mc.id}">${mc.title}</a></h3>
                <p class="text-muted small mb-3">${mc.chefName}</p>
                <div class="card-meta-list">
                  <span class="card-meta-item"><i class="bi bi-play-circle me-1"></i>${mc.lessonsCount} Lessons</span>
                  <span class="card-meta-item"><i class="bi bi-bar-chart me-1"></i>${mc.difficulty}</span>
                </div>
                <div class="card-footer-custom">
                  <a href="masterclass-detail.html?id=${mc.id}" class="btn-culinaire btn-culinaire-outline btn-sm w-100">
                    EXPLORE COURSE <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    };

    renderGrid(CULINAIRE_DATA.masterclasses);

    const categoryBtns = document.querySelectorAll('.category-filter-btn');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active', 'btn-culinaire-primary'));
        categoryBtns.forEach(b => b.classList.add('btn-culinaire-outline'));
        btn.classList.add('active', 'btn-culinaire-primary');
        btn.classList.remove('btn-culinaire-outline');

        const cat = btn.dataset.category;
        const filtered = cat === 'All' ? CULINAIRE_DATA.masterclasses : CULINAIRE_DATA.masterclasses.filter(m => m.category === cat);
        renderGrid(filtered);
      });
    });
  }

  // Masterclass Detail Interaction
  function initMasterclassDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id') || 'mc-modern-indian';
    const course = CULINAIRE_DATA.masterclasses.find(m => m.id === courseId) || CULINAIRE_DATA.masterclasses[0];

    const titleEl = document.querySelector('#course-detail-title');
    if (titleEl) titleEl.textContent = course.title;

    const lessonsList = document.querySelector('#lessons-list-container');
    const progressObj = Storage.getProgress();
    const completedLessons = progressObj[course.id] || [];

    if (lessonsList && course.lessons) {
      lessonsList.innerHTML = course.lessons.map(les => {
        const isDone = completedLessons.includes(les.id);
        return `
          <div class="d-flex align-items-center justify-content-between p-3.5 mb-3 bg-card-bg border rounded shadow-subtle hover-elevate">
            <div class="d-flex align-items-center gap-3">
              <input type="checkbox" class="form-check-input lesson-check flex-shrink-0" data-course="${course.id}" data-lesson="${les.id}" ${isDone ? 'checked' : ''} style="width: 1.25rem; height: 1.25rem; cursor: pointer;">
              <div>
                <h6 class="mb-1 font-body fw-semibold fs-6 ${isDone ? 'text-decoration-line-through text-muted' : 'text-main'}">${les.title}</h6>
                <span class="text-muted small"><i class="bi bi-clock me-1"></i>${les.duration}</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2 flex-shrink-0 ms-2">
              ${les.free ? '<span class="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 me-1">Free Preview</span>' : '<span class="text-muted small me-2"><i class="bi bi-lock me-1"></i> Locked</span>'}
              <button class="btn-culinaire btn-culinaire-outline btn-sm py-1 px-3 play-lesson-btn" data-title="${les.title}"><i class="bi bi-play-fill me-1"></i> Watch</button>
            </div>
          </div>
        `;
      }).join('');

      document.querySelectorAll('.lesson-check').forEach(chk => {
        chk.addEventListener('change', (e) => {
          const cId = e.target.dataset.course;
          const lId = e.target.dataset.lesson;
          let current = progressObj[cId] || [];
          if (e.target.checked) {
            if (!current.includes(lId)) current.push(lId);
            showToast('Lesson completed!', 'success');
          } else {
            current = current.filter(x => x !== lId);
          }
          progressObj[cId] = current;
          Storage.setProgress(progressObj);
        });
      });
    }
  }

  // Recipes Page Filters
  function initRecipeFilters() {
    const grid = document.querySelector('#recipes-grid-container');
    if (!grid) return;

    const renderRecipes = (list) => {
      const favs = Storage.getFavorites().recipes;
      if (!list || list.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted fs-5">No recipes found matching your search.</p></div>';
        return;
      }
      grid.innerHTML = list.map(r => {
        const isFav = favs.includes(r.id);
        return `
          <div class="col-md-6 col-lg-4">
            <div class="card-culinaire card-hover-tilt revealed">
              <div class="card-img-wrapper">
                <img src="${r.image}" alt="${r.title}" loading="lazy">
                <button class="btn-icon fav-toggle-btn position-absolute top-0 end-0 m-3 ${isFav ? 'active' : ''}" data-type="recipe" data-id="${r.id}">
                  <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
                </button>
              </div>
              <div class="card-body-custom">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <span class="badge-editorial">${r.cuisine}</span>
                  <span class="text-muted small"><i class="bi bi-clock me-1"></i>${r.cookTime}</span>
                </div>
                <h3 class="card-title-custom"><a href="recipe-detail.html?id=${r.id}">${r.title}</a></h3>
                <p class="text-muted small mb-3">By ${r.chefName}</p>
                <div class="card-footer-custom">
                  <a href="recipe-detail.html?id=${r.id}" class="btn-culinaire btn-culinaire-outline btn-sm w-100">
                    VIEW RECIPE <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    };

    renderRecipes(CULINAIRE_DATA.recipes);

    const searchInput = document.querySelector('#recipe-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = CULINAIRE_DATA.recipes.filter(r => r.title.toLowerCase().includes(term) || r.ingredients.some(i => i.toLowerCase().includes(term)));
        renderRecipes(filtered);
      });
    }
  }

  // Recipe Detail Handlers
  function initRecipeDetail() {
    const printBtn = document.querySelector('#print-recipe-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => window.print());
    }
  }

  // Contact Form
  function initContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been sent to the CULINAIRE team.', 'success');
      form.reset();
    });
  }

  // Login Form
  function initLoginForm() {
    const form = document.querySelector('#login-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.querySelector('#login-email').value;
      const user = { name: email.split('@')[0], email: email, role: 'student', location: 'London, UK', level: 'Intermediate Scholar' };
      Storage.setUser(user);
      showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    });
  }

  // Register Form
  function initRegisterForm() {
    const form = document.querySelector('#register-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.querySelector('#register-name').value;
      const email = document.querySelector('#register-email').value;
      const user = { name: name, email: email, role: 'student', location: 'London, UK', level: 'Intermediate Scholar' };
      Storage.setUser(user);
      showToast('Account created! Welcome to CULINAIRE.', 'success');
      setTimeout(() => window.location.href = 'dashboard.html', 1000);
    });
  }

  // Favorites Page renderer
  function initFavoritesPage() {
    const favs = Storage.getFavorites();
    const container = document.querySelector('#favorites-render-container');
    if (!container) return;

    const savedRecipeObjs = CULINAIRE_DATA.recipes.filter(r => favs.recipes.includes(r.id));
    if (!savedRecipeObjs.length) {
      container.innerHTML = `
        <div class="text-center py-5">
          <i class="bi bi-heartbreak text-muted fs-1 mb-3"></i>
          <h4 class="font-heading">No saved recipes yet</h4>
          <p class="text-muted">Explore our recipe collection and heart your favorites.</p>
          <a href="recipes.html" class="btn-culinaire btn-culinaire-primary mt-3">EXPLORE RECIPES</a>
        </div>
      `;
    } else {
      container.innerHTML = savedRecipeObjs.map(r => `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card-culinaire">
            <div class="card-img-wrapper">
              <img src="${r.image}" alt="${r.title}">
              <button class="btn-icon fav-toggle-btn active position-absolute top-0 end-0 m-3" data-type="recipe" data-id="${r.id}">
                <i class="bi bi-heart-fill text-danger"></i>
              </button>
            </div>
            <div class="card-body-custom">
              <h4 class="card-title-custom"><a href="recipe-detail.html?id=${r.id}">${r.title}</a></h4>
              <a href="recipe-detail.html?id=${r.id}" class="btn-culinaire btn-culinaire-outline btn-sm w-100 mt-2">VIEW RECIPE</a>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  // Profile Page Handler & Storage Sync
  function initProfilePage() {
    const user = Storage.getUser() || { 
      name: 'Culinary Student', 
      email: 'student@culinaire.com', 
      location: 'London, UK', 
      level: 'Intermediate',
      favoriteCuisines: ['Indian', 'Italian', 'French']
    };

    const nameInput = document.querySelector('#profile-name');
    const emailInput = document.querySelector('#profile-email');
    const locationInput = document.querySelector('#profile-location');
    const levelSelect = document.querySelector('#profile-level');
    const cuisineCheckboxes = document.querySelectorAll('.cuisine-checkbox');

    if (nameInput) nameInput.value = user.name || '';
    if (emailInput) emailInput.value = user.email || '';
    if (locationInput) locationInput.value = user.location || 'London, UK';
    if (levelSelect) levelSelect.value = user.level || 'Intermediate';

    const favCuisines = user.favoriteCuisines || ['Indian', 'Italian', 'French'];
    cuisineCheckboxes.forEach(chk => {
      chk.checked = favCuisines.includes(chk.value);
    });

    const form = document.querySelector('#profile-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectedCuisines = Array.from(cuisineCheckboxes)
          .filter(chk => chk.checked)
          .map(chk => chk.value);

        const nameParts = (nameInput.value || 'Culinary Student').trim().split(' ');
        const initials = nameParts.length > 1 
          ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase() 
          : nameParts[0].substring(0, 2).toUpperCase();

        const updated = {
          ...user,
          name: nameInput.value,
          email: emailInput.value,
          location: locationInput.value || 'London, UK',
          level: levelSelect.value || 'Intermediate',
          favoriteCuisines: selectedCuisines,
          initials: initials
        };

        Storage.setUser(updated);
        showToast('Profile and preferences updated successfully!', 'success');
        initAuthUI();
      });
    }
  }

  // Back To Top Floating Button Handler (Visible across all sections & pages)
  function initBackToTop() {
    let btn = document.getElementById('backToTop');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'backToTop';
      btn.className = 'back-to-top-btn';
      btn.setAttribute('aria-label', 'Back to top');
      btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
      document.body.appendChild(btn);
    }

    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackToTop);
  } else {
    initBackToTop();
  }

  // Export to global scope
  window.CULINAIRE_DATA = CULINAIRE_DATA;
  window.CULINAIRE_STORAGE = Storage;
})();


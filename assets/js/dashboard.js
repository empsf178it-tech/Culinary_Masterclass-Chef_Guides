/**
 * CULINAIRE — Executive Dashboard Logic
 * Dedicated Dashboard Interactivity & Admin Modal Controller
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initDashboardGreeting();
    initKpiCounters();
    initVideoModal();
    initAdminModal();
    initProfileModal();
    initScheduleRsvp();
    renderDashboardUserProfile();
  });

  // Dynamic Profile & Storage Sync for Dashboard Banner
  function renderDashboardUserProfile() {
    const Storage = window.Storage;
    const user = (Storage && Storage.getUser()) || {
      name: 'Chef Auguste',
      email: 'auguste@culinaire.com',
      location: 'London, UK',
      level: 'Intermediate',
      favoriteCuisines: ['Indian', 'French'],
      initials: 'CA'
    };

    const userNameEl = document.querySelector('#dashboard-user-name');
    const userAvatarEl = document.querySelector('#dashboard-user-avatar');
    const userLevelEl = document.querySelector('#dashboard-user-level');
    const userMetaEl = document.querySelector('#dashboard-user-meta');

    if (userNameEl) userNameEl.textContent = user.name || 'Chef Auguste';

    if (userAvatarEl) {
      let initials = user.initials;
      if (!initials && user.name) {
        const parts = user.name.trim().split(' ');
        initials = parts.length > 1
          ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
          : parts[0].substring(0, 2).toUpperCase();
      }
      userAvatarEl.textContent = initials || 'CA';
    }

    if (userLevelEl) {
      userLevelEl.innerHTML = `<i class="bi bi-star-fill text-warning me-1"></i> ${user.level || 'Intermediate'} Member`;
    }

    if (userMetaEl) {
      const location = user.location || 'London, UK';
      const cuisines = (user.favoriteCuisines && user.favoriteCuisines.length)
        ? user.favoriteCuisines.slice(0, 2).join(' & ')
        : 'Modern Indian';
      userMetaEl.innerHTML = `<i class="bi bi-geo-alt me-1"></i> ${location} • Enrolled in ${cuisines} Masterclass`;
    }
  }

  // Interactive Profile & Settings Modal Controller
  function initProfileModal() {
    const openBtns = document.querySelectorAll('.open-profile-modal-btn');
    const backdrop = document.querySelector('#profile-modal-backdrop');
    const closeBtn = document.querySelector('#close-profile-modal-btn');
    const cancelBtn = document.querySelector('#cancel-profile-modal-btn');
    const form = document.querySelector('#dash-profile-form');

    if (!backdrop) return;

    const openModal = (e) => {
      if (e) e.preventDefault();
      populateForm();
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    const populateForm = () => {
      const Storage = window.Storage;
      const user = (Storage && Storage.getUser()) || {
        name: 'Chef Auguste',
        email: 'auguste@culinaire.com',
        location: 'London, UK',
        level: 'Intermediate',
        favoriteCuisines: ['Indian', 'French']
      };

      const nameInput = document.querySelector('#dash-profile-name');
      const emailInput = document.querySelector('#dash-profile-email');
      const locationInput = document.querySelector('#dash-profile-location');
      const levelSelect = document.querySelector('#dash-profile-level');
      const checkboxes = document.querySelectorAll('.dash-cuisine-checkbox');

      if (nameInput) nameInput.value = user.name || '';
      if (emailInput) emailInput.value = user.email || '';
      if (locationInput) locationInput.value = user.location || 'London, UK';
      if (levelSelect) levelSelect.value = user.level || 'Intermediate';

      const favs = user.favoriteCuisines || ['Indian', 'French'];
      checkboxes.forEach(chk => {
        chk.checked = favs.includes(chk.value);
      });
    };

    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const Storage = window.Storage;
        const currentUser = (Storage && Storage.getUser()) || {};

        const nameVal = document.querySelector('#dash-profile-name').value.trim();
        const emailVal = document.querySelector('#dash-profile-email').value.trim();
        const locationVal = document.querySelector('#dash-profile-location').value.trim();
        const levelVal = document.querySelector('#dash-profile-level').value;
        const checkboxes = document.querySelectorAll('.dash-cuisine-checkbox');

        const selectedCuisines = Array.from(checkboxes)
          .filter(chk => chk.checked)
          .map(chk => chk.value);

        const nameParts = (nameVal || 'Chef Auguste').split(' ');
        const initials = nameParts.length > 1
          ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
          : nameParts[0].substring(0, 2).toUpperCase();

        const updated = {
          ...currentUser,
          name: nameVal,
          email: emailVal,
          location: locationVal || 'London, UK',
          level: levelVal,
          favoriteCuisines: selectedCuisines,
          initials: initials
        };

        if (Storage) Storage.setUser(updated);
        renderDashboardUserProfile();
        closeModal();

        if (window.showToast) {
          window.showToast('Profile & Portal Settings saved successfully!', 'success');
        }
      });
    }
  }

  // Time-aware greeting
  function initDashboardGreeting() {
    const greetingEl = document.querySelector('#dynamic-greeting');
    if (!greetingEl) return;

    const hour = new Date().getHours();
    let text = 'Good Evening';
    if (hour < 12) text = 'Good Morning';
    else if (hour < 18) text = 'Good Afternoon';

    greetingEl.textContent = text;
  }

  // Animated Metric Counter
  function initKpiCounters() {
    const counters = document.querySelectorAll('.kpi-value[data-target]');
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let count = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const timer = setInterval(() => {
        count += step;
        if (count >= target) {
          counter.textContent = target;
          clearInterval(timer);
        } else {
          counter.textContent = count;
        }
      }, 35);
    });
  }

  // Simulated Video Player Modal
  function initVideoModal() {
    const playBtn = document.querySelector('#play-lesson-hero-btn');
    if (!playBtn) return;

    playBtn.addEventListener('click', () => {
      if (window.showToast) {
        window.showToast('Resuming Lesson 05: Slow Cooking & Emulsification Techniques (4K Stream)', 'success');
      }
    });
  }

  // Admin Console Modal Controller
  function initAdminModal() {
    const trigger = document.querySelector('#open-admin-modal-btn');
    const backdrop = document.querySelector('#admin-modal-backdrop');
    const closeBtn = document.querySelector('#close-admin-modal-btn');

    if (!trigger || !backdrop) return;

    const openAdmin = () => {
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
      animateAdminBars();
    };

    const closeAdmin = () => {
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    };

    trigger.addEventListener('click', openAdmin);
    if (closeBtn) closeBtn.addEventListener('click', closeAdmin);

    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeAdmin();
    });
  }

  // Animate Admin Analytics Bars
  function animateAdminBars() {
    const bars = document.querySelectorAll('.chart-bar-item[data-height]');
    bars.forEach(bar => {
      bar.style.height = '0%';
      setTimeout(() => {
        bar.style.height = bar.dataset.height;
      }, 150);
    });
  }

  // Schedule RSVP Action
  function initScheduleRsvp() {
    const rsvpBtns = document.querySelectorAll('.rsvp-session-btn');
    rsvpBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.remove('btn-culinaire-outline');
        btn.classList.add('btn-culinaire-accent');
        btn.innerHTML = '<i class="bi bi-check2-circle me-1"></i> RSVP CONFIRMED';
        if (window.showToast) {
          window.showToast('Seat reserved for Chef Antoine Laurent\'s Live Masterclass!', 'success');
        }
      });
    });
  }

})();

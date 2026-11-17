/**
 * LAGO DI COMO • GUIDA D'AUTORE
 * Core Application Controller (SPA, i18n, Weather, Leaflet, Street View 360°, Step-by-Step Timelines, Quiz & Pass)
 * Aesthetic: Warm Editorial Travel Magazine
 */

(function () {
  'use strict';

  // Global State
  let lenis = null;

  function initLenis() {
    if (typeof Lenis !== 'undefined') {
      try {
        lenis = new Lenis({
          duration: 1.15,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 1.5,
          infinite: false,
          prevent: (node) => {
            return Boolean(
              node && node.closest && (
                node.closest('#detail-modal') ||
                node.closest('.modal-overlay') ||
                node.closest('.modal-container-editorial') ||
                node.closest('.modal-body-scroll-editorial') ||
                node.closest('#pocket-pass-backdrop') ||
                node.closest('.pocket-pass-modal-container')
              )
            );
          }
        });

        function raf(time) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.ComoLenis = lenis;
      } catch (e) {
        console.warn('Lenis init:', e);
      }
    }
  }

  const state = {
    lang: localStorage.getItem('como_guide_lang') || 'it',
    activeTab: 'home',
    culturaleFilter: 'all',
    activeModalItem: null,
    activeModalSubtab: 'details',
    map: null,
    weatherLoaded: false
  };

  // Weather Code Mapping to Icons and Condition Keys
  const weatherCodeMap = {
    0: { key: 'weatherSunny', icon: 'sun' },
    1: { key: 'weatherSunny', icon: 'sun' },
    2: { key: 'weatherPartlyCloudy', icon: 'cloud-sun' },
    3: { key: 'weatherOvercast', icon: 'cloud' },
    45: { key: 'weatherOvercast', icon: 'smog' },
    48: { key: 'weatherOvercast', icon: 'smog' },
    51: { key: 'weatherRain', icon: 'cloud-rain' },
    53: { key: 'weatherRain', icon: 'cloud-rain' },
    55: { key: 'weatherRain', icon: 'cloud-rain' },
    61: { key: 'weatherRain', icon: 'cloud-showers-heavy' },
    63: { key: 'weatherRain', icon: 'cloud-showers-heavy' },
    65: { key: 'weatherRain', icon: 'cloud-showers-heavy' },
    71: { key: 'weatherSnow', icon: 'snowflake' },
    73: { key: 'weatherSnow', icon: 'snowflake' },
    75: { key: 'weatherSnow', icon: 'snowflake' },
    80: { key: 'weatherShowers', icon: 'cloud-rain' },
    81: { key: 'weatherShowers', icon: 'cloud-showers-heavy' },
    82: { key: 'weatherShowers', icon: 'cloud-showers-heavy' },
    95: { key: 'weatherStorm', icon: 'bolt' },
    96: { key: 'weatherStorm', icon: 'bolt' },
    99: { key: 'weatherStorm', icon: 'bolt' }
  };

  // Helper: Return SVG icon based on type (warm terracotta/slate palette)
  function getWeatherSvg(type) {
    switch (type) {
      case 'sun':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#9c5a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      case 'cloud-sun':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#82462c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.94 9.94a5 5 0 0 0-7.88 4.06"></path><path d="M17.5 19H9a5 5 0 0 1-1-9.9 5.5 5.5 0 0 1 10.5 1.9 4 4 0 0 1-1 8Z"></path></svg>`;
      case 'cloud':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#78746e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`;
      case 'cloud-rain':
      case 'cloud-showers-heavy':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#3d4a3e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>`;
      case 'snowflake':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#9e9a93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line><path d="m20 16-4-4 4-4"></path><path d="m4 8 4 4-4 4"></path><path d="m16 4-4 4-4-4"></path><path d="m8 20 4-4 4 4"></path></svg>`;
      case 'bolt':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#9c5a3c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="#78746e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="weather-svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`;
    }
  }

  // 1. Translation Functionality
  function t(key) {
    const dict = i18n[state.lang] || i18n['it'];
    return dict[key] || i18n['it'][key] || key;
  }

  function applyTranslations() {
    // Translate text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) {
        el.innerHTML = t(key);
      }
    });

    // Translate placeholder attributes with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) {
        el.setAttribute('placeholder', t(key));
      }
    });

    // Update active highlight on inline language selector buttons
    document.querySelectorAll('.lang-text-btn').forEach(btn => {
      const langCode = btn.getAttribute('data-lang');
      if (langCode === state.lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update compact language selector trigger label
    const currentCodeEl = document.getElementById('lang-current-code');
    if (currentCodeEl) {
      currentCodeEl.textContent = state.lang.toUpperCase();
    }

    // Re-render cards and timelines for active route tab
    renderAllActiveCards();

    // If modal is currently open, refresh its content in current language
    if (state.activeModalItem) {
      updateModalContent(state.activeModalItem);
    }

    // Refresh quiz result if active
    if (typeof quizState !== 'undefined' && quizState.step === 4) {
      renderQuizResult();
    }

    // Refresh pocket pass if open
    const passBackdrop = document.getElementById('pocket-pass-backdrop');
    if (passBackdrop && passBackdrop.classList.contains('is-active') && window.ComoPass) {
      if (window.ComoPass.currentRoute === 'custom' && typeof quizState !== 'undefined' && quizState.currentCustomItinerary) {
        window.ComoPass.openCustom(quizState.currentCustomItinerary);
      } else {
        window.ComoPass.open(window.ComoPass.currentRoute);
      }
    }
  }

  function setLanguage(lang) {
    if (!i18n[lang]) return;
    state.lang = lang;
    localStorage.setItem('como_guide_lang', lang);
    applyTranslations();
  }

  // 2. Tab Navigation (SPA without page reload)
  function switchTab(tabId) {
    const validTabs = ['home', 'arrivare', 'enogastronomico', 'naturalistico', 'sportivo', 'culturale', 'shopping', 'slow'];
    if (!validTabs.includes(tabId)) {
      tabId = 'home';
    }

    state.activeTab = tabId;

    // Toggle active state on numbered editorial sidebar buttons
    document.querySelectorAll('.editorial-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    // Toggle active state on mobile swipeable tab bar
    document.querySelectorAll('.mobile-tab-pill').forEach(pill => {
      const isActive = pill.getAttribute('data-tab') === tabId;
      pill.classList.toggle('active', isActive);
      if (isActive) {
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Close mobile drawer if open
    closeMobileDrawer();

    const currentView = document.querySelector('.tab-view.active-view');
    const targetView = document.getElementById(`view-${tabId}`);

    if (currentView && targetView && currentView !== targetView) {
      currentView.style.opacity = '0';
      currentView.style.transform = 'translateY(-8px)';
      currentView.style.transition = 'opacity 0.16s ease, transform 0.16s ease';

      setTimeout(() => {
        currentView.classList.remove('active-view');
        currentView.style.opacity = '';
        currentView.style.transform = '';
        currentView.style.transition = '';

        renderCardsForTab(tabId);

        targetView.classList.add('active-view');
        initScrollReveal();

        if (lenis) {
          lenis.scrollTo(0, { duration: 0.65 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (tabId === 'home' && state.map) {
          setTimeout(() => state.map.invalidateSize(), 150);
        }
      }, 160);
    } else if (targetView) {
      document.querySelectorAll('.tab-view').forEach(v => v.classList.remove('active-view'));
      renderCardsForTab(tabId);
      targetView.classList.add('active-view');
      initScrollReveal();
    }
  }

  // 3. Step-by-Step Chronological Timeline Rendering
  function renderTimeline(routeId) {
    const timelineData = typeof comoTimelines !== 'undefined' ? comoTimelines[routeId] : null;
    if (!timelineData) return;

    // Update Google Maps multi-point link button
    const mapsBtn = document.getElementById(`maps-btn-${routeId}`);
    if (mapsBtn && timelineData.googleMapsUrl) {
      mapsBtn.href = timelineData.googleMapsUrl;
    }

    const listEl = document.getElementById(`timeline-${routeId}`);
    if (!listEl) return;

    const html = timelineData.steps.map((step) => {
      const badgeText = step.badge[state.lang] || step.badge['it'];
      const titleText = step.title[state.lang] || step.title['it'];
      const descText = step.desc[state.lang] || step.desc['it'];
      const isClickable = Boolean(step.itemId);
      const clickAttr = isClickable ? `onclick="window.ComoApp.openModal('${step.itemId}')"` : '';
      const cursorStyle = isClickable ? 'cursor: pointer;' : 'cursor: default;';
      const hintIcon = isClickable ? '<span style="font-size:0.75rem; color:var(--color-terracotta); margin-left:0.3rem;"> Scheda 360°</span>' : '';

      return `
        <div class="timeline-item reveal-on-scroll" ${clickAttr} style="${cursorStyle}">
          <div class="timeline-item-time">${step.time}</div>
          <div class="timeline-spine">
            <div class="timeline-dot"></div>
            <div class="timeline-line"></div>
          </div>
          <div class="timeline-card">
            <div class="timeline-card-head">
              <h4 class="timeline-item-title">${titleText} ${hintIcon}</h4>
              <span class="timeline-badge">${badgeText}</span>
            </div>
            <p class="timeline-item-desc">${descText}</p>
          </div>
        </div>
      `;
    }).join('');

    listEl.innerHTML = html;
  }

  // 4. Editorial Magazine Publication Card Rendering
  function renderCardHTML(item) {
    const title = item.title[state.lang] || item.title['it'];
    const tag = item.tag[state.lang] || item.tag['it'];
    const shortDesc = item.shortDesc[state.lang] || item.shortDesc['it'];
    const restaurantOrTag = item.restaurant ? ` ${item.restaurant}` : ` ${tag}`;
    const readLabel = t('readItineraryLink') || 'Dettagli & Vista 360° →';

    return `
      <article class="editorial-publication-card reveal-on-scroll" data-id="${item.id}" onclick="window.ComoApp.openModal('${item.id}')">
        <div class="card-photo-wrapper">
          <img src="${item.image}" alt="${title}" class="card-photo-img" loading="lazy" onerror="this.src='assets/images/hero-lake-como.jpg'">
          <span class="card-360-tag">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            360°
          </span>
        </div>
        <div class="card-text-container">
          <span class="card-kicker-tag">${tag}</span>
          <h3 class="card-serif-title">${title}</h3>
          <div class="card-venue-sub">${restaurantOrTag}</div>
          <p class="card-excerpt-body">${shortDesc}</p>
          <div class="card-bottom-bar">
            <span class="card-price-value">${item.priceRange || 'Info'}</span>
            <span class="card-action-arrow">
              ${readLabel}
            </span>
          </div>
        </div>
      </article>
    `;
  }

  function renderCardsForTab(tabId) {
    if (tabId === 'home' || tabId === 'arrivare') return;

    // Render timeline for route tab
    renderTimeline(tabId);

    if (tabId === 'culturale') {
      const container = document.getElementById('grid-culturale');
      if (!container) return;
      let items = comoData.filter(d => d && d.routeCategory === 'culturale');
      if (state.culturaleFilter === 'monumenti') {
        items = items.filter(d => d.category === 'monumenti');
      } else if (state.culturaleFilter === 'ville') {
        items = items.filter(d => d.category === 'ville');
      }
      container.innerHTML = items.map(renderCardHTML).join('');
      return;
    }

    const container = document.getElementById(`grid-${tabId}`);
    if (container) {
      const items = comoData.filter(d => d && d.routeCategory === tabId);
      container.innerHTML = items.map(renderCardHTML).join('');
    }
  }

  function renderAllActiveCards() {
    renderCardsForTab(state.activeTab);
  }

  // 5. Modal Pop-up with 360° Street View
  function openModal(itemId) {
    if (!itemId) return;
    const item = comoData.find(d => d && d.id === itemId);
    if (!item) return;

    state.activeModalItem = item;
    state.activeModalSubtab = 'details';

    updateModalContent(item);
    setModalSubtab('details');

    const modal = document.getElementById('detail-modal');
    if (modal) {
      modal.classList.remove('closing');
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (lenis) lenis.stop();

      const scrollBody = document.getElementById('modal-body-scroll-editorial');
      if (scrollBody) {
        scrollBody.scrollTop = 0;
      }
    }
  }

  function closeModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) {
      modal.classList.add('closing');
      setTimeout(() => {
        modal.classList.remove('active', 'closing');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lenis) lenis.start();
        const iframe = document.getElementById('streetview-iframe');
        if (iframe) iframe.src = '';
        state.activeModalItem = null;
      }, 220);
    } else {
      state.activeModalItem = null;
    }
  }

  function getFieldLocalized(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    return field[state.lang] || field['it'] || field['en'] || '';
  }

  function updateModalContent(item) {
    const title = getFieldLocalized(item.title);
    const tag = getFieldLocalized(item.tag);
    const history = getFieldLocalized(item.history);
    const ingredients = getFieldLocalized(item.ingredients);
    const curiosity = getFieldLocalized(item.curiosity);
    const hours = getFieldLocalized(item.hours);
    const price = getFieldLocalized(item.price);
    const address = item.address || 'Como';
    const phone = item.phone || '';
    const transit = getFieldLocalized(item.transitFromStation);

    // Header elements
    const heroImg = document.getElementById('modal-hero-img');
    const badgeEl = document.getElementById('modal-badge');
    const titleEl = document.getElementById('modal-title');
    if (heroImg) heroImg.src = item.image;
    if (badgeEl) badgeEl.textContent = tag;
    if (titleEl) titleEl.textContent = title;

    // Meta grid
    const hoursEl = document.getElementById('modal-hours');
    const priceEl = document.getElementById('modal-price');
    const addressEl = document.getElementById('modal-address');
    const phoneEl = document.getElementById('modal-phone');
    const phoneRowEl = document.getElementById('modal-phone-row');

    if (hoursEl) hoursEl.textContent = hours;
    if (priceEl) priceEl.textContent = price;
    if (addressEl) addressEl.textContent = address;
    if (phoneEl) phoneEl.textContent = phone;
    if (phoneRowEl) phoneRowEl.style.display = phone ? 'flex' : 'none';

    // Section 1: Main Story or Ingredients
    const mainSectionTitle = document.getElementById('modal-main-section-title');
    const mainSectionText = document.getElementById('modal-main-section-text');
    if (mainSectionTitle && mainSectionText) {
      if (item.category === 'enogastronomico') {
        mainSectionTitle.textContent = t('modalLabelIngredients');
        mainSectionText.textContent = ingredients || (item.shortDesc ? (item.shortDesc[state.lang] || item.shortDesc['it']) : '');
      } else {
        mainSectionTitle.textContent = t('modalLabelHistory');
        mainSectionText.textContent = history || (item.shortDesc ? (item.shortDesc[state.lang] || item.shortDesc['it']) : '');
      }
    }

    // Section 2: Curiosity
    const curiosityBox = document.getElementById('modal-curiosity-box');
    const curiosityText = document.getElementById('modal-curiosity-text');
    if (curiosityBox && curiosityText) {
      if (curiosity) {
        curiosityBox.style.display = 'flex';
        curiosityText.textContent = curiosity;
      } else {
        curiosityBox.style.display = 'none';
      }
    }

    // Section 3: Transit notice from Stazione Como San Giovanni
    const transitText = document.getElementById('modal-transit-text');
    if (transitText) {
      if (transit) {
        transitText.style.display = 'block';
        transitText.innerHTML = `<strong>${t('routeHubNotice')}:</strong> ${transit}`;
      } else {
        transitText.style.display = 'none';
      }
    }

    // 360° Street View Pane
    const iframe = document.getElementById('streetview-iframe');
    const externalLink = document.getElementById('streetview-external-link');
    const coordsTag = document.getElementById('streetview-coords');

    const embedUrl = item.streetViewEmbed || `https://maps.google.com/maps?q=${item.coordinates.lat},${item.coordinates.lng}&t=k&z=17&output=embed`;
    const linkUrl = item.streetViewLink || `https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${item.coordinates.lat},${item.coordinates.lng}`;

    if (iframe) {
      iframe.src = embedUrl;
    }
    if (externalLink) {
      externalLink.href = linkUrl;
    }
    if (coordsTag && item.coordinates) {
      coordsTag.textContent = `GPS: ${item.coordinates.lat.toFixed(4)}° N, ${item.coordinates.lng.toFixed(4)}° E`;
    }

    // Explicitly set subtab to details view
    setModalSubtab('details');
  }

  function setModalSubtab(subtab) {
    state.activeModalSubtab = subtab;
    const btnDetails = document.getElementById('modal-tab-btn-details');
    const btn360 = document.getElementById('modal-tab-btn-360');
    const paneDetails = document.getElementById('modal-pane-details');
    const pane360 = document.getElementById('modal-pane-360');

    if (subtab === '360') {
      if (btnDetails) btnDetails.classList.remove('active');
      if (btn360) btn360.classList.add('active');
      if (paneDetails) {
        paneDetails.classList.remove('active');
        paneDetails.classList.add('is-hidden');
        paneDetails.style.display = 'none';
      }
      if (pane360) {
        pane360.classList.add('active');
        pane360.style.display = 'flex';
      }
    } else {
      if (btnDetails) btnDetails.classList.add('active');
      if (btn360) btn360.classList.remove('active');
      if (paneDetails) {
        paneDetails.classList.remove('is-hidden');
        paneDetails.classList.add('active');
        paneDetails.style.display = 'flex';
      }
      if (pane360) {
        pane360.classList.remove('active');
        pane360.style.display = 'none';
      }
    }
  }

  // 6. Open-Meteo Automatic Live Weather & Sidebar Mini Indicator
  async function fetchLiveWeather() {
    const tempEl = document.getElementById('weather-temp');
    const condEl = document.getElementById('weather-condition');
    const windEl = document.getElementById('weather-wind');
    const iconEl = document.getElementById('weather-icon');
    const forecastRow = document.getElementById('forecast-days-container');
    const sidebarWeatherVal = document.getElementById('sidebar-mini-temp') || document.getElementById('sidebar-weather-val');

    try {
      const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=45.8081&longitude=9.0852&current=temperature_2m,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FRome'
      );
      if (!res.ok) throw new Error('Weather API error');
      const data = await res.json();

      const current = data.current || data.current_weather || {};
      const daily = data.daily || {};

      // Current Weather
      const currentTemp = current.temperature_2m !== undefined ? current.temperature_2m : (current.temperature !== undefined ? current.temperature : 15);
      const currentCode = current.weather_code !== undefined ? current.weather_code : (current.weathercode !== undefined ? current.weathercode : 0);
      const currentWind = current.wind_speed_10m !== undefined ? current.wind_speed_10m : (current.windspeed !== undefined ? current.windspeed : 6);

      const meta = weatherCodeMap[currentCode] || { key: 'weatherSunny', icon: 'sun' };
      const currentTempStr = `${Math.round(currentTemp)}°C`;
      const currentCondStr = t(meta.key);

      if (tempEl) tempEl.textContent = currentTempStr;
      if (condEl) condEl.textContent = currentCondStr;
      if (windEl) windEl.textContent = `${t('weatherWind')}: ${Math.round(currentWind)} km/h`;
      if (iconEl) iconEl.innerHTML = getWeatherSvg(meta.icon);

      // Mini-indicator in right sidebar
      if (sidebarWeatherVal) {
        sidebarWeatherVal.textContent = `${currentTempStr} • ${currentCondStr}`;
      }

      // 5-Day Forecast
      if (forecastRow && daily && daily.time) {
        const daysHtml = [];
        const dayNames = {
          it: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
          en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          fr: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
          es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
          de: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
          ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        };
        const currentLangDayNames = dayNames[state.lang] || dayNames['it'];

        for (let i = 1; i <= 5 && i < daily.time.length; i++) {
          const date = new Date(daily.time[i]);
          const dayName = currentLangDayNames[date.getDay()];
          const code = daily.weather_code !== undefined ? daily.weather_code[i] : (daily.weathercode ? daily.weathercode[i] : 0);
          const dayMeta = weatherCodeMap[code] || { key: 'weatherSunny', icon: 'sun' };
          const maxT = Math.round(daily.temperature_2m_max[i]);
          const minT = Math.round(daily.temperature_2m_min[i]);

          daysHtml.push(`
            <div class="forecast-clean-item">
              <span class="forecast-day-label">${dayName}</span>
              <div class="forecast-icon-box">${getWeatherSvg(dayMeta.icon)}</div>
              <div class="forecast-temp-line">${maxT}° <span class="forecast-temp-min">${minT}°</span></div>
            </div>
          `);
        }
        forecastRow.innerHTML = daysHtml.join('');
      }

      state.weatherLoaded = true;
    } catch (err) {
      console.warn('Using fallback weather data:', err);
      const fallbackTemp = '16°C';
      const fallbackCond = t('weatherSunny');

      if (tempEl) tempEl.textContent = fallbackTemp;
      if (condEl) condEl.textContent = fallbackCond;
      if (windEl) windEl.textContent = `${t('weatherWind')}: 7 km/h`;
      if (iconEl) iconEl.innerHTML = getWeatherSvg('sun');
      if (sidebarWeatherVal) sidebarWeatherVal.textContent = `${fallbackTemp} • ${fallbackCond}`;

      if (forecastRow) {
        const fallbackDays = ['Ven', 'Sab', 'Dom', 'Lun', 'Mar'];
        forecastRow.innerHTML = fallbackDays.map((d, idx) => `
          <div class="forecast-clean-item">
            <span class="forecast-day-label">${d}</span>
            <div class="forecast-icon-box">${getWeatherSvg(idx % 2 === 0 ? 'sun' : 'cloud-sun')}</div>
            <div class="forecast-temp-line">${17 - idx}° <span class="forecast-temp-min">${9 - Math.floor(idx / 2)}°</span></div>
          </div>
        `).join('');
      }
    }
  }

  // 7. Interactive Leaflet Map (Monza to Como San Giovanni Route & Lake POIs)
  function initInteractiveMap() {
    const mapContainer = document.getElementById('como-leaflet-map');
    if (!mapContainer || typeof L === 'undefined') return;

    // Base coordinates: Como basin
    const map = L.map('como-leaflet-map', {
      center: [45.85, 9.15],
      zoom: 11,
      zoomControl: true,
      scrollWheelZoom: false
    });

    state.map = map;

    // Clean, reliable OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19
    }).addTo(map);

    // Custom Editorial Pin Creators
    const createCustomPin = (color, size) => {
      return L.divIcon({
        className: 'custom-map-marker',
        html: `<div style="
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border: 2px solid #ffffff;
          box-shadow: 0 2px 8px rgba(26, 25, 24, 0.3);
          border-radius: 50%;
        "></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2]
      });
    };

    const goldPin = createCustomPin('#9c5a3c', 16);
    const redPin = createCustomPin('#b91c1c', 14);
    const poiPin = createCustomPin('#3d4a3e', 12);

    // Coordinates: Monza FS and Como San Giovanni
    const monzaCoords = [45.5785, 9.2736];
    const comoStationCoords = [45.8087, 9.0729];

    // Marker: Monza FS
    L.marker(monzaCoords, { icon: redPin })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: inherit; padding: 4px;">
          <strong style="color: #1a1918; font-size: 13px;">Stazione FS di Monza</strong>
          <p style="margin: 4px 0 0; font-size: 11px; color: #78746e;">
            ${t('mapMonzaPopup')}
          </p>
        </div>
      `);

    // Marker: Stazione Como San Giovanni (The Grand Central Hub)
    const comoStationMarker = L.marker(comoStationCoords, { icon: goldPin })
      .addTo(map)
      .bindPopup(`
        <div style="font-family: inherit; padding: 6px;">
          <span style="font-size: 10px; font-weight: 700; color: #9c5a3c; text-transform: uppercase;">HUB CENTRALE</span>
          <h4 style="margin: 2px 0 4px; font-size: 14px; color: #1a1918;">Stazione Como San Giovanni</h4>
          <p style="margin: 0; font-size: 11px; color: #78746e;">
            ${t('mapComoPopup')}
          </p>
        </div>
      `);

    // Railway Polyline: Direct connection from Monza to Como San Giovanni via Seregno
    const trainPath = [
      monzaCoords,
      [45.6105, 9.2458], // Lissone-Muggiò
      [45.6268, 9.2135], // Desio
      [45.6542, 9.2021], // Seregno
      [45.6795, 9.1764], // Camnago-Lentate
      [45.7380, 9.1245], // Cantù-Cermenate
      [45.7621, 9.0965], // Cucciago
      [45.7832, 9.0768], // Como Camerlata
      comoStationCoords
    ];

    const trainPolyline = L.polyline(trainPath, {
      color: '#9c5a3c',
      weight: 3.5,
      dashArray: '5, 7',
      opacity: 0.95
    }).addTo(map);

    // Lake Attractions Markers
    comoData.forEach(item => {
      const title = item.title[state.lang] || item.title['it'];
      L.marker([item.coordinates.lat, item.coordinates.lng], { icon: poiPin })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: inherit; padding: 4px; min-width: 160px;">
            <strong style="color: #1a1918; font-size: 13px;">${title}</strong>
            <div style="margin-top: 6px;">
              <button onclick="window.ComoApp.openModal('${item.id}')" style="
                background: #9c5a3c; color: #ffffff; border: none; padding: 5px 10px;
                font-size: 11px; font-weight: 700; cursor: pointer; text-transform: uppercase;
              ">
                ${t('readItineraryLink')}
              </button>
            </div>
          </div>
        `);
    });

    // Map Focus Controls with precise verified coordinates & bounds
    let activeMapView = 'monza';

    window.ComoMapControls = {
      focusRoute: () => {
        activeMapView = 'monza';
        map.invalidateSize();
        map.fitBounds([[45.5650, 9.0400], [45.8250, 9.3000]], {
          padding: [35, 35],
          maxZoom: 12
        });
      },
      focusLake: () => {
        activeMapView = 'lake';
        map.invalidateSize();
        map.fitBounds([[45.8050, 9.0400], [46.0600, 9.3800]], {
          padding: [25, 25]
        });
      },
      focusStation: () => {
        activeMapView = 'station';
        map.invalidateSize();
        map.setView(comoStationCoords, 16);
        comoStationMarker.openPopup();
      }
    };

    // Auto-focus the route on initial load once container layout stabilizes
    setTimeout(() => {
      map.invalidateSize();
      if (activeMapView === 'monza') {
        window.ComoMapControls.focusRoute();
      }
    }, 200);
  }

  // 8. Dynamic QR Code Generator for window.location.href
  function initDynamicQr() {
    const qrImg = document.getElementById('qr-code-image');
    if (!qrImg) return;

    const currentUrl = window.location.href;
    const qrEndpoint = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
      currentUrl
    )}&color=1a-19-18&bgcolor=ffffff&margin=1`;
    qrImg.src = qrEndpoint;

    // Copy link button handler
    const copyBtn = document.getElementById('qr-copy-btn');
    const toast = document.getElementById('qr-copy-toast');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(currentUrl).then(() => {
          if (toast) {
            toast.classList.add('show');
            setTimeout(() => {
              toast.classList.remove('show');
            }, 3000);
          }
        });
      });
    }
  }

  // 9. Mobile Drawer Sidebar Controls
  function openMobileDrawer() {
    const sidebar = document.getElementById('editorial-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    const sidebar = document.getElementById('editorial-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 10. Refined Editorial Scroll Reveal (IntersectionObserver)
  function initScrollReveal() {
    const targets = document.querySelectorAll(
      '.reveal-on-scroll, .editorial-publication-card, .metric-editorial-box, .train-line-editorial-item, .timeline-editorial-item, .at-glance-col, .golden-hub-banner-editorial, .editorial-hero-banner, .editorial-quiz-card'
    );

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const parent = el.parentElement;
            if (parent && (parent.classList.contains('transit-metrics-editorial') ||
                           parent.classList.contains('train-lines-editorial-grid') ||
                           parent.classList.contains('at-glance-bar') ||
                           parent.classList.contains('home-routes-grid') ||
                           (parent.id && parent.id.startsWith('grid-')))) {
              const siblings = Array.from(parent.children);
              const idx = siblings.indexOf(el);
              if (idx > 0 && idx < 8) {
                el.style.transitionDelay = `${idx * 0.08}s`;
              }
            }
            el.classList.add('revealed');
            obs.unobserve(el);

            if (el.classList.contains('metric-editorial-box') || el.classList.contains('at-glance-col')) {
              animateNumbersInElement(el);
            }
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
      });

      targets.forEach(el => {
        if (!el.classList.contains('revealed')) {
          el.classList.add('reveal-prep');
          observer.observe(el);
        }
      });
    } else {
      targets.forEach(el => el.classList.add('revealed'));
    }
  }

  function animateNumbersInElement(container) {
    const numEls = container.querySelectorAll('.metric-num-editorial, .at-glance-val');
    numEls.forEach(el => {
      if (el.dataset.animated) return;
      const text = el.textContent.trim();
      if (text.includes('32–42') || text.includes('32-42')) {
        el.dataset.animated = 'true';
        animateRange(el, 0, 32, 42, ' min', 800);
      } else if (text.includes('35 km')) {
        el.dataset.animated = 'true';
        animateSingle(el, 0, 35, ' km', 750);
      } else if (text.includes('4,80') || text.includes('4.80')) {
        el.dataset.animated = 'true';
        animatePrice(el, 0, 4.80, ' €', 850);
      }
    });
  }

  function animateSingle(el, start, end, suffix, duration) {
    const startTime = performance.now();
    function update(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = Math.round(start + (end - start) * ease) + suffix;
      if (p < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function animateRange(el, start, endMin, endMax, suffix, duration) {
    const startTime = performance.now();
    function update(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      const curMin = Math.round(start + (endMin - start) * ease);
      const curMax = Math.round(start + (endMax - start) * ease);
      el.textContent = `${curMin}–${curMax}${suffix}`;
      if (p < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  function animatePrice(el, start, end, suffix, duration) {
    const startTime = performance.now();
    function update(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      const cur = (start + (end - start) * ease).toFixed(2).replace('.', ',');
      el.textContent = `~${cur}${suffix}`;
      if (p < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  // 11. Event Listeners Setup
  function setupEventListeners() {
    // Smooth Lenis Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(el, { offset: -60, duration: 0.9 });
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      });
    });

    // Compact European Language Dropdown
    const langDropdownWrapper = document.getElementById('lang-dropdown-wrapper');
    const langDropdownBtn = document.getElementById('lang-dropdown-btn');

    if (langDropdownBtn && langDropdownWrapper) {
      langDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = langDropdownWrapper.classList.toggle('is-open');
        langDropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      document.addEventListener('click', (e) => {
        if (!langDropdownWrapper.contains(e.target)) {
          langDropdownWrapper.classList.remove('is-open');
          langDropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && langDropdownWrapper.classList.contains('is-open')) {
          langDropdownWrapper.classList.remove('is-open');
          langDropdownBtn.setAttribute('aria-expanded', 'false');
          langDropdownBtn.focus();
        }
      });
    }

    // Inline Language text buttons (IT | EN | FR | ES | DE | RU)
    document.querySelectorAll('.lang-text-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        if (langDropdownWrapper) {
          langDropdownWrapper.classList.remove('is-open');
          if (langDropdownBtn) langDropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Sidebar Numbered Tab Buttons (01..08)
    document.querySelectorAll('.editorial-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Mobile Horizontal Tab Pills
    document.querySelectorAll('.mobile-tab-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const tab = pill.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Mobile Drawer Open / Close
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const drawerCloseBtn = document.getElementById('sidebar-drawer-close');
    const backdrop = document.getElementById('sidebar-backdrop');

    if (mobileToggle) mobileToggle.addEventListener('click', openMobileDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
    if (backdrop) backdrop.addEventListener('click', closeMobileDrawer);

    // Culturale sub-filter buttons
    document.querySelectorAll('.cult-editorial-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.cult-editorial-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.culturaleFilter = btn.getAttribute('data-filter') || 'all';
        renderCardsForTab('culturale');
      });
    });

    // Modal sub-tabs (Details vs 360°)
    const btnDetails = document.getElementById('modal-tab-btn-details');
    const btn360 = document.getElementById('modal-tab-btn-360');
    if (btnDetails) {
      btnDetails.addEventListener('click', () => setModalSubtab('details'));
    }
    if (btn360) {
      btn360.addEventListener('click', () => setModalSubtab('360'));
    }

    // Modal close button and overlay click
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalOverlay = document.getElementById('detail-modal');
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalOverlay) {
      modalOverlay.addEventListener('click', e => {
        if (e.target === modalOverlay) closeModal();
      });
    }

    // Modal scroll isolation: ensures native mousewheel & touch scroll is completely uninterrupted
    const modalScrollBody = document.getElementById('modal-body-scroll-editorial');
    if (modalScrollBody) {
      modalScrollBody.addEventListener('wheel', (e) => {
        e.stopPropagation();
      }, { passive: true });
      modalScrollBody.addEventListener('touchmove', (e) => {
        e.stopPropagation();
      }, { passive: true });
    }

    // Keyboard support: Escape closes modal, pass, or mobile drawer
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModal();
        if (window.ComoPass) window.ComoPass.close();
        closeMobileDrawer();
      }
    });

    // Pocket Pass backdrop close
    const passBackdrop = document.getElementById('pocket-pass-backdrop');
    if (passBackdrop) {
      passBackdrop.addEventListener('click', e => {
        if (e.target === passBackdrop && window.ComoPass) {
          window.ComoPass.close();
        }
      });
    }

    // Map action buttons on Home
    const btnMapMonza = document.getElementById('btn-map-monza');
    const btnMapLake = document.getElementById('btn-map-lake');
    const btnMapStation = document.getElementById('btn-map-station');

    const updateMapBtnActive = (activeBtn) => {
      [btnMapMonza, btnMapLake, btnMapStation].forEach(b => {
        if (b) b.classList.remove('active');
      });
      if (activeBtn) activeBtn.classList.add('active');
    };

    if (btnMapMonza) {
      btnMapMonza.addEventListener('click', () => {
        updateMapBtnActive(btnMapMonza);
        if (window.ComoMapControls) window.ComoMapControls.focusRoute();
      });
    }
    if (btnMapLake) {
      btnMapLake.addEventListener('click', () => {
        updateMapBtnActive(btnMapLake);
        if (window.ComoMapControls) window.ComoMapControls.focusLake();
      });
    }
    if (btnMapStation) {
      btnMapStation.addEventListener('click', () => {
        updateMapBtnActive(btnMapStation);
        if (window.ComoMapControls) window.ComoMapControls.focusStation();
      });
    }
  }

  // ========================================================================
  // 12. DYNAMIC TRIP BUILDER ENGINE (3-QUESTION INTELLIGENT QUIZ)
  // ========================================================================
  const quizState = {
    step: 1,
    answers: {
      companions: null,
      time: null,
      priority: null
    },
    matchedRoute: 'enogastronomico',
    currentCustomItinerary: null
  };

  const dynamicItineraryDb = {
    express: {
      timeVal: "3.5 ore",
      kmVal: "2.8 km",
      transitVal: "Treno RE80 da Monza (32 min)",
      timeVals: {
        it: "3.5 ore",
        en: "3.5 hours",
        fr: "3h30",
        es: "3.5 horas",
        de: "3.5 Stunden",
        ru: "3.5 часа"
      },
      kmVals: {
        it: "2.8 km",
        en: "2.8 km",
        fr: "2,8 km",
        es: "2,8 km",
        de: "2,8 km",
        ru: "2.8 км"
      },
      transitVals: {
        it: "Treno RE80 da Monza (32 min)",
        en: "RE80 Train from Monza (32 min)",
        fr: "Train RE80 depuis Monza (32 min)",
        es: "Tren RE80 desde Monza (32 min)",
        de: "Zug RE80 ab Monza (32 Min.)",
        ru: "Поезд RE80 из Монцы (32 мин)"
      },
      titles: {
        couple: {
          it: "Fuga Romantica Espresso: 3.5 Ore a Como per Due",
          en: "Romantic Express Escape: 3.5 Hours in Como for Two",
          fr: "Escapade Romantique Express : 3h30 à Côme en Couple",
          es: "Escapada Romántica Exprés: 3.5 Horas en Como para Dos",
          de: "Romantischer Express: 3.5 Stunden in Como zu Zweit",
          ru: "Романтический экспресс: 3.5 часа в Комо для двоих"
        },
        family: {
          it: "Mini-Tour Famiglia: 3.5 Ore a Como con Bambini",
          en: "Family Mini-Tour: 3.5 Hours in Como with Children",
          fr: "Mini-Tour en Famille : 3h30 à Côme avec Enfants",
          es: "Mini-Tour en Familia: 3.5 Horas en Como con Niños",
          de: "Familien-Minitour: 3.5 Stunden in Como mit Kindern",
          ru: "Семейный мини-тур: 3.5 часа в Комо с детьми"
        },
        solo: {
          it: "Scorci Segreti & Duomo: 3.5 Ore in Solitaria",
          en: "Hidden Vistas & Duomo: 3.5 Hours Solo Walk",
          fr: "Perspectives Secrètes & Dôme : 3h30 en Solo",
          es: "Vistas Secretas y Duomo: 3.5 Horas en Solitario",
          de: "Geheime Winkel & Dom: 3.5 Stunden Solo",
          ru: "Секретные ракурсы и Дуомо: 3.5 часа в одиночку"
        },
        friends: {
          it: "Giro Espresso tra Amici: 3.5 Ore a Como",
          en: "Express Friends Tour: 3.5 Hours in Como",
          fr: "Tour Express entre Amis : 3h30 à Côme",
          es: "Recorrido Exprés con Amigos: 3.5 Horas en Como",
          de: "Express-Runde mit Freunden: 3.5 Stunden in Como",
          ru: "Экспресс-день с друзьями: 3.5 часа в Комо"
        }
      },
      descs: {
        it: "Itinerario compatto senza fretta: dalla stazione attraverso il castrum romano, il Duomo in marmo di Musso, un caffè d'autore e la passeggiata a pelo d'onda fino al molo Life Electric.",
        en: "A compact, stress-free route: from the railway hub through ancient Roman alleys, the marble Cathedral, an artisan espresso, and a lakeside stroll to the Life Electric pier.",
        fr: "Circuit compact sans précipitation : de la gare à travers le centre historique, la cathédrale de marbre, une pause café et la jetée Life Electric sur l'eau.",
        es: "Itinerario compacto sin prisas: desde la estación por el centro romano, el Duomo de mármol, un café de autor y el paseo hasta el muelle Life Electric.",
        de: "Kompakte Route ohne Hektik: Vom Bahnhof durch das römische Zentrum zum Marmordom, Kaffeepause und Seepromenade zum Life-Electric-Steg.",
        ru: "Компактный маршрут без спешки и усталости: прямо от вокзала через средневековые кварталы, шедевры мраморного Дуомо, кофе на уютной площади и прогулку по набережной к молу Life Electric."
      },
      mapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Piazzale+San+Gottardo,+Como/Piazza+del+Duomo,+Como/Piazza+Alessandro+Volta,+Como/Life+Electric,+Como/Stazione+Como+San+Giovanni,+Como",
      steps: [
        {
          time: "09:30",
          itemId: "hub-stazione",
          title: {
            it: "Partenza da Monza FS con treno Regionale Express RE80 (32 min)",
            en: "Departure from Monza FS on RE80 Regional Express train (32 min)",
            fr: "Départ de Monza FS avec le train rapide RE80 (32 min)",
            es: "Salida desde Monza FS en tren rápido RE80 (32 min)",
            de: "Abfahrt ab Monza FS mit dem RE80 Regional-Express (32 Min.)",
            ru: "Отправление со станции Monza FS на скоростном поезде RE80 (32 мин в пути)"
          }
        },
        {
          time: "10:05",
          itemId: "hub-stazione",
          title: {
            it: "Arrivo a Stazione Como San Giovanni & discesa panoramica di Via Gallio",
            en: "Arrival at Como San Giovanni Station & scenic Via Gallio descent",
            fr: "Arrivée à la gare Como San Giovanni & descente de la Via Gallio",
            es: "Llegada a la estación Como San Giovanni y bajada por Via Gallio",
            de: "Ankunft am Bahnhof Como San Giovanni & Spaziergang durch die Via Gallio",
            ru: "Прибытие на вокзал Como San Giovanni и живописный спуск по лестнице Виа Галлио"
          }
        },
        {
          time: "10:30",
          itemId: "mon-1",
          title: {
            it: "Piazza del Duomo, Broletto e visita alla cattedrale tardogotica",
            en: "Piazza del Duomo, Broletto & Gothic-Renaissance Cathedral visit",
            fr: "Place du Duomo, Broletto et visite de la cathédrale de marbre",
            es: "Plaza del Duomo, Broletto y visita a la catedral de mármol",
            de: "Piazza del Duomo, Broletto & Besichtigung des Doms aus Musso-Marmor",
            ru: "Площадь Дуомо, средневековый дворец Бролетто и собор из мрамора Муссо"
          }
        },
        {
          time: "11:15",
          itemId: "slo-3",
          title: {
            it: "Pausa caffè d'autore & dolce tipico (Pasticceria o Piazza Volta)",
            en: "Artisan espresso break & traditional pastry in Piazza Volta",
            fr: "Pause café d'auteur et pâtisserie typique sur la Piazza Volta",
            es: "Pausa para café de autor y dulce típico en Piazza Volta",
            de: "Kaffeepause & traditionelles Gebäck auf der Piazza Volta",
            ru: "Кофе на исторической площади Вольта и традиционный пирог миаша"
          }
        },
        {
          time: "11:55",
          title: {
            it: "Lungolago Mafalda di Savoia & Diga Foranea Life Electric (camminata sull'acqua)",
            en: "Lakeside Mafalda di Savoia promenade & Life Electric pier walk",
            fr: "Promenade sur le lac Mafalda di Savoia & jetée Life Electric",
            es: "Paseo marítimo Mafalda di Savoia y dique de Life Electric sobre el agua",
            de: "Seepromenade Mafalda di Savoia & Life-Electric-Steg auf dem Wasser",
            ru: "Набережная Мафальда-ди-Савойя и прогулка по волнорезу к скульптуре Life Electric"
          }
        },
        {
          time: "12:45",
          title: {
            it: "Rientro rilassato a Stazione Como San Giovanni per il treno di ritorno",
            en: "Relaxed return to Como San Giovanni Station for return train",
            fr: "Retour paisible à la gare Como San Giovanni pour le train de retour",
            es: "Regreso tranquilo a la estación Como San Giovanni para el tren",
            de: "Entspannter Rückweg zum Bahnhof Como San Giovanni für den Zug",
            ru: "Неспешное возвращение на вокзал Como San Giovanni к обратному поезду"
          }
        }
      ]
    },
    fullday: {
      timeVal: "7 ore",
      kmVal: "5.8 km",
      transitVal: "Treno RE80 / S11 da Monza",
      timeVals: {
        it: "7 ore",
        en: "7 hours",
        fr: "7 heures",
        es: "7 horas",
        de: "7 Stunden",
        ru: "7 часов"
      },
      kmVals: {
        it: "5.8 km",
        en: "5.8 km",
        fr: "5,8 km",
        es: "5,8 km",
        de: "5,8 km",
        ru: "5.8 км"
      },
      transitVals: {
        it: "Treno RE80 / S11 da Monza",
        en: "RE80 / S11 Train from Monza",
        fr: "Train RE80 / S11 depuis Monza",
        es: "Tren RE80 / S11 desde Monza",
        de: "Zug RE80 / S11 ab Monza",
        ru: "Поезд RE80 / S11 из Монцы"
      },
      titles: {
        couple: {
          it: "Gran Tour Romantico: 7 Ore d'Incanto a Como",
          en: "Grand Romantic Day Tour: 7 Enchanting Hours in Como",
          fr: "Grand Tour Romantique : 7 Heures d'Émerveillement à Côme",
          es: "Gran Tour Romántico: 7 Horas de Encanto en Como",
          de: "Große Romantiktour: 7 zauberhafte Stunden in Como",
          ru: "Большой романтический тур: 7 часов очарования в Комо"
        },
        family: {
          it: "Grande Giornata in Famiglia tra Funicolare e Lago (7 Ore)",
          en: "Grand Family Lake & Funicular Day: 7 Hours in Como",
          fr: "Grande Journée en Famille : Funiculaire & Lac (7 Heures)",
          es: "Gran Día en Familia: Funicular y Lago (7 Horas)",
          de: "Großer Familientag: Seilbahn & See (7 Stunden)",
          ru: "Идеальный семейный день: фуникулер, лебеди и озеро (7 часов)"
        },
        solo: {
          it: "Grande Traversata Fotografica di Como: 7 Ore",
          en: "Grand Photographic Traversata: 7 Hours in Como",
          fr: "Grande Traversée Photographique : 7 Heures à Côme",
          es: "Gran Recorrido Fotográfico: 7 Horas en Como",
          de: "Große Fototour durch Como: 7 Stunden",
          ru: "Большой фото-тур по Комо: 7 часов панорам и вилл"
        },
        friends: {
          it: "Grande Giro di Como tra Lago, Crotto e Funicolare (7.5 Ore)",
          en: "Grand Day Tour with Friends: Lake, Funicular & Crotto (7.5 Hours)",
          fr: "Grande Journée entre Amis : Lac, Funiculaire & Crotto (7h30)",
          es: "Gran Día con Amigos: Lago, Funicular y Crotto (7.5 Horas)",
          de: "Großer Erlebnistag mit Freunden: See, Standseilbahn & Crotto (7.5 Std.)",
          ru: "Большой день с друзьями: фуникулер, кротто и озеро (7.5 часов)"
        }
      },
      descs: {
        it: "L'esperienza più completa e appagante: centro storico, salita in funicolare a Brunate con vista a 900 metri sulle Alpi, pranzo d'autore, giardini neoclassici di Villa Olmo e aperitivo al tramonto dorato.",
        en: "The definitive Lake Como immersion: historic center, Brunate funicular ride with 900m alpine vistas, lakeside culinary lunch, neoclassical Villa Olmo park, and sunset aperitivo.",
        fr: "L'immersion totale à Côme : centre historique, montée en funiculaire à Brunate avec vue alpine, déjeuner gastronomique, parc de la Villa Olmo et apéritif au coucher du soleil.",
        es: "La experiencia completa de Como: centro histórico, subida en funicular a Brunate con vistas alpinas a 900m, almuerzo típico, jardines de Villa Olmo y aperitivo al atardecer.",
        de: "Das ultimative Como-Erlebnis: Historische Altstadt, Standseilbahn nach Brunate mit 900m-Alpenblick, kulinarisches Mittagessen, Park der Villa Olmo und Aperitif zum Sonnenuntergang.",
        ru: "Полноценный день на озере Комо: средневековый центр, подъем на фуникулере в Брунате на высоту 900м, обед в традиционном ресторане, прогулка по парку виллы Ольмо и аперитив на закате."
      },
      mapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Piazzale+San+Gottardo,+Como/Piazza+del+Duomo,+Como/Funicolare+Como-Brunate,+Piazza+Alcide+de+Gasperi,+Como/Villa+Olmo,+Via+Simone+Cantoni,+Como/Life+Electric,+Como/Stazione+Como+San+Giovanni,+Como",
      steps: [
        {
          time: "09:30",
          itemId: "hub-stazione",
          title: {
            it: "Partenza da Monza FS con treno RE80 (arrivo Como San Giovanni 10:02)",
            en: "Departure from Monza FS on RE80 train (arrival Como San Giovanni 10:02)",
            fr: "Départ de Monza FS avec le train RE80 (arrivée 10h02)",
            es: "Salida de Monza FS en tren RE80 (llegada 10:02)",
            de: "Abfahrt ab Monza FS mit RE80 (Ankunft 10:02)",
            ru: "Отправление из Монцы на скоростном поезде RE80 (прибытие в Комо в 10:02)"
          }
        },
        {
          time: "10:15",
          title: {
            it: "Salita con la Funicolare storica a Brunate (1894) & balcone panoramico sulle Alpi",
            en: "Historic Brunate funicular ride (1894) & alpine panoramic viewpoint",
            fr: "Montée avec le funiculaire historique à Brunate (1894) & balcon alpin",
            es: "Subida en el funicular histórico a Brunate (1894) y mirador alpino",
            de: "Auffahrt mit der historischen Standseilbahn nach Brunate (1894) & Aussichtsbalkon",
            ru: "Подъем на историческом фуникулере в Брунате (1894 г.) и панорама Альп с высоты 900м"
          }
        },
        {
          time: "12:30",
          title: {
            it: "Discesa a Como & Pranzo tipico lariano (pesce persico dorato o crotto tradizionale)",
            en: "Descent to Como & Authentic Lake lunch (perch risotto or traditional crotto)",
            fr: "Descente à Côme & Déjeuner typique (risotto à la perche ou crotto traditionnel)",
            es: "Descenso a Como y almuerzo típico lariano (arroz con perca o crotto tradicional)",
            de: "Abfahrt nach Como & Larianisches Mittagessen (Barsch-Risotto oder uriges Crotto)",
            ru: "Спуск в Комо и обед: рис с филе озерного окуня или блюда в традиционном кротто"
          }
        },
        {
          time: "14:30",
          title: {
            it: "Visita a Piazza del Duomo, Broletto e quartiere delle botteghe di seta",
            en: "Visit to Piazza del Duomo, Broletto & historic silk artisan ateliers",
            fr: "Visite de la Place du Duomo, du Broletto et du quartier de la soie",
            es: "Visita a la Plaza del Duomo, Broletto y tiendas históricas de seda",
            de: "Besuch von Dom, Broletto & historischem Seidenviertel",
            ru: "Прогулка по площади Дуомо, средневековому Бролетто и улочкам мастеров шелка"
          }
        },
        {
          time: "16:00",
          title: {
            it: "Passeggiata romantica dei platani fino al parco neoclassico di Villa Olmo",
            en: "Romantic plane tree lakeside walk to neoclassical Villa Olmo park",
            fr: "Promenade romantique sous les platanes jusqu'au parc de la Villa Olmo",
            es: "Paseo romántico bajo los plátanos hasta los jardines de Villa Olmo",
            de: "Spaziergang unter Platanen zum klassizistischen Park der Villa Olmo",
            ru: "Прогулка под вековыми платанами вдоль воды к парку виллы Ольмо"
          }
        },
        {
          time: "17:15",
          title: {
            it: "Diga foranea Life Electric & Aperitivo al tramonto con vista lago",
            en: "Life Electric lake breakwater & Sunset aperitivo with local IGT wine",
            fr: "Jetée Life Electric & Apéritif au coucher du soleil face au lac",
            es: "Dique de Life Electric y Aperitivo al atardecer frente al lago",
            de: "Life-Electric-Wellenbrecher & Sonnenuntergangs-Aperitif am Seeufer",
            ru: "Мол Life Electric посреди озера и бокал вина IGT Terre Lariane на закате"
          }
        },
        {
          time: "18:45",
          title: {
            it: "Rientro serale alla Stazione Como San Giovanni per il treno di ritorno",
            en: "Evening stroll back to Como San Giovanni Station for return train",
            fr: "Retour en soirée à la gare Como San Giovanni pour le train de retour",
            es: "Regreso nocturno a la estación Como San Giovanni para el tren",
            de: "Abendlicher Rückweg zum Bahnhof Como San Giovanni für die Heimreise",
            ru: "Возвращение на вокзал Como San Giovanni к вечернему поезду в Монцу"
          }
        }
      ]
    },
    evening: {
      timeVal: "4 ore",
      kmVal: "3.2 km",
      transitVal: "Treno RE80 da Monza (Rientro serale)",
      timeVals: {
        it: "4 ore",
        en: "4 hours",
        fr: "4 heures",
        es: "4 horas",
        de: "4 Stunden",
        ru: "4 часа"
      },
      kmVals: {
        it: "3.2 km",
        en: "3.2 km",
        fr: "3,2 km",
        es: "3,2 km",
        de: "3,2 km",
        ru: "3.2 км"
      },
      transitVals: {
        it: "Treno RE80 da Monza (Rientro serale)",
        en: "RE80 Train from Monza (Evening return)",
        fr: "Train RE80 depuis Monza (Retour en soirée)",
        es: "Tren RE80 desde Monza (Regreso nocturno)",
        de: "Zug RE80 ab Monza (Rückfahrt am Abend)",
        ru: "Поезд RE80 из Монцы (Вечерний обратный рейс)"
      },
      titles: {
        couple: {
          it: "Tramonto d'Oro & Cena per Due sul Lago: 4 Ore",
          en: "Golden Sunset & Dinner for Two by the Lake: 4 Hours",
          fr: "Coucher de Soleil Doré & Dîner en Couple : 4 Heures",
          es: "Puesta de Sol Dorada y Cena Romántica para Dos: 4 Horas",
          de: "Goldener Sonnenuntergang & Romantisches Dinner zu Zweit: 4 Std.",
          ru: "Золотой закат и романтический ужин для двоих: 4 часа"
        },
        family: {
          it: "Sera sul Lago & Gelato al Tramonto con Bambini: 3.5 Ore",
          en: "Lake Evening & Sunset Gelato with Children: 3.5 Hours",
          fr: "Soirée au Bord du Lac & Glace en Famille : 3h30",
          es: "Tarde junto al Lago y Helado con Niños: 3.5 Horas",
          de: "Abend am See mit Eis & Sonnenuntergang für die Familie: 3.5 Std.",
          ru: "Вечер у озера: закат и джелато в Комо с детьми: 3.5 часа"
        },
        solo: {
          it: "Golden Hour, Fotografia & Luci Notturne sul Lago: 4 Ore",
          en: "Golden Hour & Night Lights Photography Tour: 4 Hours",
          fr: "Heure Dorée & Photographie des Lumières Nocturnes : 4 Heures",
          es: "Hora Dorada y Fotografía de Luces Nocturnas: 4 Horas",
          de: "Goldene Stunde & Nachtbeleuchtung am Seeufer: 4 Stunden",
          ru: "Золотой час и огни вечернего озера: 4 часа фотосъемки"
        },
        friends: {
          it: "Aperitivo Lariano & Serata tra Amici nel Centro Antico: 4.5 Ore",
          en: "Lakeside Aperitivo & Evening Out with Friends: 4.5 Hours",
          fr: "Apéritif Lariano & Soirée entre Amis dans la Vieille Ville : 4h30",
          es: "Aperitivo Lariano y Noche con Amigos en el Casco Antiguo: 4.5 Horas",
          de: "Larianischer Aperitif & Abend mit Freunden in der Altstadt: 4.5 Std.",
          ru: "Озерный аперитив и вечер в старом городе с друзьями: 4.5 часа"
        }
      },
      descs: {
        it: "La magia della luce serale: arrivo nel tardo pomeriggio, passeggiata lungo la diga foranea a pelo d'onda durante il tramonto dietro le Alpi, centro storico medievale illuminato e cena d'autore.",
        en: "The magic of evening light: late afternoon arrival, walking out on the water breakwater as the sun dips behind the alpine peaks, illuminated medieval alleys, and authentic lakeside dinner.",
        fr: "La magie de la lumière du soir : arrivée en fin d'après-midi, jetée au coucher du soleil derrière les Alpes, ruelles médiévales illuminées et dîner gastronomique au bord de l'eau.",
        es: "La magia de la tarde: llegada a última hora, paseo por el dique durante la puesta de sol tras los Alpes, casco medieval iluminado y cena típica frente al lago.",
        de: "Die Magie des Abends: Ankunft am späten Nachmittag, Stegspaziergang zum Sonnenuntergang hinter den Bergen, beleuchtete Altstadt und feines Abendessen.",
        ru: "Магия вечернего света: прибытие во второй половине дня, прогулка по волнорезу посреди озера в лучах заката за альпийскими вершинами, огни старого города и неспешный ужин."
      },
      mapsUrl: "https://www.google.com/maps/dir/Stazione+Como+San+Giovanni,+Piazzale+San+Gottardo,+Como/Piazza+Cavour,+Como/Life+Electric,+Como/Piazza+San+Fedele,+Como/Stazione+Como+San+Giovanni,+Como",
      steps: [
        {
          time: "15:30",
          itemId: "hub-stazione",
          title: {
            it: "Partenza da Monza FS con treno RE80 (arrivo Como San Giovanni 16:02)",
            en: "Departure from Monza FS on RE80 train (arrival Como San Giovanni 16:02)",
            fr: "Départ de Monza FS avec le train RE80 (arrivée 16h02)",
            es: "Salida de Monza FS en tren RE80 (llegada 16:02)",
            de: "Abfahrt ab Monza FS mit RE80 (Ankunft 16:02)",
            ru: "Отправление из Монцы на поезде RE80 (прибытие в Комо в 16:02)"
          }
        },
        {
          time: "16:20",
          itemId: "slo-2",
          title: {
            it: "Passeggiata verso il lago nella luce radente della Golden Hour",
            en: "Walk towards the lake in the glowing golden hour light",
            fr: "Balade vers le lac dans la douce lumière de l'heure dorée",
            es: "Paseo hacia el lago bajo la luz dorada de la tarde",
            de: "Spaziergang zum See im warmen Licht der Goldenen Stunde",
            ru: "Выход к озерной набережной в лучах Золотого часа"
          }
        },
        {
          time: "17:00",
          itemId: "mon-5",
          title: {
            it: "Diga foranea Life Electric o Terrazza Villa Geno per ammirare il tramonto dietro le Alpi",
            en: "Life Electric pier or Villa Geno terrace for sunset behind the Alps",
            fr: "Jetée Life Electric ou Villa Geno pour voir le coucher derrière les Alpes",
            es: "Dique de Life Electric o Villa Geno para ver el atardecer tras los Alpes",
            de: "Life-Electric-Steg oder Villa Geno zum Sonnenuntergang hinter den Bergen",
            ru: "Мол Life Electric или терраса виллы Geno: закат солнца за альпийский хребет"
          }
        },
        {
          time: "17:50",
          itemId: "mon-4",
          title: {
            it: "Passeggiata tra i vicoli illuminati del centro antico (Piazza San Fedele & Via Vitani)",
            en: "Stroll through illuminated medieval alleys (Piazza San Fedele & Via Vitani)",
            fr: "Flânerie dans les ruelles médiévales illuminées (Piazza San Fedele)",
            es: "Paseo por las callejuelas medievales iluminadas (Piazza San Fedele)",
            de: "Bummel durch die erleuchteten mittelalterlichen Gassen (Piazza San Fedele)",
            ru: "Прогулка по подсвеченным средневековым улочкам: площадь Сан-Феделе и Виа Витани"
          }
        },
        {
          time: "18:45",
          itemId: "slo-4",
          title: {
            it: "Aperitivo con calice IGT Terre Lariane & Cena nei crotti tradizionali del centro",
            en: "Aperitivo with IGT wine & dinner in historic downtown crotti",
            fr: "Apéritif avec vin IGT local et dîner dans les crotti traditionnels",
            es: "Aperitivo con vino IGT y cena en los tradicionales crotti del centro",
            de: "Aperitif mit IGT-Wein & Abendessen in einem traditionellen Crotto",
            ru: "Озерный аперитив с вином IGT Terre Lariane и ужин в старинном кротто"
          }
        },
        {
          time: "21:15",
          itemId: "hub-stazione",
          title: {
            it: "Rientro serale alla Stazione Como San Giovanni per il treno di ritorno a Monza",
            en: "Night walk back to Como San Giovanni Station for return train to Monza",
            fr: "Retour nocturne à la gare Como San Giovanni pour le train vers Monza",
            es: "Regreso nocturno a la estación Como San Giovanni para el tren a Monza",
            de: "Nächtlicher Rückweg zum Bahnhof Como San Giovanni für die Rückfahrt",
            ru: "Возвращение на вокзал Como San Giovanni к вечернему поезду в Монцу"
          }
        }
      ]
    }
  };

  const themeMedia = {
    enogastronomico: { image: "assets/images/riso-persico.jpg", code: "#CO-CUSTOM-ENO" },
    culturale: { image: "assets/images/duomo.jpg", code: "#CO-CUSTOM-CLT" },
    naturalistico: { image: "assets/images/brunate.jpg", code: "#CO-CUSTOM-NAT" },
    sportivo: { image: "assets/images/aeroclub.jpg", code: "#CO-CUSTOM-SPT" },
    shopping: { image: "assets/images/seta-como.jpg", code: "#CO-CUSTOM-SHP" },
    slow: { image: "assets/images/aperitivo.jpg", code: "#CO-CUSTOM-SLW" }
  };

    function updateQuizUI() {
    const stepEl = document.getElementById('quiz-current-step');
    const barEl = document.getElementById('quiz-progress-bar');
    if (stepEl) stepEl.textContent = quizState.step <= 3 ? quizState.step : '3';
    if (barEl) {
      const pct = quizState.step === 1 ? '33.33%' : quizState.step === 2 ? '66.66%' : '100%';
      barEl.style.width = pct;
    }

    document.querySelectorAll('.quiz-step-pane').forEach((p) => {
      p.classList.remove('active');
    });

    if (quizState.step <= 3) {
      const activePane = document.getElementById(`quiz-step-${quizState.step}`);
      if (activePane) {
        activePane.classList.add('active');
        // Restore active highlight if an answer was already selected
        const currentAns = quizState.step === 1 ? quizState.answers.companions
          : quizState.step === 2 ? quizState.answers.time
          : quizState.answers.priority;
        activePane.querySelectorAll('.quiz-opt-btn').forEach(b => {
          if (b.getAttribute('data-value') === currentAns) {
            b.classList.add('active-opt');
          } else {
            b.classList.remove('active-opt');
          }
        });
      }
    } else {
      const resPane = document.getElementById('quiz-result-pane');
      if (resPane) resPane.classList.add('active');
      renderQuizResult();
    }
  }



  function renderQuizResult() {
    const answers = quizState.answers;
    const timeKey = answers.time || 'fullday';
    const compKey = answers.companions || 'couple';
    const prioKey = answers.priority || 'enogastronomico';
    const lang = state.lang || 'it';

    const timeGroup = dynamicItineraryDb[timeKey] || dynamicItineraryDb.fullday;
    const themeInfo = themeMedia[prioKey] || themeMedia.enogastronomico;

    // Pick custom title
    const titlesObj = timeGroup.titles[compKey] || timeGroup.titles.couple;
    const customTitle = titlesObj[lang] || titlesObj.it;

    // Pick custom description
    const customDesc = timeGroup.descs[lang] || timeGroup.descs.it;

    // Localized metric values
    const localizedTime = (timeGroup.timeVals && (timeGroup.timeVals[lang] || timeGroup.timeVals.it)) || timeGroup.timeVal;
    const localizedKm = (timeGroup.kmVals && (timeGroup.kmVals[lang] || timeGroup.kmVals.it)) || timeGroup.kmVal;
    const localizedTransit = (timeGroup.transitVals && (timeGroup.transitVals[lang] || timeGroup.transitVals.it)) || timeGroup.transitVal;

    // Set custom itinerary object in state
    quizState.currentCustomItinerary = {
      title: customTitle,
      desc: customDesc,
      image: themeInfo.image,
      code: themeInfo.code,
      time: localizedTime,
      km: localizedKm,
      transit: localizedTransit,
      mapsUrl: timeGroup.mapsUrl,
      steps: timeGroup.steps,
      targetRoute: prioKey
    };

    // Update UI elements in quiz result card
    const imgEl = document.getElementById('quiz-res-img');
    const kickerEl = document.getElementById('quiz-res-kicker');
    const titleEl = document.getElementById('quiz-res-title');
    const descEl = document.getElementById('quiz-res-desc');
    const timeEl = document.getElementById('quiz-res-time');
    const kmEl = document.getElementById('quiz-res-km');
    const transitEl = document.getElementById('quiz-res-transit');

    if (imgEl) {
      imgEl.src = themeInfo.image;
      imgEl.alt = customTitle;
    }
    if (kickerEl) {
      const tagText = t('customRouteTag') || "ITINERARIO PERSONALIZZATO";
      kickerEl.textContent = `${tagText} • ${localizedTime}`;
    }
    if (titleEl) {
      titleEl.removeAttribute('data-i18n');
      titleEl.textContent = customTitle;
    }
    if (descEl) {
      descEl.removeAttribute('data-i18n');
      descEl.textContent = customDesc;
    }
    if (timeEl) timeEl.textContent = localizedTime;
    if (kmEl) kmEl.textContent = localizedKm;
    if (transitEl) transitEl.textContent = localizedTransit;

    // Render Custom Timeline Steps
    const listEl = document.getElementById('quiz-custom-steps-list');
    if (listEl) {
      listEl.innerHTML = '';
      timeGroup.steps.forEach(s => {
        const item = document.createElement('div');
        item.className = 'custom-step-item';
        const stepTitle = (s.title && s.title[lang]) || (s.title && s.title.it) || s.title;
        if (s.itemId) {
          item.style.cursor = 'pointer';
          item.onclick = () => window.ComoApp.openModal(s.itemId);
          item.innerHTML = `
            <span class="custom-step-time">${s.time}</span>
            <span class="custom-step-desc">${stepTitle} <span style="font-size:0.75rem; color:var(--color-terracotta); margin-left:0.35rem; font-weight:700;">Scheda 360° →</span></span>
          `;
        } else {
          item.innerHTML = `
            <span class="custom-step-time">${s.time}</span>
            <span class="custom-step-desc">${stepTitle}</span>
          `;
        }
        listEl.appendChild(item);
      });
    }

    // Direct Google Maps button
    const mapsBtn = document.getElementById('quiz-custom-maps-btn');
    if (mapsBtn) {
      mapsBtn.href = timeGroup.mapsUrl;
    }

    // Action CTA: explore related detailed route
    const exploreBtn = document.getElementById('quiz-btn-explore');
    if (exploreBtn) {
      exploreBtn.onclick = () => {
        switchTab(prioKey);
        const targetView = document.getElementById(`view-${prioKey}`);
        if (targetView) targetView.scrollIntoView({ behavior: 'smooth' });
      };
    }

    // Action CTA: open tailored pocket pass
    const passBtn = document.getElementById('quiz-btn-pass');
    if (passBtn) {
      passBtn.onclick = () => {
        window.ComoPass.openCustom(quizState.currentCustomItinerary);
      };
    }
  }

    window.ComoQuiz = {
    selectOption(stepNum, val) {
      const pane = document.getElementById(`quiz-step-${stepNum}`);
      if (pane) {
        pane.querySelectorAll('.quiz-opt-btn').forEach(b => {
          b.classList.remove('active-opt');
        });
        const clickedBtn = pane.querySelector(`.quiz-opt-btn[data-value="${val}"]`);
        if (clickedBtn) clickedBtn.classList.add('active-opt');
      }

      if (stepNum === 1) quizState.answers.companions = val;
      if (stepNum === 2) quizState.answers.time = val;
      if (stepNum === 3) {
        quizState.answers.priority = val;
        quizState.matchedRoute = val;
      }

      // Smooth micro-feedback delay for UI/UX Pro Max polish
      setTimeout(() => {
        if (stepNum === 3) {
          quizState.step = 4;
        } else {
          quizState.step = stepNum + 1;
        }
        updateQuizUI();
      }, 240);
    },
    prevStep() {
      if (quizState.step > 1) {
        quizState.step--;
        updateQuizUI();
      }
    },
    restart() {
      quizState.step = 1;
      quizState.answers = {
        companions: null,
        time: null,
        priority: null
      };
      document.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('active-opt'));
      updateQuizUI();
    }
  };

  // ========================================================================
  // 13. TRAVELER POCKET PASS & BOARDING PASS MODAL
  // ========================================================================
  const passRouteDetails = {
    enogastronomico: { code: "#CO-2026-ENO", num: "01", navKey: "navEno", titleKey: "enoTitle" },
    culturale: { code: "#CO-2026-CLT", num: "02", navKey: "navCult", titleKey: "cultTitle" },
    naturalistico: { code: "#CO-2026-NAT", num: "03", navKey: "navNat", titleKey: "natTitle" },
    sportivo: { code: "#CO-2026-SPT", num: "04", navKey: "navSpo", titleKey: "sportTitle" },
    shopping: { code: "#CO-2026-SHP", num: "05", navKey: "navShop", titleKey: "shopTitle" },
    slow: { code: "#CO-2026-SLW", num: "06", navKey: "navSlow", titleKey: "slowTitle" }
  };

  window.ComoPass = {
    currentRoute: 'enogastronomico',
    open(routeId) {
      const validRoute = routeId || state.activeTab || 'enogastronomico';
      const routeKey = passRouteDetails[validRoute] ? validRoute : 'enogastronomico';
      this.currentRoute = routeKey;

      const meta = passRouteDetails[routeKey];
      const backdrop = document.getElementById('pocket-pass-backdrop');
      const codeEl = document.getElementById('pass-code-val');
      const dateEl = document.getElementById('pass-date-val');
      const badgeEl = document.getElementById('pass-route-badge');
      const nameEl = document.getElementById('pass-route-name');
      const qrEl = document.getElementById('pass-qr-img');
      const ulEl = document.getElementById('pass-stops-list');

      if (codeEl) codeEl.textContent = meta.code;
      if (dateEl) {
        const today = new Date();
        dateEl.textContent = today.toLocaleDateString(state.lang === 'ru' ? 'ru-RU' : 'it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
      if (badgeEl) {
        const navTitle = t(meta.navKey) || meta.navKey;
        badgeEl.textContent = `${meta.num} • ${navTitle.toUpperCase()}`;
      }
      if (nameEl) {
        nameEl.setAttribute('data-i18n', meta.titleKey);
        nameEl.textContent = t(meta.titleKey);
      }

      // Populate stops checklist from comoTimelines
      if (ulEl && typeof comoTimelines !== 'undefined' && comoTimelines[routeKey]) {
        const tl = comoTimelines[routeKey];
        ulEl.innerHTML = '';

        tl.steps.forEach((s) => {
          const li = document.createElement('li');
          li.className = 'pass-stop-li';
          const title = (s.title && s.title[state.lang]) || (s.title && s.title.it) || s.title;

          li.innerHTML = `
            <div class="pass-stop-checkbox"></div>
            <span class="pass-stop-time">${s.time}</span>
            <span class="pass-stop-text">${title}</span>
          `;

          li.addEventListener('click', () => {
            li.classList.toggle('is-checked');
          });

          ulEl.appendChild(li);
        });

        // Set QR code to Google Maps URL
        if (qrEl && tl.googleMapsUrl) {
          const encodedUrl = encodeURIComponent(tl.googleMapsUrl);
          qrEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedUrl}&format=svg`;
        }
      }

      if (backdrop) {
        backdrop.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    },

    openCustom(customItinerary) {
      const it = customItinerary || quizState.currentCustomItinerary;
      if (!it) {
        this.open(quizState.matchedRoute);
        return;
      }
      this.currentRoute = 'custom';

      const backdrop = document.getElementById('pocket-pass-backdrop');
      const codeEl = document.getElementById('pass-code-val');
      const dateEl = document.getElementById('pass-date-val');
      const badgeEl = document.getElementById('pass-route-badge');
      const nameEl = document.getElementById('pass-route-name');
      const qrEl = document.getElementById('pass-qr-img');
      const ulEl = document.getElementById('pass-stops-list');

      if (codeEl) codeEl.textContent = it.code || "#CO-CUSTOM-2026";
      if (dateEl) {
        const today = new Date();
        dateEl.textContent = today.toLocaleDateString(state.lang === 'ru' ? 'ru-RU' : 'it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
      }
      if (badgeEl) {
        const tagText = t('customRouteTag') || "ITINERARIO PERSONALIZZATO";
        badgeEl.textContent = `${tagText} • ${it.time}`;
      }
      if (nameEl) {
        nameEl.removeAttribute('data-i18n');
        nameEl.textContent = it.title;
      }

      // Populate stops checklist from customItinerary
      if (ulEl && it.steps) {
        ulEl.innerHTML = '';
        const lang = state.lang || 'it';

        it.steps.forEach((s) => {
          const li = document.createElement('li');
          li.className = 'pass-stop-li';
          const title = (s.title && s.title[lang]) || (s.title && s.title.it) || s.title;

          li.innerHTML = `
            <div class="pass-stop-checkbox"></div>
            <span class="pass-stop-time">${s.time}</span>
            <span class="pass-stop-text">${title}</span>
          `;

          li.addEventListener('click', () => {
            li.classList.toggle('is-checked');
          });

          ulEl.appendChild(li);
        });

        // Set QR code to Google Maps URL
        if (qrEl && it.mapsUrl) {
          const encodedUrl = encodeURIComponent(it.mapsUrl);
          qrEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodedUrl}&format=svg`;
        }
      }

      if (backdrop) {
        backdrop.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    },

    close() {
      const backdrop = document.getElementById('pocket-pass-backdrop');
      if (backdrop) {
        backdrop.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    },
    print() {
      window.print();
    }
  };

  // 14. Initialization on DOMContentLoaded
  function init() {
    initLenis();
    applyTranslations();
    setupEventListeners();
    fetchLiveWeather();
    initDynamicQr();
    initInteractiveMap();

    // Check URL query param or hash for direct tab linking
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    const hash = window.location.hash.replace('#', '');
    if (tabParam) {
      switchTab(tabParam);
    } else if (hash) {
      switchTab(hash);
    } else {
      switchTab('home');
    }

    initScrollReveal();
    updateQuizUI();

    // Check URL parameters for automated test action
    try {
      const params = new URLSearchParams(window.location.search);
      const testAction = params.get('test');
      if (testAction) {
        const runTest = () => {
          if (testAction === 'map-route') {
            if (window.ComoMapControls) window.ComoMapControls.focusRoute();
            const el = document.getElementById('como-leaflet-map');
            if (el) el.scrollIntoView({ block: 'center' });
          } else if (testAction === 'map-station') {
            const btn = document.getElementById('btn-map-station');
            if (btn) btn.click();
            const el = document.getElementById('como-leaflet-map');
            if (el) el.scrollIntoView({ block: 'center' });
          } else if (testAction === 'map-lake') {
            const btn = document.getElementById('btn-map-lake');
            if (btn) btn.click();
            const el = document.getElementById('como-leaflet-map');
            if (el) el.scrollIntoView({ block: 'center' });
          } else if (testAction === 'modal-voltiano') {
            openModal('mon-2');
          } else if (testAction === 'modal-slo4') {
            openModal('slo-4');
          } else if (testAction === 'modal-slo4-360') {
            openModal('slo-4');
            setModalSubtab('360');
          } else if (testAction === 'modal-stazione') {
            setTimeout(() => openModal('hub-stazione'), 350);
          } else if (testAction === 'modal-battello') {
            setTimeout(() => openModal('hub-battello'), 350);
          } else if (testAction === 'modal-battello-scroll') {
            openModal('hub-battello');
            setTimeout(() => {
              const el = document.getElementById('modal-body-scroll-editorial');
              if (el) el.scrollTop = 380;
            }, 300);
          } else if (testAction === 'modal-360') {
            openModal('mon-2');
            setTimeout(() => {
              const btn360 = document.getElementById('modal-tab-btn-360');
              if (btn360) btn360.click();
            }, 300);
          } else if (testAction === 'arrivare-tickets') {
            switchTab('arrivare');
            setTimeout(() => {
              const el = document.getElementById('arrivare-ticket-guide');
              if (el) {
                el.scrollIntoView({ block: 'start' });
                const drawer = document.getElementById('train-ticket-guide-drawer');
                if (drawer && !drawer.classList.contains('is-open')) toggleTicketGuide();
              }
            }, 250);
          }
        };
        runTest();
      }
    } catch (e) {
      console.error(e);
    }
  }

    function toggleTicketGuide() {
    const btn = document.getElementById('btn-toggle-ticket-guide');
    const drawer = document.getElementById('train-ticket-guide-drawer');
    if (!drawer) return;

    const isOpen = drawer.classList.toggle('is-open');
    if (btn) {
      btn.classList.toggle('is-open', isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }

    if (isOpen && lenis) {
      setTimeout(() => {
        lenis.scrollTo(drawer, { offset: -90, duration: 0.8 });
      }, 80);
    }
  }

  // Expose global API
  window.ComoApp = {
    setLanguage,
    switchTab,
    openModal,
    closeModal,
    setModalSubtab,
    openMobileDrawer,
    closeMobileDrawer,
    toggleTicketGuide
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

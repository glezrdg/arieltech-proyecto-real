(function () {
  'use strict';

  const LINKTREE_URL = 'https://linktr.ee/Arieltech';
  const WA_URL = 'https://wa.me/%2B18294405195?text=Hola%2C%20quiero%20cotizar%20la%20reparaci%C3%B3n%20de%20mi%20celular%20%F0%9F%93%B1';
  const IG_URL = 'https://www.instagram.com/arieltechmobile/';
  const SOCIALS = [
    { key: 'whatsapp',  label: 'WhatsApp',  href: 'https://wa.me/%2B18294405195?text=Hola%2C%20quiero%20cotizar%20la%20reparaci%C3%B3n%20de%20mi%20celular%20%F0%9F%93%B1', bg: '#25D366', style: 'solid' },
    { key: 'facebook',  label: 'Facebook',  href: 'https://www.facebook.com/arieltechmobile',        bg: '#1877F2', style: 'solid' },
    { key: 'tiktok',    label: 'TikTok',    href: 'https://www.tiktok.com/@arieltechmobile',         bg: '#000000', style: 'tiktok' },
    { key: 'maps',      label: 'Ubicación', href: 'https://goo.gl/maps/LppBCm5ReajsdddB9',           bg: '#4285f4', style: 'solid' },
    { key: 'waze',      label: 'Waze',      href: 'https://ul.waze.com/ul?place=ChIJ7_TjoDNnr44REDf3_osNA2k&ll=18.55720160%2C-69.29949500&navigate=yes', bg: '#33ccff', style: 'solid' },
  ];

  const SOCIAL_ICONS = {
    // Simple Icons WhatsApp logo — renders cleanly with default nonzero fill.
    whatsapp: '<path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.299-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    facebook: '<path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/>',
    tiktok: '<path d="M19.32 7.53a6.12 6.12 0 0 1-3.63-1.19 6.13 6.13 0 0 1-2.45-3.34H9.9v11.2a2.78 2.78 0 0 1-2.78 2.78 2.78 2.78 0 0 1-2.78-2.78 2.78 2.78 0 0 1 2.78-2.78c.28 0 .56.04.83.12V7.96a6.1 6.1 0 0 0-.83-.06A6.11 6.11 0 0 0 1 14.01a6.11 6.11 0 0 0 6.12 6.11 6.11 6.11 0 0 0 6.11-6.11V8.97a9.45 9.45 0 0 0 6.09 2.2V7.82a5.48 5.48 0 0 1 0-.29Z"/>',
    maps: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    waze: '<path d="M12 2a10 10 0 0 0-9.47 13.18A3 3 0 0 0 5 20h1a2 2 0 1 0 4 0h4a2 2 0 1 0 4 0h1a3 3 0 0 0 2.47-4.82A10 10 0 0 0 12 2Z"/><circle cx="9" cy="11" r="1" fill="currentColor"/><circle cx="15" cy="11" r="1" fill="currentColor"/>',
    phone: '<path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 0 0-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.2a1 1 0 0 0 .24-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z"/>',
  };
  const IG_POSTS = [
    { shortcode: 'gallery-01', type: 'image', likes: 412 },
    { shortcode: 'vid-1', type: 'video', likes: 703, url: '/images/video%20galeria.mp4' },
    { shortcode: 'gallery-03', type: 'image', likes: 287 },
    { shortcode: 'vid-2', type: 'video', likes: 612, url: '/images/video%20galeria%202.mp4' },
    { shortcode: 'gallery-04', type: 'image', likes: 503 },
    { shortcode: 'vid-3', type: 'video', likes: 548, url: '/images/video%20galeria%203.mp4' },
  ];
  // Hero — single video in loop (lightest option for bad connections)
  const HERO_VIDEO = '/images/video%20posible%20hero.mp4';
  const HERO_POSTER = '/images/DWPJKUSCQsK.jpg';
  const MAPS_EMBED =
    'https://maps.google.com/maps?q=Ariel+Tech+Mobile&ll=18.5572016,-69.299495&z=17&output=embed';
  const MAPS_LINK =
    'https://www.google.com/maps/place/Ariel+Tech+Mobile/@18.5572016,-69.3016837,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf6733a0e3f4ef:0x69030d8bfef73710!8m2!3d18.5572016!4d-69.299495';

  // ---------- SERVICES DATA ----------
  const SERVICES = [
    { icon: 'cpu',         title: 'Expertos en Micro-Soldadura', desc: 'Expertos en micro soldaduras. Reparación a nivel de placa con microscopio, reballing, cambio de chips y diagnóstico avanzado donde otros no llegan.' },
    { icon: 'apple',       title: 'Especialistas en Apple',       desc: 'Reparación profesional de iPhone, iPad, Mac y Apple Watch. Experiencia específica en fallas complejas de la marca, Face ID, True Tone y cambios con componentes originales.' },
    { icon: 'wrench',      title: 'Reparación General',   desc: 'Pantallas, baterías, puertos de carga, cámaras, botones y bocinas. Repuestos originales y compatibles de alta calidad con garantía real.' },
    { icon: 'lock-open',   title: 'Desbloqueo y eSIM',    desc: 'Liberación de iPhone y Android con proveedores oficiales. Conversiones eSIM a iPhone y activaciones rápidas y seguras para cualquier modelo.' },
    { icon: 'smartphone',  title: 'Celulares Nuevos Garantizados', cta: 'Escríbenos y cotiza hoy', desc: 'Compra con confianza: equipos originales, probados y listos para ti.<br><br>\uD83D\uDCB0 Precios para todos los bolsillos<br>\uD83D\uDCE6 Entrega inmediata<br>\uD83D\uDEE0\uFE0F Soporte técnico incluido' },
    { icon: 'laptop',      title: 'Laptops y Accesorios', desc: 'Reparación y venta de laptops. Amplio catálogo de accesorios, cargadores y repuestos originales.' },
    { icon: 'gamepad',     title: 'Consolas y Videojuegos',desc: 'Reparación y mantenimiento de PlayStation, Xbox, Nintendo y más. Diagnóstico, limpieza y cambios de componentes.' },
    { icon: 'credit-card', title: 'Financiamiento',       desc: 'Llévate tu equipo en cómodas cuotas. Financiamiento disponible solo para la compra de equipos, no aplica a reparaciones.' },
  ];

  const ICONS = {
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    smartphone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    gamepad: '<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/>',
    apple: '<path d="M17.05 20.28c-.98.95-2.05.86-3.08.43-1.09-.45-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.43C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.19 2.31-.89 3.51-.84 1.54.12 2.7.7 3.44 1.79-3.14 1.82-2.29 5.97.64 7.02-.65 1.29-1.52 2.58-2.67 4.2zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor" stroke="none"/>',
    'lock-open': '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
    'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  };

  // Brand SVG wordmarks (simple, monochrome) — rendered as text in small caps, since SVG logos need exact paths
  const BRANDS = ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Motorola', 'Lenovo', 'HP'];

  function svg(iconKey, cls) {
    // Extract the Tailwind h-N class (h-3, h-3.5, h-4, etc.) to compute an explicit pixel size
    // This is a safety net: if the compiled Tailwind CSS doesn't include that class, the width/height attrs still apply.
    let size = 20;
    const m = (cls || '').match(/h-(\d+(?:\.\d+)?)/);
    if (m) size = parseFloat(m[1]) * 4;
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="' + (cls || '') + '" aria-hidden="true" style="flex-shrink:0;">' + (ICONS[iconKey] || '') + '</svg>';
  }

  // ---------- HERO BACKGROUND VIDEO (single loop, pauses when off-screen) ----------
  function ensureHeroVideo() {
    const hero = document.getElementById('inicio');
    if (!hero) return false;

    hero.querySelectorAll('.bg-gradient-to-r, .bg-gradient-to-l').forEach(function (el) {
      const cls = el.className || '';
      if (cls.indexOf('absolute') !== -1 && cls.indexOf('inset-0') !== -1) {
        el.style.display = 'none';
      }
    });

    if (!document.querySelector('[data-injected="hero-overlay"]')) {
      const overlay = document.createElement('div');
      overlay.setAttribute('data-injected', 'hero-overlay');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.className = 'pointer-events-none absolute inset-0 z-[1]';
      overlay.style.background =
        'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.4) 100%)';
      hero.appendChild(overlay);
    }

    if (document.querySelector('[data-injected="hero-video"]')) return true;

    const bgImg = hero.querySelector('img[data-nimg="fill"], img[style*="position:absolute"]');
    if (bgImg) bgImg.style.display = 'none';

    const video = document.createElement('video');
    video.setAttribute('data-injected', 'hero-video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.setAttribute('preload', 'auto');
    video.setAttribute('poster', HERO_POSTER);
    video.src = HERO_VIDEO;
    video.className = 'absolute inset-0 h-full w-full object-cover z-0';

    // Pause video when hero is off-screen to save battery/CPU
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) video.play().catch(function () {});
          else video.pause();
        });
      }, { threshold: 0.01 });
      io.observe(video);
    }

    hero.insertBefore(video, hero.firstChild);
    return true;
  }

  // Hero frame overlay — red glow on hover like GlowCards
  function ensureHeroFrame() {
    if (document.querySelector('[data-injected="hero-frame"]')) return true;
    const hero = document.getElementById('inicio');
    if (!hero) return false;
    const frame = document.createElement('div');
    frame.setAttribute('data-injected', 'hero-frame');
    frame.setAttribute('aria-hidden', 'true');
    frame.className = 'ariel-hero-frame';
    hero.appendChild(frame);
    return true;
  }

  // Replace hero H1 with a big logo + brand name; sync with navbar on scroll
  function ensureHeroBrand() {
    const hero = document.getElementById('inicio');
    if (!hero) return false;

    // Give the content block GlowCard behavior (red border + spotlight on hover)
    const content = hero.querySelector('.relative.z-10 > .max-w-2xl');
    if (content && !content.hasAttribute('data-hero-frame')) {
      content.classList.remove('max-w-2xl');
      content.classList.add('max-w-7xl');
      content.setAttribute('data-glow', '');
      content.setAttribute('data-hero-frame', '');
      content.style.setProperty('--base', '0');
      content.style.setProperty('--spread', '15');
    }

    const h1 = hero.querySelector('h1');
    if (!h1) return false;
    if (h1.hasAttribute('data-injected-brand')) return true;

    // Hide the associated description paragraph that was supporting the old H1
    const desc = h1.nextElementSibling;
    if (desc && desc.tagName === 'P') desc.style.display = 'none';

    h1.setAttribute('data-injected-brand', '1');
    h1.className = 'flex items-center justify-center gap-3 sm:gap-5';
    h1.style.flexWrap = 'nowrap';
    h1.innerHTML =
      '<img src="/images/avatar.jpg" alt="Ariel Tech Mobile" class="ariel-hero-logo ariel-hero-logo-desktop rounded-full"/>' +
      '<img src="/images/logo-ariel-white.png" alt="Ariel Tech Mobile" class="ariel-hero-logo-mobile"/>' +
      '<span class="flex flex-col items-center leading-none">' +
        '<span class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white" style="white-space:nowrap;">Ariel<span class="text-primary">Tech</span>Mobile</span>' +
        '<span class="mt-2 text-sm sm:text-base text-white/85 font-medium">Expertos en tecnología</span>' +
      '</span>';

    if (content && !content.querySelector('[data-injected="hero-copy"]')) {
      const copy = document.createElement('div');
      copy.setAttribute('data-injected', 'hero-copy');
      copy.className = 'mt-8 space-y-4 text-center';
      copy.innerHTML =
        '<h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight uppercase tracking-tight">\u00BFPROBLEMAS CON TU DISPOSITIVO?</h2>' +
        '<ul data-hero-benefits class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-base sm:text-lg text-white/85 pt-2">' +
          '<li class="flex items-start gap-2"><span class="text-primary mt-1">&#10003;</span><span>Expertos en micro-soldadura profesional</span></li>' +
          '<li class="flex items-start gap-2"><span class="text-primary mt-1">&#10003;</span><span>Venta de dispositivos electrónicos</span></li>' +
          '<li class="flex items-start gap-2"><span class="text-primary mt-1">&#10003;</span><span>Garantía real en cada trabajo</span></li>' +
          '<li class="flex items-start gap-2"><span class="text-primary mt-1">&#10003;</span><span>Repuestos originales y certificado</span></li>' +
        '</ul>' +
        '<p class="text-xs text-white/60 italic">Diagnóstico profesional sin costo inicial</p>';
      h1.insertAdjacentElement('afterend', copy);
    }
    return true;
  }

  // Navbar scroll reveal — toggle .is-scrolled class based on scrollY
  function bindBrandScrollSync() {
    const nav = document.querySelector('nav');
    if (!nav) return;
    // Reset any inline styles left over from previous behavior
    const navBrand = nav.querySelector('a[href="#inicio"]');
    if (navBrand) {
      navBrand.style.opacity = '';
      navBrand.style.transform = '';
      navBrand.style.pointerEvents = '';
    }
    if (window.__navScrollBound) return;
    window.__navScrollBound = true;
    const THRESHOLD = 80; // px scrolled before nav reveals
    function update() {
      if (window.scrollY > THRESHOLD) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Phone mockup panel (kept as fallback, but not used anymore)
  function buildHeroPanel_UNUSED() {
    const panel = document.createElement('div');
    panel.setAttribute('data-injected', 'hero-panel');
    panel.className = 'hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 xl:right-16 w-[300px] xl:w-[340px] z-20 pointer-events-auto';
    panel.innerHTML =
      // Live badge floating above the phone
      '<div class="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 rounded-full bg-rose-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-rose-500/40 uppercase tracking-wider">' +
        '<span class="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>En vivo' +
      '</div>' +
      // Phone frame
      '<div class="relative aspect-[9/19] rounded-[3rem] bg-gradient-to-br from-slate-800 to-slate-950 p-2.5 shadow-2xl shadow-black/60 ring-1 ring-white/10">' +
        // Notch
        '<div class="absolute top-4 left-1/2 -translate-x-1/2 z-20 h-6 w-24 rounded-full bg-black"></div>' +
        // Screen with video
        '<div class="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-black">' +
          '<video data-hero-video autoplay loop muted playsinline preload="auto" class="h-full w-full object-cover">' +
            '<source src="' + HERO_VIDEO + '" type="video/mp4">' +
          '</video>' +
          // Overlay gradient at bottom
          '<div aria-hidden="true" class="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent"></div>' +
          // IG username bottom-left
          '<div class="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">' +
            '<a href="' + IG_URL + '" target="_blank" rel="noopener" class="flex items-center gap-2 text-white text-xs font-semibold cursor-pointer hover:opacity-80 transition">' +
              '<div class="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-500 via-pink-500 to-orange-400 p-0.5">' +
                '<div class="h-full w-full rounded-full bg-black flex items-center justify-center">' +
                  '<svg class="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' +
                '</div>' +
              '</div>' +
              '@arieltechmobile' +
            '</a>' +
            '<div class="flex items-center gap-1 text-white text-xs">' +
              '<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' +
              '3.0K' +
            '</div>' +
          '</div>' +
        '</div>' +
        // Side buttons detail
        '<div class="absolute -left-0.5 top-24 h-14 w-1 rounded-l bg-slate-700"></div>' +
        '<div class="absolute -left-0.5 top-44 h-20 w-1 rounded-l bg-slate-700"></div>' +
        '<div class="absolute -right-0.5 top-36 h-24 w-1 rounded-l bg-slate-700"></div>' +
      '</div>' +
      // Floating label below phone
      '<div class="mt-6 flex items-center gap-3 rounded-2xl bg-surface/80 backdrop-blur-xl border border-white/10 p-4">' +
        '<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">' +
          svg('wrench', 'h-5 w-5') +
        '</div>' +
        '<div class="flex-1 min-w-0">' +
          '<p class="text-xs text-text-muted">Mira nuestras reparaciones</p>' +
          '<p class="text-sm font-semibold text-text">Sigue @arieltechmobile</p>' +
        '</div>' +
        '<a href="' + IG_URL + '" target="_blank" rel="noopener" class="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer">' +
          svg('arrow', 'h-4 w-4') +
        '</a>' +
      '</div>';
    return panel;
  }

  function buildBrandsStrip() {
    const strip = document.createElement('div');
    strip.setAttribute('data-injected', 'brands-strip');
    strip.className = 'relative z-10 border-t border-white/5 bg-background/60 backdrop-blur-sm';
    strip.innerHTML =
      '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">' +
        '<div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">' +
          '<p class="text-xs uppercase tracking-[0.2em] text-text-muted shrink-0">Trabajamos con</p>' +
          '<div class="flex flex-wrap items-center gap-x-8 gap-y-3 opacity-70">' +
            BRANDS.map(function (b) {
              return '<span class="text-sm sm:text-base font-semibold text-text-muted tracking-wide">' + b + '</span>';
            }).join('') +
          '</div>' +
        '</div>' +
      '</div>';
    return strip;
  }

  // ---------- SERVICES SECTION (GlowCard with cursor-tracked spotlight) ----------
  // All cards use red hue; very low spread so they stay solidly red with slight shade variation.
  // Cards are collapsed by default — click the header (chevron) to expand the description + CTA.
  function buildServiceCard(svc, idx) {
    const hue = 0; // red (HSL)
    return (
      '<article data-glow data-service-card style="--base:' + hue + ';--spread:15;" ' +
        'class="group relative flex flex-col p-5 backdrop-blur-[6px] transition-transform duration-300 hover:-translate-y-1">' +
        '<div data-glow></div>' +
        '<button type="button" data-service-toggle aria-expanded="false" ' +
          'class="relative flex items-center gap-3 text-left cursor-pointer w-full">' +
          '<div class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">' +
            svg(svc.icon, 'h-5 w-5') +
          '</div>' +
          '<h3 class="text-base sm:text-lg font-semibold text-white flex-1 leading-tight">' + svc.title + '</h3>' +
          '<span class="font-mono text-xs tracking-widest text-white/40 hidden sm:inline">' + String(idx + 1).padStart(2, '0') + '</span>' +
          '<span class="ariel-card-chevron inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/70">' +
            svg('chevron-down', 'h-4 w-4') +
          '</span>' +
        '</button>' +
        '<div class="ariel-card-body" data-service-body>' +
          '<div class="ariel-card-body-inner">' +
            '<p class="mt-4 text-sm text-white/70 leading-relaxed">' + svc.desc + '</p>' +
            '<div class="mt-4">' +
              '<a href="' + WA_URL + '" target="_blank" rel="noopener" ' +
                'class="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white transition-colors cursor-pointer">' +
                (svc.cta || 'Escríbenos y cotiza hoy') + svg('arrow', 'h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1') +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</article>'
    );
  }

  // ---------- WHY US SECTION (same GlowCard effects as services) ----------
  const WHY_US = [
    {
      icon: 'star',
      title: '\u00BFPor qu\u00E9 elegirnos?',
      desc: 'Experiencia, transparencia y resultados comprobados.<br><br>Más de 13 años resolviendo fallas con precisión técnica.<br>Trabajamos con diagnóstico real, procesos claros y comunicación directa.<br>Sin costos ocultos. Sin improvisaciones.'
    },
    {
      icon: 'shield',
      title: '\u00BFGarant\u00EDa?',
      desc: 'Ofrecemos garantía en todas nuestras reparaciones para brindarte tranquilidad. Respaldamos cada trabajo con responsabilidad y seguimiento.'
    },
    {
      icon: 'clock',
      title: '\u00BFTiempo de entrega?',
      desc: 'Trabajamos con tiempos eficientes sin comprometer la calidad. Muchas reparaciones pueden completarse el mismo día, dependiendo del caso.'
    },
    {
      icon: 'cpu',
      title: '\u00BFExperiencia?',
      desc: 'Contamos con amplia experiencia en diagnóstico y reparación de dispositivos móviles, incluyendo fallas avanzadas. Nuestro enfoque técnico nos permite ofrecer resultados consistentes y confiables.'
    }
  ];

  function buildWhyUsCard(item, idx) {
    return (
      '<article data-glow data-service-card style="--base:0;--spread:15;" ' +
        'class="group relative flex flex-col gap-5 p-7 backdrop-blur-[6px] cursor-pointer transition-transform duration-300 hover:-translate-y-1">' +
        '<div data-glow></div>' +
        '<div class="relative flex items-center justify-between">' +
          '<div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">' +
            svg(item.icon, 'h-6 w-6') +
          '</div>' +
          '<span class="font-mono text-xs tracking-widest text-white/40">' + String(idx + 1).padStart(2, '0') + '</span>' +
        '</div>' +
        '<div class="relative">' +
          '<h3 class="text-lg font-semibold text-white">' + item.title + '</h3>' +
          '<p class="mt-2 text-sm text-white/70 leading-relaxed">' + item.desc + '</p>' +
        '</div>' +
      '</article>'
    );
  }

  // ---------- GOOGLE REVIEWS ----------
  const REVIEWS_URL = 'https://www.google.com/maps/place/Ariel+Tech+Mobile/@18.5560192,-69.3023052,17z/data=!4m8!3m7!1s0x8eaf6733a0e3f4ef:0x69030d8bfef73710!8m2!3d18.5560141!4d-69.2997303!9m1!1b1!16s%2Fg%2F11g0j6yr76?entry=ttu&g_ep=EgoyMDI2MDQxNC4wIKXMDSoASAFQAw%3D%3D';
  const REVIEWS = [
    {
      name: 'Lenin Carpio',
      time: 'Hace 4 meses',
      rating: 5,
      text: 'Excelente servicios y atenciones, calidad recomendada.',
      meta: '1 reseña · 1 foto',
      color: '#e11d48'
    },
    {
      name: 'Crisnaida Tyson Carty',
      time: 'Hace 3 años',
      rating: 5,
      text: 'Muy eficiente en su trabajo y los servicios que brinda. ¡Vale la pena visitarlos y realizar reparaciones con ellos!',
      meta: '1 reseña',
      color: '#0ea5e9'
    },
    {
      name: 'Rafael RatingYourBusinessRD',
      time: 'Hace 2 años',
      rating: 5,
      text: 'Fácil de llegar, una tienda de accesorios de celular y venta de laptop. Compré una laptop a excelente precio y sin muchos rodeos. ¡Experiencia excelente!',
      meta: 'Local Guide · 49 reseñas · 1 foto',
      color: '#f59e0b'
    }
  ];

  function starsHtml(n) {
    let s = '';
    for (let i = 0; i < 5; i++) {
      s += '<svg viewBox="0 0 24 24" class="ariel-review-star" aria-hidden="true" width="16" height="16" fill="' + (i < n ? '#fbbf24' : 'rgba(255,255,255,0.15)') + '"><path d="M12 2l2.39 6.95H22l-5.95 4.32L18.43 22 12 17.27 5.57 22l2.38-8.73L2 8.95h7.61z"/></svg>';
    }
    return s;
  }

  function buildReviewCard(r) {
    const initial = r.name.charAt(0).toUpperCase();
    return (
      '<article class="ariel-review-card">' +
        '<div class="flex items-start gap-3">' +
          '<div class="ariel-review-avatar" style="background:' + r.color + '">' + initial + '</div>' +
          '<div class="flex-1 min-w-0">' +
            '<div class="ariel-review-name">' + r.name + '</div>' +
            '<div class="ariel-review-meta">' + r.meta + '</div>' +
          '</div>' +
          '<svg viewBox="0 0 48 48" width="22" height="22" aria-hidden="true" style="flex-shrink:0"><path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.3 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 37 27 38 24 38c-6 0-11.1-3.9-12.9-9.3l-7 5.4C7.7 41.3 15.2 46 24 46z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.9 2.6-2.5 4.9-4.6 6.4l.1-.1 6.6 5.4C37.9 42.6 45 36 45 24c0-1.3-.2-2.7-.5-4z"/></svg>' +
        '</div>' +
        '<div class="ariel-review-stars">' + starsHtml(r.rating) +
          '<span class="ariel-review-time">' + r.time + '</span>' +
        '</div>' +
        '<p class="ariel-review-text">' + r.text + '</p>' +
      '</article>'
    );
  }

  function buildReviewsSection() {
    const section = document.createElement('section');
    section.id = 'resenas';
    section.className = 'py-20 sm:py-28 bg-surface';
    section.setAttribute('data-injected', 'reviews-section');
    const cards = REVIEWS.map(buildReviewCard).join('');
    section.innerHTML =
      '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">' +
        '<div class="max-w-2xl mx-auto text-center mb-12">' +
          '<div class="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5 text-sm text-white/80 mb-4">' +
            '<svg viewBox="0 0 48 48" width="18" height="18" aria-hidden="true"><path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16.3 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#FBBC05" d="M24 46c5.5 0 10.5-1.9 14.3-5.1l-6.6-5.4C29.7 37 27 38 24 38c-6 0-11.1-3.9-12.9-9.3l-7 5.4C7.7 41.3 15.2 46 24 46z"/><path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.9 2.6-2.5 4.9-4.6 6.4l.1-.1 6.6 5.4C37.9 42.6 45 36 45 24c0-1.3-.2-2.7-.5-4z"/></svg>' +
            'Reseñas verificadas en Google' +
          '</div>' +
          '<h2 class="text-3xl sm:text-4xl font-bold text-text leading-tight">Lo que dicen <span class="text-primary">nuestros clientes</span></h2>' +
          '<div class="mt-4 flex items-center justify-center gap-2 text-text-muted">' +
            '<span class="text-2xl font-bold text-white">4.9</span>' +
            '<span class="inline-flex">' + starsHtml(5) + '</span>' +
            '<span class="text-sm">· reseñas verificadas en Google</span>' +
          '</div>' +
        '</div>' +
        '<div class="grid grid-cols-1 md:grid-cols-2 gap-5">' + cards + '</div>' +
        '<div class="mt-12 text-center">' +
          '<a href="' + REVIEWS_URL + '" target="_blank" rel="noopener" ' +
            'class="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer">' +
            'Ver todas las reseñas en Google' + svg('arrow', 'h-5 w-5') +
          '</a>' +
        '</div>' +
      '</div>';
    return section;
  }

  function ensureReviewsSection() {
    if (document.querySelector('[data-injected="reviews-section"]')) return true;
    const map = document.querySelector('[data-injected="map-section"]');
    if (map && map.parentNode) {
      map.parentNode.insertBefore(buildReviewsSection(), map);
      return true;
    }
    const footer = document.querySelector('footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(buildReviewsSection(), footer);
      return true;
    }
    return false;
  }

  function buildWhyUsSection() {
    const section = document.createElement('section');
    section.id = 'por-que-elegirnos';
    section.className = 'py-20 sm:py-28 bg-background';
    section.setAttribute('data-injected', 'why-us-section');
    const cardsHtml = WHY_US.map(function (w, i) { return buildWhyUsCard(w, i); }).join('');
    section.innerHTML =
      '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">' +
        '<div class="max-w-3xl mx-auto text-center mb-12">' +
          '<h2 class="text-3xl sm:text-4xl font-bold text-text leading-tight">Somos la <span class="text-primary">mejor opción</span> en San Pedro. No hay otro para la reparación de tu celular.</h2>' +
        '</div>' +
        '<div class="ariel-grid-image-cards">' +
          '<div class="ariel-img-col is-single">' +
            '<div class="ariel-img-slot"><img src="/images/gallery-09.jpg" alt="Taller técnico Ariel Tech Mobile" loading="lazy" decoding="async"></div>' +
          '</div>' +
          '<div class="ariel-cards-col">' + cardsHtml + '</div>' +
        '</div>' +
        '<div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">' +
          '<a href="' + WA_URL + '" target="_blank" rel="noopener" ' +
            'style="background:#25D366;" ' +
            'class="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 hover:brightness-110 transition-all duration-200 cursor-pointer">' +
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">' + SOCIAL_ICONS.whatsapp + '</svg>' +
            'Repara tu dispositivo hoy' +
          '</a>' +
          '<a href="' + IG_URL + '" target="_blank" rel="noopener" ' +
            'style="background:linear-gradient(135deg,#833ab4,#fd1d1d 55%,#fcb045);" ' +
            'class="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/20 hover:brightness-110 transition-all duration-200 cursor-pointer">' +
            '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' +
            'Síguenos en Instagram' +
          '</a>' +
        '</div>' +
      '</div>';
    return section;
  }

  function buildServicesSection() {
    const section = document.createElement('section');
    section.id = 'servicios';
    section.className = 'py-20 sm:py-28 bg-surface';
    section.setAttribute('data-injected', 'services-section');

    const cardsHtml = SERVICES.map(function (s, i) { return buildServiceCard(s, i); }).join('');

    section.innerHTML =
      '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">' +
        '<div class="max-w-2xl mx-auto text-center mb-12">' +
          '<h2 class="text-3xl sm:text-4xl font-bold text-text">Nuestros <span class="text-primary">Servicios</span></h2>' +
          '<p class="mt-4 text-text-muted text-lg">Soluciones completas para tus dispositivos con herramientas especializadas y experiencia comprobada.</p>' +
        '</div>' +
        '<div class="ariel-grid-image-cards">' +
          '<div class="ariel-img-col">' +
            '<div class="ariel-img-slot"><img src="/images/gallery-06.jpg" alt="Local Ariel Tech Mobile" loading="lazy" decoding="async"></div>' +
            '<div class="ariel-img-slot"><img src="/images/gallery-05.jpg" alt="Trabajo de micro-soldadura" loading="lazy" decoding="async"></div>' +
          '</div>' +
          '<div class="ariel-cards-col">' + cardsHtml + '</div>' +
        '</div>' +
      '</div>';
    return section;
  }

  // Inject CSS for spotlight/glow effects
  function ensureStyles() {
    if (document.getElementById('ariel-custom-styles')) return;
    const style = document.createElement('style');
    style.id = 'ariel-custom-styles';
    style.textContent = [
      // === GlowCard (robust, mobile-safe) ===
      '[data-glow] {',
      '  --base: 0;',
      '  --spread: 15;',
      '  --radius: 16px;',
      '  --hue: calc(var(--base) + (var(--xp, 0.5) * var(--spread, 0)));',
      '  position: relative;',
      '  background-color: rgba(15, 15, 18, 0.7);',
      '  border: 1px solid rgba(255,255,255,0.08);',
      '  border-radius: var(--radius);',
      '  overflow: hidden;',
      '  isolation: isolate;',
      '  touch-action: pan-y;',
      '  transition: border-color 250ms ease, box-shadow 250ms ease, transform 300ms ease;',
      '}',
      // Red border + glow on hover — uniform all around the card
      '[data-glow]:hover, [data-glow].is-glow-active {',
      '  border-color: hsl(var(--hue, 0) 85% 55%);',
      '  box-shadow: 0 0 0 1px hsl(var(--hue, 0) 85% 55% / 0.5), 0 0 40px hsl(var(--hue, 0) 85% 55% / 0.35);',
      '}',
      // Inner spotlight that follows the cursor within the card
      '[data-glow]::before {',
      '  content: "";',
      '  position: absolute;',
      '  inset: 0;',
      '  background: radial-gradient(260px circle at var(--lx, 50%) var(--ly, 50%), hsl(var(--hue, 0) 85% 55% / 0.28), transparent 60%);',
      '  pointer-events: none;',
      '  transition: opacity 200ms ease;',
      '  opacity: 0;',
      '  z-index: 0;',
      '}',
      '[data-glow]:hover::before, [data-glow].is-glow-active::before { opacity: 1; }',
      '[data-glow] > * { position: relative; z-index: 2; }',
      // Gallery tiles — reuse data-glow for hover border+shadow, but skip the inner bg spotlight (video is already visual)
      '[data-gallery-tile] { background-color: transparent !important; border-color: rgba(255,255,255,0.05); }',
      '[data-gallery-tile]::before { display: none; }',
      // Play button — centered, hides once video is playing
      '.ariel-play-btn { background: rgba(0,0,0,0.25); border: 0; cursor: pointer; }',
      '.ariel-play-btn:hover { background: rgba(0,0,0,0.4); }',
      '.ariel-play-btn:hover > span { transform: scale(1.08); }',
      '.ariel-play-btn > span { transition: transform 200ms ease; }',
      '[data-gallery-tile].is-playing .ariel-play-btn { opacity: 0; pointer-events: none; }',

      // Hero benefits list — stretch to frame edges so left items align left and right items align right
      '[data-hero-benefits] { width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; padding-left: 0 !important; padding-right: 0 !important; }',
      '[data-hero-benefits] > li { justify-content: flex-start !important; text-align: left !important; }',
      '@media (min-width: 640px) and (max-width: 1023px) {',
      '  [data-hero-benefits] > li:nth-child(even) { justify-content: flex-end !important; }',
      '}',
      '@media (min-width: 1024px) {',
      '  [data-hero-benefits] > li { justify-content: center !important; }',
      '}',

      // Hero content frame — reuses [data-glow] system for the red spotlight + border glow
      '[data-hero-frame] {',
      '  background: rgba(0,0,0,0.25) !important;',
      '  border-radius: 24px !important;',
      '  padding: 2.5rem 2rem !important;',
      '  backdrop-filter: blur(6px);',
      '  -webkit-backdrop-filter: blur(6px);',
      '  overflow: hidden;',
      '}',
      '@media (min-width: 640px) { [data-hero-frame] { padding: 3rem 3rem !important; } }',
      '@media (min-width: 1024px) { [data-hero-frame] { padding: 3.5rem 4rem !important; } }',
      // Bigger spotlight for the hero (it is a large block, default 260px is too small)
      '[data-hero-frame]::before {',
      '  background: radial-gradient(500px circle at var(--lx, 50%) var(--ly, 50%), hsl(var(--hue, 0) 85% 55% / 0.28), transparent 60%) !important;',
      '}',
      // Prevent horizontal overflow from any injected element
      'html, body { overflow-x: hidden; }',

      // Safety net — scoped to my injected content only (don't touch site's own SVGs)
      '[data-injected] svg.h-3, [data-service-card] svg.h-3 { width: 12px; height: 12px; }',
      '[data-injected] svg.h-3\\.5, [data-service-card] svg.h-3\\.5 { width: 14px; height: 14px; }',
      '[data-injected] svg.h-4, [data-service-card] svg.h-4 { width: 16px; height: 16px; }',
      '[data-injected] svg.h-5, [data-service-card] svg.h-5 { width: 20px; height: 20px; }',
      '[data-injected] svg.h-6, [data-service-card] svg.h-6 { width: 24px; height: 24px; }',
      '[data-injected] svg.h-7, [data-service-card] svg.h-7 { width: 28px; height: 28px; }',
      '[data-injected] svg.h-8, [data-service-card] svg.h-8 { width: 32px; height: 32px; }',
      // SVGs inside my injected content should never exceed their container
      '[data-injected] svg, [data-service-card] svg { max-width: 100%; flex-shrink: 0; }',

      // Collapsible service cards — grid-template-rows trick gives a smooth
      // height animation without measuring scrollHeight. Inner block fades
      // and lifts in slightly for a polished feel.
      '[data-service-card] [data-service-toggle] { background: transparent; border: 0; padding: 0; color: inherit; font: inherit; }',
      '[data-service-card] .ariel-card-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 380ms cubic-bezier(0.22, 1, 0.36, 1); }',
      '[data-service-card] .ariel-card-body-inner { overflow: hidden; opacity: 0; transform: translateY(-6px); transition: opacity 260ms ease 80ms, transform 380ms cubic-bezier(0.22, 1, 0.36, 1); }',
      '[data-service-card].is-open .ariel-card-body { grid-template-rows: 1fr; }',
      '[data-service-card].is-open .ariel-card-body-inner { opacity: 1; transform: none; }',
      '[data-service-card] .ariel-card-chevron { transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1), color 200ms ease, background-color 200ms ease; }',
      '[data-service-card].is-open .ariel-card-chevron { transform: rotate(180deg); color: #fff; background-color: rgba(255,255,255,0.1); }',
      '@media (prefers-reduced-motion: reduce) {',
      '  [data-service-card] .ariel-card-body, [data-service-card] .ariel-card-body-inner, [data-service-card] .ariel-card-chevron { transition: none; }',
      '}',

      // Floating CTAs (WhatsApp + Instagram) — appear on scroll
      '.ariel-floating-ctas {',
      '  position: fixed;',
      '  right: 1rem;',
      '  bottom: 1rem;',
      '  z-index: 60;',
      '  display: flex;',
      '  flex-direction: column;',
      '  gap: 0.75rem;',
      '  opacity: 0;',
      '  transform: translateY(16px);',
      '  pointer-events: none;',
      '  transition: opacity 280ms ease, transform 280ms ease;',
      '}',
      '.ariel-floating-ctas.is-visible { opacity: 1; transform: translateY(0); pointer-events: auto; }',
      '.ariel-fab {',
      '  display: inline-flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  width: 56px;',
      '  height: 56px;',
      '  border-radius: 9999px;',
      '  color: #fff;',
      '  box-shadow: 0 10px 30px rgba(0,0,0,0.35);',
      '  ring: 1px solid rgba(255,255,255,0.15);',
      '  transition: transform 200ms ease, box-shadow 200ms ease;',
      '}',
      '.ariel-fab:hover { transform: scale(1.08) translateY(-2px); box-shadow: 0 14px 36px rgba(0,0,0,0.45); }',
      '.ariel-fab svg { width: 28px; height: 28px; }',
      '.ariel-fab-wa { background: #25D366; }',
      '.ariel-fab-wa::after {',
      '  content: "";',
      '  position: absolute;',
      '  inset: -6px;',
      '  border-radius: 9999px;',
      '  background: #25D366;',
      '  opacity: 0.35;',
      '  animation: ariel-pulse 2s ease-out infinite;',
      '  z-index: -1;',
      '}',
      '.ariel-fab-wa { position: relative; }',
      '.ariel-fab-ig { background: linear-gradient(135deg,#833ab4,#fd1d1d 55%,#fcb045); }',
      '@keyframes ariel-pulse { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }',
      '@media (min-width: 640px) { .ariel-floating-ctas { right: 1.5rem; bottom: 1.5rem; gap: 0.875rem; } .ariel-fab { width: 60px; height: 60px; } }',

      // Contact section "Solicitar Cotización" → green WhatsApp button
      '#contacto a[href*="wa.me"] { background: #25D366 !important; }',
      '#contacto a[href*="wa.me"]:hover { filter: brightness(1.1); background: #25D366 !important; }',
      '#contacto a[href*="wa.me"] svg { display: none !important; }',
      '#contacto a[href*="wa.me"]::before {',
      '  content: "";',
      '  display: inline-block; width: 20px; height: 20px;',
      '  background-image: url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 24 24\\" fill=\\"white\\"><path d=\\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z\\"/></svg>");',
      '  background-size: contain; background-repeat: no-repeat;',
      '  flex-shrink: 0;',
      '}',

      // Image + cards layout (used in Servicios and ¿Por qué elegirnos?)
      '.ariel-grid-image-cards {',
      '  display: grid;',
      '  grid-template-columns: 1fr;',
      '  gap: 1.5rem;',
      '  align-items: start;',
      '}',
      '@media (min-width: 1024px) {',
      // Stretch both columns to the same height so the image column matches
      // the collapsed-cards column and there's no empty space underneath.
      '  .ariel-grid-image-cards { grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 2.5rem; align-items: stretch; }',
      '}',
      '.ariel-img-col { display: flex; flex-direction: column; gap: 1rem; }',
      '.ariel-img-slot {',
      '  width: 100%;',
      '  border-radius: 1rem;',
      '  overflow: hidden;',
      '  border: 1px solid rgba(255,255,255,0.08);',
      '  box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);',
      '  aspect-ratio: 4/3;',
      '  max-height: 260px;',
      '}',
      '@media (min-width: 1024px) {',
      // Drop the aspect-ratio on desktop and let each slot fill the column;
      // object-fit on the inner img keeps them looking natural at any height.
      '  .ariel-img-col { height: 100%; min-height: 0; }',
      '  .ariel-img-slot { aspect-ratio: auto; max-height: none; flex: 1 1 0; min-height: 0; }',
      '}',
      '.ariel-img-slot img { width: 100%; height: 100%; object-fit: cover; display: block; }',
      '.ariel-img-col.is-single > .ariel-img-slot { aspect-ratio: 4/3; }',
      '@media (min-width: 1024px) {',
      '  .ariel-img-col.is-single { position: sticky; top: 6rem; }',
      '  .ariel-img-col.is-single > .ariel-img-slot { aspect-ratio: 3/4; }',
      '}',
      '.ariel-cards-col { display: grid; grid-template-columns: 1fr; gap: 1rem; }',
      '@media (min-width: 640px) { .ariel-cards-col { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; } }',
      // Shrink cards inside image+cards layout
      '.ariel-cards-col [data-service-card] { padding: 1.35rem !important; gap: 1rem !important; }',
      '.ariel-cards-col [data-service-card] h3 { font-size: 1rem !important; }',
      '.ariel-cards-col [data-service-card] p { font-size: 0.8125rem !important; line-height: 1.5 !important; }',
      '.ariel-cards-col [data-service-card] .h-12.w-12 { width: 42px !important; height: 42px !important; }',
      '.ariel-cards-col [data-service-card] svg.h-6 { width: 20px !important; height: 20px !important; }',

      // Review cards
      '.ariel-review-card {',
      '  background: rgba(15, 15, 18, 0.7);',
      '  border: 1px solid rgba(255,255,255,0.08);',
      '  border-radius: 16px;',
      '  padding: 1.5rem;',
      '  display: flex;',
      '  flex-direction: column;',
      '  gap: 0.75rem;',
      '  transition: border-color 200ms ease, transform 200ms ease;',
      '}',
      '.ariel-review-card:hover { border-color: rgba(239,68,68,0.4); transform: translateY(-2px); }',
      '.ariel-review-avatar {',
      '  width: 44px; height: 44px; flex-shrink: 0;',
      '  border-radius: 9999px;',
      '  display: inline-flex; align-items: center; justify-content: center;',
      '  color: #fff; font-weight: 700; font-size: 1.05rem;',
      '}',
      '.ariel-review-name { color: #fff; font-weight: 600; font-size: 0.95rem; }',
      '.ariel-review-meta { color: rgba(255,255,255,0.55); font-size: 0.75rem; margin-top: 2px; }',
      '.ariel-review-stars { display: flex; align-items: center; gap: 0.5rem; }',
      '.ariel-review-time { color: rgba(255,255,255,0.5); font-size: 0.75rem; }',
      '.ariel-review-text { color: rgba(255,255,255,0.82); font-size: 0.9375rem; line-height: 1.55; }',

      // Map iframe — overlay prevents touch-hijack on mobile, taller on desktop
      '.ariel-map-wrap iframe { height: 260px !important; }',
      '@media (min-width: 640px) { .ariel-map-wrap iframe { height: 340px !important; } }',
      '@media (min-width: 1024px) { .ariel-map-wrap iframe { height: 420px !important; } }',
      '.ariel-map-overlay { display: none !important; }',
      '.ariel-map-placeholder {',
      '  position: absolute; inset: 0; z-index: 0;',
      '  background: linear-gradient(135deg, #1f1f24 0%, #2a2a30 100%);',
      '  display: flex; align-items: center; justify-content: center;',
      '  color: rgba(255,255,255,0.35); font-size: 0.8125rem;',
      '}',
      '.ariel-map-placeholder::after {',
      '  content: "Cargando mapa...";',
      '}',

      // Hero logo — explicit sizing (Tailwind arbitrary classes don't exist in pre-built CSS)
      '.ariel-hero-logo { width: 44px !important; height: 44px !important; flex-shrink: 0; object-fit: cover; }',
      '@media (min-width: 640px) { .ariel-hero-logo { width: 84px !important; height: 84px !important; } }',
      '@media (min-width: 1024px) { .ariel-hero-logo { width: 96px !important; height: 96px !important; } }',
      // Hero logo — transparent variant shown only on mobile (centered above the brand text)
      '.ariel-hero-logo-mobile { display: none; }',
      '@media (max-width: 639px) {',
      '  .ariel-hero-logo-desktop { display: none !important; }',
      '  .ariel-hero-logo-mobile { display: block !important; width: 88px !important; height: auto !important; max-height: 88px; object-fit: contain; background: transparent !important; margin: 0 auto; }',
      '}',
      // Hero brand H1 — force logo + name on a single line on all screens
      'h1[data-injected-brand] { flex-wrap: nowrap !important; }',
      'h1[data-injected-brand] > span { min-width: 0; }',

      // Hero H1 brand — tighten on mobile so the hero fits without colliding with the nav
      '#inicio h1[data-injected-brand] span.text-4xl { font-size: 1.875rem !important; line-height: 1 !important; }',
      '#inicio h1[data-injected-brand] span.mt-2 { font-size: 0.75rem !important; }',
      '@media (min-width: 640px) {',
      '  #inicio h1[data-injected-brand] span.text-4xl { font-size: 2.5rem !important; }',
      '  #inicio h1[data-injected-brand] span.mt-2 { font-size: 0.875rem !important; }',
      '}',
      '@media (min-width: 1024px) {',
      '  #inicio h1[data-injected-brand] span.text-4xl { font-size: 3.25rem !important; }',
      '  #inicio h1[data-injected-brand] span.mt-2 { font-size: 1rem !important; }',
      '}',
      '@media (max-width: 639px) {',
      '  #inicio h1[data-injected-brand] { width: 100% !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; gap: 0.5rem !important; text-align: center !important; margin-left: auto !important; margin-right: auto !important; }',
      '  #inicio h1[data-injected-brand] > span { align-items: center !important; text-align: center !important; width: 100%; }',
      '}',
      '@media (max-width: 479px) {',
      '  #inicio h1[data-injected-brand] span.text-4xl { font-size: 1.625rem !important; }',
      '}',

      // Hero new copy block (headline + beneficios + microcopy) — smaller on mobile
      '[data-injected="hero-copy"] { margin-top: 1rem !important; gap: 0.5rem; }',
      '[data-injected="hero-copy"] h2 { font-size: 1.25rem !important; line-height: 1.2 !important; }',
      '[data-injected="hero-copy"] > p { font-size: 0.9375rem !important; line-height: 1.35 !important; }',
      '[data-injected="hero-copy"] ul { font-size: 0.875rem !important; padding-top: 0.25rem !important; }',
      '[data-injected="hero-copy"] ul li { gap: 0.5rem !important; }',
      '[data-injected="hero-copy"] p.italic { font-size: 0.9375rem !important; margin-bottom: -0.5rem !important; }',
      '#inicio [data-ctas-injected] { margin-top: 1rem !important; }',
      '@media (min-width: 640px) {',
      '  [data-injected="hero-copy"] { margin-top: 1.5rem !important; }',
      '  [data-injected="hero-copy"] h2 { font-size: 1.625rem !important; }',
      '  [data-injected="hero-copy"] > p { font-size: 1.0625rem !important; }',
      '  [data-injected="hero-copy"] ul { font-size: 1rem !important; }',
      '  [data-injected="hero-copy"] p.italic { font-size: 1.0625rem !important; }',
      '  #inicio [data-ctas-injected] { margin-top: 1.25rem !important; }',
      '}',
      '@media (min-width: 1024px) {',
      '  [data-injected="hero-copy"] { margin-top: 2rem !important; }',
      '  [data-injected="hero-copy"] h2 { font-size: 2rem !important; }',
      '  [data-injected="hero-copy"] > p { font-size: 1.125rem !important; }',
      '  [data-injected="hero-copy"] ul { font-size: 1.0625rem !important; }',
      '  [data-injected="hero-copy"] p.italic { font-size: 1.125rem !important; }',
      '  #inicio [data-ctas-injected] { margin-top: 1.5rem !important; }',
      '}',

      // Hero section — at least one viewport tall, but can grow so content never gets clipped
      '#inicio { min-height: 100vh !important; height: auto !important; max-height: none !important; }',
      '#inicio > .relative.z-10 { padding-top: 7rem !important; padding-bottom: 3rem !important; width: 100% !important; }',
      '@media (min-width: 640px) { #inicio > .relative.z-10 { padding-top: 7.5rem !important; padding-bottom: 3.5rem !important; } }',
      '@media (min-width: 1024px) { #inicio > .relative.z-10 { padding-top: 8rem !important; padding-bottom: 4rem !important; } }',
      // Center the hero content horizontally
      '#inicio > .relative.z-10 > .max-w-2xl {',
      '  max-width: 48rem !important;',
      '  margin-left: auto !important;',
      '  margin-right: auto !important;',
      '  text-align: center !important;',
      '}',
      '@media (min-width: 1024px) { #inicio > .relative.z-10 > .max-w-2xl { max-width: 56rem !important; } }',
      '#inicio h1[data-injected-brand] { justify-content: center !important; }',
      '#inicio > .relative.z-10 .mt-10 { justify-content: center !important; }',
      '#inicio > .relative.z-10 .mt-12 { justify-content: center !important; }',
      '[data-injected="hero-socials"] { justify-content: center !important; }',
      '#inicio > .relative.z-10 .max-w-xl { margin-left: auto !important; margin-right: auto !important; }',
      // Spacing between hero content blocks — tighter on mobile so nothing gets cut
      '#inicio .mt-10 { margin-top: 1.25rem !important; }',
      '#inicio .mt-12 { margin-top: 1.5rem !important; }',
      '[data-injected="hero-socials"] { margin-top: 1.5rem !important; }',
      '@media (min-width: 640px) {',
      '  #inicio h1[data-injected-brand] { margin-bottom: 0.5rem; }',
      '  #inicio .mt-10 { margin-top: 2rem !important; }',
      '  #inicio .mt-12 { margin-top: 2.25rem !important; }',
      '  [data-injected="hero-socials"] { margin-top: 2rem !important; }',
      '}',
      '@media (min-width: 1024px) {',
      '  #inicio .mt-10 { margin-top: 2.5rem !important; }',
      '  #inicio .mt-12 { margin-top: 3rem !important; }',
      '  [data-injected="hero-socials"] { margin-top: 2.5rem !important; }',
      '}',

      // Social buttons — sizes per breakpoint, flex:0 0 prevents deformation
      '.ariel-social-btn { width: 48px; height: 48px; flex: 0 0 48px; aspect-ratio: 1 / 1; }',
      '.ariel-social-icon { width: 22px; height: 22px; }',
      '@media (min-width: 640px) {',
      '  .ariel-social-btn { width: 56px; height: 56px; flex: 0 0 56px; }',
      '  .ariel-social-icon { width: 26px; height: 26px; }',
      '}',
      '@media (min-width: 1024px) {',
      '  .ariel-social-btn { width: 60px; height: 60px; flex: 0 0 60px; }',
      '  .ariel-social-icon { width: 28px; height: 28px; }',
      '}',

      // Hero CTAs — "Repara" (bg-cta) compact, "Cotiza" (green WhatsApp) larger/prominent
      '#inicio .mt-10 a.bg-cta {',
      '  padding: 0.6rem 1.1rem !important;',
      '  font-size: 0.8125rem !important;',
      '}',
      '#inicio .mt-10 a.bg-cta svg { width: 1rem !important; height: 1rem !important; }',
      '#inicio .mt-10 a[style*="25D366"] {',
      '  padding: 0.95rem 1.875rem !important;',
      '  font-size: 1.0625rem !important;',
      '}',
      '#inicio .mt-10 a[style*="25D366"] svg { width: 1.375rem !important; height: 1.375rem !important; }',
      '@media (min-width: 640px) {',
      '  #inicio .mt-10 a.bg-cta { padding: 0.7rem 1.35rem !important; font-size: 0.875rem !important; }',
      '  #inicio .mt-10 a.bg-cta svg { width: 1.125rem !important; height: 1.125rem !important; }',
      '  #inicio .mt-10 a[style*="25D366"] { padding: 1.05rem 2.1rem !important; font-size: 1.125rem !important; }',
      '  #inicio .mt-10 a[style*="25D366"] svg { width: 1.5rem !important; height: 1.5rem !important; }',
      '}',
      '@media (min-width: 1024px) {',
      '  #inicio .mt-10 a.bg-cta { padding: 0.75rem 1.45rem !important; font-size: 0.9375rem !important; }',
      '  #inicio .mt-10 a[style*="25D366"] { padding: 1.15rem 2.35rem !important; font-size: 1.2rem !important; }',
      '}',

      // Hero stats — wrap on mobile, shrink text, hide dividers on narrow
      '#inicio .mt-12 { flex-wrap: wrap !important; gap: 1.25rem !important; }',
      '#inicio .mt-12 .text-2xl { font-size: 1.75rem !important; line-height: 1 !important; }',
      '#inicio .mt-12 > div > span:last-child { font-size: 0.8125rem !important; }',
      '@media (max-width: 639px) { #inicio .mt-12 > .w-px { display: none !important; } }',
      '@media (min-width: 640px) {',
      '  #inicio .mt-12 { gap: 2rem !important; }',
      '  #inicio .mt-12 .text-2xl { font-size: 2rem !important; }',
      '  #inicio .mt-12 > div > span:last-child { font-size: 0.9rem !important; }',
      '}',
      '@media (min-width: 1024px) { #inicio .mt-12 .text-2xl { font-size: 2.25rem !important; } }',

      // Disable hover transforms on touch devices (they cause sticky hover)
      '@media (hover: none) {',
      '  [data-service-card]:hover, [data-glow]:hover { transform: none !important; }',
      '}',

      // Navbar — logo stays LEFT, nav links absolutely centered, Llamar CTA on right
      'nav.fixed > div > div { position: relative !important; }',
      'nav.fixed > div > div > div.hidden.md\\:flex {',
      '  position: absolute !important;',
      '  left: 50% !important;',
      '  top: 50% !important;',
      '  transform: translate(-50%, -50%) !important;',
      '}',

      // Scroll reveal — navbar background + links + CTA always visible; ONLY the brand (logo + name) fades on scroll
      'nav.fixed > div > div > a[href="#inicio"] {',
      '  opacity: 0 !important;',
      '  pointer-events: none;',
      '  transition: opacity 350ms ease, transform 350ms ease !important;',
      '  transform: translateY(-6px) !important;',
      '}',
      'nav.fixed.is-scrolled > div > div > a[href="#inicio"] {',
      '  opacity: 1 !important;',
      '  pointer-events: auto;',
      '  transform: translateY(0) !important;',
      '}',
      'nav.fixed > div > div > a[href="#inicio"] { white-space: nowrap !important; flex-shrink: 0 !important; }',
      'nav.fixed > div > div > a[href="#inicio"] span { white-space: nowrap !important; }',
      'nav.fixed > div > div > a[href="#inicio"] img { width: 36px !important; height: 36px !important; flex-shrink: 0 !important; border-radius: 9999px !important; }',

      // Respect reduced motion
      '@media (prefers-reduced-motion: reduce) {',
      '  [data-glow], [data-service-card], .ariel-hero-logo, .ariel-social-btn, video { transition: none !important; animation: none !important; }',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  // Pointer tracker — sets --lx/--ly (local px inside the card) + --xp (0-1 viewport x for hue modulation)
  // Toggle the collapsible body when the user clicks the card header.
  // Event delegation so cards re-rendered later still work.
  function bindServiceCardToggles() {
    if (window.__serviceToggleBound) return;
    window.__serviceToggleBound = true;
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('[data-service-toggle]');
      if (!btn) return;
      const card = btn.closest('[data-service-card]');
      if (!card) return;
      const open = card.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  function bindCardSpotlights() {
    if (window.__glowPointerBound) return;
    window.__glowPointerBound = true;
    document.addEventListener('pointermove', function (e) {
      const xp = (e.clientX / window.innerWidth).toFixed(3);
      document.querySelectorAll('[data-glow]').forEach(function (el) {
        el.style.setProperty('--xp', xp);
        const r = el.getBoundingClientRect();
        // Only update local coords if pointer is over/near the card (cheap viewport cull)
        if (e.clientY >= r.top - 40 && e.clientY <= r.bottom + 40 && e.clientX >= r.left - 40 && e.clientX <= r.right + 40) {
          el.style.setProperty('--lx', (e.clientX - r.left) + 'px');
          el.style.setProperty('--ly', (e.clientY - r.top) + 'px');
        }
      });
    }, { passive: true });
  }

  // ---------- GALLERY (poster by default, plays on click) ----------
  function buildGalleryTile(post, idx) {
    const isVideo = post.type === 'video';
    const posterUrl = post.poster || '/images/' + post.shortcode + '.jpg';
    const videoUrl = isVideo ? (post.url || '/media/' + post.shortcode + '.mp4') : null;
    const eager = idx < 3;
    const loadingAttr = eager ? 'eager' : 'lazy';
    const priorityAttr = eager ? ' fetchpriority="high"' : '';
    const media = isVideo
      ? '<video data-autoplay-video src="' + videoUrl + '" autoplay loop muted playsinline preload="auto" class="h-full w-full object-cover" style="transform:scale(1.18);transform-origin:center;"></video>'
      : '<img src="' + posterUrl + '" alt="Trabajo de Ariel Tech" loading="' + loadingAttr + '" decoding="async"' + priorityAttr + ' class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" style="background:#1f1f24;">';
    return (
      '<a data-glow data-gallery-tile href="' + IG_URL + '" target="_blank" rel="noopener" style="--base:0;--spread:15;background:#1f1f24;" class="group relative block aspect-square overflow-hidden rounded-2xl cursor-pointer">' +
        media +
        '<div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>' +
        (isVideo
          ? '<div class="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-black/60 backdrop-blur px-2 py-1 text-[10px] font-semibold text-white uppercase tracking-wider ring-1 ring-white/10">' +
              '<svg class="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>Reel' +
            '</div>'
          : ''
        ) +
        '<div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">' +
          '<span class="inline-flex items-center gap-1.5 text-xs font-medium">' +
            '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>' +
            post.likes +
          '</span>' +
          '<svg class="h-4 w-4 opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>' +
        '</div>' +
      '</a>'
    );
  }

  function buildGallerySection() {
    const section = document.createElement('section');
    section.id = 'galeria';
    section.className = 'py-20 sm:py-28 bg-surface';
    section.setAttribute('data-injected', 'gallery-section');
    const tiles = IG_POSTS.map(function (p, i) { return buildGalleryTile(p, i); }).join('');
    section.innerHTML =
      '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">' +
        '<div class="text-center max-w-2xl mx-auto mb-12">' +
          '<h2 class="text-3xl sm:text-4xl font-bold text-text">Nuestro <span class="text-primary">Trabajo</span></h2>' +
          '<p class="mt-4 text-text-muted text-lg">Mira lo que hacemos día a día en nuestro taller. Síguenos en Instagram para más contenido.</p>' +
        '</div>' +
        '<div class="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">' + tiles + '</div>' +
        '<div class="mt-10 text-center">' +
          '<a href="' + IG_URL + '" target="_blank" rel="noopener" ' +
            'style="background:linear-gradient(135deg,#833ab4,#fd1d1d 55%,#fcb045);" ' +
            'class="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">' +
            '<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>' +
            'Síguenos en Instagram' +
          '</a>' +
        '</div>' +
      '</div>';
    return section;
  }

  function replaceGallerySection() {
    const existing = document.getElementById('galeria');
    if (!existing) return false;
    if (existing.hasAttribute('data-injected')) return true;
    existing.parentNode.replaceChild(buildGallerySection(), existing);
    return true;
  }

  // Lazy-load videos — only fetch + play when they enter viewport; pause when they leave.
  // Only applies to the contact-section video (it stays auto). Gallery videos are click-to-play.
  function bindLazyVideos() {
    if (!('IntersectionObserver' in window)) return;

    if (!window.__lazyVideoBound) {
      window.__lazyVideoBound = true;
      const io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          const v = e.target;
          if (e.isIntersecting) {
            if (!v.src && v.dataset.src) { v.src = v.dataset.src; v.load(); }
            v.play().catch(function () {});
          } else {
            v.pause();
          }
        });
      }, { threshold: 0.25, rootMargin: '100px' });
      window.__lazyIO = io;
      document.querySelectorAll('[data-injected="contact-photo"] video:not([data-lazy-bound])').forEach(function (v) {
        v.setAttribute('data-lazy-bound', '1');
        v.removeAttribute('autoplay');
        io.observe(v);
      });
    }

    // Bind play buttons on gallery tiles — click plays the video in place, stops IG navigation
    document.querySelectorAll('[data-gallery-tile] [data-play-btn]:not([data-bound])').forEach(function (btn) {
      btn.setAttribute('data-bound', '1');
      const tile = btn.closest('[data-gallery-tile]');
      const video = tile && tile.querySelector('video[data-click-video]');
      if (!video) return;
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!video.src && video.dataset.src) { video.src = video.dataset.src; video.load(); }
        video.play().catch(function () {});
        tile.classList.add('is-playing');
      });
      // Also allow tapping the video itself to pause/resume once it has started
      video.addEventListener('click', function (e) {
        if (!tile.classList.contains('is-playing')) return;
        e.preventDefault();
        e.stopPropagation();
        if (video.paused) video.play(); else video.pause();
      });
    });
  }

  // ---------- MAP + LINKTREE (unchanged logic) ----------
  function buildMapSection() {
    const section = document.createElement('section');
    section.id = 'ubicacion';
    section.setAttribute('data-injected', 'map-section');
    section.className = 'bg-surface';
    section.style.paddingTop = '0';
    section.innerHTML =
      '<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style="padding-top:4rem;padding-bottom:4rem;">' +
        '<div class="grid md:grid-cols-3 gap-6 md:gap-8 items-start mb-6 md:mb-8">' +
          '<div class="md:col-span-2">' +
            '<h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold" style="color:#ffffff">Encuéntranos en San Pedro</h2>' +
            '<p class="mt-3" style="color:rgba(255,255,255,0.75)">Municipio Consuelo, San Pedro de Macorís, República Dominicana</p>' +
          '</div>' +
          '<a href="' + MAPS_LINK + '" target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/15 px-5 py-3 text-sm font-semibold text-primary ring-1 ring-primary/30 hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer">' +
            'Abrir en Google Maps' + svg('arrow', 'h-4 w-4') +
          '</a>' +
        '</div>' +
        '<div class="ariel-map-wrap relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40" style="background:#1f1f24;">' +
          '<div class="ariel-map-placeholder" aria-hidden="true"></div>' +
          '<iframe title="Ubicación Ariel Tech Mobile" src="' + MAPS_EMBED + '" style="border:0;display:block;width:100%;height:320px;position:relative;z-index:1" loading="eager" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>' +
        '</div>' +
      '</div>';
    return section;
  }

  function buildLinktreeCard() {
    const a = document.createElement('a');
    a.href = LINKTREE_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'flex items-center gap-4 rounded-xl bg-surface border border-surface-light p-5 hover:border-primary/50 transition-all duration-200 cursor-pointer group';
    a.setAttribute('data-injected', 'linktree-card');
    a.innerHTML =
      '<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">' +
        '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>' +
      '</div>' +
      '<div><p class="text-sm font-semibold text-text">Linktree</p><p class="text-sm text-text-muted">linktr.ee/Arieltech</p></div>';
    return a;
  }

  function buildLinktreeLi() {
    const li = document.createElement('li');
    li.setAttribute('data-injected', 'linktree-li');
    li.innerHTML =
      '<a href="' + LINKTREE_URL + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors duration-200 cursor-pointer">' +
        '<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 1 1 0 10h-2"/><line x1="8" x2="16" y1="12" y2="12"/></svg>' +
        'linktr.ee/Arieltech' +
      '</a>';
    return li;
  }

  // ---------- ENSURE FUNCTIONS (idempotent) ----------
  function removeHeroPanel() {
    const panel = document.querySelector('[data-injected="hero-panel"]');
    if (panel) panel.remove();
  }

  function removeBrandsStrip() {
    const strip = document.querySelector('[data-injected="brands-strip"]');
    if (strip) strip.remove();
  }

  function replaceServicesSection() {
    const existing = document.getElementById('servicios');
    if (!existing) return false;
    if (existing.hasAttribute('data-injected')) return true;
    existing.parentNode.replaceChild(buildServicesSection(), existing);
    return true;
  }

  function ensureWhyUsSection() {
    if (document.querySelector('[data-injected="why-us-section"]')) return true;
    const servicios = document.getElementById('servicios');
    if (!servicios || !servicios.parentNode) return false;
    servicios.parentNode.insertBefore(buildWhyUsSection(), servicios.nextSibling);
    return true;
  }

  function ensureMapSection() {
    if (document.querySelector('[data-injected="map-section"]')) return true;
    const footer = document.querySelector('footer');
    if (!footer || !footer.parentNode) return false;
    footer.parentNode.insertBefore(buildMapSection(), footer);
    return true;
  }

  function bindMapOverlay() {
    document.querySelectorAll('.ariel-map-wrap:not([data-bound])').forEach(function (wrap) {
      wrap.setAttribute('data-bound', '1');
      const overlay = wrap.querySelector('.ariel-map-overlay');
      if (overlay) {
        overlay.addEventListener('click', function () { wrap.classList.add('is-active'); });
      }
    });
  }

  function removeLinktreeCard() {
    const c = document.querySelector('[data-injected="linktree-card"]');
    if (c) c.remove();
  }

  // Replace the contact section's cards (WhatsApp, Teléfono, Instagram) with a photo
  function replaceContactCards() {
    if (document.querySelector('[data-injected="contact-photo"]')) return true;
    const contactSection = document.getElementById('contacto');
    if (!contactSection) return false;
    const cardsContainer = contactSection.querySelector('.mt-10.space-y-6');
    if (!cardsContainer || !cardsContainer.parentNode) return false;

    const wrap = document.createElement('div');
    wrap.setAttribute('data-injected', 'contact-photo');
    wrap.className = 'mt-10 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40';
    wrap.innerHTML =
      '<video autoplay loop muted playsinline preload="metadata" style="width:100%;height:auto;display:block;object-fit:cover;max-height:520px">' +
        '<source src="/media/C9KlnIOxyrd_slide7.mp4" type="video/mp4">' +
      '</video>';

    cardsContainer.parentNode.replaceChild(wrap, cardsContainer);
    return true;
  }

  function removeLinktreeLi() {
    const l = document.querySelector('[data-injected="linktree-li"]');
    if (l) l.remove();
  }

  function buildHeroSocialBar() {
    const wrap = document.createElement('div');
    wrap.setAttribute('data-injected', 'hero-socials');
    wrap.className = 'relative z-10 mt-10 flex flex-wrap items-center gap-4';
    wrap.innerHTML = SOCIALS.map(function (s) {
      const bgStyle = 'background:' + s.bg + ';';
      return (
        '<a href="' + s.href + '" ' + (s.key === 'phone' ? '' : 'target="_blank" rel="noopener" ') +
          'aria-label="' + s.label + '" title="' + s.label + '" ' +
          'style="' + bgStyle + '" ' +
          'class="ariel-social-btn group relative inline-flex shrink-0 items-center justify-center rounded-2xl text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">' +
          // WhatsApp gets a hardcoded white fill and no drop-shadow filter —
          // before this it inherited via currentColor and a Tailwind filter
          // that combined with the multi-subpath WA logo could erase the icon.
          // WhatsApp uses a PNG icon that fills the button — bypasses every
          // SVG rendering issue we ran into trying to use the brand path.
          (s.key === 'whatsapp'
            ? '<img src="/images/whatsapp.svg" alt="WhatsApp" class="absolute inset-0 w-full h-full rounded-2xl" />'
            : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' + (s.key === 'tiktok' || s.key === 'phone' || s.key === 'facebook' ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="' + (s.key === 'tiktok' || s.key === 'phone' || s.key === 'facebook' ? '0' : '2') + '" stroke-linecap="round" stroke-linejoin="round" class="ariel-social-icon drop-shadow" aria-hidden="true">' +
            (SOCIAL_ICONS[s.key] || '') +
          '</svg>') +
        '</a>'
      );
    }).join('');
    return wrap;
  }

  function ensureHeroSocialBar() {
    if (document.querySelector('[data-injected="hero-socials"]')) return true;
    const hero = document.getElementById('inicio');
    if (!hero) return false;
    const statsCandidate = hero.querySelector('.mt-12, .mt-10');
    const contentCol = hero.querySelector('.max-w-2xl');
    const bar = buildHeroSocialBar();
    if (contentCol) {
      contentCol.appendChild(bar);
    } else if (statsCandidate && statsCandidate.parentNode) {
      statsCandidate.parentNode.appendChild(bar);
    } else {
      hero.appendChild(bar);
    }
    return true;
  }

  function buildHeroSocialBar() {
    const wrap = document.createElement('div');
    wrap.setAttribute('data-injected', 'hero-socials');
    wrap.className = 'relative z-10 mt-10 flex flex-wrap items-center gap-4';
    wrap.innerHTML = SOCIALS.map(function (s) {
      const bgStyle = 'background:' + s.bg + ';';
      return (
        '<a href="' + s.href + '" ' + (s.key === 'phone' ? '' : 'target="_blank" rel="noopener" ') +
          'aria-label="' + s.label + '" title="' + s.label + '" ' +
          'style="' + bgStyle + '" ' +
          'class="ariel-social-btn group relative inline-flex shrink-0 items-center justify-center rounded-2xl text-white shadow-lg shadow-black/30 ring-1 ring-white/15 hover:scale-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">' +
          // WhatsApp gets a hardcoded white fill and no drop-shadow filter —
          // before this it inherited via currentColor and a Tailwind filter
          // that combined with the multi-subpath WA logo could erase the icon.
          // WhatsApp uses a PNG icon that fills the button — bypasses every
          // SVG rendering issue we ran into trying to use the brand path.
          (s.key === 'whatsapp'
            ? '<img src="/images/whatsapp.svg" alt="WhatsApp" class="absolute inset-0 w-full h-full rounded-2xl" />'
            : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="' + (s.key === 'tiktok' || s.key === 'phone' || s.key === 'facebook' ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="' + (s.key === 'tiktok' || s.key === 'phone' || s.key === 'facebook' ? '0' : '2') + '" stroke-linecap="round" stroke-linejoin="round" class="ariel-social-icon drop-shadow" aria-hidden="true">' +
            (SOCIAL_ICONS[s.key] || '') +
          '</svg>') +
        '</a>'
      );
    }).join('');
    return wrap;
  }

  // Replace navbar "Llamar" button (which React keeps re-rendering) with a green WhatsApp button
  function ensureNavWaButton() {
    const nav = document.querySelector('nav');
    if (!nav) return false;
    const btn = nav.querySelector('a[href^="tel:"]');
    if (!btn) return nav.querySelector('a[data-wa-injected]') ? true : false;
    const wrap = document.createElement('a');
    wrap.setAttribute('data-wa-injected', '1');
    wrap.href = WA_URL;
    wrap.target = '_blank';
    wrap.rel = 'noopener noreferrer';
    wrap.style.background = '#25D366';
    wrap.className = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition-all duration-200 cursor-pointer';
    wrap.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
      SOCIAL_ICONS.whatsapp +
      '</svg>WhatsApp';
    btn.parentNode.replaceChild(wrap, btn);
    return true;
  }

  // Replace hero CTAs with "Repara tu dispositivo hoy" and "Escríbenos ahora"
  function ensureHeroCTAs() {
    const hero = document.getElementById('inicio');
    if (!hero) return false;
    const ctaRow = hero.querySelector('.mt-10.flex.flex-col');
    if (!ctaRow || ctaRow.getAttribute('data-ctas-injected') === '1') return true;
    const quoteUrl = WA_URL;
    ctaRow.innerHTML =
      '<a href="' + WA_URL + '" target="_blank" rel="noopener noreferrer" ' +
        'class="inline-flex items-center justify-center gap-2 rounded-lg bg-cta px-6 py-3.5 text-base font-semibold text-white hover:bg-cta-hover transition-colors duration-200 cursor-pointer">' +
        svg('wrench', 'h-5 w-5') + 'Repara tu dispositivo hoy' +
      '</a>' +
      '<a href="' + quoteUrl + '" target="_blank" rel="noopener noreferrer" ' +
        'style="background:#25D366;" ' +
        'class="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-base font-semibold text-white hover:brightness-110 transition-all duration-200 cursor-pointer shadow-lg shadow-black/20">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" aria-hidden="true">' + SOCIAL_ICONS.whatsapp + '</svg>' +
        'Escríbenos ahora!' +
      '</a>';
    ctaRow.setAttribute('data-ctas-injected', '1');
    return true;
  }

  // Replace third hero stat with "+30,000 equipos reparados"
  function ensureHeroStats() {
    const hero = document.getElementById('inicio');
    if (!hero) return false;
    const statsRow = hero.querySelector('.mt-12.flex.items-center');
    if (!statsRow || statsRow.getAttribute('data-stats-injected') === '1') return true;
    statsRow.classList.add('justify-around', 'w-full');
    const items = statsRow.querySelectorAll(':scope > div.flex.items-center.gap-2');
    if (items.length >= 3) {
      const first = items[0];
      const firstNum = first.querySelector('span.text-2xl');
      const firstLabel = first.querySelector('span:not(.text-2xl)');
      if (firstNum) {
        reserveNumWidth(firstNum, '+15');
        animateCount(firstNum, 15, 2200, (v) => '+' + Math.round(v));
      }
      if (firstLabel) firstLabel.innerHTML = 'Años de<br/>experiencia';

      const mid = items[1];
      const midNum = mid.querySelector('span.text-2xl');
      const midLabel = mid.querySelector('span:not(.text-2xl)');
      if (midNum) {
        reserveNumWidth(midNum, '12.3K');
        animateCount(midNum, 12.3, 2200, (v) => v.toFixed(1) + 'K');
      }
      if (midLabel) midLabel.innerHTML = 'Seguidores<br/>en redes sociales';

      const last = items[items.length - 1];
      const num = last.querySelector('span.text-2xl');
      const label = last.querySelector('span:not(.text-2xl)');
      if (num) {
        reserveNumWidth(num, '+30,000');
        const fmt = new Intl.NumberFormat('en-US');
        animateCount(num, 30000, 2200, (v) => '+' + fmt.format(Math.round(v)));
      }
      if (label) label.innerHTML = 'Equipos<br/>reparados';
    }
    statsRow.setAttribute('data-stats-injected', '1');
    return true;
  }

  // Reserve the rendered width of the final value so siblings don't shift
  // while the counter animates. Tabular figures keep digit width stable.
  function reserveNumWidth(el, finalText) {
    el.style.display = 'inline-block';
    el.style.textAlign = 'right';
    el.style.fontVariantNumeric = 'tabular-nums';
    el.textContent = finalText;
    const w = el.getBoundingClientRect().width;
    el.style.minWidth = w + 'px';
  }

  // Animate a number from 0 -> target with an exponential ease-out curve.
  // `format` converts the current numeric value into the displayed string.
  function animateCount(el, target, duration, format) {
    const start = performance.now();
    el.textContent = format(0);
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(2, -10 * t);
      el.textContent = format(target * eased);
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = format(target);
    }
    requestAnimationFrame(frame);
  }

  // Replace one Next.js Image element with a fresh, plain <img>.
  function swapNextImage(img) {
    if (!img || img.getAttribute('data-nimg-rehydrated') === '1') return;
    const realSrc = img.getAttribute('src');
    if (!realSrc) return;
    const fresh = document.createElement('img');
    fresh.setAttribute('data-nimg-rehydrated', '1');
    fresh.alt = img.getAttribute('alt') || '';
    const cls = img.getAttribute('class');
    if (cls) fresh.setAttribute('class', cls);
    const style = img.getAttribute('style');
    if (style) fresh.setAttribute('style', style);
    const width = img.getAttribute('width');
    const height = img.getAttribute('height');
    if (width) fresh.setAttribute('width', width);
    if (height) fresh.setAttribute('height', height);
    fresh.loading = 'eager';
    fresh.decoding = 'sync';
    fresh.addEventListener('error', function onErr() {
      fresh.removeEventListener('error', onErr);
      fresh.src = realSrc + (realSrc.indexOf('?') === -1 ? '?' : '&') + 'r=' + Date.now();
    }, { once: true });
    fresh.src = realSrc;
    if (img.parentNode) img.parentNode.replaceChild(fresh, img);
  }

  // Sweep the page once for any unrehydrated Next.js Images.
  function rehydrateNextImages() {
    document.querySelectorAll('img[data-nimg]:not([data-nimg-rehydrated])').forEach(swapNextImage);
  }

  // React on a static export still hydrates and may re-mount the original
  // <img data-nimg> nodes after our sweep, restoring the broken-on-mobile
  // state. A MutationObserver keeps catching any new ones for the rest of
  // the page lifetime so the fix can't be undone.
  function watchNextImages() {
    if (window.__nimgObserver) return;
    rehydrateNextImages();
    const obs = new MutationObserver(function (records) {
      for (const r of records) {
        for (const node of r.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.matches && node.matches('img[data-nimg]:not([data-nimg-rehydrated])')) {
            swapNextImage(node);
          }
          if (node.querySelectorAll) {
            node.querySelectorAll('img[data-nimg]:not([data-nimg-rehydrated])').forEach(swapNextImage);
          }
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
    window.__nimgObserver = obs;
  }

  // Remove the "Servicio técnico profesional desde 2008..." footer blurb
  // and tighten the layout so the now-short logo column doesn't leave a
  // big empty gap. Center the logo column vertically within the row.
  function ensureFooterCleanup() {
    const footer = document.querySelector('footer');
    if (!footer || footer.getAttribute('data-footer-cleaned') === '1') return true;
    const paras = footer.querySelectorAll('p');
    for (const p of paras) {
      if (p.textContent && p.textContent.indexOf('Servicio técnico profesional desde 2008') !== -1) {
        const logoBlock = p.previousElementSibling;
        const logoCol = p.parentElement;
        p.remove();
        if (logoCol) {
          // Vertically center the logo within its grid row to absorb the
          // empty space the removed paragraph used to fill.
          logoCol.classList.add('flex', 'flex-col', 'justify-center');
        }
        if (logoBlock && logoBlock.classList) {
          logoBlock.classList.add('justify-center', 'md:justify-start');
        }
        // Pull the row's vertical padding tighter now that there's less content.
        const grid = logoCol && logoCol.parentElement;
        if (grid && grid.parentElement) {
          grid.parentElement.classList.remove('py-12');
          grid.parentElement.classList.add('py-8');
        }
        break;
      }
    }
    footer.setAttribute('data-footer-cleaned', '1');
    return true;
  }

  // Swap the About-section hero photo (the one with the "2018 Establecido" badge)
  // from gallery-08.jpg to the storefront photo (fototienda.jpeg).
  function ensureAboutImage() {
    const section = document.getElementById('nosotros');
    if (!section) return false;
    const imgs = section.querySelectorAll('img[alt="Taller de reparación Ariel Tech Mobile"]');
    const TARGET = '/images/fototienda.jpeg';
    let changed = false;
    imgs.forEach(function (img) {
      if (img.getAttribute('data-swapped') === '1') return;
      img.src = TARGET;
      img.removeAttribute('srcset');
      img.setAttribute('data-swapped', '1');
      changed = true;
    });
    return changed || imgs.length > 0;
  }

  // The badge over the About-section photo says "2008 / Establecido".
  // The shop opened in 2018, so update only the badge year.
  function ensureEstablishedBadge() {
    const labels = document.querySelectorAll('span');
    for (const span of labels) {
      if (span.textContent && span.textContent.trim() === 'Establecido') {
        const year = span.parentElement && span.parentElement.querySelector('span.text-3xl');
        if (year && year.textContent.trim() === '2008') {
          year.textContent = '2018';
        }
        return true;
      }
    }
    return false;
  }

  // Rewrite the "Expertos en Tecnología desde 2008" About section so the
  // headline and lead paragraph emphasize trayectoria + tienda física.
  function ensureAboutSection() {
    const headings = document.querySelectorAll('h2');
    let h2 = null;
    for (const h of headings) {
      if (h.getAttribute('data-about-rewritten') === '1') return true;
      if (h.textContent && h.textContent.indexOf('Expertos en') !== -1) { h2 = h; break; }
    }
    if (!h2) return false;

    h2.innerHTML = 'Experiencia <span class="text-primary">respaldada</span> con resultados';
    h2.setAttribute('data-about-rewritten', '1');

    let p = h2.nextElementSibling;
    while (p && p.tagName !== 'P') p = p.nextElementSibling;
    if (p) {
      p.textContent = 'Desde 2008 ofrecemos servicio técnico profesional, y en 2018 abrimos nuestra tienda física en San Pedro de Macorís. Más de 15 años acumulando trayectoria y miles de equipos reparados con calidad, transparencia y responsabilidad.';
      let p2 = p.nextElementSibling;
      while (p2 && p2.tagName !== 'P') p2 = p2.nextElementSibling;
      if (p2) {
        p2.textContent = 'Nos respaldan más de 30,000 reparaciones y miles de clientes que confían en nosotros año tras año. No importa si necesitas una reparación sencilla, compleja de micro-soldadura, o accesorios de alta calidad u originales, te atendemos con la misma dedicación.';
      }
    }
    return true;
  }

  // Floating WhatsApp + Instagram buttons that appear on scroll
  function ensureFloatingCTAs() {
    if (document.querySelector('[data-injected="floating-ctas"]')) return true;
    const wrap = document.createElement('div');
    wrap.setAttribute('data-injected', 'floating-ctas');
    wrap.className = 'ariel-floating-ctas';
    wrap.innerHTML =
      '<a href="' + WA_URL + '" target="_blank" rel="noopener" aria-label="WhatsApp" title="Escríbenos por WhatsApp" ' +
        'class="ariel-fab ariel-fab-wa">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
          (SOCIAL_ICONS.whatsapp || '') +
        '</svg>' +
      '</a>' +
      '<a href="' + IG_URL + '" target="_blank" rel="noopener" aria-label="Instagram" title="Síguenos en Instagram" ' +
        'class="ariel-fab ariel-fab-ig">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
          (SOCIAL_ICONS.instagram || '') +
        '</svg>' +
      '</a>';
    document.body.appendChild(wrap);
    const THRESHOLD = 400;
    function update() {
      if (window.scrollY > THRESHOLD) wrap.classList.add('is-visible');
      else wrap.classList.remove('is-visible');
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return true;
  }

  function ensureFavicon() {
    // Remove any old favicon link (in case it gets re-injected by React)
    document.querySelectorAll('link[rel~="icon"], link[rel="shortcut icon"]').forEach(function (l) {
      const href = l.getAttribute('href') || '';
      if (href.indexOf('/images/avatar.jpg') === -1) l.remove();
    });
    if (!document.querySelector('link[rel="icon"][href="/images/avatar.jpg"]')) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.type = 'image/jpeg';
      link.href = '/images/avatar.jpg';
      document.head.appendChild(link);
    }
  }

  function removeTagline() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && node.nodeValue.includes('Desde 2008 sirviendo con excelencia')) {
        let el = node.parentElement;
        while (el && el !== document.body && !(el.classList && el.classList.contains('rounded-full'))) {
          el = el.parentElement;
        }
        if (el && el.classList && el.classList.contains('rounded-full')) {
          el.remove();
        } else {
          node.nodeValue = '';
        }
        return true;
      }
    }
    return false;
  }

  function inject() {
    ensureStyles();
    ensureFavicon();
    removeTagline();
    removeBrandsStrip();
    removeHeroPanel();
    // Remove any stale hero-frame overlay that was previously injected
    const staleFrame = document.querySelector('[data-injected="hero-frame"]');
    if (staleFrame) staleFrame.remove();
    ensureHeroVideo();
    ensureHeroBrand();
    ensureNavWaButton();
    ensureHeroCTAs();
    ensureHeroStats();
    ensureHeroSocialBar();
    ensureAboutSection();
    ensureAboutImage();
    ensureEstablishedBadge();
    ensureFooterCleanup();
    watchNextImages();
    ensureFloatingCTAs();
    bindBrandScrollSync();
    replaceServicesSection();
    ensureWhyUsSection();
    bindCardSpotlights();
    bindServiceCardToggles();
    replaceGallerySection();
    bindLazyVideos();
    ensureMapSection();
    ensureReviewsSection();
    bindMapOverlay();
    replaceContactCards();
    removeLinktreeCard();
    removeLinktreeLi();
  }

  // ===== Initialization — wait for React hydration to complete before touching the DOM =====
  // React (Next.js) hydrates after the page loads. If we modify the DOM during hydration,
  // React crashes with error #418 (hydration mismatch). We gate all injection behind the
  // `load` event plus a safety delay so hydration has time to finish.
  let hydrationDone = false;
  let scheduled = false;
  let observer = null;

  function revealPage() {
    document.documentElement.classList.remove('ariel-pending');
  }

  function scheduleInject() {
    if (!hydrationDone || scheduled) return;
    scheduled = true;
    requestAnimationFrame(function () { scheduled = false; inject(); });
  }

  function startAfterHydration() {
    if (hydrationDone) return;
    hydrationDone = true;
    inject();
    revealPage();
    observer = new MutationObserver(scheduleInject);
    observer.observe(document.body, { childList: true, subtree: true });
    // Re-apply a few times in case React continues to render after mount
    let n = 0;
    const iv = setInterval(function () { inject(); if (++n > 10) clearInterval(iv); }, 600);
  }

  function boot() {
    // Run as soon as the DOM is parsed — don't wait for `load` (images/video),
    // otherwise the safety fallback in index.html reveals the un-injected page first.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startAfterHydration, { once: true });
    } else {
      startAfterHydration();
    }
  }
  boot();
})();

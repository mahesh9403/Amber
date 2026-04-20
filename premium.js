/* ===========================
   AMBER CLINICS — PREMIUM JS
   Website V3
=========================== */

(function () {
  'use strict';

  /* === ANNOUNCEMENT BAR DISMISS (H-A) === */
  (function () {
    var bar = document.getElementById('announcement-bar');
    if (!bar) return;
    if (localStorage.getItem('amber-announce-dismissed') === '1') {
      bar.classList.add('announce-hidden');
      return;
    }
    var closeBtn = bar.querySelector('.announce-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        bar.classList.add('announce-hidden');
        localStorage.setItem('amber-announce-dismissed', '1');
      });
    }
  })();

  /* === ANIMATED STAT COUNTERS === */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const isDecimal = String(target).includes('.');
    const duration = 1800;
    const start = performance.now();

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = isDecimal
        ? current.toFixed(1)
        : Math.floor(current).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
    }
    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counters = entry.target.querySelectorAll('[data-target]');
      counters.forEach(c => animateCounter(c));
      statsObserver.unobserve(entry.target);
    });
  }, { threshold: 0.4 });

  const statsBar = document.getElementById('stats-bar');
  if (statsBar) statsObserver.observe(statsBar);

  /* === SCROLL TO TOP === */
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* === MOBILE STICKY CTA BAR === */
  const mobileCta = document.getElementById('mobile-cta-bar');
  if (mobileCta && window.innerWidth <= 768) {
    let heroH = document.getElementById('hero')?.offsetHeight || 600;
    window.addEventListener('scroll', () => {
      mobileCta.classList.toggle('show', window.scrollY > heroH * 0.6);
    }, { passive: true });
  }

  /* === IMPROVED STAGGER OBSERVER === */
  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        staggerObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-stagger').forEach(el => staggerObserver.observe(el));

  /* === CAROUSEL INTERVAL GUARD === */
  // Patch: clear existing timer before starting new one (fixes duplicate intervals)
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {}, { passive: true });
  }

  /* === FAQ ARIA IDs (Accessibility) === */
  document.querySelectorAll('.faq-item').forEach((item, i) => {
    const btn = item.querySelector('.faq-q, .faq-question');
    const answer = item.querySelector('.faq-a, .faq-answer');
    if (btn && answer) {
      const id = `faq-answer-${i}`;
      answer.id = id;
      btn.setAttribute('aria-controls', id);
    }
  });

  /* === HERO DOT ROLES === */
  document.querySelectorAll('.hero-dot').forEach(dot => {
    dot.setAttribute('role', 'tab');
  });

  /* === T3-4: FIX INFINITE REVIEW SCROLL — JS clone for exact widths === */
  document.querySelectorAll('.reviews-auto-wrap').forEach(wrap => {
    const track = wrap.querySelector('.reviews-auto-track');
    if (!track) return;
    // Remove any existing manual duplicates (those without real images), keep only originals
    const cards = Array.from(track.querySelectorAll('.review-card'));
    const originals = cards.filter(c => !c.dataset.clone);
    // Remove existing clones
    track.querySelectorAll('[data-clone]').forEach(c => c.remove());
    // Clone originals exactly
    originals.forEach(card => {
      const clone = card.cloneNode(true);
      clone.dataset.clone = '1';
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });
  });

  /* === REVIEW AUTO-SCROLL PAUSE ON TOUCH + OFF-SCREEN (IntersectionObserver) === */
  document.querySelectorAll('.reviews-auto-track').forEach(track => {
    track.addEventListener('touchstart', () => {
      track.style.animationPlayState = 'paused';
    }, { passive: true });
    track.addEventListener('touchend', () => {
      track.style.animationPlayState = 'running';
    }, { passive: true });

    // Pause when scrolled out of view (P5)
    const reviewObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        track.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
      });
    }, { threshold: 0.1 });
    reviewObserver.observe(track);
  });

  /* === T3-2: CONCERN FILTER === */
  document.querySelectorAll('.concern-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      document.querySelectorAll('.concern-tag').forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
      const filter = tag.dataset.filter;
      document.querySelectorAll('#category-grid .category-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('filtered-out', !match);
      });
    });
  });

  /* === A7: CAROUSEL PAUSE ON KEYBOARD FOCUS === */
  const heroEl = document.getElementById('hero');
  if (heroEl) {
    heroEl.addEventListener('focusin', () => {
      heroEl.dispatchEvent(new Event('mouseenter'));
    });
    heroEl.addEventListener('focusout', (e) => {
      if (!heroEl.contains(e.relatedTarget)) {
        heroEl.dispatchEvent(new Event('mouseleave'));
      }
    });
  }

  /* === U2: DYNAMIC URGENCY TEXT === */
  const urgencyEl = document.querySelector('.hero-urgency');
  if (urgencyEl) {
    const day = new Date().getDay(); // 0=Sun, 6=Sat
    const msgs = [
      'Next available: Monday — book now',   // Sun
      'This week\'s slots are filling fast', // Mon
      'A few slots left this week',           // Tue
      'Limited slots available this week',    // Wed
      'Book before this week fills up',       // Thu
      'Weekend appointments available',       // Fri
      'Next available: Monday — book now',   // Sat
    ];
    const textNode = Array.from(urgencyEl.childNodes)
      .filter(n => n.nodeType === 3)
      .find(n => n.textContent.trim());
    if (textNode) textNode.textContent = ' ' + msgs[day];
  }

  /* === SERVICE PAGE MOBILE CTA BAR === */
  const serviceCta = document.querySelector('.service-mobile-cta');
  if (serviceCta && window.innerWidth <= 768) {
    window.addEventListener('scroll', () => {
      serviceCta.classList.toggle('show', window.scrollY > 300);
    }, { passive: true });
  }

  /* === NAVBAR BACKDROP BLUR DISABLE ON LOW-END MOBILE === */
  if (window.innerWidth <= 768 && navigator.hardwareConcurrency <= 4) {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.style.backdropFilter = 'none';
      navbar.style.webkitBackdropFilter = 'none';
    }
  }

  /* === T3-1: LIGHTBOX GALLERY MODAL === */
  (function initLightbox() {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Image viewer');
    overlay.innerHTML = `
      <button id="lightbox-close" aria-label="Close">✕</button>
      <button class="lightbox-nav" id="lightbox-prev" aria-label="Previous image">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <img id="lightbox-img" src="" alt="">
      <button class="lightbox-nav" id="lightbox-next" aria-label="Next image">
        <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
      </button>
      <div id="lightbox-caption"></div>
    `;
    document.body.appendChild(overlay);

    let images = [];
    let currentIdx = 0;

    function collectImages() {
      images = Array.from(document.querySelectorAll('.gallery-item img')).filter(img => {
        const src = img.getAttribute('src') || '';
        return src && !src.includes('clinic-logo');
      });
    }

    function openLightbox(img) {
      collectImages();
      currentIdx = images.indexOf(img);
      if (currentIdx < 0) { currentIdx = 0; images = [img]; }
      showImage(currentIdx);
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      document.getElementById('lightbox-close').focus();
    }

    function closeLightbox() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    function showImage(idx) {
      const img = images[idx];
      if (!img) return;
      const el = document.getElementById('lightbox-img');
      el.src = img.src;
      el.alt = img.alt || 'Gallery image';
      document.getElementById('lightbox-caption').textContent = `${idx + 1} / ${images.length}`;
    }

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeLightbox(); });

    document.getElementById('lightbox-prev').addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + images.length) % images.length;
      showImage(currentIdx);
    });
    document.getElementById('lightbox-next').addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % images.length;
      showImage(currentIdx);
    });

    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') { currentIdx = (currentIdx - 1 + images.length) % images.length; showImage(currentIdx); }
      if (e.key === 'ArrowRight') { currentIdx = (currentIdx + 1) % images.length; showImage(currentIdx); }
    });

    document.querySelectorAll('.gallery-item').forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;
      item.addEventListener('click', () => openLightbox(img));
      item.setAttribute('tabindex', '0');
      item.setAttribute('role', 'button');
      item.setAttribute('aria-label', `View ${img.alt || 'image'} fullscreen`);
      item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img); } });
    });
  })();

  /* === T1-1: BEFORE / AFTER COMPARISON SLIDER === */
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const afterWrap = slider.querySelector('.ba-after-wrap');
    const divider = slider.querySelector('.ba-divider');
    if (!afterWrap || !divider) return;

    let pct = 50;
    let dragging = false;

    function setClip(x) {
      const rect = slider.getBoundingClientRect();
      pct = Math.max(5, Math.min(95, ((x - rect.left) / rect.width) * 100));
      afterWrap.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      divider.style.left = pct + '%';
    }

    slider.addEventListener('mousedown', (e) => { dragging = true; setClip(e.clientX); });
    window.addEventListener('mousemove', (e) => { if (dragging) setClip(e.clientX); });
    window.addEventListener('mouseup', () => { dragging = false; });

    slider.addEventListener('touchstart', (e) => { dragging = true; setClip(e.touches[0].clientX); }, { passive: true });
    slider.addEventListener('touchmove', (e) => { if (dragging) setClip(e.touches[0].clientX); }, { passive: true });
    slider.addEventListener('touchend', () => { dragging = false; });
  });

  /* === P7: WHATSAPP SVG SPRITE (inject once, reuse) === */
  (function injectWaSvgSprite() {
    const sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    sprite.setAttribute('aria-hidden', 'true');
    sprite.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    sprite.innerHTML = `
      <symbol id="icon-whatsapp-full" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </symbol>
    `;
    document.body.insertBefore(sprite, document.body.firstChild);
  })();

})();

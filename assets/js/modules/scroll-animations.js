/**
 * Scroll Animations
 * Reveal on scroll via IntersectionObserver, with scroll/resize fallbacks (mobile / iOS),
 * and Web Animations API with a plain-style fallback for test / legacy environments.
 */

let generation = 0;
const disposers = [];

function addDisposer(fn) {
  disposers.push(fn);
}

function runDisposers() {
  disposers.splice(0).forEach((fn) => {
    try {
      fn();
    } catch {
      /* ignore */
    }
  });
}

/** True when any part of the element is inside the viewport (with vertical padding). */
function overlapsViewport(el, padRatio = 0.1) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  const vw = window.innerWidth || document.documentElement.clientWidth || 0;
  const pad = vh * padRatio;
  if (r.height <= 0 || r.width <= 0) return false;
  return r.bottom > -pad && r.top < vh + pad && r.right > 0 && r.left < vw;
}

function flushIntersectionObserver(io, handler) {
  if (typeof io.takeRecords !== 'function') return;
  const records = io.takeRecords();
  if (records.length) handler(records);
}

/**
 * Animate element to visible; prefers WAAPI, falls back to inline styles (Jest / no WAAPI).
 */
function animateReveal(el, dir, myGen) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || myGen !== generation) {
    el.style.opacity = '1';
    el.style.transform = 'translate(0, 0)';
    return null;
  }

  const from =
    dir === 'left'
      ? { opacity: 0, transform: 'translateX(-28px)' }
      : dir === 'right'
        ? { opacity: 0, transform: 'translateX(28px)' }
        : { opacity: 0, transform: 'translateY(28px)' };
  const to = { opacity: 1, transform: 'translate(0, 0)' };

  el.style.opacity = String(from.opacity);
  el.style.transform = from.transform;

  if (typeof el.animate !== 'function') {
    el.style.opacity = '1';
    el.style.transform = to.transform;
    return null;
  }

  const anim = el.animate([from, to], {
    duration: 620,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    fill: 'forwards',
  });

  anim.addEventListener(
    'finish',
    () => {
      if (myGen !== generation) return;
      el.style.opacity = '1';
      el.style.transform = 'translate(0, 0)';
    },
    { once: true }
  );

  return anim;
}

function armHoverLift(selector, dy, myGen) {
  document.querySelectorAll(selector).forEach((el) => {
    const enter = () => {
      if (myGen !== generation) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      el.style.transform = `translateY(${dy}px)`;
    };
    const leave = () => {
      if (myGen !== generation) return;
      el.style.transform = 'translateY(0)';
    };
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    addDisposer(() => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    });
  });
}

function setupParallax(myGen) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      if (myGen !== generation) return;
      const y = window.pageYOffset || document.documentElement.scrollTop || 0;
      document.querySelectorAll('.hero-badge, .hero-stats').forEach((el) => {
        el.style.transform = `translateY(${-(y * 0.3)}px)`;
      });
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  addDisposer(() => window.removeEventListener('scroll', onScroll));
}

export function initScrollAnimations() {
  const myGen = generation;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('#skills, #experience').forEach((el) => {
    if (reduced) el.classList.add('in-view');
  });

  const blockSpecs = [
    ['.hero-content', 'left'],
    ['.hero-image', 'right'],
    ['#about', 'up'],
    ['#skills', 'up'],
    ['#experience', 'up'],
    ['#projects', 'up'],
    ['#contact', 'up'],
  ];

  const blocks = [];
  blockSpecs.forEach(([sel, dir]) => {
    document.querySelectorAll(sel).forEach((el) => {
      blocks.push({ el, dir });
    });
  });

  const cards = Array.from(document.querySelectorAll('.project-card'));
  const blockSet = new Set(blocks.map((b) => b.el));
  const cardSet = new Set(cards);

  const blockDone = new WeakSet();
  const cardDone = new WeakSet();
  const runningAnimations = [];

  const markBlock = (el) => {
    if (blockDone.has(el)) return;
    blockDone.add(el);
    const spec = blocks.find((b) => b.el === el);
    const dir = spec ? spec.dir : 'up';
    const anim = animateReveal(el, dir, myGen);
    if (anim) runningAnimations.push(anim);

    if (el.id === 'skills' || el.id === 'experience') {
      el.classList.add('in-view');
    }
  };

  const markCard = (card) => {
    if (cardDone.has(card)) return;
    cardDone.add(card);
    const index = cards.indexOf(card);
    card.style.transition = 'opacity 0.55s ease-out, transform 0.55s ease-out';
    window.setTimeout(() => {
      if (myGen !== generation) return;
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, Math.max(0, index) * 75);
  };

  if (reduced) {
    blocks.forEach(({ el }) => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    cards.forEach((c) => {
      c.style.opacity = '1';
      c.style.transform = 'none';
    });
    setupParallax(myGen);
    return;
  }

  blocks.forEach(({ el, dir }) => {
    el.style.opacity = '0';
    el.style.transform =
      dir === 'left'
        ? 'translateX(-28px)'
        : dir === 'right'
          ? 'translateX(28px)'
          : 'translateY(28px)';
  });

  cards.forEach((c) => {
    c.style.opacity = '0';
    c.style.transform = 'translateY(24px)';
  });

  const scanFallback = () => {
    if (myGen !== generation) return;
    blocks.forEach(({ el }) => {
      if (!blockDone.has(el) && overlapsViewport(el)) markBlock(el);
    });
    cards.forEach((c) => {
      if (!cardDone.has(c) && overlapsViewport(c)) markCard(c);
    });
  };

  let io = null;
  if (typeof IntersectionObserver === 'function') {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const t = entry.target;
          if (blockSet.has(t)) markBlock(t);
          if (cardSet.has(t)) markCard(t);
          io.unobserve(t);
        });
      },
      { root: null, rootMargin: '10% 0px 10% 0px', threshold: 0 }
    );

    blocks.forEach(({ el }) => io.observe(el));
    cards.forEach((c) => io.observe(c));
    flushIntersectionObserver(io, (records) => {
      records.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const t = entry.target;
        if (blockSet.has(t)) markBlock(t);
        if (cardSet.has(t)) markCard(t);
        io.unobserve(t);
      });
    });

    addDisposer(() => io.disconnect());
  }

  const onMove = () => {
    scanFallback();
  };

  window.addEventListener('scroll', onMove, { passive: true });
  window.addEventListener('resize', onMove, { passive: true });
  addDisposer(() => {
    window.removeEventListener('scroll', onMove);
    window.removeEventListener('resize', onMove);
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('scroll', onMove, { passive: true });
    window.visualViewport.addEventListener('resize', onMove, { passive: true });
    addDisposer(() => {
      window.visualViewport.removeEventListener('scroll', onMove);
      window.visualViewport.removeEventListener('resize', onMove);
    });
  }

  requestAnimationFrame(() => {
    if (myGen !== generation) return;
    scanFallback();
    requestAnimationFrame(scanFallback);
  });

  addDisposer(() => {
    runningAnimations.forEach((a) => {
      try {
        a.cancel();
      } catch {
        /* ignore */
      }
    });
  });

  setupParallax(myGen);
  armHoverLift('.project-card, .skill-category', -8, myGen);
  armHoverLift('.btn', -2, myGen);
  armHoverLift('.nav-link', -1, myGen);
}

export function cleanupScrollAnimations() {
  generation += 1;
  runDisposers();
}

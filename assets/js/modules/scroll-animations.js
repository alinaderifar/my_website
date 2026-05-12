/**
 * Scroll reveal: IntersectionObserver toggles CSS classes for one-shot animations.
 */

let observer = null;
let onScroll = null;

const SECTION_SELECTORS =
  '.hero-content, .hero-image, #about, #skills, #experience, #projects, #contact';
const CARD_SELECTOR = '.project-card';

function revealElement(el) {
  el.classList.add('is-visible');
  if (el.id === 'skills' || el.id === 'experience') {
    el.classList.add('in-view');
  }
}

function isInRevealViewport(el) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight || 0;
  if (rect.height <= 0) return false;
  return rect.bottom > 0 && rect.top < vh * 0.92;
}

function scanRevealTargets(targets) {
  targets.forEach((el) => {
    if (el.classList.contains('is-visible')) return;
    if (isInRevealViewport(el)) revealElement(el);
  });
}

export function initScrollAnimations() {
  document.documentElement.classList.add('js-scroll-reveal');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = document.querySelectorAll(SECTION_SELECTORS);
  const cards = document.querySelectorAll(CARD_SELECTOR);
  const targets = [...sections, ...cards];

  if (!targets.length) return;

  targets.forEach((el) => el.classList.add('scroll-reveal'));

  if (reduced) {
    targets.forEach(revealElement);
    return;
  }

  if (typeof IntersectionObserver !== 'function') {
    targets.forEach(revealElement);
    return;
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px 10% 0px' }
  );

  targets.forEach((el) => observer.observe(el));

  if (typeof observer.takeRecords === 'function') {
    observer.takeRecords().forEach((entry) => {
      if (!entry.isIntersecting) return;
      revealElement(entry.target);
      observer.unobserve(entry.target);
    });
  }

  onScroll = () => scanRevealTargets(targets);
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  document.addEventListener('scroll', onScroll, { passive: true, capture: true });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('scroll', onScroll, { passive: true });
    window.visualViewport.addEventListener('resize', onScroll, { passive: true });
  }

  requestAnimationFrame(() => scanRevealTargets(targets));
  window.addEventListener('load', onScroll, { once: true });
}

export function cleanupScrollAnimations() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
  if (onScroll) {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
    document.removeEventListener('scroll', onScroll, true);
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('scroll', onScroll);
      window.visualViewport.removeEventListener('resize', onScroll);
    }
    onScroll = null;
  }
}

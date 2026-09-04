// Progressive-enhancement scroll effects: reveal-on-scroll + lightweight
// parallax. Every element this touches is real, server-rendered content —
// this script only ever toggles a class or a CSS custom property, so with
// JS disabled (or prefers-reduced-motion set) everything is still fully
// visible and readable/crawlable.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.documentElement.classList.add('js-motion');

// --- Reveal on scroll ------------------------------------------------
const revealTargets = document.querySelectorAll('[data-reveal]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealTargets.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
    io.observe(el);
  });
}

// --- Parallax ----------------------------------------------------------
// data-parallax="0.3" -> element drifts at 30% of scroll speed relative
// to its container, via a CSS custom property so the actual paint work
// stays a transform (cheap, no layout/reflow).
const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));

if (!reduceMotion && parallaxEls.length) {
  let ticking = false;

  const update = () => {
    const viewportH = window.innerHeight;
    for (const el of parallaxEls) {
      const speed = parseFloat(el.dataset.parallax || '0.2');
      const rect = el.getBoundingClientRect();
      // Progress of the element through the viewport, centered at 0.
      const center = rect.top + rect.height / 2 - viewportH / 2;
      el.style.setProperty('--parallax-y', String(-center * speed * 0.15));
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
}

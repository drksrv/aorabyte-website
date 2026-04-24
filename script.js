// Aorabyte — tiny, dependency-free JS
// Reveal-on-scroll, nav scroll state, and small niceties.

(function () {
    'use strict';

    // Reveal sections as they enter viewport
    const revealTargets = document.querySelectorAll(
        '.section__label, .section__title, .cap-card, .sector-strip__item, .process-list li, .terminal, .ai-stack__body, .ai-stack__stats, .company__intro p, .company__facts, .contact__card, .contact__title'
    );

    revealTargets.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    // Stagger siblings for a gentle wave
                    const idx = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target);
                    const delay = Math.min(idx, 6) * 60;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                    io.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealTargets.forEach((el) => io.observe(el));

    // Nav subtle state on scroll
    const nav = document.querySelector('.nav');
    let lastY = 0;
    window.addEventListener(
        'scroll',
        () => {
            const y = window.scrollY;
            if (y > 40) {
                nav.style.boxShadow = '0 1px 0 rgba(243, 239, 230, 0.05)';
            } else {
                nav.style.boxShadow = 'none';
            }
            lastY = y;
        },
        { passive: true }
    );

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.marquee__track').forEach((el) => (el.style.animation = 'none'));
        revealTargets.forEach((el) => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
        });
    }
})();

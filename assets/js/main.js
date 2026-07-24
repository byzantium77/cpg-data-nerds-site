// CPG Data Nerds — small progressive-enhancement helpers
// No frameworks, no build step, safe to strip out.

document.addEventListener('DOMContentLoaded', () => {

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links.desktop');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.right = '20px';
      links.style.background = 'var(--card)';
      links.style.border = '1px solid var(--border)';
      links.style.borderRadius = '12px';
      links.style.padding = '16px 22px';
      links.style.gap = '14px';
    });
  }

  // Fade-in on scroll
  const revealables = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealables.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealables.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      io.observe(el);
    });
  }

  // Rotating example questions in the hero chat mockup
  const rotatingEl = document.querySelector('[data-rotating-question]');
  const rotatingAnswerEl = document.querySelector('[data-rotating-answer]');
  if (rotatingEl && rotatingAnswerEl) {
    const pairs = [
      {
        q: 'What was our velocity vs YAGO at Whole Foods last month?',
        a: '+18.7% vs YAGO. Distribution grew from 412 to 431 doors, with most of the gain in the West region.'
      },
      {
        q: 'Which SKUs have the biggest distribution voids at Kroger?',
        a: 'Top 3 voids by store count: Item A (22), Item B (19), Item C (15) — est. $84K in lost sales over 4 weeks.'
      },
      {
        q: 'How is the new item trending vs plan across UNFI and KeHE?',
        a: 'Tracking 11% ahead of plan on units, but ACV is behind pace in the Northeast — distribution is the gap, not velocity.'
      }
    ];
    let i = 0;
    const render = () => {
      rotatingEl.textContent = pairs[i].q;
      rotatingAnswerEl.textContent = pairs[i].a;
      i = (i + 1) % pairs.length;
    };
    render();
    setInterval(render, 5200);
  }

  // Footer year
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

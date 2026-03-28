// AOS
AOS.init({ duration: 800, once: true, offset: 60 });

// ── Nav scroll effect ───────────────────────────────────────────
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 60
    ? 'rgba(196,149,42,0.28)'
    : 'rgba(196,149,42,0.18)';
});

// ── Hamburger / mobile menu ─────────────────────────────────────
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// Close mobile menu on link click
document.querySelectorAll('.nav__mobile-link, .nav__mobile-menu .btn').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

// ── FAQ accordion ───────────────────────────────────────────────
document.querySelectorAll('.faq-item__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer  = btn.nextElementSibling;
    const isOpen  = btn.getAttribute('aria-expanded') === 'true';

    // Close all
    document.querySelectorAll('.faq-item__btn').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.style.maxHeight = '0';
    });

    // Open clicked (if was closed)
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

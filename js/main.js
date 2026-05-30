/* TATI STUDIO — interactions */

// ---------- Header transparency ----------
const header = document.querySelector('.site-header');
const heroEl = document.querySelector('.hero');

function updateHeader() {
  if (!header) return;
  const scrolled = window.scrollY > 60;
  header.classList.toggle('scrolled', scrolled);
  if (heroEl) {
    // transparent over hero, solid after
    header.classList.toggle('transparent', window.scrollY < heroEl.offsetHeight - 80);
  } else {
    header.classList.add('solid');
  }
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// ---------- Menu overlay ----------
const menuToggle = document.querySelector('.menu-toggle');
const navOverlay = document.querySelector('.nav-overlay');
const navClose = document.querySelector('.nav-overlay .close');

function openMenu() { navOverlay && navOverlay.classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeMenu() { navOverlay && navOverlay.classList.remove('open'); document.body.style.overflow = ''; }

menuToggle && menuToggle.addEventListener('click', openMenu);
navClose && navClose.addEventListener('click', closeMenu);
document.querySelectorAll('.nav-overlay a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- Year ----------
const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Form (placeholder, no backend) ----------
const form = document.querySelector('form.form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Thank you — we will be in touch';
      btn.disabled = true;
    }
  });
}

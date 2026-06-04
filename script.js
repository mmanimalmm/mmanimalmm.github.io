// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 15, 26, 0.98)';
  } else {
    navbar.style.background = 'rgba(15, 15, 26, 0.9)';
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

// Project detail toggle
function toggleDetail(id) {
  const panel = document.getElementById(id);
  const btn = document.querySelector(`[data-toggle="${id}"]`);
  const isOpen = panel.classList.toggle('open');
  if (btn) btn.textContent = isOpen ? '접기 ▴' : '자세히 보기 ▾';
}

document.querySelectorAll('.project-card, .video-card, .contact-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

function initNavbar() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navLinks');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.classList.toggle('open');
  });
}

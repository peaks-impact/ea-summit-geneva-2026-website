// Mobile navigation toggle
(function () {
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');
  if (!navToggle || !primaryNav) return;

  const setOpen = (open) => {
    primaryNav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  navToggle.addEventListener('click', () => {
    setOpen(!primaryNav.classList.contains('open'));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
      setOpen(false);
      navToggle.focus();
    }
  });
})();

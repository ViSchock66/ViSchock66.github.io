(() => {
  const button = document.getElementById('langToggle');
  const year = document.getElementById('year');
  const nodes = document.querySelectorAll('[data-es][data-en]');
  const labels = { es: 'Cambiar a inglés', en: 'Switch to Spanish' };

  if (year) year.textContent = new Date().getFullYear();

  const read = () => {
    try { return localStorage.getItem('lang'); } catch { return null; }
  };
  const save = (value) => {
    try { localStorage.setItem('lang', value); } catch { /* sin almacenamiento */ }
  };

  const apply = (lang) => {
    document.documentElement.lang = lang;
    nodes.forEach((node) => {
      node.textContent = node.dataset[lang];
    });
    if (button) {
      button.textContent = lang === 'es' ? 'EN' : 'ES';
      button.setAttribute('aria-label', labels[lang]);
    }
  };

  const saved = read();
  const fromBrowser = (navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en';
  const initial = saved === 'es' || saved === 'en' ? saved : fromBrowser;
  if (initial !== 'es') apply(initial);
  else if (button) button.setAttribute('aria-label', labels.es);

  button?.addEventListener('click', () => {
    const next = document.documentElement.lang === 'es' ? 'en' : 'es';
    apply(next);
    save(next);
  });
})();

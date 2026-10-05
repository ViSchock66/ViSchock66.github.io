(() => {
  const button = document.getElementById('langToggle');
  const year = document.getElementById('year');
  const nodes = document.querySelectorAll('[data-es][data-en]');
  let lang = 'es';

  if (year) year.textContent = new Date().getFullYear();

  button?.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;
    nodes.forEach((node) => {
      node.textContent = node.dataset[lang];
    });
    button.textContent = lang === 'es' ? 'EN' : 'ES';
  });
})();

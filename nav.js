(function () {
  var nav = document.querySelector('.nav');
  var links = nav && nav.querySelector('.nav-links');
  if (!links) return;

  var items = links.querySelectorAll('a');
  if (!items.length) return;

  var panel = document.createElement('div');
  panel.className = 'nav-panel';
  panel.id = 'nav-panel';
  panel.hidden = true;
  items.forEach(function (a) {
    panel.appendChild(a.cloneNode(true));
  });

  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'nav-menu';
  button.textContent = 'Menü';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'nav-panel');

  function setOpen(open) {
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  }

  button.addEventListener('click', function () {
    setOpen(panel.hidden);
  });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) {
      setOpen(false);
      button.focus();
    }
  });

  links.insertBefore(button, links.querySelector('.theme-toggle'));
  nav.appendChild(panel);
})();

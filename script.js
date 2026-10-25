const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
(function () {
  const c = window.COMPANY || {};
  const fill = (selector, value) => document.querySelectorAll(selector).forEach(el => el.textContent = value || '');
  fill('[data-company-name]', c.shortName);
  fill('[data-company-full-name]', c.fullName);
  fill('[data-company-inn]', c.inn);
  fill('[data-company-ogrnip]', c.ogrnip);
  fill('[data-company-address]', c.address);
  fill('[data-company-phone]', c.phone);
  document.querySelectorAll('[data-company-email]').forEach(el => { el.textContent = c.email || ''; el.href = c.email ? `mailto:${c.email}` : '#'; });
})();
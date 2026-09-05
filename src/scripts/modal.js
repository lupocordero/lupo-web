// Contact modal open/close, plus the floating "check availability" trigger
// pattern. Progressive enhancement only: the dialog element itself is real
// markup, so nothing here is required for the page to be readable/crawlable.
const modal = document.getElementById('contact-modal');

if (modal && typeof modal.showModal === 'function') {
  document.querySelectorAll('[data-open-contact-modal]').forEach((el) => {
    el.addEventListener('click', () => modal.showModal());
  });

  modal.querySelectorAll('[data-close-contact-modal]').forEach((el) => {
    el.addEventListener('click', () => modal.close());
  });

  // Click on the ::backdrop closes the dialog too.
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });
}

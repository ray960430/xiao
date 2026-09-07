const modal = document.querySelector('#join-modal');
document.querySelectorAll('[data-open-modal]').forEach((button) => button.addEventListener('click', () => modal.showModal()));
document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });

document.querySelector('#join-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-message').textContent = '謝謝你，港灣見。';
  event.currentTarget.reset();
});

document.querySelectorAll('.filter').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.filter.active').classList.remove('active');
  button.classList.add('active');
  document.querySelectorAll('.creator-card').forEach((card) => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
  });
}));

document.querySelectorAll('.event-button').forEach((button) => button.addEventListener('click', () => {
  button.innerHTML = '已預留 <span>✓</span>';
  button.classList.add('reserved');
  button.disabled = true;
}));

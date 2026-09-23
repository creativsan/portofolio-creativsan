const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTag = document.getElementById('modalTag');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    cards.forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.type !== filter);
    });
  });
});

cards.forEach(card => {
  card.querySelector('.card-media').addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    modalTag.textContent = card.querySelector('.tag').textContent;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });
});

function hideModal(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', e => { if(e.target === modal) hideModal(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') hideModal(); });

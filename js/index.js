const menu = [
  'quest1/quest1.html',
  'quest2/quest2.html',
  'quest3/quest3.html',
  'quest4/quest4.html',
  'quest5/quest5.html',
  'quest6/quest6.html',
  'quest7/quest7.html',
]

// Карточки
const cards = document.querySelectorAll('.card');
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', clickCard);
}

function clickCard(e) {
  e.preventDefault();
  location.href = menu[e.currentTarget.dataset.id];
}
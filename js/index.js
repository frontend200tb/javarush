const questsLinks = [
  'quest1/quest1.html',
  'quest2/quest2.html',
  'quest3/quest3.html',
  'quest4/quest4.html',
  'quest5/quest5.html',
  'quest6/quest6.html',
  'quest7/quest7.html',
]

const level1Links = [
  'lec0.html',
  'lec1.html',
  'lec2.html',
  'lec3.html',
  'lec4.html',
  'lec5.html',
  'lec6.html',
  'lec7.html',
  'lec8.html',
]

// Карточки квестов
const questCards = document.querySelectorAll('.js-quest');
for (let i = 0; i < questCards.length; i++) {
  questCards[i].addEventListener('click', clickQuest);
}

function clickQuest(e) {
  e.preventDefault();
  location.href = questsLinks[e.currentTarget.dataset.id];
}
// конец Карточки квестов

// Карточки лекций уровня 1
const level1Cards = document.querySelectorAll('.js-lec');
for (let i = 0; i < level1Cards.length; i++) {
  level1Cards[i].addEventListener('click', clickLec);
}

function clickLec(e) {
  e.preventDefault();
  location.href = level1Links[e.currentTarget.dataset.id];
}
// конец Карточки лекций уровня 1

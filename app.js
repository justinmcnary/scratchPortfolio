//burger menu
const burg = document.querySelector('.burg');
const menu = document.querySelector('.nav-links');

// buttons for tech skills
const current = document.querySelector('#current');
const inProgress = document.querySelector('#in-progress');
const design = document.querySelector('#design');

//skill bars
const currentBars = document.querySelector('.tech-current');
const inProgressBars = document.querySelector('.tech-learning');
const designBars = document.querySelector('.design');

// event listeners
current.addEventListener('click', function() {
  inProgressBars.classList.remove('show');
  inProgress.classList.remove('current');
  designBars.classList.remove('show');
  design.classList.remove('current');
  currentBars.classList.add('show');
  current.classList.add('current');
});

inProgress.addEventListener('click', function() {
  currentBars.classList.remove('show');
  current.classList.remove('current');
  designBars.classList.remove('show');
  design.classList.remove('current');
  inProgressBars.classList.add('show');
  inProgress.classList.add('current');
});

design.addEventListener('click', function() {
  inProgressBars.classList.remove('show');
  inProgress.classList.remove('current');
  currentBars.classList.remove('show');
  current.classList.remove('current');
  designBars.classList.add('show');
  design.classList.add('current');
});

//Burger Menu
burg.addEventListener('click', function() {
  menu.classList.toggle('show');
  animateMenu();
});

//Burger Menu Animation
let animateMenu = () => {
  document.querySelector('.burg1').classList.toggle('burgChange1');
  document.querySelector('.burg2').classList.toggle('burgChange2');
  document.querySelector('.burg3').classList.toggle('burgChange3');
};

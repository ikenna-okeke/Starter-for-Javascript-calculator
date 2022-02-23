const qtA = document.querySelector('.A').textContent;
const qtB = document.querySelector('.B').textContent;
const qtC = document.querySelector('.C').textContent;
const qtD = document.querySelector('.V').textContent;
//console.log(qtD);
const qtE = document.querySelector('.I').textContent;
const qtF = document.querySelector('.O').textContent;
const qtG = document.querySelector('.A').textContent;
const qtH = document.querySelector('.Z').textContent;
const qtI = document.querySelector('.K').textContent;
const qtJ = document.querySelector('.M').textContent;
const lorem = document.querySelector('.lorem').textContent;
//console.log(lorem);

document.querySelector('.btn').addEventListener('click', function () {
  const random = Math.trunc(Math.random() * 10);

  if (random === 1) {
    document.querySelector('.lorem').textContent = qtA;
  }
  if (random === 2) {
    document.querySelector('.lorem').textContent = qtB;
  }
  if (random === 3) {
    document.querySelector('.lorem').textContent = qtC;
  }
  if (random === 4) {
    document.querySelector('.lorem').textContent = qtD;
  }
  if (random === 5) {
    document.querySelector('.lorem').textContent = qtE;
  }
  if (random === 6) {
    document.querySelector('.lorem').textContent = qtF;
  }
  if (random === 7) {
    document.querySelector('.lorem').textContent = qtG;
  }
  if (random === 8) {
    document.querySelector('.lorem').textContent = qtI;
  }
  if (random === 9) {
    document.querySelector('.lorem').textContent = qtJ;
  } else if (random === 10) {
    document.querySelector('.lorem').textContent = qtK;
  }
});

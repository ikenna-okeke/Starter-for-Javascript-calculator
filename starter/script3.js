'use strict';
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
let soln = document.querySelector('.soln');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const full = document.querySelector('.full');
const equals = document.querySelector('.equals');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const del = document.querySelector('.del');
const ac = document.querySelector('.ac');
let playing;

one.addEventListener('click', function () {
  const showOne = one.textContent;
  soln.value = soln.value ? soln.value + showOne : showOne;
});
two.addEventListener('click', function () {
  const showTwo = two.textContent;
  soln.value = soln.value ? soln.value + showTwo : showTwo;
});
three.addEventListener('click', function () {
  const showThree = three.textContent;
  soln.value = soln.value ? soln.value + showThree : showThree;
});
four.addEventListener('click', function () {
  const showFour = four.textContent;
  soln.value = soln.value ? soln.value + showFour : showFour;
});
five.addEventListener('click', function () {
  const showFive = five.textContent;
  soln.value = soln.value ? soln.value + showFive : showFive;
});
six.addEventListener('click', function () {
  const showSix = six.textContent;
  soln.value = soln.value ? soln.value + showSix : showSix;
});
seven.addEventListener('click', function () {
  const showSeven = seven.textContent;
  soln.value = soln.value ? soln.value + showSeven : showSeven;
});
eight.addEventListener('click', function () {
  const showEight = eight.textContent;
  soln.value = soln.value ? soln.value + showEight : showEight;
});
nine.addEventListener('click', function () {
  const showNine = nine.textContent;
  soln.value = soln.value ? soln.value + showNine : showNine;
});
zero.addEventListener('click', function () {
  const showZero = zero.textContent;
  soln.value = soln.value ? soln.value + showZero : showZero;
});
multiply.addEventListener('click', function () {
  const showMultiply = multiply.textContent;
  soln.value = soln.value ? soln.value + showMultiply : showMultiply;
});
minus.addEventListener('click', function () {
  const showMinus = minus.textContent;
  soln.value = soln.value ? soln.value + showMinus : showMinus;
});
full.addEventListener('click', function () {
  const showFull = full.textContent;
  soln.value = soln.value ? soln.value + showFull : showFull;
});
divide.addEventListener('click', function () {
  const showDivide = divide.textContent;
  soln.value = soln.value ? soln.value + showDivide : showDivide;
});

plus.addEventListener('click', function () {
  const showPlus = plus.textContent;
  //click = true;
  soln.value = soln.value ? soln.value + showPlus : showPlus;
});

del.addEventListener('click', function () {
  soln.value = '';
});
ac.addEventListener('click', function () {
  playing = false;
});
let total;
const addition = function (val) {
  const arr1 = val.split('+');
  total = 0;
  for (const numb of arr1) {
    total += Number(numb);
  }
  soln.value = total;
};

const multiplication = function (val) {
  const arr2 = val.split('*');
  total = 1;
  for (const numbs of arr2) {
    total *= Number(numbs);
  }
  soln.value = total;
};
let firstValueToNumber;
const division = function (val) {
  //const arr3 = val.split('/');
  const firstValue = val.slice(0, val.indexOf('/'));
  firstValueToNumber = Number(firstValue);
  //console.log(firstValueToNumber);
  //for (const [first, second] of arr3) firstValueToNumber /= Number(second);
  //console.log(second);
  const secondValue = val.slice(val.indexOf('/') + 1);
  const secondValueToNumber = Number(secondValue);
  console.log(secondValueToNumber);
  const dividedValue = firstValueToNumber / secondValueToNumber;

  return (soln.value = dividedValue);
};
let firstValToNumber;
const subtraction = function (val) {
  const firstVal = val.slice(0, val.indexOf('-'));
  firstValToNumber = Number(firstVal);
  const removeFirstValue = val.slice(val.indexOf('-') + 1);
  const splitVal = removeFirstValue.split('-');

  for (const numbs of splitVal) firstValToNumber -= Number(numbs);
  return (soln.value = firstValToNumber);
};

equals.addEventListener('click', function () {
  //const showEquals = equals.textContent;
  //soln.value = soln.value ? soln.value + showEquals : showEquals;
  const arr = soln.value;
  const newArr = arr.split('+');
  const newArr1 = arr.split('*');
  const newArr3 = arr.split('/');

  if (arr.includes('-')) {
    subtraction(arr);
  } else if (arr.includes('/')) {
    division(arr);
  } else if (arr.includes('+')) {
    addition(arr);
  } else if (arr.includes('*')) {
    multiplication(arr);
  }
});

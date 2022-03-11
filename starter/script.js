"use strict";
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
let soln = document.querySelector(".soln");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const full = document.querySelector(".full");
const equals = document.querySelector(".equals");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const del = document.querySelector(".del");
const ac = document.querySelector(".ac");
let playing;

one.addEventListener("click", function () {
  const showOne = one.textContent;
  soln.value = soln.value ? soln.value + showOne : showOne;
});
two.addEventListener("click", function () {
  const showTwo = two.textContent;
  soln.value = soln.value ? soln.value + showTwo : showTwo;
});
three.addEventListener("click", function () {
  const showThree = three.textContent;
  soln.value = soln.value ? soln.value + showThree : showThree;
});
four.addEventListener("click", function () {
  const showFour = four.textContent;
  soln.value = soln.value ? soln.value + showFour : showFour;
});
five.addEventListener("click", function () {
  const showFive = five.textContent;
  soln.value = soln.value ? soln.value + showFive : showFive;
});
six.addEventListener("click", function () {
  const showSix = six.textContent;
  soln.value = soln.value ? soln.value + showSix : showSix;
});
seven.addEventListener("click", function () {
  const showSeven = seven.textContent;
  soln.value = soln.value ? soln.value + showSeven : showSeven;
});
eight.addEventListener("click", function () {
  const showEight = eight.textContent;
  soln.value = soln.value ? soln.value + showEight : showEight;
});
nine.addEventListener("click", function () {
  const showNine = nine.textContent;
  soln.value = soln.value ? soln.value + showNine : showNine;
});
zero.addEventListener("click", function () {
  const showZero = zero.textContent;
  soln.value = soln.value ? soln.value + showZero : showZero;
});
full.addEventListener("click", function () {
  const showFull = full.textContent;
  soln.value = soln.value ? soln.value + showFull : showFull;
});
//---------------------------------------------------------------------------------------------//
const addition = function (val) {
  const arr1 = val.split("+");
  const arr2 = arr1.map((mov) => Number(mov));

  const arr3 = arr2.reduce((acc, mov) => acc + mov, 0);
  soln.value = arr3;
  return arr3;
};
plus.addEventListener("click", function () {
  const showPlus = plus.textContent;
  soln.value = soln.value.includes("+")
    ? addition(soln.value)
    : soln.value + showPlus;
});
//---------------------------------------------------------------------------------------------//

const multiplication = function (val) {
  const arr1 = val.split("*");
  const arr2 = arr1.map((mov) => Number(mov));
  const arr3 = arr2.reduce((acc, mov) => acc * mov, 1);
  soln.value = arr3;
  return arr3;
};
multiply.addEventListener("click", function () {
  const showMultiply = multiply.textContent;
  soln.value = soln.value.includes("*")
    ? multiplication(soln.value)
    : soln.value + showMultiply;
});

//---------------------------------------------------------------------------------------------//
const subtraction = function (val) {
  const arr1 = val.split("-");
  const arr2 = arr1.map((mov) => Number(mov));
  const arr3 = arr2.reduce((num1, num2) => num1 - num2);
  const arr4 = arr3;
  console.log(arr2[0]);
  console.log(arr2[1]);
  soln.value = arr3;
  return arr3;
};
minus.addEventListener("click", function () {
  const showMinus = minus.textContent;
  soln.value = soln.value.includes("-")
    ? subtraction(soln.value)
    : soln.value + showMinus;
});

//---------------------------------------------------------------------------------------------//
const divisive = function (val) {
  const valIn = val.split("/");
  const valInp = valIn.map((mov) => Number(mov));

  const valInput = valInp.reduce((acc, val) => acc / val, 1);
  const total = valInput * valInp[0] * valInp[0];
  soln.value = total;
  return total;
};

divide.addEventListener("click", function () {
  const showDivide = divide.textContent;
  soln.value = soln.value.includes("/")
    ? divisive(soln.value)
    : soln.value + showDivide;
});
//---------------------------------------------------------------------------------------------//

del.addEventListener("click", function () {
  soln.value = soln.value.slice(0, -1);
});
ac.addEventListener("click", function () {
  soln.value = "";
});
let total;

let firstValueToNumber;

equals.addEventListener("click", function (e) {
  //const showEquals = equals.textContent;
  //soln.value = soln.value ? soln.value + showEquals : showEquals;
  /*const showPlus = plus.textContent;
  if (val.includes('+')) {
    const arr1 = val.split('+');
    const arr2 = arr1.map(mov => Number(mov));
    total = arr2.reduce((acc, mov) => acc + mov, 0);

    soln.value = total;
  } else {
    soln.value = val + showPlus;
  }*/
  const arr = soln.value;
  const newArr = arr.split("+");
  const newArr1 = arr.split("*");
  const newArr3 = arr.split("/");

  if (arr.includes("-")) {
    subtraction(arr);
  } else if (arr.includes("/")) {
    divisive(arr);
  } else if (arr.includes("+")) {
    addition(arr);
  } else if (arr.includes("*")) {
    multiplication(arr);
  }
});

//const total = sum + Number(other);
//console.log(total);
//console.log(ike.reduce((acc, mov) => acc + Number(mov[0]), 0));

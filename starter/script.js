'use strict';
let bookings = [];

const createBooking = function (
  flightNum = 1,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //BEFORE ES6
  //numPassenger = numPassenger || 1;
  //price=price||199;
  //numPassenger=numPassenger||1;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 2);
//to skip a default parameter that we want to leave at its default, when calling the function, set the value to undefined

createBooking('LH237', undefined, 56);

//HOW PASING ARGUMENTS WORK IN FUNCTIONS
const fligth = 'LH235';
const ikenna = {
  name: 'Cornelius Okeke',
  passport: 9648265,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 9648265) {
    //alert('Correct passport Number so check In');
  } else {
    //alert('MUMU');
  }
};
//checkIn(fligth, ikenna);

//checkIn(fligth, ikenna); //When you pass an object into a function, whhatever you change during the object manipulation  would be changed in the original
console.log(fligth, ikenna);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(ikenna);
checkIn(fligth, ikenna);
//FIRST CLASS AND HIGHER ORDER FUNCTIONS

//FUNCTIONS are objects and so have methods
//FIRST CLASS AND HIGHER ORDER FUNCTIONS

const oneWord = function (str) {
  const strLower = str.toLowerCase();
  const strRep = strLower.replaceAll(' ', '');
  return strRep;
};

oneWord('Ebuka ');

const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Original str: ${str}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the Best', UpperFirstWord);
transformer('Javascript is the Best', oneWord);

let str;
const convert = function (price) {
  if (price.startsWith('$')) {
    str = 'Dollar';
    return 1.36 * Number(price.slice(1)), str;
  } else if (price.startsWith('¢')) {
    str = 'Rand';
    return 1.2 * Number(price.slice(1)), str;
  } else if (price.startsWith('€')) {
    str = 'Euro';
    return Number(price.slice(1)), typeof Number(price.slice(1)), str;
  }
};

const currency = function (price) {
  const [unit, ...amount] = [price[0], price.slice(1)];
  return unit;
};

const ticketPrice = function (price, fn1, fn2) {
  console.log(
    `Converted price = ${fn1(price)}, Currency denomination=${fn2(price)} `
  );
  console.log(`Converting function = ${fn1.name}, ${fn2.name}`);
};

ticketPrice('$100', convert, currency);
ticketPrice('¢3000', convert, currency);
ticketPrice('€600', convert, currency);

const color = ['green', 'red', 'yellow'];
const firstTraffic = function (str) {
  const str1 = str.toLowerCase();
  const [first, second, third] = [...color];
  const str2 =
    str1.includes(first) || str1.includes(second) || str1.includes(third)
      ? 'This was a proper traffic light'
      : 'somethng was not totally right';
  return str2;
};

const secondTraffic = function (str, fn) {
  console.log(`${str} and because of that, ${fn(str)}, ${fn.name}`);
};

secondTraffic(
  'the Traffic light today was yellow and at some point it turned ReD and then later GREEN',
  firstTraffic
);

const thirdTraffic = (str, fn) =>
  console.log(`${str} and because of that, ${fn(str)}: ${fn.name}`);

thirdTraffic(
  'the Mumu light today light today was yellow and ReD and then later GREEN',
  firstTraffic
);

const bookFee = str => (str1, fn) => console.log(`${str}, ${fn(str1)}`);

bookFee('Hello')('the traffic light was yellow today', firstTraffic);

//setting a variable my age
const myAge = 20;

//setting a variable early years
let earlyYears = 2;
earlyYears = earlyYears * 10.5;

//substracting 2 from my age
let laterYears = myAge - 2;

//Number of dog years accounted by my years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//calculating my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//my name in lower case
myName = "Abhishek".toLowerCase();

//printing data
console.log("My name is " + myName + ". I am " + myAge + " years old in human years which is " + myAgeInDogYears + " years old in dog years.");

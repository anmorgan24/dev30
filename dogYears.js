// define myAge as my age
var myAge = 32;

// define earlyYears as 2
var earlyYears = 2;

// multiply earlyYears by 10.5 dog years
earlyYears *= 10.5;

// subtract first 2 years from myAge
var laterYears = myAge - 2;

// multiply laterYears by 4 and reassign
laterYears *= 4;

// add earlyYears and laterYears to get myAgeInDogYears
var myAgeInDogYears = earlyYears + laterYears;

// My name as a string, converted to all lowercase
var myName = `Abby`.toLowerCase();

// Display name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);

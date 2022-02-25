// Comparison Operators

// <
// >
// <=
// >+
// ===
// ==
// !==

// Logical Operators
// &&
// ||
// ! <= called "bing"; the opposite of whatever you have right now
        // for example, !false === true

// We can use the logical operators in conjunction with the comparison operators


var hungry = true;
var timeOfDay = 'dinnertime';

// if (hungry === true && timeOfDay === 'lunchtime') {
   // console.log('eat lunch');
// } 


if (hungry === true && timeOfDay === 'lunchtime') {
   console.log('eat lunch');
} else if (hungry === true && timeOfDay !== 'lunchtime') {
   console.log('eat a snack');
} else if (hungry === true && timeOfDay ==='dinnertime') {
   console.log('eat dinner!');
}
   else {
   console.log('Do not eat');
}


// Note that the order of the else-if statements matters in terms of how we want
// to actually set up the conditional
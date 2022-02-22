// Magic 8 Ball Exercise

// note: conditional (ternary) operator syntax:
// condition ? exprIfTrue : exprIfFalse

var userName = 'Jane';

userName.length > 0 ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

var userQuestion = 'Will I win the lottery today?';

console.log(`${userName}, you have asked: ${userQuestion}.`)

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

switch (randomNumber) {
   case 1:
      eightBall = 'It is certain'
      break;
   case 2:
      eightBall = 'It is decidedly so'
      break;
   case 3:
      eightBall = 'Reply hazy try again'
      break;
   case 4:
      eightBall = 'Cannot predict now'
      break;
   case 5:
      eightBall = 'Do not count on it'
      break;
   case 6:
      eightBal = 'My sources say no'
      break;
   case 7:
      eightBall = 'Outlook not so good'
      break;
   case 0:
      eightBall = 'Signs point to yes'
      break;
}

console.log(eightBall)

// Note: according to MDN Math.random documentation, the random number can be 0 but cannot be 1;
// For this reason, the random number returned could be 0-7 (not 1-8) and so I have included
// 0 rather than 8 here. To test this out, uncomment line below to print randomNumber along with
// above results:

// console.log(randomNumber);


// The exercise directs us to create the variable eightBall, but it is also possible to complete the exercise 
// without the eightBall variable (who doesn't want one less variable?). This solution is below:


// switch (randomNumber) {
   // case 1:
      // console.log('It is certain')
      // break;
   // case 2:
      // console.log('It is decidedly so')
      // break;
   // case 3:
      // console.log('Reply hazy try again')
      // break;
   // case 4:
      // console.log('Cannot predict now')
      // break;
   // case 5:
      // console.log('Do not count on it')
      // break;
   // case 6:
      // console.log('My sources say no')
      // break;
   // case 7:
      // console.log('Outlook not so good')
      // break;
   // case 0:
      // console.log('Signs point to yes')
      // break;
// }

// Note: according to MDN Math.random documentation, the random number can be 0 but cannot be 1;
// For this reason, the random number returned could be 0-7 (not 1-8) and so I have included
// 0 rather than 8 here. To test this out, uncomment line below to print randomNumber along with
// above results:

// console.log(randomNumber);

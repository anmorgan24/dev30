// Whale Talk

// There are a few simple rules for translating text to whale language:
    // 1. There are no consonants. Only vowels excluding “y”.
    // 2. The u‘s and e‘s are extra long, so we must double them in our program.

// var input = "There is, one knows not what sweet mystery about this sea,\
//  whose gently awful stirrings seem to speak of some hidden soul beneath";

var input = window.prompt("What would you like to translate into whale speech?");

const vowels = ["a", "e", "i", "o", "u"];

var resultArray = []

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]){
            if (input[i] === 'e' || input[i] === 'u') {
                resultArray.push(input[i], input[i]);
            }
            else {
                resultArray.push(input[i]);
            }
        }
    }  
};  
console.log(resultArray.join('').toUpperCase());
// FIRST DRAFT Whale Talk

// There are a few simple rules for translating text to whale language:
    // 1. There are no consonants. Only vowels excluding “y”.
    // 2. The u‘s and e‘s are extra long, so we must double them in our program.

// var input = "There is, one knows not what sweet mystery about this sea,\
//  whose gently awful stirrings seem to speak of some hidden soul beneath";

var input = window.prompt("What would you like to translate to whale talk?");

const vowels = ["a", "e", "i", "o", "u"];

var resultArray = []

for (let i = 0; i < input.length; i++) {
    let char = input[i]
    for (let j = 0; j < vowels.length; j++) {
        let vowel = vowels[j]
        if (vowel === char){
            if (vowel === 'e' || vowel === 'u') {
                resultArray.push(vowel, vowel);
            }
            else {
                resultArray.push(vowel);
            }
        }
    }  
};  
console.log(resultArray.join('').toUpperCase());
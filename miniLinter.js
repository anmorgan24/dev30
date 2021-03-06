// Mini Linter

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = (story.split(" "));

// convert to lowercase in preparation for use with includes()
const lowerStoryWords = storyWords.map(word => {
    return word.toLowerCase();
});

betterWords = []
    
lowerStoryWords.forEach(function (word) {
    if (unnecessaryWords.includes(word) === false) {
        betterWords.push(word);
    }
});

var reallyCount = 0;
var veryCount = 0;
var basicallyCount = 0;

betterWords.forEach(function (word) {
    if (overusedWords.includes(word)) {
        if (word === overusedWords[0]) {
                    reallyCount++;
        } else if (word === overusedWords[1]) {
                    veryCount++;
        } else if (word === overusedWords[2]) {
                    basicallyCount++;
        } 
    }
});

var sentenceCounter = 0;
var sentenceEnder = ['.', '!'];

story.split('').forEach(function (char) {
    if (sentenceEnder.includes(char)) {
        sentenceCounter++};
});

linter = []
linter[0] = `There are ${storyWords.length} words in this story.`
linter[1] = `You have used "${overusedWords[0]}" ${reallyCount} time(s).`
linter[2] = `You have used "${overusedWords[1]}" ${veryCount} time(s).`
linter[3] = `You have used "${overusedWords[2]}" ${basicallyCount} time(s).`
linter[4] = `There are ${sentenceCounter} sentences in this story.`

linter.forEach(function(lintItem) {
    console.log(' - ' + lintItem);
});
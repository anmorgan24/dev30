// PROJECT: Secret Message

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 
'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 
'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 
'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push("to", "Program");

secretMessage.splice(secretMessage.indexOf('easily'), 1, "right");

secretMessage.splice(0, 1, "Programming");

secretMessage.splice(secretMessage.indexOf('get'), 5, "know");

console.log(secretMessage.join(' '));
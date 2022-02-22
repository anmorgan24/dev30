// MILITARY GREETINGS

var recruitName = '';

var rank = '';

var age = 0;

if (age < 18) {
   console.log('You are too young for the military!'); 
} else if (recruitName === 'Rugen' && rank === 'Count') {
   console.log('My name is Inigo Montoya, you killed my father, prepare to die.');
} else if (rank === 'Captain') {
   console.log(`Aye, aye, Captain ${recruitName}`);
} else if (rank === 'Private' && age > 40) {
   console.log(`What have you been doing with your life, ${recruitName}?`);
} else {
   console.log(`Hello, ${rank} ${recruitName}, I cannot wait to celebrate your ${age+1} birthday next year!`)
}

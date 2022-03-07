// Race Day Project


let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = false;

let runnerAge = 0;

// 4. If runner is adult and registered early, add 100 to raceNumber
if (runnerAge > 18 && earlyRegistration === true) {
   raceNumber += 1000;
} if (runnerAge > 18 && earlyRegistration === true) {
   console.log(`Runner number ${raceNumber}, you will race at 9:30AM`);
} else if (runnerAge >= 18 && earlyRegistration === false) {
   console.log(`Runner number ${raceNumber}, you will race at 11:00AM`); 
} else {
   console.log(`Runner number ${raceNumber}, you will run at 12:30PM (youth registrant).`);
}


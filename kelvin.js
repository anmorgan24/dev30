// kelvin is a constant value
const kelvin = 293;

// define celsius
var celsius = kelvin - 273;

// define fahrenheit as a function of celsius- use the floor method to round down
var fahrenheit = Math.floor(celsius * (9/5) + 32);

// log the temperature in fahrenheit to console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

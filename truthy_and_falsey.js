// In JavaScript, every value that we have, when used in the context of a conditional, will be "truthy" or "falsey."

if ('hi') { console.log("truthy") } else { console.log("falsey") }; // truthy

if (null) { console.log("truthy") } else { console.log("falsey") }; // falsey

if (undefined) {console.log("truthy") } else { console.log("falsey") }; // falsey

if (0) {console.log("truthy") } else { console.log("falsey") }; // falsey

if ('') {console.log("truthy") } else { console.log("falsey") }; // falsey

if (865) { console.log("truthy") } else { console.log("falsey") }; // truthy

if (-9.7) {console.log("truthy") } else { console.log("falsey") }; // truthy

if (NaN) {console.log("truthy") } else {console.log("falsey") }; // falsey

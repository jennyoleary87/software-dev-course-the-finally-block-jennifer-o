/*
04/16/25
W3 Schools
*/

// ===== A. Fix syntax error =====

// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000) { // add closing parenthesis 
//     console.log('Fuel level cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Insufficient fuel!');
//     launchReady = false;
// };

// ===== B. two syntax errors. =====

// let launchReady = false;
// let crewStatus = true;
// let computerStatus = 'green';

// if (crewStatus && computerStatus === 'green') { // remove extra &
//     console.log('Crew & computer cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Crew or computer not ready!');
//     launchReady = false;
// }

// if (launchReady) {
//     console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...")); // add closing parenthesis
//     console.log("Fed parrot...");
//     console.log("Ignition...");
//     console.log("Liftoff!");
// } else {
//     console.log("Launch scrubbed.");
// }

// ===== C. Runtime errors =====

// let launchReady = false;
// let fuelLevel = 17000;

// if (fuelLevel >= 20000) { // capitalize Level
//     console.log('Fuel level cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Insufficient fuel!');
//     launchReady = false;
// }

// ===== D. Runtime errors =====

// let launchReady = false;
// let fuelLevel = 27000;

// if (fuelLevel >= 20000) {
//     console.log('Fuel level cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Insufficient fuel!');
//     launchReady = false;
// }

// if (launchReady) {
//     console.log("10, 9, 8...");
//     console.log("Fed parrot...");
//     console.log("6, 5, 4...");
//     console.log("Ignition...");
//     console.log("3, 2, 1..."); // fix spelling of console
//     console.log("Liftoff!");
// } else {
//     console.log("Launch scrubbed.");
// }

// ===== E.a Logic error =====

// let launchReady = false;
// let fuelLevel = 17000;
// let crewReady = false; // add crewReady
// let crewStatus = true;
// let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//     console.log('Fuel level cleared.');
//     launchReady = true;
// } else {
//     console.log('WARNING: Insufficient fuel!');
//     launchReady = false;
// }

// if (crewStatus && computerStatus === 'green') {
//     console.log('Crew & computer cleared.');
//     crewReady = true; // switch from launchReady to crewReady so launchReady isnt overwritten
// } else {
//     console.log('WARNING: Crew or computer not ready!');
//     crewReady = false; // switch from launchReady to crewReady so launchReady isnt overwritten
// }

// console.log("crewReady = ", crewReady);

// if (launchReady && crewReady === true) { // add && crewReady so both have to be true for lift off
//     console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//     console.log('Liftoff!');
// } else {
//     console.log('Launch scrubbed.');
// }

// ===== E.b =====

let launchReady = false;
let fuelLevel = 17000;
// let crewStatus = true;
// let computerStatus = 'green';

if (fuelLevel >= 20000) {
    console.log('Fuel level cleared.');
    launchReady = true;
} else {
    console.log('WARNING: Insufficient fuel!');
    launchReady = false;
}

console.log(launchReady);

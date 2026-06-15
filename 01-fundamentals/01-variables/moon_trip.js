// declaring and assigning the variables their corresponding values
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

// print the type of each variable
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// calculate the space missions: Determine how many days it will take to reach Mars.
// d = s x t
// t = d/s

// let's first find the distace to mars in milles
 let distanceInMillesToMars = distanceToMarsKm * milesPerKm ;

// let's compute the time it would take to reach mars in hours
let timeInHours = distanceInMillesToMars / shuttleSpeedMph ;

//  if 24hrs -> 1 day
// 1hr -> 1/24hrs
// xhrs -> x * 1/24
// let's compute number of days to reach mars
let daysToMars = timeInHours / 24 ;

console.log(`${shuttleName} will take ${daysToMars} days to reach Mars.`);


// let's do the same for the moon trip
let distanceInMilesToMoon = distanceToMoonKm * milesPerKm;

let timeInHoursToMoon = distanceInMilesToMoon / shuttleSpeedMph ;

let daysToMoon = timeInHoursToMoon / 24 ;

//this is teh amount of days it will take the shuttle to reach the moon
console.log(`${shuttleName} will take ${daysToMoon} to reach Moon`);


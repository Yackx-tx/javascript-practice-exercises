function canDriveCar(user, car) {
    if (user.age >= 18 || car.engineSize >= 1000) {
        return `${user.name} is eligible to drive ${car.name}`;
    } else {
        return 'You are not eligible';
    }
}

let person = {
    age: 20,
    name: 'Yannick'
}
let vehicle = {
    engineSize: 1200,
    name: 'Toyota Hilux'
}

const checkEligibility = canDriveCar(person, vehicle);
console.log(checkEligibility);

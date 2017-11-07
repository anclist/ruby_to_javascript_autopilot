function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  }
}
//
function addCar(cars, newCar) {
  cars.push(newCar)
  return "Adding new car to fleet. Fleet size is now " + cars.length + "."
}
//
// function pickUpPassenger(car) {
//   car['passengers'] += 1
//   car['gas'] -= 10
//   return "Picked up passenger. Car now has " + car[:passengers] + " passengers."
// }
//
// function getDestination(car) {
//   if (car['city'] === 'Toronto') {
//     'Mississauga'
//   } else if (car['city'] === 'Mississauga'){
//     'London'
//   } else if (car['city'] === 'London'){
//     'Toronto'
//   }
// }
//
// function fillUpGas(car) {
//   var oldGas = car['gas']
//   car['gas'] = 100
//   return "Filled up to" + get_gas_display(car[:gas]) + " on gas from " + get_gas_display(old_gas) + "."
// }
//
// function getGasDisplay(gasAmount) {
//   return gas_amount
// }

function act(car) {
  return "test"
}

function commandFleet(cars) {
  for (var index = 0; index < cars.length; index++) {
    var action = act(cars[index])
    console.log("Car " + (index + 1) + ":" + action);
  }
  console.log('---');
}


function addOneCarPerDay(cars, numDays) {
while (numDays > 0) {
  numDays--
  var newCar = getNewCar()
  console.log(addCar(cars, newCar));
  commandFleet(cars)
}
}

var cars = []
addOneCarPerDay(cars, 10)

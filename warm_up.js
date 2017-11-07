// 1

var apples = 14
console.log(apples);

console.log("I have " + apples + " apples.");

// 2

var materials = ['wood', 'metal', 'stone']
var words = {
  'elephant': "The world's largest land mammal.",
  'school': 'A place of learning.',
  'ice cream': 'A delicious milk-based dessert.',
}

// 3

var num = 16
if (num > 10) {
  console.log(num + " is greater than 10.");
} else if (num === 10){
  console.log(num + " is exactly 10.");
} else {
  console.log(num + " must be less than 10.");
}

// 4
var counter = 0
while (counter < 10) {
  console.log("Doing the same thing over and over.");
  counter++
}

// 5

for (var counter = 0; counter < 20; counter++) {
  var base = 5
  console.log(counter + base);
}

// 6

total = 0
for (var num = 0; num < 100; num++) {
  total += num
}
console.log(total);

// 7

for (var height = 3; height <= 15; height++) {
  if (height > 9) {
    console.log("You can get on the rollercoaster!");
  } else {
    console.log("You are too short to ride this rollercoaster.");
  }
}

// 8

var containers = ['purse', 'wallet', 'backback']
for (var i = 0; i < containers.length; i++) {
  console.log(containers[i]);
}

// 9

function helloWorld() {
  console.log("Hello world!");
}

helloWorld()

// 10

function add(fisrtNum, secondNum) {
  return fisrtNum + secondNum
}

var amount = add(5, 7)
console.log(amount);

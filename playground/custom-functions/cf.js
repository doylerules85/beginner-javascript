function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log(billAmount, taxRate);
  console.log('running bill');
  const total = billAmount + billAmount * taxRate + tipRate * billAmount;
  return total;
}

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('wes');
console.log(greeting);

function doctorize(name = 'roovi') {
  return `Im a Dr.${name} now!`;
}

function yell(name) {
  return `${name.toUpperCase()} YELLING LOUD NOISES.`;
}

const myBill4 = calculateBill(100, undefined, 0.2);
console.log(myBill4);

// console.log(`this is my total ${myTotal}`);
// console.log(`this is my total $${calculateBill()}`);

// // Function Definition
// function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
//   // this is the function body
//   console.log('Running Calculate Bill!!');
//   const total = billAmount + billAmount * taxRate + billAmount * tipRate;
//   return total;
// }

// // Function Call. Or **Run**
// const wesTotal = 500;
// const wesTaxRate = 0.3;
// // const myTotal = calculateBill(wesTotal, wesTaxRate);

// // Function Definition
// function sayHiTo(firstName) {
//   return `Hello ${firstName}`;
// }

// // const greeting = sayHiTo('Wes');
// // console.log(greeting);

// function doctorize(name) {
//   return `Dr. ${name}`;
// }

// function yell(name = 'Silly Goose') {
//   return `HEY ${name.toUpperCase()}`;
// }

// const myBill4 = calculateBill(100, undefined, 0.2);
// console.log(myBill4);

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon Function
// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

/* eslint-disable */
const inchToCM = inches => inches * 2.54;
 
const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last){

//   const baby = {
//     name: `${first} ${last}`,
//     age: 1
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 1 });

//IIFE
//Immediately Invoked Function Expression

// (function(){
//   console.log('Running the anon function');
//   return 'You are kewl';

// })();

(function(age){
  console.log('Running the anon function');
  return `You are kewl ${age}`;

})();

//METHODS
const rob = {
  name: 'rob doy',
  sayHi: function(){
    console.log('Hey Rob');
    return 'Hey Rob';
  },
  //short hand
  yellHi(){
    console.log('WAZ UP!');
  },
  //arrow function
  whisperHi: () => {
    console.log('thisss isss a whissssper...');
  }
};

//Callback Functions
//Click Callback

const button = document.querySelector('.clickMe');

button.addEventListener('click',rob.yellHi);

// Timer Functions

setTimeout(function(){
  console.log('timeout now!')
},1000);

setTimeout(() => {
  console.log('timeout arrow now!')
},2000);
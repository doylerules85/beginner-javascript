const p = document.querySelector('p');
console.log('im in another file');
const age = 100;
console.log(p, age);

let somethingUndefined;

const cher = {
  first: 'cher',
};

const teller = {
  first: 'Raymond',
  last: 'Teller',
};

teller.first = 'Teller';
teller.first = null;

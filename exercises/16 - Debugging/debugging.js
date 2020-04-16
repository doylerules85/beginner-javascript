const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

// people.forEach((person, index) => {
//   console.log(person.name);
//   if (person.name === 'Wes') {
//     console.warn('dumb name. lol');
//   }
// });

people.forEach((person, index) => {
  console.log(person.name);
});

console.table(people);

// Console Methods

// Callstack - group methods

// Grabbing Elements -- grabbing elements with $0

// Breakpoints -- for debugging // debugger;

// Scope

// Network Requests - whats being fired off

// Break On Attribute

// Some Setup Code

function doAlotOfStuff() {
  console.group('Doing some stuff');
  console.log('what');
  console.warn('warning');
  console.groupEnd('done');
}

function doctorize(name) {
  //   console.count(`Running doctorize ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  //   doesntExist(); // causes error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootStrap() {
  console.log('running the app');
  go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}

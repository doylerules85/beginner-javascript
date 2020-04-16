const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('got clicked');
}

const hooray = () => {
  console.log('woot');
};

butts.addEventListener('click', hooray);

coolButton.addEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buttonListener(event) {
  console.log('you clicked me');
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // stop this event
  event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener('click', buttonListener);
});

window.addEventListener(
  'click',
  function(event) {
    console.log('window clicked');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', event => {
  console.log(event.currentTarget);
});
// function buyItem() {
//   console.log('buying item');
// }

// function buttonListen(buyButton) {
//   console.log('binding buy button');
//   buyButton.addEventListener('click', buyItem);
// }

// buyButtons.forEach(buttonListen);

// buyButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     console.log('CLICKED');
//   });
// });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//   console.log('🐛 IT GOT CLICKED!!!');
// }

// const hooray = () => console.log('HOORAY!');

// butts.addEventListener('click', function() {
//   console.log('Im an anon!');
// });
// coolButton.addEventListener('click', hooray);

// butts.removeEventListener('click', handleClick);

// // Listen on multiple items
// const buyButtons = document.querySelectorAll('button.buy');

// function handleBuyButtonClick(event) {
//   console.log('You clicked a button!');
//   const button = event.target;
//   // console.log(button.textContent);
//   // console.log(parseFloat(event.target.dataset.price));
//   console.log(event.target);
//   console.log(event.currentTarget);
//   console.log(event.target === event.currentTarget);
//   // Stop this event from bubbling up
//   // event.stopPropagation();
// }

// buyButtons.forEach(function(buyButton) {
//   buyButton.addEventListener('click', handleBuyButtonClick);
// });

// window.addEventListener(
//   'click',
//   function(event) {
//     console.log('YOU CLICKED THE WINDOW');
//     console.log(event.target);
//     console.log(event.type);
//     // event.stopPropagation();
//     console.log(event.bubbles);
//   },
//   { capture: true }
// );

// const photoEl = document.querySelector('.photo');

// photoEl.addEventListener('mouseenter', e => {
//   console.log(e.currentTarget);
//   console.log(this);
// });

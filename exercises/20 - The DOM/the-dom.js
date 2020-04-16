// const p = document.querySelector('p');

// const item = document.querySelectorAll('div.item');

// const item2 = document.querySelectorAll('.item2');
// console.log(item2);

// const heading = document.querySelector('h2');

// // console.dir(heading.textContent);
// // heading.textContent = 'adqt skates';
// console.dir(heading.textContent);
// console.dir(heading.innerText);

// const pizzalist = document.querySelector('.pizza');
// console.log(pizzalist);

// pizzalist.insertAdjacentText('afterbegin', '🍕');
// pizzalist.insertAdjacentText('beforeend', '🍕');

// classes!

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');

pic.classList.toggle('round');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'image description';

// window.addEventListener('load', function() {
//   console.log(pic.naturalWidth);
// });

// pic.setAttribute('alt', 'New caption');
// console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');
console.log(custom.dataset);

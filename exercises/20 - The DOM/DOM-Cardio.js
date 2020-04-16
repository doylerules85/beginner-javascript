// Make a div
const div = document.createElement('div');
console.log(div);
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const list = document.createElement('ul');
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
const item1 = document.createElement('li');
item1.textContent = 'one';
list.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'two';
list.appendChild(item2);

const item3 = document.createElement('li');
item3.textContent = 'three';
list.appendChild(item3);

div.insertAdjacentElement('afterbegin', list);
// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://picsum.photos/500';
// set the width to 250
image.width = 250;
image.height = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);
// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myDiv">
        <p>p one here</p>
        <p>p two comin at ya</p>
    </div>
`;
const ulElement = div.querySelector('ul');
// put this div before the unordered list from above
ulElement.insertAdjacentHTML('beforebegin', myHTML);
// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.lastElementChild.classList.add('warning');
// remove the first paragraph
myDiv.firstElementChild.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const html = `
  <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button"> Click to Remove</button>
  </div>
`;
  return html;
}
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
// Have that function make 4 cards
let cardsHTML = generatePlayerCard('rob', 27, 6.2);
cardsHTML += generatePlayerCard('trin', 26, 5.8);
cardsHTML += generatePlayerCard('roo', 7, 4);
cardsHTML += generatePlayerCard('kewl', 20, 6);

// append those cards to the div
newDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');

// make out delete function
function removeCard(event) {
  const btnclicked = event.currentTarget;
  btnclicked.closest('.playerCard').remove();
}

// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', removeCard));

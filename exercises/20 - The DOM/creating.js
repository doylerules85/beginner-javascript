console.log('creating');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'hey pea yall';
myParagraph.classList.add('special');

console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'noice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

document.body.appendChild(myDiv);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

const list = document.createElement('ul');

const item1 = document.createElement('li');
item1.textContent = 'one';
list.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'two';
list.append(item2);

const item3 = document.createElement('li');
item3.textContent = 'three';
list.append(item3);

const item4 = document.createElement('li');
item4.textContent = 'four';
list.append(item4);

const item5 = document.createElement('li');
item5.textContent = 'five';
list.append(item5);

const item6 = item5.cloneNode(true);
item6.textContent = 'Six';
list.insertAdjacentElement('beforeend', item6);

document.body.insertAdjacentElement('afterbegin', list);

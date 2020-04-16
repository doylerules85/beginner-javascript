console.log('it works');

const rob = document.querySelector('.rob');
console.log(rob.children);
console.log(rob.childNodes);

// all for elements
console.log(rob.firstElementChild);
console.log(rob.lastElementChild);
console.log(rob.previousElementSibling);
console.log(rob.nextElementSibling);
console.log(rob.parentElement);

const p = document.createElement('p');
p.textContent = 'i am gone!';
document.body.appendChild(p);

p.remove();

console.log(p);

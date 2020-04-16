console.log('testing');
const item = document.querySelector('.item');

const width = 200;
const src = `https://picsum.photos/${width}`;
const desc = 'test desc';
const myHTML = `
    <div class="wrapper">
        <h1>Wazzup?!</h1>
        <img src="${src}" alt="${desc}"/>
    </div>

`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);

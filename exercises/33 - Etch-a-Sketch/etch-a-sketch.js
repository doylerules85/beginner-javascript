console.log('it works');

// select the elements on the page-canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');

const ctx = canvas.getContext('2d');

const shakeBtn = document.querySelector('.shake');

const MOVE_AMOUNT = 50;
// setup our canvas for drawing
// make var called height width from same properties on canvas
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// random X and Y starting points

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
ctx.beginPath(); // start drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// draw function
// take properties rename to make shorter variables in objects
function draw({ key }) {
  // increment hue
  hue += 10;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(key);
  // start path
  ctx.beginPath();
  ctx.moveTo(x, y);
  // move x and y values
  switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
}

// handler for the keys

function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}
// clear/ shake function
function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    function() {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
}
// add listener
window.addEventListener('keydown', handleKey);
shakeBtn.addEventListener('click', clearCanvas);

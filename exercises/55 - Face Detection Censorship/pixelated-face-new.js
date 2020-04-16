const video = document.querySelector('.webcam');

const canvas = document.querySelector('.video');
const ctx = canvas.getContext('2d');

const faceCanvas = document.querySelector('.face');
const faceCtx = faceCanvas.getContext('2d');
const faceDetector = new window.FaceDetector();
const controlOptions = document.querySelectorAll('.controls input[type=range]');

const options = {
  SIZE: 10,
  SCALE: 1.3,
};

function handleOption(event) {
  const { value, name } = event.currentTarget;
  options[name] = parseFloat(value);
}

controlOptions.forEach(input => input.addEventListener('input', handleOption));

// Write a function that will populate the users video

async function populateVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: { width: 1280, height: 720 },
  });
  video.srcObject = stream;
  await video.play();
  // size the canas to be the same size as the video
  console.log(video.videoWidth, video.videoHeight);
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  faceCanvas.width = video.videoWidth;
  faceCanvas.height = video.videoHeight;
}

async function detect() {
  const faces = await faceDetector.detect(video);
  console.log(faces.length);
  // ask browswer when the next animation frame is, and tell it to run for us
  faces.forEach(drawFace);
  faces.forEach(censor);
  requestAnimationFrame(detect);
}

function drawFace(face) {
  const { width, height, top, left } = face.boundingBox;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = '#bada55';
  ctx.lineWidth = 2;
  ctx.strokeRect(left, top, width, height);
}

function censor({ boundingBox: face }) {
  faceCtx.imageSmoothingEnabled = false;
  faceCtx.clearRect(0, 0, faceCanvas.width, faceCanvas.height);
  // draw small face
  faceCtx.drawImage(
    // 5 source args
    video,
    face.x,
    face.y,
    face.width,
    face.height,
    // 4 draw args
    face.x,
    face.y,
    options.SIZE,
    options.SIZE
  );
  // take face back out and draw back on, but scale
  const width = face.width * options.SCALE;
  const height = face.height * options.SCALE;
  faceCtx.drawImage(
    faceCanvas,
    face.x,
    face.y,
    options.SIZE,
    options.SIZE,
    // Drawing
    face.x - (width - face.width) / 2,
    face.y - (height - face.height) / 2,
    width,
    height
  );
}

populateVideo().then(detect);

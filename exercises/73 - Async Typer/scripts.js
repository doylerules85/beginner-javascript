function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}
// async for of loop

// async function draw(element) {
//   const text = element.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     console.log(letter);
//     soFar += letter;
//     element.textContent = soFar;
//     console.log(element.dataset);
//     const { typeMin, typeMax } = element.dataset;
//     const amountToWait = getRandomBetween(typeMin, typeMax);
//     await wait(amountToWait);
//   }
// }

// recursion

function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const amountToWait = getRandomBetween(typeMin, typeMax);

    // wait for some time
    await wait(amountToWait);
    // exit condition
    if (index <= text.length) {
      drawLetter();
    }
  }
  // when this function draw() runs, kick off drawLetter()
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);

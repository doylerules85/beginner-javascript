function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function destroyPopUp(popUp) {
  popUp.classList.remove('open');
  await wait(1000);
  // remove entirely
  popUp.remove();
  myPopUp = null;
}

function ask(options) {
  return new Promise(async function(resolve) {
    // we need to create a pop up with all fields
    const popUp = document.createElement('form');
    popUp.classList.add('popup');
    popUp.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name="input"></input>
        <button type="submit">Submit</button>
      </fieldset>
    `
    );
    console.log(popUp);
    // check if they want cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popUp.firstElementChild.appendChild(skipButton);
      // TODO: list for click on cancel button
      skipButton.addEventListener(
        'click',
        function() {
          resolve(null);
          destroyPopUp(popUp);
        },
        { once: true }
      );
    }
    // listen to submit event
    popUp.addEventListener(
      'submit',
      function(e) {
        e.preventDefault();
        console.log('submitted');
        resolve(e.target.input.value);
        // remove from DOM
        destroyPopUp(popUp);
      },
      {
        once: true,
      }
    );
    // when submited - resolve the data that was in the input screen!

    // insert popup into DOM
    document.body.appendChild(popUp);
    // put a small timeout before we add the open class
    await wait(50);
    popUp.classList.add('open');
  });
}
// select a buttons that have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'what is your name?' },
  { title: 'what is your age?', cancel: true },
  { title: 'whats your pups name?' },
];

async function asyncMap(array, callback) {
  // make array to store results
  const results = [];
  // loop over array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when done with loop return it
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();

// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();

// questions.forEach(async function(question) {
//   console.log('asking question');
//   const answer = await ask(question);
//   console.log(question);
//   console.log(answer);
// });

// Promise.all(questions.map(ask)).then(data => {
//   console.log(data);
// });

// const answers = Promise.all([
//   ask(questions[0]),
//   ask(questions[1]),
//   ask(questions[2]),
// ]).then(answers => {
//   console.log(answers);
// });

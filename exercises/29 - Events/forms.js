const wes = document.querySelector('.wes');

wes.addEventListener('click', function(e) {
  const changePage = confirm('yall ready for this?');

  if (!changePage) {
    e.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(e) {
  const name = e.currentTarget.name.value;
  if (name.includes('rob')) {
    alert('waz up');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);

const photo = document.querySelector('.photo');

function handlePhotoClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log('clicked the pic');
  }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

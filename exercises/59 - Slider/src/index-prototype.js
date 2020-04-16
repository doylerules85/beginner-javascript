function Slider(slider) {
  if (!(slider instanceof Element)) {
    throw new Error('no slider passed in');
  }
  // variables for working with slider
  // select elements needed
  this.slides = slider.querySelector('.slides');
  this.slider = slider;
  const prevButton = slider.querySelector('.goToPrev');
  const nextButton = slider.querySelector('.goToNext');

  // this.slides = this.slides.bind(this);
  // prevButton = prevButton.bind(this);
  // nextButton = nextButton.bind(this);

  // when this slider is created run the start slider
  this.startSlider();
  this.applyClasses();

  // Event listeners
  prevButton.addEventListener('click', () => this.move('back'));
  nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function() {
  this.current =
    this.slider.querySelector('.current') || this.slides.firstElementChild;
  this.prev =
    this.current.previousElementSibling || this.slides.lastElementChild;
  this.next = this.current.nextElementSibling || this.slides.firstElementChild;
  console.log(this.current, this.prev, this.next);
};

Slider.prototype.applyClasses = function() {
  this.current.classList.add('current');
  this.next.classList.add('next');
  this.prev.classList.add('prev');
};
Slider.prototype.move = function(direction) {
  // first remove classes off current slides
  const classToRemove = ['prev', 'current', 'next'];
  // [prev, current, next].forEach(el => el.classList.remove(...classToRemove));
  this.prev.classList.remove(...classToRemove);
  this.current.classList.remove(...classToRemove);
  this.next.classList.remove(...classToRemove);
  if (direction === 'back') {
    // make a new array of the new values, and destructure them over and into variables
    [this.prev, this.current, this.next] = [
      // get the prev slide if there is none - get the last slide
      this.prev.previousElementSibling || this.slides.lastElementChild,
      this.prev,
      this.current,
    ];
  } else {
    [this.prev, this.current, this.next] = [
      this.current,
      this.next,
      this.next.nextElementSibling || this.slides.firstElementChild,
    ];
  }

  this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

window.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowRight') {
    mySlider.move();
  }
  if (e.key === 'ArrowLeft') {
    mySlider.move('back');
  }
});

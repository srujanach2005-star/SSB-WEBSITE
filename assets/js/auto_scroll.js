const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Clone all original slides and append
const originalSlides = Array.from(track.children);
originalSlides.forEach(slide => {
  const clone = slide.cloneNode(true);
  clone.classList.add("hover-up"); // apply hover effect to clones too
  track.appendChild(clone);
});

let allSlides = Array.from(track.children);
let index = 0;
let slideWidth = allSlides[0].offsetWidth + 16; // includes gap

function updateSlideWidth() {
  slideWidth = allSlides[0].offsetWidth + 16;
  goToSlide(index, false);
}

window.addEventListener('resize', updateSlideWidth);
updateSlideWidth();

function goToSlide(i, animate = true) {
  track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
  track.style.transform = `translateX(${-slideWidth * i}px)`;
}

function handleNext() {
  index++;
  goToSlide(index);
  if (index >= allSlides.length - originalSlides.length) {
    setTimeout(() => {
      index = 0;
      goToSlide(index, false);
    }, 500);
  }
}

function handlePrev() {
  if (index === 0) {
    index = allSlides.length - originalSlides.length;
    goToSlide(index, false);
    setTimeout(() => {
      index--;
      goToSlide(index);
    }, 20);
  } else {
    index--;
    goToSlide(index);
  }
}

nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);

// Autoplay with pause on hover
let autoplay = setInterval(() => {
  if (!document.hidden) handleNext();
}, 4000);

// Pause autoplay when hovering on a card
track.addEventListener("mouseover", () => clearInterval(autoplay));
track.addEventListener("mouseout", () => {
  autoplay = setInterval(() => {
    if (!document.hidden) handleNext();
  }, 4000);
});
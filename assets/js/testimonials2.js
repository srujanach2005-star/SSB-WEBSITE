function initTestimonialCarousel() {
  const track = document.getElementById('testimonial2Track');
  const prevBtn = document.getElementById('testimonial2Prev');
  const nextBtn = document.getElementById('testimonial2Next');
  const cards = Array.from(track.children);

  // Clone slides for seamless looping
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.classList.add('clone');
    track.appendChild(clone);
  });

  let index = 0;
  let cardWidth = cards[0].offsetWidth + 24; // +gap-x (24px for gap-6)
  let isHovered = false;
  let isAnimating = false;

  function goToSlide(i, animate = true) {
    if (animate) {
      track.style.transition = 'transform 0.5s ease-in-out';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(${-cardWidth * i}px)`;
  }

  function handleNext() {
    if (isAnimating) return;
    isAnimating = true;
    index++;
    goToSlide(index);

    if (index >= cards.length) {
      setTimeout(() => {
        index = 0;
        goToSlide(index, false);
        isAnimating = false;
      }, 500);
    } else {
      setTimeout(() => isAnimating = false, 500);
    }
  }

  function handlePrev() {
    if (isAnimating) return;
    isAnimating = true;

    if (index === 0) {
      index = cards.length;
      goToSlide(index, false);
      setTimeout(() => {
        index--;
        goToSlide(index);
        isAnimating = false;
      }, 20);
    } else {
      index--;
      goToSlide(index);
      setTimeout(() => isAnimating = false, 500);
    }
  }

  // Autoplay
  let autoScroll = setInterval(() => {
    if (!isHovered && !document.hidden) handleNext();
  }, 3000);

  // Hover to pause
  track.addEventListener('mouseover', () => {
    isHovered = true;
    clearInterval(autoScroll);
  });

  track.addEventListener('mouseout', () => {
    isHovered = false;
    autoScroll = setInterval(() => {
      if (!isHovered && !document.hidden) handleNext();
    }, 3000);
  });

  prevBtn.addEventListener('click', handlePrev);
  nextBtn.addEventListener('click', handleNext);

  window.addEventListener('resize', () => {
    cardWidth = cards[0].offsetWidth + 24;
    goToSlide(index, false);
  });

  // Initial setup
  cardWidth = cards[0].offsetWidth + 24;
  goToSlide(index, false);
}

document.addEventListener("DOMContentLoaded", initTestimonialCarousel);
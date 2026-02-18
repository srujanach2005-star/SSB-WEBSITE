const counters = document.querySelectorAll('.counter');
let started = false;

function animateCounter(counter, target, duration = 2000) {
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const value = Math.min(Math.floor((progress / duration) * target), target);
    counter.innerText = value;

    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      counter.innerText = target; // Ensure it ends exactly on target
    }
  }

  requestAnimationFrame(step);
}

function startCounting() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    animateCounter(counter, target, 2000); // 2 seconds animation
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      startCounting();
      started = true;
    }
  });
}, {
  threshold: 0.3,
});

const factsSection = document.getElementById('facts');
observer.observe(factsSection);
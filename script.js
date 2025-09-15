AOS.init({
  duration: 1000,
  easing: 'ease-out',
  once: true
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  header.classList.add('fade-in'); 
});

window.addEventListener('scroll', () => {
  const animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animated');
  animatedElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
});
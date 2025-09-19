document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-item');

  projects.forEach(project => {
    const mainImg = project.querySelector('.gallery-main img');
    const thumbnails = project.querySelectorAll('.gallery-thumbnails img');
    const prevBtn = project.querySelector('.gallery-prev');
    const nextBtn = project.querySelector('.gallery-next');
    
    let currentIndex = 0;

    function showImage(index) {
      if (index < 0) index = thumbnails.length - 1;
      if (index >= thumbnails.length) index = 0;
      currentIndex = index;

      mainImg.src = thumbnails[currentIndex].src;
      mainImg.alt = thumbnails[currentIndex].alt;

      thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentIndex);
      });
    }

    prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
    nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

    thumbnails.forEach((thumb, i) => {
      thumb.addEventListener('click', () => showImage(i));
    });
  });
});

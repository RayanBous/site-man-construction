document.addEventListener('DOMContentLoaded', function() {
  initGalleries();

  function initGalleries() {
    const galleries = document.querySelectorAll('.project-gallery');
    
    galleries.forEach(gallery => {
      const thumbnails = gallery.querySelectorAll('.gallery-thumbnails img');
      const mainImg = gallery.querySelector('.gallery-main img');
      const prevBtn = gallery.querySelector('.gallery-prev');
      const nextBtn = gallery.querySelector('.gallery-next');
      
      // Sélection par défaut
      if (thumbnails.length > 0 && !gallery.querySelector('.gallery-thumbnails img.active')) {
        thumbnails[0].classList.add('active');
        mainImg.src = thumbnails[0].src;
      }

      // Clique sur une miniature
      thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
          const thumbSrc = this.getAttribute('src');
          mainImg.setAttribute('src', thumbSrc);

          thumbnails.forEach(t => t.classList.remove('active'));
          this.classList.add('active');
        });
      });

      // Boutons navigation
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => navigateGallery(gallery, -1));
        nextBtn.addEventListener('click', () => navigateGallery(gallery, 1));
      }

      // Navigation clavier
      gallery.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          navigateGallery(gallery, -1);
        } else if (e.key === 'ArrowRight') {
          navigateGallery(gallery, 1);
        }
      });

      gallery.setAttribute('tabindex', '0'); // pour pouvoir capter les touches
    });
  }

  function navigateGallery(gallery, direction) {
    const thumbnails = gallery.querySelectorAll('.gallery-thumbnails img');
    const mainImg = gallery.querySelector('.gallery-main img');
    let activeIndex = -1;

    thumbnails.forEach((thumb, index) => {
      if (thumb.classList.contains('active')) {
        activeIndex = index;
      }
    });

    if (activeIndex === -1 && thumbnails.length > 0) {
      thumbnails[0].click();
      return;
    }

    if (thumbnails.length <= 1) return;
    let newIndex = activeIndex + direction;

    if (newIndex < 0) {
      newIndex = thumbnails.length - 1;
    } else if (newIndex >= thumbnails.length) {
      newIndex = 0;
    }

    thumbnails[newIndex].click();
  }
});

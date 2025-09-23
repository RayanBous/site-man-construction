const images = document.querySelectorAll('.project-gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImg.src = img.src;
    
    void lightboxImg.offsetWidth; 
    lightboxImg.style.transform = 'scale(1)';
  });
});

function closeLightbox() {
  lightboxImg.style.transform = 'scale(0)'; 
  setTimeout(() => {
    lightbox.classList.remove('show');
    lightboxImg.src = '';
  }, 300); 
}

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg && e.target !== closeBtn) {
    closeLightbox();
  }
});

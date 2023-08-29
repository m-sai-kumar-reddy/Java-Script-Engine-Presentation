const slides = document.querySelectorAll('.slide');
let currentSlideIndex = 0;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
    });
}

showSlide(currentSlideIndex);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        currentSlideIndex = Math.min(currentSlideIndex + 1, slides.length - 1);
    } else if (event.key === 'ArrowLeft') {
        currentSlideIndex = Math.max(currentSlideIndex - 1, 0);
    }
    showSlide(currentSlideIndex);
});

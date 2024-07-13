let currentSlide = 0;

function updateCarousel() {
    const carouselInner = document.querySelector('.carousel-inner');
    const indicators = document.querySelectorAll('.indicator');
    
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function moveCarousel(direction) {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
}

function setCarousel(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
    document.querySelectorAll('.carousel-control').forEach(control => {
        control.addEventListener('click', event => {
            moveCarousel(event.target.classList.contains('next') ? 1 : -1);
        });
    });
    document.querySelectorAll('.indicator').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            setCarousel(index);
        });
    });
});

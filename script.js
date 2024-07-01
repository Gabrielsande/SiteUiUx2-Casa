const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselContainer.children.length - 1) {
        currentIndex++;
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
});

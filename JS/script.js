let currentIndex = 0;
const totalCards = 2; // Total de cartas
const containers = document.querySelector('.card-container');

// Inicializa el carrusel mostrando la primera carta
updateCarousel();

function updateCarousel() {
    const offset = -currentIndex * (450 + 20); // Ajusta el desplazamiento (450px de ancho + 20px de margen)
    containers.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalCards; // Cicla entre 0 y 4
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards; // Cicla entre 0 y 4
    updateCarousel();
}

function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
}
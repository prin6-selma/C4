// js/carousel.js
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-track');
    const topProd = ['C1', 'C2', 'C3'];

    topProd.forEach((tProd) => {
        const index = products.findIndex((prod) => {           
            return prod.id == tProd;
        });
        const aProd = products[index];


        const cProdEL = document.createElement('div');
        const imgEL = document.createElement("img")

        imgEL.src = aProd.image[0];
        cProdEL.classList.add('carousel-item');
        cProdEL.appendChild(imgEL);
        carousel.appendChild(cProdEL);
    })


    // Carousel Animation
    let currentIndex = 0;
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
});





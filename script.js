document.addEventListener('DOMContentLoaded', function() {
    // Variables for image carousel
    let imageSlideIndex = 0;
    const imageSlides = document.querySelectorAll('.carousel-slide');
    const imageDots = document.querySelectorAll('.dot');

    function showImageSlide(index) {
        imageSlides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
        imageDots.forEach((dot, i) => {
            dot.className = dot.className.replace(' active-dot', '');
            if (i === index) dot.className += ' active-dot';
        });
    }

    function nextImageSlide() {
        imageSlideIndex = (imageSlideIndex + 1) % imageSlides.length;
        showImageSlide(imageSlideIndex);
    }

    function previousImageSlide() {
        imageSlideIndex = (imageSlideIndex - 1 + imageSlides.length) % imageSlides.length;
        showImageSlide(imageSlideIndex);
    }

    document.querySelector('.carousel-section .next').addEventListener('click', nextImageSlide);
    document.querySelector('.carousel-section .prev').addEventListener('click', previousImageSlide);

    // Automatically change image slides every 5 seconds
    setInterval(nextImageSlide, 5000);

    // Show the first image slide initially
    showImageSlide(imageSlideIndex);
}

);

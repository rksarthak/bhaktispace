document.addEventListener('DOMContentLoaded', function () {
    // Image carousel setup (existing functionality)
    let imageSlideIndex = 0;
    const imageSlides = document.querySelectorAll('.carousel-section .carousel-slide');
    const imageDots = document.querySelectorAll('.carousel-section .dot');

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

    if (document.querySelector('.carousel-section .next') && document.querySelector('.carousel-section .prev')) {
        document.querySelector('.carousel-section .next').addEventListener('click', nextImageSlide);
        document.querySelector('.carousel-section .prev').addEventListener('click', previousImageSlide);
    }

    setInterval(nextImageSlide, 5000); // Auto transition every 5 seconds
    showImageSlide(imageSlideIndex);

    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('.menu-icon').classList.toggle('open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
            menuToggle.querySelector('.menu-icon').classList.remove('open');
        }
    });

    // Video carousel setup for Workshops Page
    const workshopCarousel = document.querySelector('.workshops-section .carousel-container');
    if (workshopCarousel) {
        let videoSlideIndex = 0;
        const videoSlides = document.querySelectorAll('.workshops-section .carousel-slide');
        const videoDots = document.querySelectorAll('.workshops-section .dot');
        let videoChangeInterval;

        function showVideoSlide(index) {
            videoSlides.forEach((slide, i) => {
                slide.style.display = (i === index) ? 'block' : 'none';
            });
            videoDots.forEach((dot, i) => {
                dot.className = dot.className.replace(' active-dot', '');
                if (i === index) dot.className += ' active-dot';
            });
        }

        function nextVideoSlide() {
            videoSlideIndex = (videoSlideIndex + 1) % videoSlides.length;
            showVideoSlide(videoSlideIndex);
        }

        function previousVideoSlide() {
            videoSlideIndex = (videoSlideIndex - 1 + videoSlides.length) % videoSlides.length;
            showVideoSlide(videoSlideIndex);
        }

        function startVideoChangeInterval() {
            videoChangeInterval = setInterval(nextVideoSlide, 3000); // Auto transition every 3 seconds
        }

        function stopVideoChangeInterval() {
            clearInterval(videoChangeInterval);
        }

        // Thumbnail click handling
        videoSlides.forEach((slide) => {
            const thumbnail = slide.querySelector('.video-thumbnail');
            if (thumbnail) {
                thumbnail.addEventListener('click', function () {
                    const videoId = this.getAttribute('data-video-id');
                    const iframe = document.createElement('iframe');
                    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&controls=1`;
                    iframe.frameBorder = '0';
                    iframe.allowFullscreen = true;
                    iframe.style.width = '100%';
                    iframe.style.height = '100%';
                    
                    // Replace the thumbnail with the iframe
                    slide.innerHTML = '';
                    slide.appendChild(iframe);
                });
            }

            slide.addEventListener('mouseenter', function () {
                stopVideoChangeInterval();
                slide.classList.add('hover-effect');
            });

            slide.addEventListener('mouseleave', function () {
                startVideoChangeInterval();
                slide.classList.remove('hover-effect');
            });
        });

        if (document.querySelector('.workshops-section .next') && document.querySelector('.workshops-section .prev')) {
            document.querySelector('.workshops-section .next').addEventListener('click', nextVideoSlide);
            document.querySelector('.workshops-section .prev').addEventListener('click', previousVideoSlide);
        }

        showVideoSlide(videoSlideIndex);
        startVideoChangeInterval();
    }
});

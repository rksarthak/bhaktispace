// Toggle the side menu
function toggleMenu() {
    var menu = document.getElementById("side-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close the menu if the user clicks outside of it
window.addEventListener('click', function(event) {
    var menu = document.getElementById("side-menu");
    var menuIcon = document.querySelector('.menu-icon');

    if (menu.style.display === "block" && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = "none";
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal sections on scroll
function revealSections() {
    var sections = document.querySelectorAll('section');
    var windowHeight = window.innerHeight;
    var revealPoint = 150;

    sections.forEach(section => {
        var sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', revealSections);
document.addEventListener('DOMContentLoaded', revealSections);

// Photo Collage observer
document.addEventListener('DOMContentLoaded', () => {
    const photoCollage = document.querySelector('.photo-collage');
    if (photoCollage) {
        const photoCollageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    photoCollage.classList.add('show');
                } else {
                    photoCollage.classList.remove('show');
                }
            });
        });

        photoCollageObserver.observe(photoCollage);
    }
});

// Video Carousel
let currentVideoSlide = 0;

function showVideoSlide(index) {
    const videoContainer = document.querySelector('.video-container');
    const totalSlides = videoContainer.children.length;

    // Cyclic navigation logic
    currentVideoSlide = (index + totalSlides) % totalSlides;

    const offset = -currentVideoSlide * 100; // 100% per slide
    videoContainer.style.transform = `translateX(${offset}%)`;
}

function nextVideoSlide() {
    showVideoSlide(currentVideoSlide + 1);
}

function prevVideoSlide() {
    showVideoSlide(currentVideoSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showVideoSlide(currentVideoSlide);
});

// Image Carousel
let carouselSlideIndex = 0;
showCarouselSlides();

function showCarouselSlides() {
    let slides = document.querySelectorAll('.carousel-slide img');
    let dots = document.querySelectorAll('.dot');
    slides.forEach(slide => slide.style.display = 'none');
    
    carouselSlideIndex = (carouselSlideIndex + 1) % slides.length;

    slides[carouselSlideIndex].style.display = 'block';
    dots.forEach(dot => dot.className = dot.className.replace(" active", ""));
    dots[carouselSlideIndex].className += " active";

    setTimeout(showCarouselSlides, 5000); // Change image every 5 seconds
}

function currentCarouselSlide(n) {
    carouselSlideIndex = n - 1;
    showCarouselSlides();
}

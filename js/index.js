// view gallery

const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<img alt="Expanded" />';
    lb.addEventListener('click', ()=> lb.classList.remove('open'));
    document.body.appendChild(lb);
    const lbImg = lb.querySelector('img');

    document.querySelectorAll('.gallery a').forEach(a=>{
    a.addEventListener('click', e=>{
    e.preventDefault();
    lbImg.src = a.getAttribute('href');
    lb.classList.add('open');
    })
})

// hide n show nav

const header = document.querySelector("header");
const homeSection = document.getElementById("home");
let lastScrollY = window.scrollY;
let onHome = true;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 10) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    if (currentScrollY < lastScrollY) {
        header.classList.remove("hidden");
    } else if (currentScrollY > lastScrollY && !onHome) {
        header.classList.add("hidden");
    }

    lastScrollY = currentScrollY;
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target.id === "home") {
            onHome = entry.isIntersecting;
            if (onHome) {
                header.classList.remove("hidden");
            }
        }
    });
}, { threshold: 0.5 });

observer.observe(homeSection);

// toggle menu

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
    menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.querySelector('.slider-dots');

slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.dataset.index = index;
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        goToSlide(parseInt(dot.dataset.index));
    });
});

function goToSlide(index) {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

document.getElementById('next').onclick = () => changeSlide(1);
document.getElementById('prev').onclick = () => changeSlide(-1);

function changeSlide(direction) {
    let nextIndex = (currentSlide + direction + slides.length) % slides.length;
    goToSlide(nextIndex);
}



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
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

const navbar = document.getElementById("navbar");
const homeSection = document.getElementById("home");
let onHome = false;
let hideTimeout;

function hideNavbar() {
    if(!onHome){
    navbar.classList.add("hidden");
    }
}

function showNavbar() {
    navbar.classList.remove("hidden");
    if(!onHome) resetTimer();
}

function resetTimer() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideNavbar, 500    );
}

window.addEventListener("scroll", showNavbar);
window.addEventListener("mousemove", showNavbar);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.target.id === "home") {
            onHome =  entry.isIntersecting;
            if (onHome) {
                clearTimeout(hideTimeout);
                // navbar.classList.remove("hidden");
                showNavbar();

            } else {
                resetTimer();
            }
        }
    });
}, {threshold: 0.5});

observer.observe(homeSection);

resetTimer();   


// toggle menu


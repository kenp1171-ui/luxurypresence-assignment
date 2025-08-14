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

// const navbar = document.getElementById("navbar");
// let hideTimeout;

// function hideNavbar() {
//     navbar.classList.add("hidden");
// }

// function showNavbar() {
//     navbar.classList.remove("hidden");
//     restartHideTimer();
// }

// function restartHideTimer() {
//     clearTimeout(hideTimeout);
//     hideTimeout = setTimeout(hideNavbar, 1000);
// }

// function checkAboutSection() {
//     const aboutTop = document.queryBoundingClientRec().top;

//     if (aboutTop <= 0) {
//         restartHideTimer();
//     } else {
//         clearTimeout(hideTimeout);
//     }
// }

// document.addEventListener("scroll", () => {
//     if (window.scrollY > 100) {
//         showNavbar();
//     }
// });
// window.addEventListener("scroll", checkAboutSection);
// checkAboutSection();


// toggle menu


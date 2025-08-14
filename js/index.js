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

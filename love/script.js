const gheart = document.querySelector('.g-heart');
const rheart = document.querySelector('.r-heart');
const t = document.querySelector('.h-t');

gheart.addEventListener('click', () => {
    rheart.classList.add('animation');
    t.style.opacity = "1";
    setTimeout(() => {
        rheart.classList.remove('animation');
    t.style.opacity = "0";
    }, 900);
})

rheart.addEventListener('click', () => {
    rheart.classList.remove('animation');
    t.style.opacity = "0";
})
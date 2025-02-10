const gheart = document.querySelector('.g-heart');
const rheart = document.querySelector('.r-heart');

gheart.addEventListener('click', () => {
    rheart.classList.add('animation');
    gheart.classList.add('fill-color');
})

rheart.addEventListener('click', () => {
    rheart.classList.remove('animation');
    gheart.classList.remove('fill-color');
})
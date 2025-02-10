const btn = document.querySelector('.btn');
const closeIcon = document.querySelector('.close');
const trailler = document.querySelector('.trailler-container');
const video = document.querySelector('video');

btn.addEventListener('click', () => {
    trailler.classList.remove('active');
})

closeIcon.addEventListener('click', () => {
    trailler.classList.add('active');
    video.pause();
    video.currentTime = 0;
})
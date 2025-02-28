let a = document.querySelector('.arrow');
console.log(a);

window.addEventListener('scroll', () => {
    let p = window.scrollY;
    if(p <= 5){
        a.classList.toggle('fade-in');
        a.classList.toggle('fade-out');
    }
})
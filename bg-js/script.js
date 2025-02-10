const btn = document.getElementById('btn');
const text = document.getElementById('text');

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor();
    text.innerHTML = randomColor();
})
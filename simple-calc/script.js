const b = document.querySelector('.submit');
const r = document.querySelector('.r');

b.addEventListener('click', ()=>{
    const n1 = document.querySelector('.num1').value;
    const n2 = document.querySelector('.num2').value;
    const s = document.querySelector('#signs').value;
    
    switch(s){
        case "plus":
            r.innerHTML = Number(n1) + Number(n2);
            break;
        case "min":
            r.innerHTML = Number(n1) - Number(n2);
            break;
        case "multi":
            r.innerHTML = Number(n1) * Number(n2);
            break;
        case "div":
            r.innerHTML = Number(n1) / Number(n2);
            break;
    }
})
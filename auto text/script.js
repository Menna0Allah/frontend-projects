let gt = document.querySelector('.g-t');
let cursor = document.querySelector('.cursor');

const words = [
    "loyal", "kind", "funny", "smart", "caring", "adventurous", "brave", "thoughtful", "generous", "creative", "supportive", "honest", "friendly", "cheerful", "outgoing", "wise", "reliable", "trustworthy", "helpful", "patient", "humble"
];

const typingDelay = 200;
const erasingDelay = 200;

const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

function type(){
    if(charIndex < words[index].length){
        gt.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }else{
        setTimeout(erase, newLetterDelay);
    }
}

function erase(){
    if(charIndex > 0){
        gt.textContent = words[index].substring(0,charIndex - 1);
        charIndex --;
        setTimeout(erase, erasingDelay)
    }else{
        index++;
        if(index >= words.length){
            index = 0;
        }
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    if(words.length){
        setTimeout(type,newLetterDelay);
    }
})
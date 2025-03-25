let input = document.getElementById('date');

input.max = new Date().toISOString().split("T")[0];
// "2025-03-25T14:30:00.123Z" -> "2025-03-25"

function Age(){
    let birth = new Date(input.value);

    let birthDay = birth.getDate();
    let birthMonth = birth.getMonth() + 1;      
    let birthYear = birth.getFullYear();

    let today = new Date(); 

    let todayDay = today.getDate();
    let todayMonth = today.getMonth() + 1; // (0 -> 11) => (1 -> 12)
    let todayYear = today.getFullYear();

    let d, m, y;

    y = todayYear - birthYear;

    if(todayMonth >= birthMonth){
        m = todayMonth - birthMonth;
    }else{
        y--;
        m = 12 + todayMonth - birthMonth;
    }

    if(todayDay >= birthDay){
        d = todayDay - birthDay;
    }else{
        m--;
        d = getDaysInMonth(birthYear, birthMonth) + todayDay - birthDay; 
    }

    if(m < 0){
        m = 11;
        y--;
    }

    result.innerHTML = `You are <span>${y}</span> years, <span>${m}</span> months and <span>${d}</span> days old.`; 
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}

let btn = document.getElementById('btn');
let result = document.getElementById('result');
btn.addEventListener('click', Age);

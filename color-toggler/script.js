let switcher = document.getElementById('switch');

switcher.addEventListener('click', () => {
    if(switcher.checked){
        document.body.style.backgroundColor= 'black';
    }else{
        document.body.style.backgroundColor= 'white';
    }
})
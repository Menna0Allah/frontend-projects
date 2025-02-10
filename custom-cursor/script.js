const cursor = document.querySelector('.cursor');


document.addEventListener('mousemove', (event) => {
    move(event.pageX, event.pageY);
})


const move = function(pageX,pageY){
    cursor.style.left = pageX + 'px';
    cursor.style.top = pageY + 'px';
};
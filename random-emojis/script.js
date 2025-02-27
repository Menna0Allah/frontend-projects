const btn = document.querySelector('.emoji');
const emojis = ["😀", "😂", "😍", "😎", "🥳", "🤯", "😴", "🤔", "😭", "😡", "👀", "💡", "🔥", "🎉", "🚀"];

btn.addEventListener('mouseover', () => {
    let randomE = emojis[Math.floor(Math.random() * emojis.length)];
    btn.innerHTML = randomE;
})
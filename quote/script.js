const api_url ="http://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

getapi(api_url);

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener('click', () => getapi(api_url));

function tweet(){
  window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " - by " + author.innerHTML, "Tweet Window", "width=700, height=500");
}

btn2.addEventListener('click', () => tweet());
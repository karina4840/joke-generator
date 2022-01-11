const button = document.querySelector('.button');
const jokeText = document.querySelector('.joke-text');
document.addEventListener('DOMContentLoaded', getJoke());

button.addEventListener('click', getJoke);

async function getJoke() {
    const jokeData = await fetch('https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single', {
        headers: {
            'Accept': 'application/json'
        }
    });

    const jokeObj = await jokeData.json();
    jokeText.textContent = jokeObj.joke;
  }
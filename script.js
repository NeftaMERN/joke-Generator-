
const jokeContent = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

const getJoke = () => {

    fetch(url)
    .then(response => response.json())

}

getJoke()
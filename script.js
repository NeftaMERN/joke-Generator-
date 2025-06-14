
const jokeContent = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";

const getJoke = () => {

    jokeContent.classList.remove("fade");

    fetch(url)
    .then(response => response.json())
    .then(data => {

        jokeContent.textContent = data.joke;

        setTimeout(() => {

            jokeContent.classList.add("fade");

        }, 50);

    })

    .catch(error => {

        jokeContent.textContent = "Failed to fetch joke.";
        console.log(error);

    })

};

btn.addEventListener("click", getJoke);

getJoke()
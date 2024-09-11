const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "bmYd+2qXG59CafZHwJQPfw==xaqlI14DBUfbMthu";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes/";

async function getJoke() {
  try {
    jokeEl.innerText = "Loading...";
    btnEl.disabled = true;
    btnEl.innerText = "Updating...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error occured, try again later";

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);

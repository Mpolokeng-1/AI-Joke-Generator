function displayJoke(response) {
  console.log("joke generated");
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateJoke(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "109284418326b17o4fte0a0fcf58d4d6";
  let context =
    "You are a super funny AI Assistant. Your mission is to generate very good and funny jokes. Make sure to follow the user instructions. There must be space using the <br> element. Sign the joke with 'SheCodes AI' inside a <strong> element at the end of the joke and NOT beginning";
  let prompt = `User instuctions: Generate a joke about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let jokeElement = document.querySelector("#joke");
  jokeElement.classList.remove("hidden");
  jokeElement.innerHTML = `<div class="generating">⏳ Generating a joke about ${instructionsInput.value}</div>`;

  console.log("Generating joke");
  console.log(`Prompt: ${prompt}`);
  console.log(`Contect: ${context}`);

  axios.get(apiURL).then(displayJoke);
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);

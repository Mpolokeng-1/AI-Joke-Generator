function generateJoke(event) {
  event.preventDefault();

  new Typewriter("#joke", {
    strings: "How do trees get on the Internet? They log in",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let jokeFormElement = document.querySelector("#joke-generator-form");
jokeFormElement.addEventListener("submit", generateJoke);

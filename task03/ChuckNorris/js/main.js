    
const jockServerAddress = "https://api.chucknorris.io/jokes/random";

function convertToJSON(response) {
  return response.json();
}

function extractJoke(dataObject) {
  return dataObject.value;
}

function printJoketoPage(jokes) {
  const container = document.querySelector("div");
  container.textContent = "";
  const span = document.createElement("span");
  span.textContent = jokes;
  container.appendChild(span);
}
function fetchChuck() {
  fetch(jockServerAddress)
    .then(convertToJSON)
    .then(extractJoke)
    .then(printJoketoPage);
}

function createContainer() {
  const container = document.createElement("div");
  document.body.appendChild(container);
  return container;
}
 const container = createContainer();

function button() {
  const button = document.createElement("button");
  button.textContent = "Joke Chuck Norris";
 document.body.appendChild(button);
  button.addEventListener("click", fetchChuck);
}
button();



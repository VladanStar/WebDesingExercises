const jockServeraddress = "https://api.chucknorris.io/jokes/random";

function convertToJSON(response){
    return response.json();
}

function ecxtractJoke(dataObject){
    return dataObject.value;
}

function printJokeToPage(jokes){
    const container = document.querySelector("div");
    container.textContent = "";
    const span = document.createElement("span");
    span.textContent= jokes;
    container.appendChild(span)
}

function fetchJoke(){
    fetch(jockServeraddress)
    .then(convertToJSON)
    .then(ecxtractJoke)
    .then(printJokeToPage)
}

function button (){
    const button = document.createElement("button");
    button.textContent="Chuck norris Jokes";
    document.body.appendChild(button);
    button.addEventListener("click",fetchJoke);
}
button();

function createContainer(){
    const container = document.createElement("div");
    document.body.appendChild(container);
    return container
}
 createContainer();
var buttonTranslate = document.querySelector("#btn-trans");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Sorry,Something went wrong with the server. Try again after sometime.")
}

function clickHandler() {
    fetch(getTranslationURL(textInput.value))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}


buttonTranslate.addEventListener("click", clickHandler);
var buttonTranslate = document.querySelector("#btn-trans");
var textInput = document.querySelector("#txt-input");
var textOutput = document.querySelector("#txt-output");
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";
var getTranslationURL =  serverURL + "?" + "text=" + textInput.value    // SIMPLIFIED IT WITHOUT USING FUNCTION

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Sorry,Something went wrong with the server. Try again after sometime.")
}

function clickHandler() {
    fetch(getTranslationURL)
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            textOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}

buttonTranslate.addEventListener("click", clickHandler);
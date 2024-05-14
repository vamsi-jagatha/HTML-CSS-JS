let backgroundElement = document.getElementById('backGround');
backgroundElement.classList.add('background');

let dictionaryContainer = document.createElement('div');
dictionaryContainer.classList.add('dictionary-container');
backgroundElement.appendChild(dictionaryContainer);

let headingElement = document.createElement('h1');
headingElement.textContent = "Word Dictionary";
headingElement.classList.add('main-heading');
dictionaryContainer.appendChild(headingElement);

let inputElement = document.createElement('input');
inputElement.type = "search";
inputElement.placeholder = "Enter a word";
inputElement.classList.add('input-element');
dictionaryContainer.appendChild(inputElement);

let removeAllContainersElement = document.createElement('div');
dictionaryContainer.appendChild(removeAllContainersElement);

function createAndAppendResults(mainResults) {
    let wordDisplayContainer = document.createElement('div');
    wordDisplayContainer.classList.add('word-display-container');
    removeAllContainersElement.appendChild(wordDisplayContainer);

    let searchedWordContainer = document.createElement('div');
    searchedWordContainer.style.textAlign = "left";
    searchedWordContainer.style.padding = "0.4rem 0rem";
    wordDisplayContainer.appendChild(searchedWordContainer);

    let searchedWordElement = document.createElement('h2');
    searchedWordElement.textContent = mainResults.word;
    searchedWordElement.classList.add('search-word');
    searchedWordContainer.appendChild(searchedWordElement);

    let searchedWordTypeElement = document.createElement('p');
    searchedWordTypeElement.classList.add('search-word-type');
    searchedWordTypeElement.textContent = mainResults.phonetics[1].text;
    searchedWordContainer.appendChild(searchedWordTypeElement);

    let iconSoundElement = document.createElement('i');
    iconSoundElement.classList.add('fa-solid', 'fa-volume-high', 'icon-sound');
    wordDisplayContainer.appendChild(iconSoundElement);

    iconSoundElement.addEventListener('click', function() {
        iconSoundElement.style.color = "blue";
        let speakTheWord = new SpeechSynthesisUtterance(searchedWordElement.textContent);
        speechSynthesis.speak(speakTheWord);
    });

    let lineBreakElement1 = document.createElement('hr');
    removeAllContainersElement.appendChild(lineBreakElement1);

    let meaningContainer = document.createElement('div');
    meaningContainer.style.textAlign = "left";
    meaningContainer.style.padding = "0.4rem 0rem";
    removeAllContainersElement.appendChild(meaningContainer);

    let wordHeadingElement = document.createElement('h2');
    wordHeadingElement.classList.add('heading');
    wordHeadingElement.textContent = "Meaning";
    meaningContainer.appendChild(wordHeadingElement);

    let wordMeaningElement = document.createElement('p');
    wordMeaningElement.classList.add('description');
    wordMeaningElement.textContent = [
        mainResults.meanings[0].definitions[0].definition,
        "\\" + mainResults.meanings[1].definitions[0].definition,
        "\\ " + mainResults.meanings[2].definitions[0].definition
    ].join("\n");
    meaningContainer.appendChild(wordMeaningElement);

    let lineBreakElement2 = document.createElement('hr');
    removeAllContainersElement.appendChild(lineBreakElement2);

    let partsOfSpeechContainer = document.createElement('div');
    partsOfSpeechContainer.style.textAlign = "left";
    partsOfSpeechContainer.style.padding = "0.4rem 0rem";
    removeAllContainersElement.appendChild(partsOfSpeechContainer);

    let partsOfSpeechHeadingElement = document.createElement('h2');
    partsOfSpeechHeadingElement.classList.add('heading');
    partsOfSpeechHeadingElement.textContent = "Parts of Speech";
    partsOfSpeechContainer.appendChild(partsOfSpeechHeadingElement);

    let partsOfSpeechElement = document.createElement('p');
    partsOfSpeechElement.classList.add('description');
    partsOfSpeechElement.textContent = [mainResults.meanings[0].partOfSpeech, mainResults.meanings[1].partOfSpeech, mainResults.meanings[2].partOfSpeech].join(',');
    partsOfSpeechContainer.appendChild(partsOfSpeechElement);

    let lineBreakElement3 = document.createElement('hr');
    removeAllContainersElement.appendChild(lineBreakElement3);

    let synonymContainer = document.createElement('div');
    synonymContainer.style.textAlign = "left";
    synonymContainer.style.padding = "0.4rem 0rem";
    removeAllContainersElement.appendChild(synonymContainer);

    let synonymHeadingElement = document.createElement('h2');
    synonymHeadingElement.classList.add('heading');
    synonymHeadingElement.textContent = "Synonyms";
    synonymContainer.appendChild(synonymHeadingElement);

    let synonymElement = document.createElement('p');
    synonymElement.classList.add('description');
    synonymElement.textContent = mainResults.meanings[0].synonyms;
    synonymContainer.appendChild(synonymElement);
}

function displayResults(searchResults) {
    removeAllContainersElement.textContent = "";
    for (let result of searchResults) {
        createAndAppendResults(result);
    }
}

inputElement.addEventListener('keyup', function(event) {
    let inputValue = inputElement.value;
    if (event.key === "Enter") {
        let dictURL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputValue;
        let requestConfig = {
            method: "GET"
        };

        fetch(dictURL, requestConfig)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let searchResults = jsonData;
                displayResults(searchResults);
            });
    }
});

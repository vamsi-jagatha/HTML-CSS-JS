let searchInputEle = document.getElementById('searchInput');
let spinner = document.getElementById('spinner');
let searchResultsEle = document.getElementById('searchResults');


function createAndAppendSearchResults(result) {
 
    let resultItem = document.createElement('div');
    resultItem.classList.add('result-item');
    searchResultsEle.appendChild(resultItem);

    let {link,title,description} = result;
    let resultTitle = document.createElement('a');
    resultTitle.href = link;
    resultTitle.target = "_blank";
    resultTitle.textContent = title;
    resultTitle.classList.add('result-title');
    resultItem.appendChild(resultTitle);

    let breakElement = document.createElement('br');
    resultItem.appendChild(breakElement);

    let urlEle = document.createElement('a');
    urlEle.classList.add('result-url');
    urlEle.href = link;
    urlEle.target = "_blank";
    urlEle.textContent = link;
    resultItem.appendChild(urlEle);

    let breakEle = document.createElement('br');
    resultItem.appendChild(breakEle);

    let desEle = document.createElement('p');
    desEle.classList.add('link-description');
    desEle.textContent = description;
    resultItem.appendChild(desEle);
}

function displayResults(searchResults) {
    spinner.classList.add("d-none");
    for (let result of searchResults) {
        createAndAppendSearchResults(result);
    }
}

function searchResultsInput(event) {
    if (event.key === "Enter") {
        spinner.classList.remove('d-none');
        searchResultsEle.textContent = "";
        let searchInput = searchInputEle.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: 'GET'
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {search_results} = jsonData;
                displayResults(search_results);
            });
    }
}
searchInputEle.addEventListener('keydown', searchResultsInput);
let bookmarkFormEl = document.getElementById('bookmarkForm');
let siteNameInputEl = document.getElementById('siteNameInput');
let siteUrlInputEl = document.getElementById('siteUrlInput');
let siteNameErrMsgEl = document.getElementById('siteNameErrMsg');
let siteUrlErrMsgEl = document.getElementById('siteUrlErrMsg');
let bookmarksListEl = document.getElementById('bookmarksList');
let submitBtnEl = document.getElementById('submitBtn');

function validateInputs() {
    let userNameInput = siteNameInputEl.value;
    let userUrlInput = siteUrlInputEl.value;
    let siteName = document.createElement('li');
    let siteUrl = document.createElement('li');
    let siteLink = document.createElement('a');
    siteName.textContent = userNameInput;
    siteLink.textContent = userUrlInput;
    siteLink.href = userUrlInput;
    siteLink.target = "_blank";
    if (userNameInput !== "" && userUrlInput !== "") {
        siteUrl.appendChild(siteLink);
        bookmarksListEl.classList.remove('d-none');
        bookmarksListEl.appendChild(siteName);
        bookmarksListEl.appendChild(siteUrl);
        siteNameInputEl.value="";
        siteUrlInputEl.value="";
    }  
}

bookmarkFormEl.addEventListener('submit', function(event) {
    event.preventDefault();
    let userNameInput = siteNameInputEl.value;
    let userUrlInput = siteUrlInputEl.value;
    if (userNameInput === "" && userUrlInput === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "Required*";
    } 
    else if(userNameInput!=="" && userUrlInput!=="" ){
        validateInputs();
    }else if (userNameInput !== "" & userUrlInput === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    }  else if (userNameInput === "" & userUrlInput !== "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    

});

siteNameInputEl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener('change', function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});

siteNameInputEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener('blur', function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});
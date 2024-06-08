const formElement = document.getElementById('myForm');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const dateElement = document.getElementById('date');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const maleElement=document.getElementById('male');
const femaleElement=document.getElementById('female');
const firstNameErrMsg = document.getElementById('firstNameErrMsg');
const lastNameErrMsg = document.getElementById('lastNameErrMsg');
const emailErrMsg = document.getElementById('emailErrMsg');
const passwordErrMsg = document.getElementById('passwordErrMsg');
const dateErrMsg = document.getElementById('dateErrMsg');
const checkboxElement=document.getElementById('checkbox');

let formData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Date: {
        date: "",
        month: "",
        year: ""
    },
    gender: "Male",
    checkboxTick: ""
};

function validateInputs() {
    let isValid = true;

    if (firstName.value === "") {
        firstNameErrMsg.textContent = "First name is required*";
        isValid = false;
    } else {
        firstNameErrMsg.textContent = "";
    }

    if (lastName.value === "") {
        lastNameErrMsg.textContent = "Last name is required*";
        isValid = false;
    } else {
        lastNameErrMsg.textContent = "";
    }

    if (email.value.includes('@gmail.com') && email.value.includes('@') && email.value.includes('.')) {
        emailErrMsg.textContent = "";
    } else {
        emailErrMsg.textContent = "Invalid email address*";
        isValid = false;
    }

    const passwordLength = password.value.length;
    if (passwordLength > 15) {
        passwordErrMsg.textContent = "Password must be less than 15 characters";
        isValid = false;
    } else if (passwordLength < 8) {
        passwordErrMsg.textContent = "Password must be at least 8 characters";
        isValid = false;
    } else {
        passwordErrMsg.textContent = "";
    }

    if (dateElement.value === "" || monthElement.value === "" || yearElement.value === "") {
        dateErrMsg.textContent = "Date of birth is required*";
        isValid = false;
    } else {
        dateErrMsg.textContent = "";
    }


    if (femaleElement.checked===true){
        formData.gender="female";
    }else{
        isValid
    }


    if (checkboxElement.checked===false){
        formData.checkboxTick="No";
    }else{
        formData.checkboxTick="Yes";
        isValid=true;
    }

    return isValid;
}

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateInputs()) {
        formData.firstName = firstName.value;
        formData.lastName = lastName.value;
        formData.email = email.value;
        formData.password = password.value;
        formData.Date.date = dateElement.value;
        formData.Date.month = monthElement.value;
        formData.Date.year = yearElement.value;
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Data stored successfully!', formData);
    } else {
        console.log('Invalid input. Data not stored.');
    }
});

firstName.addEventListener('change', (e) => {
    if (e.target.value === "") {
        firstNameErrMsg.textContent = "First name is required*";
    } else {
        firstNameErrMsg.textContent = "";
        formData.firstName = e.target.value;
    }
});

lastName.addEventListener('change', (e) => {
    if (e.target.value === "") {
        lastNameErrMsg.textContent = "Last name is required*";
    } else {
        lastNameErrMsg.textContent = "";
        formData.lastName = e.target.value;
    }
});

email.addEventListener('change', (e) => {
    if (e.target.value === "") {
        emailErrMsg.textContent = "Email is required*";
    } else {
        emailErrMsg.textContent = "";
        formData.email = e.target.value;
    }
});

password.addEventListener('change', (e) => {
    if (e.target.value === "") {
        passwordErrMsg.textContent = "Password is required*";
    } else {
        passwordErrMsg.textContent = "";
        formData.password = e.target.value;
    }
});

dateElement.addEventListener('change', (e) => {
    if (e.target.value === "") {
        dateErrMsg.textContent = "Date is required*";
    } else {
        dateErrMsg.textContent = "";
        formData.Date.date = e.target.value;
    }
});

monthElement.addEventListener('change', (e) => {
    if (e.target.value === "") {
        dateErrMsg.textContent = "Month is required*";
    } else {
        dateErrMsg.textContent = "";
        formData.Date.month = e.target.value;
    }
});

yearElement.addEventListener('change', (e) => {
    if (e.target.value === "") {
        dateErrMsg.textContent = "Year is required*";
    } else {
        dateErrMsg.textContent = "";
        formData.Date.year = e.target.value;
    }
});

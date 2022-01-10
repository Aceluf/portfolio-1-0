// variables

let theme = localStorage.getItem('theme')

let themeDots = document.getElementsByClassName('theme-dot')

let contactFields = {}

/*
document.addEventListener("DOMContentLoaded", function () {
    contactFields.name = document.getElementById("name")
    contactFields.subject = document.getElementById("subject")
    contactFields.email = document.getElementById("email")
    contactFields.message = document.getElementById('message')
})

// check if the fields are not empty

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined') {
        return false
    }

    return (value.length > 0)
}

// Email Validation

function validateEmail(email) 
{
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailformat.test(String(email).toLowerCase());

}

// Field Validation 

function fieldValidation(field, validationFunction) {
    if (field == null) return false
    
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
        field.classList.add("red-input")
    } else {
        field.classList.remove("red-input")
    }

    return isFieldValid
}

function isValid() {
    let valid = true

    valid &= fieldValidation(contactFields.name, isNotEmpty)
    valid &= fieldValidation(contactFields.email, validateEmail)
    valid &= fieldValidation(contactFields.message, isNotEmpty)

    return valid
} */


for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', () => {
        let mode = themeDots[i].dataset.mode
        setTheme(mode)
    })
}

const setTheme = (mode) => {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'css/style.css'
    }

    if (mode === 'blue') {
        document.getElementById('theme-style').href = 'css/style-blue.css'
    }

    if (mode === 'green') {
        document.getElementById('theme-style').href = 'css/style-green.css'
    }

    if (mode === 'purple') {
        document.getElementById('theme-style').href = 'css/style-purple.css'
    }

    localStorage.setItem('theme', mode)
}

if (theme === null) {
    setTheme('light')
} else {
    setTheme(theme)
}
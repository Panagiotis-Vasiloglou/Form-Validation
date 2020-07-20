"use strict";
// Select our DOM elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const button = document.querySelector("#btn");

// Smalls
const usernameSmall = document.querySelector("#username-small");
const emailSmall = document.querySelector("#email-small");
const passwordSmall = document.querySelector("#password-small");
const password2Small = document.querySelector("#password2-small");

//  Event Listener

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // USERNAME

    if (username.value === "") {
        showError(username, usernameSmall, "Username is required");
    } else {
        success(username, usernameSmall);
    }

    // EMAIL

    if (email.value === "") {
        showError(email, emailSmall, "Email is required");
    } else if (!validateEmail(email.value)) {
        showError(
            email,
            emailSmall,
            "Email is not valid, please check again..."
        );
    } else {
        success(email, emailSmall);
    }

    // PASSWORD

    if (password.value === "") {
        showError(password, passwordSmall, "Password is required");
    } else {
        success(password, passwordSmall);
    }

    // CONFIRM PASSWORDS

    if (password2.value === "") {
        showError(
            password2,
            password2Small,
            "Confirm your password is required"
        );
    } else if (password.value !== password2.value) {
        showError(password2, password2Small, "Passwords not matched");
    } else {
        success(password2, password2Small);
    }
});

// If Success run this function

function success(element, small) {
    element.style.border = "3px solid green";
    small.style.visibility = "hidden";
}

// If NOT success run this function

function showError(element, small, text) {
    element.style.border = "3px solid red";
    small.style.visibility = "visible";
    small.style.color = "red";
    small.innerText = text;
}

// Test if Email is valid

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

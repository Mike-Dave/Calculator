"use strict";

// Selecting html elements
const displayScreen = document.querySelector(".text-area");
const item = document.querySelectorAll(".item");
const deleteButton = document.querySelector(".del-text");
const clear = document.querySelector(".ac-clear");
const equation = document.querySelector(".equation");

// Creating an empty variable to store clicked elements
let displayScreenElement = "";
item.forEach((el) => {
  el.addEventListener("click", function () {
    // Storing the clicked numbers and operators
    displayScreenElement = displayScreenElement + el.textContent;

    // Displaying clicked text to display area
    displayScreen.textContent = displayScreenElement;
  });
});

deleteButton.addEventListener("click", function () {
  // Removing the last element
  displayScreenElement = displayScreenElement.slice(0, -1);

  // Displaying the remaining numbers after deletion
  displayScreen.textContent = displayScreenElement;
});

clear.addEventListener("click", function () {
  // RE-assigning an empty string to the empty variable
  displayScreenElement = "";
  displayScreen.textContent = displayScreenElement;
});

equation.addEventListener("click", function () {
  // Using eval function to perform the Arithmetic
  displayScreenElement = String(eval(displayScreenElement));
  displayScreen.textContent = displayScreenElement;
});

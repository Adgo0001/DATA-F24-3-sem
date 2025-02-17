'use strict'

const dontClickMeButton = document.querySelector("#spinButton");

const testButton = document.querySelector("#test");

const clickMeButton = document.querySelector("#click-me")

const resetButton = document.querySelector("#reset")

const allButtons = document.querySelectorAll("button")

const messageParagraph = document.querySelector("#message");



let timesPressed = 0;

testButton.addEventListener("click", () =>{
    messageParagraph.textContent = "Hey du klikkede knappen!!!!";
});


//Add event listener to the test button
clickMeButton.addEventListener("click", () => {
    messageParagraph.textContent = "Ah thank you";
    timesPressed += 1;
    messageParagraph.textContent = "Du har nu klikket på denne knap, " + timesPressed + " gange";
})


//If the button was pressed 1 time: Print to the console: "Please do not do that again"
//If the button was pressed 2 times: print to the console: I told you not to do that
//If the button was pressed 3 times print to the console STOP!!!
dontClickMeButton.addEventListener("click", () => {
    //This spins around the button
    document.getElementById("spinButton").style.transform += "skew(-50deg, 25deg) rotate(270deg)";

    timesPressed += 1;

    if (timesPressed === 1) {
        messageParagraph.textContent = "Please do not do that again...";
    } else if (timesPressed === 2) {
        messageParagraph.textContent = "I told you not to do that!";
    } else if (timesPressed === 3) {
        messageParagraph.textContent = "STOP!!";
    } else if (timesPressed > 3) {
        allButtons.forEach(button => button.remove());
        messageParagraph.textContent = "I told you not to press me!"
    }
});

resetButton.addEventListener("click", () => {
    timesPressed = 0;
    messageParagraph.textContent = "Gennemført!"
})

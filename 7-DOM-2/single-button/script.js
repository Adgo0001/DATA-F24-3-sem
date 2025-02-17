'use strict'

const dontClickMeButton = document.querySelector("#spinButton");

const testButton = document.querySelector("#test");

const clickMeButton = document.querySelector("#click-me")

const dontClickMeButton = document.querySelector("#message").textContent = "Message";

testButton.addEventListener("click", () =>{
    console.log("Hey du klikkede knappen!!!!");
});

let timesPressed = 0;

//Add event listener to the test button 

clickMeButton.addEventListener("click", () => {
    console.log("Ah thank you");
    timesPressed += 1;
    console.log(timesPressed);
})

//If the button was pressed 1 time: Print to the console: "Please do not do that again"
//If the button was pressed 2 times: print to the console: I told you not to do that
//If the button was pressed 3 times print to the console STOP!!!
dontClickMeButton.addEventListener("click", () => {
    //This spins around the button
    document.getElementById("spinButton").style.transform += "skew(-50deg, 25deg) rotate(270deg)";

    timesPressed += 1;

    if (timesPressed == 1) {
        console.log("Please do not do that again...")
    } else if (timesPressed == 2) {
        console.log("I told you not to do that!")
    } else if (timesPressed == 3) {
        console.log("STOP!!")
    }
});

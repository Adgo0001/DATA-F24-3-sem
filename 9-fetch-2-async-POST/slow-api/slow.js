// https://fakeresponder.com/?sleep=5000
console.log("This is the start");

fetch("https://fakeresponder.com/?sleep=5000")
        .then(data => console.log(data));

console.log("This is the end");


fetch("https://swapi.dev/api/people")
    .then((data) => console.log(data));
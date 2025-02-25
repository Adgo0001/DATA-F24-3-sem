// fetch("https://swapi.dev/api/people/100")
//     .then(dataStream => dataStream.json(), () => console.log("error"))
//     .then(json => console.log(json))
//     .catch(error => console.log("error"));


fetch('https://swapi.dev/api/people/100')
    .then((response) => {
    if (!response.ok) {
        throw new Error("An error has occurred");
    } else {
        //Ok response
    }
}).catch(function(err) {
    console.log("An error has occurred");
});
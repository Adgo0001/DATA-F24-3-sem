const titleInput = document.querySelector("input[placeholder='Title']");
const bodyInput = document.querySelector("input[placeholder='Body']");
const idInput = document.querySelector("input[placeholder='UserID']");
const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    const userID = idInput.value.trim();

    console.log ("Title: ", title)
    console.log ("Body: ", body)
    console.log ("User-ID: ", userID)
})

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'WOW',
        body: 'This seems pretty awesome',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
.then((response) => response.json())
.then((json) => console.log(json));
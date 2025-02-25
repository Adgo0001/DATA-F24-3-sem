// Example of a higher-order function that filters values based on a condition
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myFilter(array, callback) {
    let result = []; // Arrayed til de filtreret numre
    for (let i = 0; i < array.length; i++) { // Den skal loope igennem hvert element i arrayed numbers
        if (callback(array[i])) { // Kalder funktionen callBack som skal bruge i(elementet)
            result.push(array[i]); // til at finde ud af om [i] det er true i callBack-funktionen
        }
    }
    return result; // Returnere de filtreret numre
}

function callback(element) {
    //return element <= 5;
    return element >= 5;
}

const filteredArray = myFilter(numbers, callback);

console.log(filteredArray); // Output: [1, 2, 3, 4]

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let start = 0;
let end = list.length - 1;
const findNumber = 1;


while (start <= end) {
    let middle = Math.floor((start + end) / 2); //Math.floor() always round down the number
    let guess = list[middle];

    if (guess === findNumber) {
        return console.log("number", guess, "position", middle);
    } else if (guess > findNumber) {
        end = middle - 1;
    } else {
        start = middle + 1;
    }
}


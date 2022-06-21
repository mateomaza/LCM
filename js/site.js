// We call the HTML elements we need

const btn = document.getElementById("button")
const display = document.getElementById("display")


// Controller

function getValues() {

    // We store the input values in variables
    let fizz = document.getElementById("fizz").value
    let buzz = document.getElementById("buzz").value

    // We convert those values into Number() objects
    fizz = Number(fizz);
    buzz = Number(buzz);

    // We test if those values are integers from 0 to 100 or not (and make sure they're not undefined)
    if (Number.isInteger(fizz) && Number.isInteger(buzz) && fizz > 0 && fizz <= 100 && buzz > 0 && buzz <= 100 &&
        typeof fizz !== undefined && typeof buzz !== undefined) {

        // We call the functions to generate "nums" and display it
        let nums = generateNums(fizz, buzz)
        displayNums(nums)

    } else {
        alert("Values must be integers from 1 to 100")
    }
}


// Logic

function generateNums(fizz, buzz) {

    // Variable to store all our numbers generated
    let numbers = [];

    // We append every number in the fizz:buzz range to the variable "numbers"
    for (let i = 1; i <= 100; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            numbers.push("FizzBuzz")
        } else if (i % fizz == 0) {
            numbers.push("Fizz")
        } else if (i % buzz == 0) {
            numbers.push("Buzz")
        } else {
            numbers.push(i)
        }
    }

    // We return "numbers" so our variables "num" work in the controller
    return numbers
}


// Display

function displayNums(numbers) {

    // Variable where we'll store all rows generated
    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {

        // Variable for classes, so we make even numbers bold with CSS
        let className = "";

        // We pull out each individual number each time we iterate through the loop
        let number = numbers[i];

        // We set an "if statement" to add a different class to even and odd numbers
        if (number == "FizzBuzz") {
            className = "text-danger"
        } else if (number == "Fizz") {
            className = "text-success"
        } else if (number == "Buzz") {
            className = "text-primary"
        } else {
            className = ""
        }

        // We add each row with "template literals"
        templateCols += `<td class="${className}" >${number}</td>`

        if (number % 5 == 0 ||){
            templateRows += `<tr><td class="${className}">${number}</td></tr>`
        } else {
            templateRows += `<td class="${className}">${number}</td>`
        }
    }

    // We add all the content for display to the tbody tag
    display.innerHTML = templateRows
}


//The click event handler to a button, so our project starts when clicked

btn.addEventListener("click", getValues)
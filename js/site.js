// We call the HTML elements we need

const btn = document.getElementById("button")
const display = document.getElementById("display")


// Controller

function getValues() {

    // We store the input values in variables
    let fizz = document.getElementById("fizz").value
    let buzz = document.getElementById("buzz").value

    // Here we could prevent empty values from being inputed, but they still won't work as fizz & buzz can't be 0

    // We convert those values into Number() objects
    fizz = Number(fizz);
    buzz = Number(buzz);

    // We test if those values are integers from 1 to 10000 or not (and make sure they're not undefined)
    if (Number.isInteger(fizz) && Number.isInteger(buzz) && fizz > 0 && fizz <= 10000 && buzz > 0 && buzz <= 10000) {

        // We call the functions to generate "nums" and display it
        let nums = generateNums(fizz, buzz)
        displayNums(nums)

    } else {
        alert("Values must be integers from 1 to 10000")
    }
}


// Logic

function generateNums(fizz, buzz) {

    // Variable to store all our numbers generated
    let numbers = [];

    // We append every number in the fizz:buzz range to the variable "numbers"
    for (let i = 1; i <= 10000; i++) {
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
    let templateData = "";

    for (let i = 0; i < numbers.length; i++) {

        // Variable for classes, so we make style Fizz, Buzz & FizzBuzz :)
        let className = "";

        // We pull out each individual number each time we iterate through the loop
        let number = numbers[i];

        // We set "if & else if statements" so we add diferent classes
        if (number == "FizzBuzz") {
            className = "FizzBuzz"
        } else if (number == "Fizz") {
            className = "text-success"
        } else if (number == "Buzz") {
            className = "text-primary"
        } else {
            className = ""
        }

        // We add each row with "template literals"
        //templateCols += `<td class="${className}" >${number}</td>`

        if (i % 5 == 0 && i !== 0) {
            templateRows += `<tr>${templateData}</tr>`
            templateData = `<td class="${className}">${number}</td>`
        } else if (i == 9999) {
            templateData += `<td class="${className}">${number}</td>`
            templateRows += `<tr>${templateData}</tr>`
        } else {
            templateData += `<td class="${className}">${number}</td>`
        }
    }

    // We add all the content for display to the tbody tag
    display.innerHTML = templateRows
}


//The click event handler to a button, so our project starts when clicked

btn.addEventListener("click", getValues)
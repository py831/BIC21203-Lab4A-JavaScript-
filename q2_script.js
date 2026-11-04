const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultParagraph = document.getElementById("result");

function checkInput() {
    const rawValue = userInput.value;

    // Read input and handle empty or whitespace-only values as invalid
    if (rawValue.trim() === "") {
        resultParagraph.textContent = "Please enter a valid number!";
        return;
    }

    // Convert a valid numeric string to a number and detect invalid values (e.g., abc)
    const numberValue = Number(rawValue);

    if (isNaN(numberValue)) {
        resultParagraph.textContent = "Please enter a valid number!";
        return;
    }

    // Display the correct message for numbers below, above or equal to 10 using if...else if...else
    if (numberValue < 10) {
        resultParagraph.textContent = "The number is lower than 10";
    } else if (numberValue > 10) {
        resultParagraph.textContent = "The number is higher than 10";
    } else {
        resultParagraph.textContent = "The number is equal to 10";
    }
}

// Register the click event with addEventListener
checkBtn.addEventListener("click", checkInput);
// Define a function named checkAnswer
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's answer
    const userAnswerElement = document.querySelector('input[name="quiz"]:checked');

    // Check if the user has selected an answer
    if (userAnswerElement) {
        // Access the value property of the selected radio button to get the user's answer
        const userAnswer = userAnswerElement.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            // If the values match, update the feedback element to "Correct! Well done."
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // If the values do not match, update the feedback element to "That's incorrect. Try again!"
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected, update the feedback element to "Please select an answer."
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

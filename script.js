// Questions, Options, and Clues
const questions = [
    {
        question: "When Moses confronted the Pharaoh, what did his staff turn into when he threw it on the ground?(మోషే ఫరోను ఎదుర్కొన్నప్పుడు, అతను దానిని నేలపై పడవేసినప్పుడు అతని కర్ర ఏమైంది?)",
        options: ["A stone  రాయి", "A snake  పాము", "A bird పక్షి", "A pillar of fire అగ్నిపురుగ"],
        answer: "A snake  పాము",
        clue: "Clue: I’m where you clean your hands with care, Water and soap are always there. నేను మీరు జాగ్రత్తగా చేతులను శుభ్రం చేసుకునే స్థలం, నీరు మరియు సబ్బు ఎల్లప్పుడూ అక్కడ ఉంటాయి"
    },
    {
        question: "Who was the first son Abram had?(అబ్రాహముకు కలిగిన మొదటి కుమారుడు ఎవరు?)",
        options: ["Isaac ఇసాక్", "Ishmael ఇస్మాయిల్", "Jacob యాకోబు", "Esau ఈశావు "],
        answer: "Ishmael ఇస్మాయిల్",
        clue: "Clue: I’m where you clean your hands with care, Water and soap are always there. నేను మీరు జాగ్రత్తగా చేతులను శుభ్రం చేసుకునే స్థలం, నీరు మరియు సబ్బు ఎల్లప్పుడూ అక్కడ ఉంటాయి"
    },
    {
        question: "Which human author wrote the most words in the Bible?",
        options: ["Paul పౌలు", "David దావీదు", "Moses మోషే", "Solomon  సొలొమోను"],
        answer: "Moses మోషే",
        clue: "Clue: I’m where you clean your hands with care, Water and soap are always there. నేను మీరు జాగ్రత్తగా చేతులను శుభ్రం చేసుకునే స్థలం, నీరు మరియు సబ్బు ఎల్లప్పుడూ అక్కడ ఉంటాయి"
    },
    

];

let currentQuestionIndex = 0;
let wrongAttempts = 0;

// Load a question and display options
function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    let optionsHtml = "";
    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsHtml += `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="option" id="option${index}" value="${option}">
                <label class="form-check-label" for="option${index}">
                    ${option}
                </label>
            </div>
        `;
    });
    document.getElementById("options").innerHTML = optionsHtml;
    document.getElementById("clue").innerText = ""; // Clear previous clue
    document.getElementById("submitBtn").classList.remove("d-none"); // Show submit button
}

// Check if the selected answer is correct
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;

        if (userAnswer === correctAnswer) {
            // Show the clue and end the quiz
            document.getElementById("clue").innerText = questions[currentQuestionIndex].clue; // Show clue
            document.getElementById("submitBtn").classList.add("d-none"); // Hide submit button after correct answer
        } else {
            // Keep asking until the answer is correct (without clue)
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load next question if there are more
            } else {
                disqualifyUser(); // Disqualify after 5 wrong attempts
            }
        }
    } else {
        alert("Please select an answer!");
    }
}

// Show the disqualified message
function disqualifyUser() {
    document.getElementById("quiz-box").classList.add("d-none");
    document.getElementById("disqualified").classList.remove("d-none");
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    wrongAttempts = 0;
    document.getElementById("disqualified").classList.add("d-none");
    document.getElementById("quiz-box").classList.remove("d-none");
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;

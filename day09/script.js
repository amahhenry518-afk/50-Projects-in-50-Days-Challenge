
const quizData = [
    {
        question: "Which programming language is known as the 'scripting language for the Web'?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 1
    },
    {
        question: "Which HTML element is used to link an external JavaScript file?",
        options: ["<script>", "<javascript>", "<js>", "<link>"],
        correct: 0
    },
    {
        question: "Which CSS property is utilized to modify background color rendering?",
        options: ["color", "bgcolor", "background-color", "canvas-color"],
        correct: 2
    },
    {
        question: "What is the correct syntax for declaring a constant variable block in modern ES6 JS?",
        options: ["constant myVar = 10;", "let myVar = 10;", "var myVar = 10;", "const myVar = 10;"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let userScore = 0;


const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const questionCounter = document.getElementById("question-counter");
const scoreCounter = document.getElementById("score-counter");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const finalScoreText = document.getElementById("final-score-text");
const progressBar = document.getElementById("progress-bar");


document.addEventListener("DOMContentLoaded", initQuizApp);

function initQuizApp() {
    currentQuestionIndex = 0;
    userScore = 0;
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");
    loadQuestion();
}

function loadQuestion() {
    resetQuestionState();
    const currentQuizItem = quizData[currentQuestionIndex];
    
    questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    scoreCounter.innerText = `Score: ${userScore}`;
    
    const progressPercentage = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    
    questionText.innerText = currentQuizItem.question;


    currentQuizItem.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.innerText = option;
        optionButton.classList.add("option-btn");
        optionButton.addEventListener("click", () => handleOptionSelection(index, optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

function resetQuestionState() {
    nextBtn.classList.add("hide");
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function handleOptionSelection(selectedIndex, clickedButton) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    const allOptionButtons = optionsContainer.querySelectorAll(".option-btn");


    if (selectedIndex === correctIndex) {
        clickedButton.classList.add("correct");
        userScore++;
        scoreCounter.innerText = `Score: ${userScore}`;
    } else {
        clickedButton.classList.add("wrong");
    
        allOptionButtons[correctIndex].classList.add("correct");
    }


    allOptionButtons.forEach(btn => btn.disabled = true);

    nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        displayFinalResults();
    }
});

function displayFinalResults() {
    progressBar.style.width = "100%";
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    finalScoreText.innerText = `You scored ${userScore} out of ${quizData.length}!`;
}
restartBtn.addEventListener("click", initQuizApp);

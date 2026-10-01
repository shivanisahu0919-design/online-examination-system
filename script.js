// ==========================================
// ONLINE EXAMINATION SYSTEM
// COMPLETE JAVASCRIPT
// ==========================================


// ==========================================
// START EXAM
// ==========================================

function startExam() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let subject = document.getElementById("subject").value;

    if (name === "" || roll === "" || subject === "") {
        alert("Please fill all details.");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("rollNumber", roll);
    localStorage.setItem("subject", subject);

    window.location.href = "instructions.html";
}


// ==========================================
// QUESTIONS
// ==========================================

let subjectQuestions = {

    JavaScript: [

        {
            question: "Which language is used to make a webpage interactive?",
            options: ["JavaScript", "HTML", "CSS", "SQL"],
            answer: "JavaScript"
        },

        {
            question: "Which data type is used to store true or false values?",
            options: ["Boolean", "String", "Number", "Array"],
            answer: "Boolean"
        },

        {
            question: "Which keyword is used to declare a variable?",
            options: ["let", "print", "display", "show"],
            answer: "let"
        },

        {
            question: "Which symbol is used for single line comments?",
            options: ["Double slash", "Hash", "Percent", "Star"],
            answer: "Double slash"
        },

        {
            question: "Which method is used to display a message?",
            options: ["alert", "message", "display", "show"],
            answer: "alert"
        },

        {
            question: "Which method converts a string into uppercase?",
            options: ["toUpperCase", "upper", "uppercase", "makeUpper"],
            answer: "toUpperCase"
        },

        {
            question: "Which loop is used when the number of iterations is known?",
            options: ["for loop", "while loop", "do while loop", "switch"],
            answer: "for loop"
        },

        {
            question: "Which object is used to work with HTML elements?",
            options: ["DOM", "CSS", "SQL", "JSON"],
            answer: "DOM"
        },

        {
            question: "Which keyword is used to define a constant?",
            options: ["const", "constant", "fixed", "static"],
            answer: "const"
        },

        {
            question: "Which method adds an element at the end of an array?",
            options: ["push", "pop", "shift", "slice"],
            answer: "push"
        }

    ],


    HTML: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Markup Language",
                "Home Text Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },

        {
            question: "Which language is used to create the structure of a webpage?",
            options: ["HTML", "CSS", "JavaScript", "SQL"],
            answer: "HTML"
        },

        {
            question: "Which tag is used to write a paragraph?",
            options: ["Paragraph tag", "Image tag", "Table tag", "Button tag"],
            answer: "Paragraph tag"
        },

        {
            question: "Which element is used to add an image to a webpage?",
            options: ["Image", "Video", "Audio", "Table"],
            answer: "Image"
        },

        {
            question: "Which element is used to create a hyperlink?",
            options: ["Link", "Image", "Paragraph", "Heading"],
            answer: "Link"
        },

        {
            question: "Which element is used to create a table?",
            options: ["Table", "Image", "Form", "Paragraph"],
            answer: "Table"
        },

        {
            question: "Which element is used to create a button?",
            options: ["Button", "Image", "Table", "Heading"],
            answer: "Button"
        },

        {
            question: "Which element is used to create a list?",
            options: ["List", "Image", "Video", "Button"],
            answer: "List"
        },

        {
            question: "Which part contains the visible content of a webpage?",
            options: ["Body", "Head", "Title", "Style"],
            answer: "Body"
        },

        {
            question: "Which language is mainly used for styling a webpage?",
            options: ["CSS", "HTML", "SQL", "JavaScript"],
            answer: "CSS"
        }

    ],


    CSS: [

        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Computer Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },

        {
            question: "Which language is used for styling a webpage?",
            options: ["CSS", "HTML", "JavaScript", "SQL"],
            answer: "CSS"
        },

        {
            question: "Which property is used to change text color?",
            options: ["color", "text-color", "font-color", "background"],
            answer: "color"
        },

        {
            question: "Which property is used to change background color?",
            options: ["background-color", "color", "bgcolor", "background-text"],
            answer: "background-color"
        },

        {
            question: "Which property is used to change font size?",
            options: ["font-size", "text-size", "size", "font-style"],
            answer: "font-size"
        },

        {
            question: "Which property is used to make text bold?",
            options: ["font-weight", "font-bold", "text-bold", "bold"],
            answer: "font-weight"
        },

        {
            question: "Which property is used to add space inside an element?",
            options: ["padding", "margin", "spacing", "border"],
            answer: "padding"
        },

        {
            question: "Which property is used to add space outside an element?",
            options: ["margin", "padding", "border", "space"],
            answer: "margin"
        },

        {
            question: "Which property is used to make rounded corners?",
            options: ["border-radius", "corner", "radius", "round-border"],
            answer: "border-radius"
        },

        {
            question: "Which symbol is used for a class selector?",
            options: ["Dot", "Hash", "Star", "At"],
            answer: "Dot"
        }

    ],


    DBMS: [

        {
            question: "What does DBMS stand for?",
            options: [
                "Database Management System",
                "Data Basic Management System",
                "Database Machine System",
                "Data Management Software"
            ],
            answer: "Database Management System"
        },

        {
            question: "Which language is used to communicate with a database?",
            options: ["SQL", "HTML", "CSS", "JavaScript"],
            answer: "SQL"
        },

        {
            question: "What is a collection of related data called?",
            options: ["Database", "Program", "File", "Folder"],
            answer: "Database"
        },

        {
            question: "Which key uniquely identifies a record?",
            options: ["Primary Key", "Foreign Key", "Normal Key", "Simple Key"],
            answer: "Primary Key"
        },

        {
            question: "Which command is used to retrieve data?",
            options: ["SELECT", "GET", "SHOWDATA", "FETCHDATA"],
            answer: "SELECT"
        },

        {
            question: "Which command is used to add new data?",
            options: ["INSERT", "ADD", "NEW", "CREATE DATA"],
            answer: "INSERT"
        },

        {
            question: "Which command is used to delete data?",
            options: ["DELETE", "REMOVE", "DROP DATA", "CLEAR"],
            answer: "DELETE"
        },

        {
            question: "Which command is used to modify existing data?",
            options: ["UPDATE", "CHANGE", "MODIFY DATA", "EDIT"],
            answer: "UPDATE"
        },

        {
            question: "What is a row in a database table called?",
            options: ["Record", "Column", "Field", "Attribute"],
            answer: "Record"
        },

        {
            question: "What is a column in a database table called?",
            options: ["Field", "Record", "Row", "Tuple"],
            answer: "Field"
        }

    ]

};


// ==========================================
// EXAM VARIABLES
// ==========================================

let currentQuestion = 0;
let answers = [];
let questions = [];
let timerSeconds = 600;
let timerInterval;


// ==========================================
// LOAD EXAM PAGE
// ==========================================

if (document.getElementById("questionBox")) {

    let subject = localStorage.getItem("subject");
    let name = localStorage.getItem("studentName");

    questions = subjectQuestions[subject];

    if (!questions) {
        questions = subjectQuestions["JavaScript"];
    }

    answers = new Array(questions.length).fill(null);

    document.getElementById("welcome").innerText =
        "Welcome, " + name + " 👋";

    document.getElementById("subjectName").innerText =
        "Subject: " + subject;

    showQuestion();
    showPalette();
    startTimer();
}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

    let q = questions[currentQuestion];

    document.getElementById("questionNumber").innerText =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    let html = "";

    html += "<h3>Question " + (currentQuestion + 1) + "</h3>";

    html += "<p>" + q.question + "</p>";

    for (let i = 0; i < q.options.length; i++) {

        let checked = "";

        if (answers[currentQuestion] === q.options[i]) {
            checked = "checked";
        }

        html += `
            <label>
                <input 
                    type="radio"
                    name="answer"
                    value="${q.options[i]}"
                    ${checked}
                    onchange="saveAnswer(this.value)"
                >
                ${q.options[i]}
            </label>
        `;
    }

    document.getElementById("questionBox").innerHTML = html;


    // Progress bar

    let progress =
        ((currentQuestion + 1) / questions.length) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";


    // Update palette

    showPalette();
}


// ==========================================
// SAVE ANSWER
// ==========================================

function saveAnswer(value) {

    answers[currentQuestion] = value;

    showPalette();
}


// ==========================================
// QUESTION PALETTE
// ==========================================

function showPalette() {

    let palette = document.getElementById("questionPalette");

    if (!palette) {
        return;
    }

    palette.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {

        let button = document.createElement("button");

        button.innerText = i + 1;

        button.classList.add("palette-btn");

        if (i === currentQuestion) {
            button.classList.add("current");
        }

        if (answers[i] !== null) {
            button.classList.add("attempted");
        }

        button.onclick = function () {
            goToQuestion(i);
        };

        palette.appendChild(button);
    }
}


// ==========================================
// GO TO QUESTION
// ==========================================

function goToQuestion(number) {

    currentQuestion = number;

    showQuestion();
}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        let confirmSubmit =
            confirm("You are on the last question. Do you want to submit the exam?");

        if (confirmSubmit) {
            calculateResult();
        }
    }
}


// ==========================================
// PREVIOUS QUESTION
// ==========================================

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    } else {

        alert("This is the first question.");
    }
}


// ==========================================
// TIMER
// ==========================================

function startTimer() {

    let timeElement = document.getElementById("time");

    if (!timeElement) {
        return;
    }

    timerInterval = setInterval(function () {

        let minutes =
            Math.floor(timerSeconds / 60);

        let seconds =
            timerSeconds % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timeElement.innerText =
            minutes + ":" + seconds;


        // Last 1 minute warning

        if (timerSeconds <= 60) {
            timeElement.style.color = "red";
        }


        // Time finished

        if (timerSeconds <= 0) {

            clearInterval(timerInterval);

            alert("Time is over! Your exam will be submitted.");

            calculateResult();

            return;
        }

        timerSeconds--;

    }, 1000);
}


// ==========================================
// CALCULATE RESULT
// ==========================================

function calculateResult() {

    clearInterval(timerInterval);

    let score = 0;
    let attempted = 0;

    for (let i = 0; i < questions.length; i++) {

        if (answers[i] !== null) {

            attempted++;

            if (answers[i] === questions[i].answer) {
                score++;
            }
        }
    }

    let wrong = attempted - score;

    let unattempted =
        questions.length - attempted;


    let percentage =
        (score / questions.length) * 100;


    // Save complete result data

    localStorage.setItem("score", score);

    localStorage.setItem(
        "totalQuestions",
        questions.length
    );

    localStorage.setItem(
        "attempted",
        attempted
    );

    localStorage.setItem(
        "wrong",
        wrong
    );

    localStorage.setItem(
        "unattempted",
        unattempted
    );

    localStorage.setItem(
        "percentage",
        percentage.toFixed(2)
    );

    localStorage.setItem(
        "userAnswers",
        JSON.stringify(answers)
    );

    localStorage.setItem(
        "examQuestions",
        JSON.stringify(questions)
    );


    window.location.href = "result.html";
}


// ==========================================
// RESULT PAGE
// ==========================================

if (document.getElementById("score")) {

    let name =
        localStorage.getItem("studentName");

    let roll =
        localStorage.getItem("rollNumber");

    let subject =
        localStorage.getItem("subject");

    let score =
        Number(localStorage.getItem("score"));

    let total =
        Number(localStorage.getItem("totalQuestions"));

    let attempted =
        Number(localStorage.getItem("attempted"));

    let wrong =
        Number(localStorage.getItem("wrong"));

    let unattempted =
        Number(localStorage.getItem("unattempted"));

    let percentage =
        Number(localStorage.getItem("percentage"));


    document.getElementById("studentName").innerText =
        "👤 " + name;

    document.getElementById("studentRoll").innerText =
        "Roll Number: " + roll;

    document.getElementById("resultSubject").innerText =
        "Subject: " + subject;

    document.getElementById("score").innerText =
        score + " / " + total;

    document.getElementById("percentage").innerText =
        percentage + "%";


    document.getElementById("correctCount").innerText =
        score;

    document.getElementById("wrongCount").innerText =
        wrong;

    document.getElementById("unattemptedCount").innerText =
        unattempted;

    document.getElementById("attemptedCount").innerText =
        attempted;


    // Result message

    let message = "";

    if (percentage >= 80) {
        message = "🌟 Excellent Performance!";
    }
    else if (percentage >= 60) {
        message = "👏 Very Good Performance!";
    }
    else if (percentage >= 40) {
        message = "👍 Good! Keep Practicing.";
    }
    else {
        message = "📚 Keep Learning and Try Again.";
    }

    document.getElementById("message").innerText =
        message;


    showDetailedAnalysis();
}


// ==========================================
// DETAILED QUESTION ANALYSIS
// ==========================================

function showDetailedAnalysis() {

    let analysisBox =
        document.getElementById("analysisBox");

    if (!analysisBox) {
        return;
    }


    let questionsData =
        JSON.parse(
            localStorage.getItem("examQuestions")
        );

    let userAnswers =
        JSON.parse(
            localStorage.getItem("userAnswers")
        );


    analysisBox.innerHTML = "";


    for (let i = 0; i < questionsData.length; i++) {

        let question = questionsData[i];

        let userAnswer = userAnswers[i];

        let correctAnswer = question.answer;


        let card =
            document.createElement("div");

        card.classList.add("analysis-card");


        let statusClass = "";
        let statusText = "";


        // Correct

        if (userAnswer === correctAnswer) {

            statusClass = "correct-card";
            statusText = "✅ Correct";

        }

        // Not attempted

        else if (userAnswer === null) {

            statusClass = "unattempted-card";
            statusText = "⚪ Not Attempted";

        }

        // Wrong

        else {

            statusClass = "wrong-card";
            statusText = "❌ Wrong";
        }


        card.classList.add(statusClass);


        let userAnswerText =
            userAnswer === null
                ? "Not Attempted"
                : userAnswer;


        card.innerHTML = `

            <div class="analysis-header">

                <h3>
                    Question ${i + 1}
                </h3>

                <span class="status-badge">
                    ${statusText}
                </span>

            </div>

            <p class="analysis-question">
                ${question.question}
            </p>

            <div class="answer-row your-answer">
                <strong>Your Answer:</strong>
                <span>${userAnswerText}</span>
            </div>

            <div class="answer-row correct-answer">
                <strong>Correct Answer:</strong>
                <span>${correctAnswer}</span>
            </div>

        `;


        analysisBox.appendChild(card);
    }
}


// ==========================================
// RETAKE EXAM
// ==========================================

function retakeExam() {

    localStorage.removeItem("score");
    localStorage.removeItem("totalQuestions");
    localStorage.removeItem("attempted");
    localStorage.removeItem("wrong");
    localStorage.removeItem("unattempted");
    localStorage.removeItem("percentage");
    localStorage.removeItem("userAnswers");
    localStorage.removeItem("examQuestions");

    window.location.href = "index.html";
}


// ==========================================
// GO HOME
// ==========================================

function goHome() {

    window.location.href = "index.html";
}
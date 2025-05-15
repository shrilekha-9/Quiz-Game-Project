const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Jane Austen", "Mark Twain"],
    answer: "Harper Lee"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific", "Arctic"],
    answer: "Pacific"
  },
  {
  question: "Which language runs in a web browser?",
  options: ["Java", "C", "Python", "JavaScript"],
  answer: "JavaScript"
 }

];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;
  const options = document.querySelectorAll(".option");
  options.forEach((btn, i) => {
    btn.className = "option";
    btn.disabled = false;
    btn.textContent = q.options[i];
    btn.onclick = () => checkAnswer(btn, q.options[i]);
  });
}

function checkAnswer(button, selected) {
  const correctAnswer = questions[currentQuestion].answer;
  const options = document.querySelectorAll(".option");

  options.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else if (btn.textContent === selected) {
      btn.classList.add("wrong");
    }
  });

  if (selected === correctAnswer) score++;

  setTimeout(() => {
    currentQuestion++;
    currentQuestion < questions.length ? loadQuestion() : showResult();
  }, 1000);
}

function showResult() {
  document.getElementById("quiz").innerHTML = `
    <h2>Your score: ${score}/${questions.length}</h2>
    <button onclick="location.reload()">Play Again</button>
  `;
}

window.onload = loadQuestion;

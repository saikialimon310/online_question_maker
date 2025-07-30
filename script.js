let questions = [];

function addQuestion() {
  const questionText = document.getElementById("questionText").value.trim();
  const optionA = document.getElementById("optionA").value.trim();
  const optionB = document.getElementById("optionB").value.trim();
  const optionC = document.getElementById("optionC").value.trim();
  const optionD = document.getElementById("optionD").value.trim();
  const correctOption = document.getElementById("correctOption").value.trim().toUpperCase();

  if (!questionText || !optionA || !optionB || !optionC || !optionD || !["A", "B", "C", "D"].includes(correctOption)) {
    alert("Please fill all fields correctly.");
    return;
  }

  const options = [optionA, optionB, optionC, optionD];
  const correctIndex = {"A": 0, "B": 1, "C": 2, "D": 3}[correctOption];

  questions.push({
    question: questionText,
    options: options,
    correct: correctIndex
  });

  document.getElementById("questionText").value = "";
  document.getElementById("optionA").value = "";
  document.getElementById("optionB").value = "";
  document.getElementById("optionC").value = "";
  document.getElementById("optionD").value = "";
  document.getElementById("correctOption").value = "";

  document.getElementById("status").innerText = "Question added!";
}

function saveQuiz() {
  const quizTitle = document.getElementById("quizTitle").value.trim();
  if (!quizTitle) {
    alert("Enter quiz title.");
    return;
  }
  if (questions.length === 0) {
    alert("Add at least one question.");
    return;
  }

  const quiz = {
    title: quizTitle,
    questions: questions
  };

  const existingQuizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
  existingQuizzes.push(quiz);
  localStorage.setItem("quizzes", JSON.stringify(existingQuizzes));

  questions = [];
  document.getElementById("quizTitle").value = "";
  document.getElementById("status").innerText = "Quiz saved!";
}




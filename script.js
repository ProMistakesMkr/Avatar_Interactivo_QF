// Import the Excel or CSV file into a JavaScript array.
var questions = require("fs").readFileSync("questions.csv", "utf-8");
questions = questions.split("\n");

// Loop through the array and extract the questions.
for (var i = 0; i < questions.length; i++) {
  questions[i] = questions[i].replace("pregunta 1", "¿Cuál es tu nombre?");
}

// Replace the text "pregunta 1" with the first question in the array.
var html = document.querySelector("#chat");
html.innerHTML = html.innerHTML.replace("pregunta 1", questions[0]);

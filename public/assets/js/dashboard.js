$(document).ready(function() {
console.log("hello");
  var $quizTable = $(".quiz-table");


  getQuiz();


  function initializeRows() {
    $quizTable.empty();
    var rowsToAdd = [];
    for (var i = 0; i < quiz.length; i++) {
      rowsToAdd.push(quiz[i]);
    }
    $quizTable.prepend(rowsToAdd);
  }

  function getQuiz() {
    $.get("/api", function(data) {
      quiz = data;
      initializeRows();
    });
  }   
  console.log(quiz);
});
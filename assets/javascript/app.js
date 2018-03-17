fuction submitAnswer() {
  var total = 8;
  var score = 0;
  
  //User Input
  var q1 = document.forms["quizForm"]["q1"].value;
  var q2 = document.forms["quizForm"]["q1"].value;
  var q3 = document.forms["quizForm"]["q1"].value;
  var q4 = document.forms["quizForm"]["q1"].value;
  var q5 = document.forms["quizForm"]["q1"].value;
  var q6 = document.forms["quizForm"]["q1"].value;
  var q7 = document.forms["quizForm"]["q1"].value;
  var q8 = document.forms["quizForm"]["q1"].value;

  //Validation
  if(q1 == null || q1 = ''){
    alert('You missed question 1');
    return false;
  }
  for (i = 1; i <= total; i++) {
    if(eval('q + i') === null ||eval('q + i') === '') {
      alert ('please answer all questions');
      return false;
    }
  }
}

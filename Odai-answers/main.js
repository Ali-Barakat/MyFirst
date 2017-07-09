function checkAnswers(){
  var answer1 = document.getElementById("q1").value,
      answer2 = document.getElementById("q2").value,
      answer3 = document.getElementById("q3").value;
      // answer3 = document.getElementById("q3").value;
  if (answer1 === "thank you" && answer2 === "good bye" && answer3 === "good"){
    alert("right answer");
  }else {
    alert("wrong answer")
  }
}

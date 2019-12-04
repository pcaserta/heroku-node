$(document).ready(function() {
  //sets input fields to values saved from last session using local storage
  var f1Q1 = localStorage.getItem("f1Q1");
  var f1Q2 = localStorage.getItem("f1Q2");
  var f1Q3 = localStorage.getItem("f1Q3");
  var f1Q4 = localStorage.getItem("f1Q4");
  var f1Q5 = localStorage.getItem("f1Q5");
  var f1Q6 = localStorage.getItem("f1Q6");
  var f1Q7 = localStorage.getItem("f1Q7");
  var f1Q8 = localStorage.getItem("f1Q8");
  var f1Q9 = localStorage.getItem("f1Q9");
  var f1Q10 = localStorage.getItem("f1Q10");
  var f1Q11 = localStorage.getItem("f1Q11");
  var f1Q12 = localStorage.getItem("f1Q12");

  $("#q1").val(f1Q1);
  $("#q2").val(f1Q2);
  $("#q3").val(f1Q3);
  $("#q4").val(f1Q4);
  $("#q5").val(f1Q5);
  $("#q6").val(f1Q6);
  $("#q7").val(f1Q7);
  $("#q8").val(f1Q8);
  $("#q9").val(f1Q9);
  $("#q10").val(f1Q10);
  $("#q11").val(f1Q11);
  $("#q12").val(f1Q12);

  //saving input values to localstorage
  $("#form1").on("click", function(event) {
    event.preventDefault();

    var q1 = $("#q1")
      .val()
      .trim();
    var q2 = $("#q2")
      .val()
      .trim();
    var q3 = $("#q3")
      .val()
      .trim();
    var q4 = $("#q4")
      .val()
      .trim();
    var q5 = $("#q5")
      .val()
      .trim();
    var q6 = $("#q6")
      .val()
      .trim();
    var q7 = $("#q7")
      .val()
      .trim();
    var q8 = $("#q8")
      .val()
      .trim();
    var q9 = $("#q9")
      .val()
      .trim();
    var q10 = $("#q10")
      .val()
      .trim();
    var q11 = $("#q11")
      .val()
      .trim();
    var q12 = $("#q12")
      .val()
      .trim();

    localStorage.setItem("f1Q1", q1);
    localStorage.setItem("f1Q2", q2);
    localStorage.setItem("f1Q3", q3);
    localStorage.setItem("f1Q4", q4);
    localStorage.setItem("f1Q5", q5);
    localStorage.setItem("f1Q6", q6);
    localStorage.setItem("f1Q7", q7);
    localStorage.setItem("f1Q8", q8);
    localStorage.setItem("f1Q9", q9);
    localStorage.setItem("f1Q10", q10);
    localStorage.setItem("f1Q11", q11);
    localStorage.setItem("f1Q12", q12);
  });
});

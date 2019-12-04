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
  var f1Q13 = localStorage.getItem("f1Q13");
  var f1Q14 = localStorage.getItem("f1Q14");
  var f1Q15 = localStorage.getItem("f1Q15");
  var f1Q16 = localStorage.getItem("f1Q16");
  var f1Q17 = localStorage.getItem("f1Q17");
  var f1Q18 = localStorage.getItem("f1Q18");
  var f1Q19 = localStorage.getItem("f1Q19");
  var f1Q20 = localStorage.getItem("f1Q20");
  var f1Q21 = localStorage.getItem("f1Q21");

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
  $("#q13").val(f1Q13);
  $("#q14").val(f1Q14);
  $("#q15").val(f1Q15);
  $("#q16").val(f1Q16);
  $("#q17").val(f1Q17);
  $("#q18").val(f1Q18);
  $("#q19").val(f1Q19);
  $("#q20").val(f1Q20);
  $("#q21").val(f1Q21);

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
    var q13 = $("#q13")
      .val()
      .trim();
    var q14 = $("#q14")
      .val()
      .trim();
    var q15 = $("#q15")
      .val()
      .trim();
    var q16 = $("#q16")
      .val()
      .trim();
    var q17 = $("#q17")
      .val()
      .trim();
    var q18 = $("#q18")
      .val()
      .trim();
    var q19 = $("#q19")
      .val()
      .trim();
    var q20 = $("#q20")
      .val()
      .trim();
    var q21 = $("#q21")
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
    localStorage.setItem("f1Q13", q13);
    localStorage.setItem("f1Q14", q14);
    localStorage.setItem("f1Q15", q15);
    localStorage.setItem("f1Q16", q16);
    localStorage.setItem("f1Q17", q17);
    localStorage.setItem("f1Q18", q18);
    localStorage.setItem("f1Q19", q19);
    localStorage.setItem("f1Q20", q20);
    localStorage.setItem("f1Q21", q21);
  });
});

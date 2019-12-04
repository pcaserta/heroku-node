$(document).ready(function() {
  var f1Q1 = localStorage.getItem("f1Q1");
  console.log(f1Q1);
  $("#q1").val(f1Q1);

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

    localStorage.setItem("f1Q1", q1);
    var f1Q1 = localStorage.getItem("f1Q1");
    console.log(f1Q1);
    $("#q1").val(f1Q1);
  });
});

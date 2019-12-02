$(document).ready(function() {
  let status = false;
  $("#submitLogin").on("click", function(event) {
    event.preventDefault();
    //api call return true or false
    status = true;

    let username = $("#userName")
      .val()
      .trim();
    localStorage.clear();
    localStorage.setItem("input", username);
    var localInput = localStorage.getItem("input");
    if (status && localInput) {
      window.location.href = "/afterLogin/index.html";
    } else if (!status) {
      alert("Try again invalid username/password");
    }
  });
});

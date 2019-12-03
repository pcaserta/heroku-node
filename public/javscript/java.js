$(document).ready(function() {
  let status = false;
  $("#submitLogin").on("click", function(event) {
    event.preventDefault();
    //api-call should be here, setting default value to true for no
    status = true;
    let username = $("#userName")
      .val()
      .trim();
    localStorage.clear();
    localStorage.setItem("input", username);
    var localInput = localStorage.getItem("input");

    //if logged in status is true and local input exists rederict to home page
    if (status && localInput) {
      window.location.href = "/afterLogin/index.html";
    } else {
      alert("Try again invalid username/password");
    }
  });
});

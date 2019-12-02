$(document).ready(function() {
  let status = false;
  $("#submitLogin").on("click", function(event) {
    event.preventDefault();
    //api call return true or false
    status = true;
    if (status) {
      let username = $("#userName")
        .val()
        .trim();
      localStorage.clear();
      localStorage.setItem("input", username);
      window.location.href = "/afterLogin/index.html";
    } else if (!status) {
      alert("Try again invalid username/password");
    }
  });
});

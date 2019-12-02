$(document).ready(function() {
  //sets username to navbar
  var localInput = localStorage.getItem("input");
  console.log(localInput);
  var name = $("<p>").text(`User ${localInput} logged in`);
  name.addClass("p-0 m-1");
  $("#NavLinks").append(name);

  //logs out user
  $("#logOut").on("click", function(event) {
    localStorage.clear();
    window.location.href = "/landing/index.html";
  });
});

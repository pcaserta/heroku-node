var path = require("path");

module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landing/index.html"));
  });

  app.get("/afterlogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/afterLogin/index.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/form/index.html"));
  });
};

var fs = require("fs");
var https = require("https");

fs.writeFile(
  __dirname + "/index.html",
  "<h1> HTML SUCKS!!</h1>",
  function (error) {
    if (error) {
      return console.log(error);
    } else {
      return console.log("Sup");
    }
  }
);

var people =
  "https://images.unsplash.com/photo-1609759032099-22f533a91b15?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80";

https.get(people, function (response) {
  response.pipe(fs.createWriteStream(__dirname + "/mydog2.jpg"));
});

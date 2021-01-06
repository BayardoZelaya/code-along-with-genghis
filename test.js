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

var puppy =
  "https://images.unsplash.com/photo-1548658146-f142deadf8f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTF8fHB1cHB5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60%27";

https.get(puppy, function (response) {
  response.pipe(fs.createWriteStream(__dirname + "/mydog.jpg"));
});

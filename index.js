const http = require("http");
const url = require("url"); // create a server object
const fs = require("fs");

http
  .createServer(function(req, res) {
    let pathname = url.parse(req.url, true).pathname;
    if (pathname === "/") {
      fs.readFile("index.html", function(err, data) {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (pathname === "/about") {
      fs.readFile("about.html", function(err, data) {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (pathname === "/contact-me") {
      fs.readFile("contact-me.html", function(err, data) {
        if (err) {
          throw err;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("error-404.html", function(err, data) {
        if (err) {
          throw err;
        }
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
    // res.write(req.url); //write a response to the client, containing the URL
    // return res.end(); //end the response
  })
  .listen(8080);
//this is the port it listens to

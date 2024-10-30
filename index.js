const http = require("http");
const fs = require("fs"); //fileSystem

const PORT_NUMBER = 3200;

const server = http.createServer((req, res) => {
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>HI header</h1>");
  res.write("<div> Hello World </div>");
  res.write("</body>");
  res.write("</html>");
  res.end();
}); //createServer creates a server

server.listen(PORT_NUMBER); //listens to incoming requests cotinually

const http = require("http");
const fs = require("fs"); //fileSystem

const PORT_NUMBER = 3200;

const server = http.createServer((req, res) => {
  const url = req.url;
  const requestMethod = req.method;

  if (url === "/") {
    console.log("Branch issue-1184-2")
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write(
      '<form action="/message"  method="POST"><input name="message" type="text"/></form>'
    );
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && requestMethod === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.write("<html>");
  res.write("<body>");
  res.write("<h1>HI header</h1>");
  res.write("<div> Hello World </div>");
  res.write("</body>");
  res.write("</html>");
  res.end();
}); //createServer creates a server

server.listen(PORT_NUMBER); //listens to incoming requests cotinually

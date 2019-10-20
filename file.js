const { readdir } = require("fs");
const { resolve } = require("path");
const { createServer } = require("http");

const PORT = process.env["PORT"] || 3000;

module.exports.printFolder = function printFolder() {
  const server = createServer((req, res) => {
    readdir(resolve(__dirname, "./folder"), (err, files) => {
      if (err) {
        res.statusCode = 500;
        res.write(err.message);
        res.end();
        return;
      }
      const fileList = files.reduce((prev, file) => {
        prev += `\t<li>${file}</li>\n`;
        return prev;
      }, "");
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write(`<ul>\t\n${fileList}</ul>`);
      res.end();
    });
  });

  server.listen(PORT, () => {
    console.log("server running at port %d", PORT);
  });
};

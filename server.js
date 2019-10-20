const { createServer } = require("http");

const PORT = process.env["PORT"] || 3000;

module.exports.serveHai = function serveHai() {
  const server = createServer((req, res) => {
    res.write("hai, " + req.url);
    res.end();
  });
  
  server.listen(PORT, () => {
    console.log('server running at port %d', PORT)
  });
}

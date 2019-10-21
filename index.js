const { serveHai } = require("./server");
const { printHai } = require("./print");

const arg = process.argv[2];
switch (arg) {
  case "print":
    printHai();
    break;
  case "server":
    serveHai();
    break;
  default:
    console.log("node . server | print");
}

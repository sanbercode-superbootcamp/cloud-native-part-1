const { serveHai } = require("./server");
const { printHai } = require("./print");
const { printFolder } = require("./file");

const arg = process.argv[2];
switch (arg) {
  case "print":
    printHai();
    break;
  case "server":
    serveHai();
    break;
  case "file":
    printFolder();
    break;
  default:
    console.log("node . server | print");
}

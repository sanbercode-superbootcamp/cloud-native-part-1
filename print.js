const process = require("process");

module.exports.printHai = function printHai() {
  const hello = process.argv[2] || "Jhon";
  console.log("Hai %s", hello);
}

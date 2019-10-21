const process = require("process");

module.exports.printHai = function printHai() {
  const hello = process.argv[3] || "Jhon";
  console.log("Hai %s", hello);
}

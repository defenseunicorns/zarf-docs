const fs = require("fs");

function svgToString(filePath) {
  return fs.readFileSync(filePath).toString("utf-8");
}

module.exports = svgToString;

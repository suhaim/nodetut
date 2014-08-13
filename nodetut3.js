var fs = require('fs');
var read = fs.readFileSync(process.argv[2]);
var lines = read.toString().split("\n").length;
console.dir(lines - 1);

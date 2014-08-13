var fs = require('fs');
var read = fs.readFileSync(process.argv[2]);
var lines = read.toString().split("\n").length;
console.dir(lines - 1);

//official solution
//    var fs = require('fs')
//
//    var contents = fs.readFileSync(process.argv[2])
//    var lines = contents.toString().split('\n').length - 1
//    console.log(lines)

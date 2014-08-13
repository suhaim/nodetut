var value = 0

for (var i = 0; i < process.argv.length; i++) {
    a = parseInt(process.argv[i]);
    if(isNaN(a) != true ) {
    value += a;
  }
}

console.dir(value);

//---------------------------------------------------
// official solution
  // var result = 0

  //  for (var i = 2; i < process.argv.length; i++)
  //    result += Number(process.argv[i])

  //  console.log(result)

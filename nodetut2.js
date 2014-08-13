var value = 0

for (var i = 0; i < process.argv.length; i++) {
    a = parseInt(process.argv[i]);
    if(isNaN(a) != true ) {
    value += a;
  }
}

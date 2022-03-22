var symC = ""
for (let i = 0; i < 5; i++) {
    for (let j = 1; j<=5; j++) {
        symC += `#`
    }
  if (i<5) {
      symC += "\n"
  }
}
console.log(symC)
// i = 0 
// # # # # #

var diag = ""
for (let i = 1; i <= 5; i++) 
  {  for (let j = 1; j<=5; j++) {
        if ( i  == j ){
            diag = diag + i;
        } else {
            diag = diag + 0 ;
        }
    }
  if (i<5) {
      diag += "\n"
  }
}
console.log(diag)


var segi = ""
for (let i = 0; i <= 5; i++) {
    for (let j = 1; j<=5; j++) {
        if ( j <=i ) {
            var segi = segi + "* "
        }
    }
  if (i<5) {
      segi += "\n"
  }
}
console.log(segi)

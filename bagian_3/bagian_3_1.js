function checkMOQ(tonase) {
  // Minimum order quantity
  var moq = 21;
  var maxMoq = 24;

  if (tonase >= moq && tonase <= maxMoq) {
    // Tonase sesuai dengan MOQ
    console.log(`Tonase Input: ${tonase}`);
    console.log(`Tonase sesuai order ${moq} - ${maxMoq}`);
  } else {
    // Tonase kurang dari MOQ || lebih dari MOQ
    console.log(`Tonase Input: ${tonase}`);
    console.log(
      `Tonase tidak sesuai order harus order dengan range ${moq} - ${maxMoq}`
    );
  }
}

// Contoh penggunaan
var tonase1 = 22;
checkMOQ(tonase1);

var tonase2 = 19;
checkMOQ(tonase2);

var tonase3 = 25;
checkMOQ(tonase3);

// Menentukan tinggi segitiga
const height = 5;

// Perulangan untuk setiap baris
console.log("\nSegitiga biasa");
for (let row = 0; row < height; row++) {
  // String untuk menyimpan * pada setiap baris
  let rowString = "";

  // Perulangan untuk setiap kolom
  for (let col = 0; col <= row; col++) {
    // Menambahkan * ke rowString
    rowString += "* ";
  }

  // Menampilkan rowString
  console.log(rowString);
}

// Perulangan untuk setiap baris
console.log("\nSegitiga Tengah");
for (let row = 0; row < height; row++) {
  // String untuk menyimpan * pada setiap baris
  let rowString = "";

  // Perulangan untuk setiap kolom
  for (let col = 0; col < height * 2 - 1; col++) {
    // Menambahkan spasi ke rowString jika kolom bukan bagian dari segitiga
    if (col < height - row - 1 || col > height + row - 1) {
      rowString += " ";
    } else {
      // Menambahkan * ke rowString jika kolom merupakan bagian dari segitiga
      rowString += "*";
    }
  }

  // Menampilkan rowString
  console.log(rowString);
}

// Menampilkan segitiga kebalik
console.log("\nSegitiga Kebalik");
for (let row = 0; row < height; row++) {
  let rowString = "";
  for (let col = 0; col < height * 2 - 1; col++) {
    if (col < row || col > height * 2 - 2 - row) {
      rowString += " ";
    } else {
      rowString += "*";
    }
  }
  console.log(rowString);
}

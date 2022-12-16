// input rows dan columns dari user
const rows = "5";
const columns = "5";

// Membuat tabel perkalian
let table = "";

// Perulangan untuk setiap baris
for (let row = 1; row <= rows; row++) {
  // Perulangan untuk setiap kolom
  for (let col = 1; col <= columns; col++) {
    table += `${row * col}\t`;
  }

  table += "\n";
}

// Menampilkan tabel perkalian
console.log(table);

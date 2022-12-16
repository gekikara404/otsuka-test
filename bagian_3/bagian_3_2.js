// Data produk
var product = {
  name: "Pocari sweat",
  quantityPerCarton: 24,
  price: 5000,
};

// Fungsi untuk menghitung harga total dan jumlah karton
function calculateTotal(quantity) {
  var totalPrice = quantity * product.price;
  var totalCarton = Math.floor(quantity / product.quantityPerCarton);
  var remainder = quantity % product.quantityPerCarton;

  var result = {
    totalPrice: totalPrice,
    totalCarton: totalCarton,
  };

  if (remainder > 0) {
    result.remainder = remainder;
  }

  return result;
}

// Contoh penggunaan
var quantity = 24; // masukan jumlah 24 atau 23 atau 48
var result = calculateTotal(quantity);

console.log(`Product yang dipilih: ${product.name}`);
console.log(`Jumlah beli: ${quantity}`);
if (result.remainder) {
  console.log(
    `Satuan karton: Tidak bulat dalam karton, direkomendasikan menambahkan ${
      product.quantityPerCarton - result.remainder
    }`
  );
} else {
  console.log(`Satuan karton: ${result.totalCarton}`);
}
console.log(`Total harga: ${result.totalPrice}`);

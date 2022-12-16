// input panjang deretan
const length = "15";

// Memvalidasi input
if (length <= 0) {
  console.log("Panjang deretan harus lebih dari 0!");
} else {
  // Menampung deretan fibonacci
  let fibonacci = [0, 1];

  // Menambahkan elemen ke deretan
  for (let i = 2; i < length; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  // Menampilkan deretan fibonacci
  console.log(fibonacci);
}

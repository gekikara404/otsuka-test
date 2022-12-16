function countCurrency(amount) {
  // Nilai mata uang dalam pecahan 100000, 50000, 20000, 10000, 5000, 2000, 1000
  var currency = [100000, 50000, 20000, 10000, 5000, 2000, 1000];
  var result = [];
  for (var i = 0; i < currency.length; i++) {
    var value = Math.floor(amount / currency[i]);
    result.push(value);
    amount -= value * currency[i];
  }
  return result;
}

// Contoh penggunaan input user
var amount = 273000;
var result = countCurrency(amount);

console.log(`100000 : ${result[0]}`);
console.log(`50000 : ${result[1]}`);
console.log(`20000 : ${result[2]}`);
console.log(`10000 : ${result[3]}`);
console.log(`5000 : ${result[4]}`);
console.log(`2000 : ${result[5]}`);
console.log(`1000 : ${result[6]}`);

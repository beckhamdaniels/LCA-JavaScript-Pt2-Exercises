let x = 30;
let y = 10;
let z = 5;


function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(x, y, z));

let convertToSeconds = function (minutes) {
  return minutes * 60;
};

console.log(convertToSeconds(60) + " seconds");

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
console.log(fahrenheitToCelsius(70) + " degrees Celsius");

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello World!"));

function CountVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(CountVowels("Does this work?"));

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(20));
console.log(isPrime(49));

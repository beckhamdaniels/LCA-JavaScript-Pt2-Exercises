function sum(a) {
  if (typeof a !== 'number') {
    return alert('Please proved a valid number');
  }

  let total = 0;
  for (let i = 1; i <= a; i++) {
    total += i;
  }

  return total;
}

console.log(sum(5));

function factorial(n) {
 
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

function funkyMath(a, b, c, d){
 if  (typeof a === 'number' && typeof b === 'number' && typeof c === 'number' && typeof d === 'number') {
  return Math.round((a+b)/(c+d))
 }
 else  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
  return (a+b+c)
 }
 else if (typeof a === 'number' && typeof b === 'number') {
  return (a-b)
}
}
console.log(funkyMath(10,20,30,40));

let numArray = [1, 2, 33, 45, 6, 44];
let oddNum = [];
let evenNum = [];

for (let i=0;  i< numArray.length; i++) {
  if (numArray[i] % 2 !== 0){
   oddNum.push(numArray[i])
  }
  else{
    evenNum.push(numArray[i])
  }
  }

console.log("Odd numbers: " + oddNum);
console.log("Even numbers: " + evenNum);

let me = {
  firstName: 'Beckham',
  lastName: 'Daaniels',
  age : 23,
  favouriteColor : 'Blue',
  favouriteCar : 'BMW'
}

me.favouriteFood = 'Pizza';

console.log(me);

delete me.age;
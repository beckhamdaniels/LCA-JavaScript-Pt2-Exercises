var globalCount = 50;

console.log(globalCount);

let count = function() {
  let localCount = 30;
  console.log(localCount)
}

count();

let modify = function(){
    globalCount = 100;
  let localCount = 200;

  console.log(`The edited Global Variable is now: ${globalCount} and the edited local variable is now: ${localCount}`);
  
}

modify();

function Student(first,last,age,studentId){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.studentId = studentId;
}

let student1 = new Student("Beckham", "Daaniels", 23, "12345");
let student2 = new Student("John", "Smith", 30, "67890");
let student3 = new Student("Tatum", "Daniels", 18, "54321");
let student4 = new Student("Emily", "Johnson", 25, "98765");
let student5 = new Student("Paxton", "Daniels", 20, "86495")
let student6 = new Student("Faghri", "Abrahams", 21, "23648")
let student7 = new Student("Zaheer", "Solomon", 25, "76490");

let University = {
 UniName : "UCT",
 Field : "Software Development",
 building : {
  buildingName : "Upper Campus",
  Floor : "5th Floor",
  roomNum : "205"
 }
}

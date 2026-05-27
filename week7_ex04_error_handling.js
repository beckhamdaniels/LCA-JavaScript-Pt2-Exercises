try {
 let  x = prompt("Please enter a number from 1-100")
  if (isNaN(x) || x < 1 || x > 100){
    throw new Error("Invalid input. Please enter a number between 1 and 100.");
  }
} catch (error) {
  console.error("An error occurred:", error.message);
}

function ageCheck(age) {
  let ageNum = prompt("Please enter your age before you proceed to Ticket sale page ");
  return ageNum;
}


try {
  var age = ageCheck();
  if (age === "" || age === null) {
    throw new Error("Empty Input");
  }
  else if (age <0){
    throw new Error("Negative Age");
  }
  else if (age < 18 ) {
    throw new Error("Too Young")
  }
  else {
    console.log("You may proceed to the ticket sale");
  }
} catch(error) {
  if (error.message === "Empty Input") {
  console.log("Please input your age:" +" "+ error.message);
}
else if (error.message === "Negative Age") {
  console.log(error.message + "." +" 212" + "Time Travel isnt real!!");
}
else {
  console.log(error.message +'. '+ "Go back to the Kids Zone!!");
} 
}

let userName ="liYemA";
let phoneNum = "0123456789";
let badText = " This is the badword check.";

function clnText (str){
  let cleanedStr = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return cleanedStr;
}

console.log(clnText(userName));

function validatePhoneNum(str) {
  if (str.length === 10 && str.startsWith("0"))
    return str;
  else 
    return "Invalid phone number. Please enter a 10-digit number starting with 0.";
}

console.log(validatePhoneNum(phoneNum));

function badWordCheck(str) {
  if (str.toLowerCase().includes("badword")) {
    return str.replaceAll("badword", "****");
  }
  else{
    return str;
  }
}

console.log(badWordCheck(badText));

function calculateAverage(arr) {
  let totalSum = 0;

  for (let num of arr) {
    totalSum += num;
  }

  let average = totalSum / arr.length;
  return average;
}

let studentMarks = [80, 80, 60, 95, 90];
let marksAverage = calculateAverage(studentMarks);
console.log("The student's average mark is: " + marksAverage);
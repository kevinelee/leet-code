﻿//Copyright 2017, LearningFuze LLC, all rights reserved.
//Distribution or sharing of this test is prohibited without prior written approval from LearningFuze.


console.log('this', this);

// Technical Knowledge Assessment - Interview (part 2)

// //INSTRUCTIONS: Like a real-world environment, you are free to reference resources or search Google for help, but you may not ask others for help or post questions online to ask for solutions since this test is gauging your personal abilities, not that of other people.  If there is anything you don't know try to write as much as you can - even if it doesn't work you can still get partial credit if it seems like you were on the right track.

// Please make sure to submit the assessment with all of your code written below Question #9 in the Final Code Section. The code should be able to be copied and pasted into a program and then run without any changes being made to its format or syntax.

//1. Create a new variable called "counter" and give it a value of 10

// let counter = 10;

// //2. Create a new variable called "numbers" which is an array with nothing in it

// const numbers = [];

// //3. Write a for loop that runs 10 times and each time it runs add 73 to the counter variable and adds the current value of counter to the numbers array

// for (let i = 0; i < 10; i++) {
//   counter = counter + 73;
//   console.log(numbers);
// }

// //4. Cause the "numbers" array to be logged to the console


// //5. If the value of the "counter" variable is greater than 740 log "too big" to the console; otherwise log "not too big"

// if(counter > 740){
//   console.log("too big");
// } else {
//   console.log("not too big")
// }

// //6. Create a new variable called "stats" which is an empty object

// let stats = {};

// //7a. Create a function called "getStats" which does the following

// function getStats(statsObj, numbersArr){
//   statsObj.largestNum = Math.max(numbersArr);
  
// }

//7b. takes in two parameters called "statsObj" (which is an object) and "numbersArr" (which is an array)
//7c. loops through the "numbersArr" array, finds the largest number, and sets it as a property called "largestNum" on "statsObj"
//7d. loops through the "numbersArr" array in a while loop and adds all the numbers together into a variable called "arrTotal"
//7e. divide "arrTotal" by the number of elements in "numbersArr" (this number should be obtained using JavaScript, not hard-coded) and store this in a property called "averageNum" on "statsObj"
//7f. return "statsObj"

//8. Call the "getStats" function and pass in the "stats" object and the "numbers" array and store the returned value into a new variable called "testStats"

//9. Log the values of the "largestNum" and "averageNum" properties of the returned object to the console in the format "The largest number was ## and the average of all the numbers was ##"

// Code Section (Write all code below this point)

var counter = 10;

var numbers = [];

for (var i = 0; i < 10; i++) {
  counter = counter + 73;
  numbers.push(counter);
  if (counter > 740) {
    console.log("too big");
  } else {
    console.log("not too big");
  }
}

var stats = {};

function getStats(statsObj, numbersArr) {
  var largestNum = 0;
  for (var i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] > largestNum) {
      largestNum = numbersArr[i];
    }
  }
  statsObj.largestNum = largestNum;
  var j = 0;
  var arrTotal = 0;
  while (j < numbersArr.length) {
    arrTotal = numbersArr[j] + arrTotal;
    j++;
  }

  var averageNum = arrTotal / numbersArr.length;
  statsObj.averageNum = averageNum;

  return statsObj;
}

var testStats = getStats(stats, numbers);

console.log(
  "The largest number was" +
    " " +
    testStats.largestNum +
    " " +
    "and the average of all the numbers was" +
    " " +
    testStats.averageNum
);

console.log('kevin testStats.largestNum', testStats.largestNum);


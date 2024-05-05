let div = document.querySelector('.div');
// Question No 1 :

// 1. Write a program that takes a positive integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 


// Solution :

// let div = document.querySelector('.div');

// let InputNumber = prompt('Enter any Positive number');
// div.innerHTML = `
// <h1>Input Number = ${InputNumber}</h1>
// <h1>Round Value = ${Math.round(InputNumber)}</h1>
// <h2>Floor Value = ${Math.floor(InputNumber)}</h2>
// <h3>Ceil Vlaue = ${Math.ceil(InputNumber)}</h3>
// `

// Question No 2 :

// 2. Write a program that takes a negative integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :


// let div = document.querySelector('.div');

// let InputNumber = prompt('Enter any Positive number');
// div.innerHTML = `
// <h1>Input Number = ${InputNumber}</h1>
// <h1>Round Value = ${Math.round(InputNumber)}</h1>
// <h2>Floor Value = ${Math.floor(InputNumber)}</h2>
// <h3>Ceil Vlaue = ${Math.ceil(InputNumber)}</h3>
// `


// Question No 3 :


// 3. Write a program that takes a positive floating point number 
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :


// let div = document.querySelector('.div');

// let InputNumber = prompt('Enter any Positive Floating number');
// div.innerHTML = `
// <h1>Input Number = ${InputNumber}</h1>
// <h1>Round Value = ${Math.round(InputNumber)}</h1>
// <h2>Floor Value = ${Math.floor(InputNumber)}</h2>
// <h3>Ceil Vlaue = ${Math.ceil(InputNumber)}</h3>
// `



        //     NOTE :: FLOOR COUNT PRECEEDING VALUE && CEIL COUNT EXCEEDING VALUE IN POSITIVE INTEGER
        //                         WHILE
        //  FLOOR COUNT EXCEEDING VALUE && CEIL COUNT PRECEEDING  VALUE IN NEGATIVE  INTEGER 



// Question No 4 :


// 4. Write a program that takes a negative floating point number 
// from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Solution :



// let InputNumber = prompt('Enter any Negative Floating number');
// div.innerHTML = `
// <h1>Input Number = ${InputNumber}</h1>
// <h1>Round Value = ${Math.round(InputNumber)}</h1>
// <h2>Floor Value = ${Math.floor(InputNumber)}</h2>
// <h3>Ceil Vlaue = ${Math.ceil(InputNumber)}</h3>
// `



// Question No 5 :

// 5. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// Solution :


// let InputNumber = prompt('Enter any Negative number');

// div.innerHTML = `
// <h1>Number is  ${InputNumber}</h1>
// <h1> Absolut value
// ${Math.abs(InputNumber)}</h1>
// `

// Question No 6 :

// 6. Write a program that simulates a dice using random() method 
// of JS Math class. Display the value of dice in your browser.

// Solution :


// function diceVal(){
//         div.innerHTML = `<h1>Random dice Vlaue is ${Math.ceil(Math.random()*6)}</h1>`
// }

// Question No 7 :

// 7. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser

// Solution :

// let coinVal = ''
// function coinValFunc(){

//          coinVal = Math.ceil(Math.random()*2);
//         console.log(coinVal);
//         if(coinVal===1){
        
//                 div.innerHTML =`<h1>The value is${coinVal}</h1>
//                 <h1>The result is Heads</h1>`
                
//         }else if(coinVal === 2){
//                 div.innerHTML =`<h1>The value is${coinVal}</h1>
//                 <h1>The result is Tails</h1>`
                
//         } 
        

// }        

// Question No 8 :

// 8. Write a program that shows a random number between 1 and 
// 100 in your browser.

// Solution :

// let randomVal = Math.ceil(Math.random()*99);

// div.innerHTML =` <h1>The Random value between 1 to 100 : ${randomVal}</h1>`

// Question No 9 :

// 9. Write a program that asks the user about his weight. Parse the 
// user input and display his weight in your browser. Possible user 
// inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Solution :

// let userWeight = prompt('Enter your weight in Kilogram');

// div.innerHTML =`<h1>The weight of user is ${userWeight} Kilograms</h1>`


// Question No 10 :


// 10. Write a program that stores a random secret number from 1 
// to 10 in a variable. Ask the user to input a number between 1 
// and 10. If the user input equals the secret number, congratulate 
// the user.


// Solution :

// let userInputVal = prompt('Enter any positive integer from 1 to 10');

// let randomNumber = Math.ceil(Math.random()*10);
// if(userInputVal===randomNumber){
//         div.innerHTML = `<h1>Congratulations your input number match with random number</h1>`
// }else{
//         div.innerHTML =`<h1>Number not match <br>plz reload this page<br> and try again.</h1>`
// }


// Question No 11 :

// 11. Write a program that displays current date and time in your browser.

// Solution :

// let currentDate = new Date();
// div.innerHTML = `<h1>${currentDate.toUTCString()}</h1>`

// Question No 12 :

// 12. Write a program that alerts the current month in words. For 
// example December

// Solution :

// let currentDate = new Date();


// const monthNames = [
//   "January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// console.log(monthNames[currentDate.getMonth()]);





// div.innerHTML=`<h1>Current Month :${monthNames[currentDate.getMonth()]}</h1>`


// Question No 13 :

// 13. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show Sun.

// Solution :

// let currentDate = new Date();
// let daysName =['Sunday','Monday','Wednesday','Thursday','Friday','Saturday'];

// div.innerHTML=`<h1>Today is ${daysName[currentDate.getDay()]}</h1>`

















































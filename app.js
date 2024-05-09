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


// Question No 14 :

// 14. Write a program that displays a message “It’s Fun day” if its 
// Saturday or Sunday today.

// Solution :
// let currentDate =new Date();

// let daysName =['Sunday','Monday','Wednesday','Thursday','Friday','Saturday'];

// if(currentDate.getDay()===0 || currentDate.getDay()===6){
        //         div.innerHTML =`It's a fun day`
        // }else{
                //         div.innerHTML =` Not a fun day`
                // }
                
// Question No 15 :

// 15. Write a program that shows the message “First fifteen days of the 
// month” if the date is less than 16th of the month else shows “Last 
// days of the month”.

// Solution :

// let currentDate = new Date();
// console.log(currentDate);
// let dayOfMonth =`${currentDate.getDate()}`
// if(dayOfMonth <=15 ){
        //         div.innerHTML=`<h1>First fifteen days of the month</h1>`;
        // }else{
                //         div.innerHTML=`<h1>Last fifteen days of the month</h1>`
                // }
                
                
 // Question No 16 :
 
 // 16. Write a program that determines the minutes since midnight, Jan. 
// 1, 1970 and assigns it to a that hasn't been declared 
// beforehand. Use any variable you to represent the Date object

                
// Solution :

// let currentDate =new Date();

// div.innerHTML = `<h1>Current Date :${currentDate.toUTCString()}<br> Elapsed milliseconds from January 1,1970 : ${currentDate.getTime()}<br> Elapsed minutes from January 1,1970 : ${currentDate.getTime()/ 1000 / 60}</h1>`


// Question No 17 :

// 17. Write a program that tests whether it's before noon and alert “Its 
// AM” else “its PM”.

// Solution :

// let currentDate = new Date();

// let time = currentDate.getHours();
// console.log(time);
// if(time <= 12){
//         div.innerHTML =`<h1>It's AM</h1>`
// }else{
//         div.innerHTML =`<h1>It's PM</h1>`
// }


// Question No 18 :

// 18. Write a program that creates a Date object for the last day of the 
// last month of 2020 and assigns it to variable named laterDate

// Solution :

// let currentDate =new Date('December 31,2020');

// console.log(currentDate);
// let laterDate =currentDate 
// console.log(laterDate);


// Question No 19 :

// 19. Create a date object of the starting date of this Ramadan and alert 
// the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// Solution :


// let eidDate =new Date('June 18, 2015');
// let currentDate =new Date();
// let passedDate = `${currentDate.getTime()-eidDate.getTime()}`
// passedDate = Math.floor(passedDate /1000/60/60/24)
// div.innerHTML =`${passedDate} days have passed since 1<sup>st</sup> Ramadan,2015`


// Question No 20 :

// 20. Write a program that displays in your browser the seconds that 
// elapsed between the reference date and the beginning of 2015.

// Solution :

// let days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
// let currentDate = new Date();
// let refDate = new Date('25,april,2015 22:15:00');


// let ellapsedTime = currentDate - refDate ; 

// console.log(ellapsedTime/1000);

// div.innerHTML = `
// <h3><br>
// on the refrence date ${days[refDate.getDay()]} ${refDate},<br><br>${Math.ceil(ellapsedTime/1000)} seconds had passed since beginning of 2015
// </h3>
// `
// Question No 22 :

// 22. Write a program that creates a date object and show the date 
// in an alert box that is reset to 100 years back?

// Solution :



// let days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];



// let currentDate = new Date();
// let setYear = new Date(currentDate)
// setYear.setFullYear(currentDate.getFullYear()-100)

// console.log(setYear);





// Question No 23 :

// 23. Write a program to ask the user about his age. Calculate and 
// show his birth year in your browser.

// Solution :
// let age = +prompt('Enter your age')

// let currentYear = new Date().getFullYear();

// let birthYear = currentYear - age;

// console.log(birthYear); 
// div.innerHTML = `Your age is ${age}<br><br>Your birth year is ${birthYear}`




















































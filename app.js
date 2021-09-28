/*
 * Name: Ella Moldez
 * Title: JavaScript Programming - Exercise 3: Dates
 * Program: ITPA 2021
 * Date: 09/27/2021
 */

let registration = new Date(2020, 0, 7, 8, 25);
console.log(registration);
console.log(`Year: ${registration.getFullYear()}`);
console.log(`Month: ${registration.getMonth()}`);
console.log(`Day of Week: ${registration.getDay()}`);
console.log(`Date: ${registration.getDate()}`);
console.log(`Hours: ${registration.getHours()}`);
console.log(`Minutes: ${registration.getMinutes()}`);
console.log(`Seconds: ${registration.getSeconds()}`);

let now = new Date();
console.log(now);
console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of Week: ${now.getDay()}`);
console.log(`Date: ${now.getDate()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);
console.log(`Milliseconds: ${now.getMilliseconds()}`);

now.setFullYear(1999); //reset year only
console.log(`${now.toDateString()} ${now.toTimeString()}`);

console.group('~~~~~~~~~~~~~~~~~~~~~~');
console.log('EXERCISE 3');
//Determining the date by 1 billion seconds

let birthDate = new Date(1984, 4, 14);
let seconds = 1000000000;
let daysSec = Math.floor(seconds/86400); //11574
let nextDate = birthDate.getDate() + daysSec; //11588
//birthDate.setDate(nextDate) -> 2016-01-21
let newDate = new Date(birthDate);
newDate.setDate(nextDate);
let age = newDate.getFullYear() - birthDate.getFullYear();

console.log(`Birthdate: ${birthDate.toDateString()}`);
console.log(`What is the date 1 billion seconds from my birthday and how old am I or will be that year.`);
console.log(newDate.toDateString());
console.log(`My age of year ${newDate.getFullYear()} is or will be ${age}.`);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~`);

//Determining the date by 1 billion milliseconds
let milliseconds = 1000000000;
let daysMilli = Math.floor(milliseconds/86400000);//11.574074 Days
let nextDateMilli = birthDate.getDate() + daysMilli; //May 25, 1984
let newDateMilli = new Date(birthDate);
newDateMilli.setDate(nextDateMilli);
let ageMilli = newDateMilli.getFullYear() - birthDate.getFullYear();

console.log(`Birthdate: ${birthDate.toDateString()}`);
console.log(`What is the date 1 billion milliseconds from my birthday and how old am I or will be that year.`);
console.log(newDateMilli.toDateString());
console.log(`My age of year ${newDateMilli.getFullYear()} is or will be ${ageMilli}.`);
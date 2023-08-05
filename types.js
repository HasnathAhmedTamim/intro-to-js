// Types
var price = 1010;
console.log(typeof price);

// 
var price2 = true;
console.log(typeof price2);

// 
var price3;
console.log(typeof price3);

// Dynamic Typing - Primitives Types - Non Primitives

var num1 = 0.12;
var num2 = 0.22;
var sum = num1 + num2;
// toFixed
sum = sum.toFixed(4);

// string return kore to fixed 
sum = parseFloat(sum);
console.log(sum);
// reminder
var m = 19;
var n= 7;
var rem = m % n;
console.log(rem);

// practice 2
var sub1 = 75.25;
var sub2 = 65;
var sub3 = 80.00;
var sub4 = 35.45;
var sub5 = 99.50;

var output = (sub1 + sub2 + sub3 + sub4+ sub5)/5;
output = output.toFixed(2);
console.log(output);

// 
console.log(17 % 5);
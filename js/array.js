var friendsAge = [12, 23 ,3 ,45 ,56 ,66, 1,100];
var picnicFee = [112, 231 ,32 ,453 ,563 ,266, 12,10];
var valorantAgent = ["omen","jett","brim","sage","breach"];
var vowels = ["a","e","i","o","u" ];

// .length
console.log(vowels.length);

// index-position
var element = friendsAge[2];
console.log(element);
// set element value
friendsAge[2] = 77;
friendsAge[6] = -40;
console.log(friendsAge);

// find index of element
var positionIndex = friendsAge.indexOf(-40);
console.log(positionIndex);

// PUSH _ POP
friendsAge.push(1000);
console.log(friendsAge);

var names = [ "a","b"];
names.push("Ahmed");
console.log(names);

friendsAge.pop();
console.log(friendsAge);
var storePopValue = friendsAge.pop();
console.log(storePopValue);
console.log(friendsAge);

// shift and unshift
friendsAge.unshift(1000,2000);
console.log(friendsAge);

friendsAge.shift();
console.log(friendsAge);

// Compare 
console.log(10<2);

// condition

var isGraduated = true;
var salary = 10000;
var car = 1;
if(isGraduated == false || salary >20000 ){
    console.log("okay");
}
else{
    console.log("not okay");
}

//  fruits.splice(idx , 1,"Mango")
var fruits = ['Apple', 'Banana', 'Orange'];
var idx =  fruits.indexOf("Banana");
if(idx!=-1)
{
    fruits.splice(idx,1,"Mango")
}
console.log(fruits);
// 
// Given three numbers
var num1 = 13;
var num2 = 79;
var num3 = 45;

// Assume num1 is the largest
var largest = num1;

// Compare num2 with the current largest
if (num2 > largest) {
  largest = num2;
}

// Compare num3 with the current largest
if (num3 > largest) {
  largest = num3;
}

// Print the largest number
console.log("The largest number is: " + largest);


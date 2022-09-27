// JS Freecodecamp
// Первое задание
// This is an in-line comment.
/* This is a
multi-line comment */

// Второе задание
var myName;

//Третье задание
var a;
a = 7;

//Четвертое задание
var a;
a = 7;
var b;
b = a;

//Пятое задание
var a = 9;

//Шестое задание
var myFirstName = "Dmitrii";
var myLastName = "Iakovenko"

//Седьмое задание
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

//Восьмое задание
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Девятое задание,
let catName = "Oliver";
let catSound = "Meow!";

//Десятое задание
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//Одиннадцатое задание
const sum = 10 + 10;

// Двенадцатое задание
const difference = 45 - 33;

// Тринадцатое задание
const product = 8 * 10;

// Четырнадцатое задание
const quotient = 66 / 33;

// Пятнадцатое задание
let myVar = 87;
myVar++;


// Шестнадцатое задание
let myVars = 11;
myVar--;

// Семнадцатое задание
const ourDecimal = 5.7;
const myDecimal = 5.7;

// Восемнадцатое задание
const product2 = 2.0 * 2.5;

// Девятнадцатое задание
const quotients = 4.4 / 2.0; // Change this line

// Двадцатое задание
const remainder = 11 % 3;

// Двадцать первое задание
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// Двадцать второе задание
let a = 11;
let b = 9;
let c = 3;
a -= 6;
b -= 15;
c -= 1;

// Двадцать третье задание
let a = 5;
let b = 12;
let c = 4.6;
a *= 5;
b *= 3;
c *= 10;

// Двадцать четвертое
a /= 12;
b /= 4;
c /= 11;

// Двадцать пятое
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// Двадцать пятое
const myStr1 = "I am a \"double quoted\" string inside \"double quotes\".";

// Двадцать шестое
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

// двадцать седьмое
const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";

// Двадцать восьмое
const myStr4 = "This is the start. " + "This is the end.";

// Двадцать девятое
let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence.";

// Тридцатое
const myName = "Tim";
const myStr6 = " My name is" + myName + "and I am well!";

// Тридцать первое
const someAdjective = "crazy";
let myStr7 = "Learning to code is ";
myStr += someAdjective;

// Тридцать второе
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;

// Тридцать третье
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";
firstLetterOfLastName = lastName[0];

// Тридцать четвертое
let myStr8 = "Jello World";
myStr = "Hello World"

// Тридцать пятое
const lastName2 = "Lovelace";
const thirdLetterOfLastName = lastName[2];

// Тридцать шестое
const lastName3 = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// Тридцать седьмое
const lastName4 = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]

// Тридцать восьмое
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

// Тридцать девятое
const myArray = ["Hello", 10];

// Сороковое
const myArray1 = [[1, 2], [3, 4]];

// Сорок первое
const myArray2 = [50, 60, 70];
const myData = myArray[0];

// Сорок второе
const myArray3 = [18, 64, 99];
myArray[0] = 45;

// Сорок третье
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];
const myData1 = myArray[2][1];

// Сорок четветрое
const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

// Сорок пятое
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// Сорок шестое
const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray1 = myArray.shift()

// Сорок седьмое
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])

// Сорок восьмое
const myList = [
    ["milk", 3], ["eggs", 20], ["bread", 2], ["carrots", 15], ["potatoes", 4]
];
// Сорок девятое
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction()

// Пятядесятое
function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(1, 1)

// Пятьдесят первое
function timesFive(num) {
    return num * 5;
}
timesFive(5)

// Пятьдесят второе
const myGlobal = 10;

function fun1() {
    oopsGlobal = 5
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// Пятьдесят третье
function myLocalScope() {
    let myVar = 10
    console.log('inside myLocalScope', myVar);
}
myLocalScope();
console.log('outside myLocalScope', myVar);

// Пятьдесят четвертое
const outerWear = "T-Shirt";
function myOutfit() {
    let outerWear = "sweater";
    return outerWear;
}
myOutfit();

// Пятьдесят пятое
let sum1 = 0;
function addThree() {
    sum = sum + 3;
}
function addFive() {
    sum = sum + 5;
}
addThree();
addFive();
// Пятьдесят шестое
let processed = 0;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7)

// Пятьдесят сельмое
function nextInLine(arr, item) {
    arr.push(item);
    let result = arr.shift()
    return result;
}
const testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Пятьдесят восьмое
function welcomeToBooleans() {
    return true;
}

// Пятьдесят девятое
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    return "No, that was false"

}
// Шестидесятое
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);



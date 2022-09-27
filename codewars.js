// Первое задание
function past(h, m, s) {
    let hourResult = h * 3600000;
    let minutResult = m * 60000;
    let secjndResult = s * 1000;
    let result = hourResult + minutResult + secjndResult
    return result
}

// Второе задание
function removeExclamationMarks(s) {
    let result = s.replace(/!/g, '')
    return result;
};
removeExclamationMarks("Привет!")

// Третье задание
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != 1)
            return arr[i];
    }
    return null;
}
// Четвертое задание
function solution(str) {
    let array = str.split("");
    let reverseArray = array.reverse();
    let string = reverseArray.join("")
    return string
}

// Пятое задание
function makeNegative(num) {
    if (num <= 0) {
        return num;
    } else {
        return Number("-" + num);
    }
    return
}
// шестое задание
const areaOrPerimeter = function (l, w) {
    let sum = l === w ? l * w : (l * 2) + (w * 2);
};
areaOrPerimeter(2, 1)

// Седьмое задание
function hoopCount(n) {
    let count = n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
    return count
}

// Востмое задание
function removeEveryOther(arr) {
    return arr.filter((_, index) => index % 2 === 0);
}

// Девятое задание
function fakeBin(x) {
    var arr = [];
    for (var i = 0; i < x.length; i++) {
        if (Number(x[i] < 5)) {
            arr.push(0);
        }
        else {
            arr.push(1);
        }

    }
    return arr.join("")
}
fakeBin("123456789")

//  Десятое задание
function maps(x) {
    return arr = x.map(i => i * 2);
}
maps([1, 2, 3])

// Одиннадцатое задание
function booleanToString(b) {
    let string = b === true ? "true" : "false"
    return string
}

// Двеннадцатое задание
function countPositivesSumNegatives(input) {
    let arr = []
    let index = input.reduce((a, v) => v > 0 ? a + 1 : a, 0);
    let summ = input.reduce((a, v) => v < 0 ? a + v : a, 0);
    arr.push(index, summ)
    return arr
}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, -1, -2, -3, -4, -5])

// Тринадцатое задание
function solution(str, ending) {
    return str.indexOf(ending, str.length - ending.length) !== -1
}
solution("sum0", "0m0")

// Четырнадцатое задание
const stringToNumber = function (str) {
    let num = Number(str)
    return num;
}

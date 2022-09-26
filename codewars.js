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
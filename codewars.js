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
    console.log(result)
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
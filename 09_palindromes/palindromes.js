const palindromes = function (str) {
    arr = (str.split('')).filter((char) => char.match(/[a-zA-Z0-9]/));
    let left = 0;
    let right = arr.length - 1;
    console.log(arr);
    while (left < right) {
        console.log(arr[left].toLowerCase());
        console.log(arr[right]);
        if (arr[left].toLowerCase() != arr[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

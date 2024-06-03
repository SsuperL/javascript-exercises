const reverseString = function(s) {
    let s_array = s.split('');
    let reversed_array = [];
    for (let i = s_array.length - 1; i >= 0; i--) {
        reversed_array.push(s_array[i]);
    }
    let reversed_string = reversed_array.join('');
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;

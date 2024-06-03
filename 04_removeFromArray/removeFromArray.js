
const removeFromArray = function(arr, ...args) {
    let filtered = [];
    for (let j = 0; j < arr.length; j++) {
        if (!args.includes(arr[j])) {
            filtered.push(arr[j]);
        }
    }
    console.log(filtered);

    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;

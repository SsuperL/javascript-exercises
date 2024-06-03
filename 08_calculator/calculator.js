const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let res = 0;
	for (const i of arr){
    res += i;
  }
  return res;
};

const multiply = function(arr) {
  let res = 1;
  for (const i of arr){
    res *= i;
  }
  return res;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(arr) {
	let res = 1;
  for (let i = 1; i <= arr; i++){
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

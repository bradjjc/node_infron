// const value = require('./var.js');
// // 구조분해 할당
const { odd, even } = require('./var.js');

function findOddOrEven(number) {
    return number % 2 ? odd : even;
};

module.exports = findOddOrEven;
"use strict";
const returnTypeArrowSyntax = (val) => val;
console.log(returnTypeArrowSyntax(100));
console.log(returnTypeArrowSyntax('Malik'));
function testType(val) {
    return `The Value Is ${val} AND Type Is ${typeof val}`;
}
console.log(testType(100));
console.log(testType('Malik'));
function multipleTypes(valOne, valTwo) {
    return `The First Value Is ${valOne} And Second Value Is ${valTwo}`;
}
console.log(multipleTypes('Malik', 100));
console.log(multipleTypes('Hazem', true));
console.log(multipleTypes(200, false));
//# sourceMappingURL=es25.js.map
"use strict";
const addAll = (...nums) => {
    let result = 0;
    nums.forEach((num) => result += num);
    return result;
};
console.log(addAll(10, 20, 30, 100, 10.5, +true));
//# sourceMappingURL=es5.js.map
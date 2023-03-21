"use strict";
function logging(msg) {
    console.log(msg);
    return;
}
console.log(logging("i'm a massage"));
const fail = (msg) => {
    throw new Error(msg);
    return msg;
};
function alwaysLog(msg) {
    while (true) {
        console.log(msg);
    }
    return msg;
}
alwaysLog("Osman");
//# sourceMappingURL=es10.js.map
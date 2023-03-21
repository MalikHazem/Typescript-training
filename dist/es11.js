"use strict";
function getHardSecond() {
    return 3;
}
var Kids;
(function (Kids) {
    Kids[Kids["Five"] = 5] = "Five";
    Kids[Kids["Seven"] = 7] = "Seven";
    Kids[Kids["ten"] = 10] = "ten";
})(Kids || (Kids = {}));
var Level;
(function (Level) {
    Level[Level["insane"] = 0] = "insane";
    Level[Level["Kid"] = 10] = "Kid";
    Level[Level["Easy"] = 9] = "Easy";
    Level[Level["Medium"] = 6] = "Medium";
    Level[Level["Hard"] = getHardSecond()] = "Hard";
    Level[Level["insane2"] = void 0] = "insane2";
})(Level || (Level = {}));
let lvl = "Easy";
if (lvl === "Easy") {
    console.log(`The Level is ${lvl} And number of Second is ${Level.Easy}`);
}
//# sourceMappingURL=es11.js.map
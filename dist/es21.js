"use strict";
class User4 {
    constructor(username, theme, font) {
        this.username = username;
        this.theme = theme;
        this.font = font;
    }
    save() {
        console.log('Saved');
    }
    update() {
        console.log('Updated');
    }
}
let userTwo = new User4("Malik", true, "Open Sans");
console.log(userTwo.theme);
console.log(userTwo.username);
console.log(userTwo.font);
userTwo.save();
userTwo.update();
//# sourceMappingURL=es21.js.map
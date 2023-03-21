"use strict";
class User2 {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User2.created++;
    }
}
User2.created = 0;
let u1 = new User2("Malik");
let u2 = new User2("Hazem");
let u3 = new User2("Ammar");
User2.getCount();
//# sourceMappingURL=es19.js.map
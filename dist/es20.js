"use strict";
class User3 {
    static get created() {
        return User3._created;
    }
    static set created(value) {
        User3._created = value;
    }
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        User3.created++;
    }
}
User3._created = 0;
let us1 = new User3('Malik');
let us2 = new User3('Web');
let us3 = new User3('School');
console.log(User3.created);
User3.getCount();
//# sourceMappingURL=es20.js.map
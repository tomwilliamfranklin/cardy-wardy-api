"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, firstName, secondName, fullName, dateOfBirth, email, caption, emote) {
        this.id = id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.fullName = fullName;
        this.dateOfBirth = dateOfBirth;
        this.email = email;
        this.caption = caption;
        this.emote = emote;
    }
    return User;
}());
exports.User = User;

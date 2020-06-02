"use strict";
var User = /** @class */ (function () {
    function User(name, title) {
        this.name = name;
        this.title = title;
    }
    User.prototype.show = function () {
        return "\u59D3\u540D\uFF1A" + this.name + "\uFF0C\u5934\u8854\uFF1A" + this.title;
    };
    return User;
}());
document.body.innerHTML = new User('袁天罡', '不良帅').show();

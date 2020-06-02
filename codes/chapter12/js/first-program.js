"use strict";
function createUser(user) {
    return "\u59D3\u540D\uFF1A" + user.name + "\uFF0C\u5934\u8854\uFF1A" + user.title;
}
var user = { name: '袁天罡', title: '不良帅' };
document.body.innerHTML = createUser(user);

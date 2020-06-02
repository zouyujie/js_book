"use strict";
function greeter(person) {
    return person.name + '：' + person.title;
}
var userObj = { name: '袁天罡', title: '不良帅' };
document.write(greeter(userObj));

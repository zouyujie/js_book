function createUser(user) {
  return `姓名：${user.name}，头衔：${user.title}`;
}
let user = { name: '袁天罡', title: '不良帅' };

document.body.innerHTML = createUser(user);

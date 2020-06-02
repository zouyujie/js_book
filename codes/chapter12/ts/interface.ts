interface User {
  name: string;
  title: string;
}

function greeter(person: User) {
  return person.name + '：' + person.title;
}

let userObj = { name: '袁天罡', title: '不良帅' };

document.write(greeter(userObj));

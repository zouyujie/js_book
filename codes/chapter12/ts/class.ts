class User {
  name: string;
  title: string;
  constructor(name: string, title: string) {
    this.name = name;
    this.title = title;
  }
  show() {
    return `姓名：${this.name}，头衔：${this.title}`;
  }
}
document.body.innerHTML = new User('袁天罡', '不良帅').show();

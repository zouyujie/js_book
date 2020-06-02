function main(): void {
  console.log('这是入口函数');
}
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}
//定义一个tuple类型
var arr: [string, boolean];
//初始化arr
arr = ['张子凡', true]; //正确
// arr = [50, '张玄陵']; //错误
// arr = ['张子凡', true, '陆林轩']; //错误
console.log(arr[0].substr(1)); //子凡
// console.log(arr[1].substr(1)); //Property 'substr' does not exist on type 'boolean'.

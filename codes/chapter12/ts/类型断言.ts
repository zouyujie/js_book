let anyValue: any = '三百年的功力岂是你能撼动';
let strLength: number = (<string>anyValue).length;
// 或者
strLength = (anyValue as string).length;

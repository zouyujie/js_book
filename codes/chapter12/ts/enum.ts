// enum AlarmStatusEnum {
//   //待确认
//   noSure, //0
//   //已忽略
//   recovered, //1
//   //处理中
//   processing, //2
//   //已恢复
//   resolved, //3
// }
// let noSure = AlarmStatusEnum.noSure; //0

// enum AlarmStatusEnum {
//   //待确认
//   noSure = 1, //1
//   //已忽略
//   recovered, //2
//   //处理中
//   processing, //3
//   //已恢复
//   resolved, //4
// }

enum AlarmStatusEnum {
  //待确认
  noSure = 1, //1
  //已忽略
  recovered = 3, //3
  //处理中
  processing = 5, //5
  //已恢复
  resolved = 7, //7
}

let recovered = AlarmStatusEnum.recovered; //3
console.log('noSure :>> ', recovered);

let alarmStatusName = AlarmStatusEnum[3];
console.log('alarmStatusName :>> ', alarmStatusName); //recovered

"use strict";
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
var AlarmStatusEnum;
(function (AlarmStatusEnum) {
    //待确认
    AlarmStatusEnum[AlarmStatusEnum["noSure"] = 1] = "noSure";
    //已忽略
    AlarmStatusEnum[AlarmStatusEnum["recovered"] = 3] = "recovered";
    //处理中
    AlarmStatusEnum[AlarmStatusEnum["processing"] = 5] = "processing";
    //已恢复
    AlarmStatusEnum[AlarmStatusEnum["resolved"] = 7] = "resolved";
})(AlarmStatusEnum || (AlarmStatusEnum = {}));
var recovered = AlarmStatusEnum.recovered; //3
console.log('noSure :>> ', recovered);
var alarmStatusName = AlarmStatusEnum[3];
console.log('alarmStatusName :>> ', alarmStatusName);

// Your code here

//1
function createEmployeeRecord(array){
 let employee={
    firstName:array[0],
    familyName:array[1],
    title:array[2],
    payPerHour:array[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
  return employee;
}

//2
function createEmployeeRecords(array1){
let arr=array1.map(el => createEmployeeRecord(el));
return arr;
  }

//3
function createTimeInEvent(record,time){
  let object={};
    object.type="TimeIn";
    object.hour=parseInt(time.substring(11));
    object.date=time.substring(0,10);
  record.timeInEvents.push(object);
  return record;
}

function createTimeOutEvent(record,time){
    let object={};
    object.type="TimeOut";
    object.hour=parseInt(time.substring(11));
    object.date=time.substring(0,10);
  record.timeOutEvents.push(object);
  return record;
}

function hoursWorkedOnDate (record, time){
    let inDate = record.timeInEvents.find(function(i){
        return i.date === time;
    })
    let outDate = record.timeOutEvents.find(function(i){
        return i.date === time;
    })
    return (outDate.hour - inDate.hour) / 100;
}

  function findEmployeeByFirstName(array,name){
  let result = array.find((element) => element.firstName===name);
  return result?result:undefined;
  }

  function wagesEarnedOnDate(record,time){
  return parseInt(record.payPerHour)*hoursWorkedOnDate(record,time);
  }

  function allWagesFor (record){
    let dates = record.timeInEvents.map(function(i){
        return i.date;
    })

    let pay = dates.reduce(function(a, b){
        return a + wagesEarnedOnDate(record, b)
    },0)

    return pay;
}

function calculatePayroll (array){
 let grandTotalOwed = array.reduce((m, e) => m + allWagesFor(e), 0);
 return grandTotalOwed;
}

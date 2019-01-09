var today = new Date(); 
var year = today.getFullYear().toString(); 
// console.log(year);
var month = (today.getMonth()+1).toString(); 
// console.log(month);
var day = today.getDate().toString(); 
// console.log(day);
let chDay = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
let date = today.getDay();
// console.log(chDay[date]);

// var currentDateTime = new Array(year, month, day); 
// var today_str = ''; 
    
// for(var i = 0; i < 3; i++){ 
//     if(currentDateTime[i].length == 1){ 
//     currentDateTime[i] = "0" + currentDateTime[i]; 
//     } 
// } 
// today_str = currentDateTime[0]+"年"+currentDateTime[1]+"月"+currentDateTime[2]+"日";
// $("#date").text(today.getFullYear()+ " 年 " + (today.getMonth()+1) + " 月 " + today.getDate() + " 日");
$("#date").text(today.getFullYear()+ " 年 " + (today.getMonth()+1) + " 月 " + today.getDate() + " 日" + chDay[date]);
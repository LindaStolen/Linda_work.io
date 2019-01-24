let table = $('table#result');
// console.log($('table#result'));
// let checked = '';
let p; //所選的checkbox
let str = '';
let arr = new Array();
let temp = [];

$("#result").hide();
// $(".show").hide();

$("input[name='selectAll']").click(function(){
    if($(this).prop('checked')){
        p = $("input[name='check']").attr('checked',true);
        console.log(p);
        $("input[name='check']").each(function(i,j){
            temp.push(j.value);
            str = temp.join(',');
        });
        console.log($('.show').text(str));
    }else {
        $("input[name='check']").removeAttr('checked');
        $("input[name='check']").removeProp('checked');
        temp = [];
        str = '';
        $(".show").empty();
        // console.log($(".show").text());
    };
});
$("input[type='checkbox']").change(function(){
    if($(this).prop('checked')){
        p = $(this).attr('checked',true);
        str += $(this).val() + ",";
        $(".show").text(str);
    }else {
        temp = [];
        p.removeAttr('checked');
        str = str.substring(0, str.length-1);
        arr = str.split(",");
        for (let i = 0;i< arr.length;i++){
            if($(this).val() == arr[i]){ //所選的陣列位置的值
                console.log("使用者選取的值："+ arr[i]);
                arr[i] = ''; // 取消的索引值
            }
            if(arr[i] != ''){
                temp += arr[i] + ",";
            }
        }
        str = temp;
        $(".show").text(str);
    }
});


$('button[type="submit"]').click(function(){
    let v = $("#date-single-close option:selected").val();
    let v1 = $("input[type='checkbox'] option:selected").val();
    let v2 = $("#time option:selected").val();
    let v3 = $("textarea").val();
    if(v == ""||v1 == ""||v2 == ""||v3 == ""){ //第一個空值
        alert("叫~~ 你~~ 選~~~");
        return false;
    }else{
        $("#result").show();
        $("input[type='checkbox']").prop('checked',false);
        $("input[type='checkbox']").removeAttr('checked');
        let place = ($(".show").html());
        let date = $("#date-single-close").val(); 
        let time = $("#time").val();
        let reason = $("textarea").val();
        let str_ = `<tr><td class="day">${date}</td><td class="place">${place}</td></td><td class="time">${time}</td></td><td class="reason">${reason}</td>`

        table.append(str_);
        $("#date-single-close").val("");
        $("#time").val("");
        str = '';
        temp = []; //淨空陣列裡的值
        $("textarea").val("");
        $(".show").empty();
        return false;
    }
});
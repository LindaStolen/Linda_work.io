let table = $('table#group');
let item = $("#groupName");
// let checked = '';
let p; //所選的checkbox
let str = '';
let arr = new Array();
let new_str = '';
$("input[type='checkbox']").change(function(){
    if($(this).prop('checked')){
        p = $(this).attr('checked',true);
        str += $(this).parent().text() + ",";
        $(".show").text(str);
    }else {
        new_str = '';
        p.removeAttr('checked');
        str = str.substring(0, str.length-1);
        arr = str.split(",");
        for (let i = 0;i< arr.length;i++){
            if($(this).parent().text() == arr[i]){ //所選的陣列位置的值
                console.log("使用者選取的值："+ arr[i]);
                arr = ''; // 取消陣列值
            }
            new_str += arr[i] + ",";
            if(i==0){
                str = arr[i];
            }else{
                str += arr[i];
            }
        }
        
        $(".show").text(new_str);
    }
});

$(".cancel").click(function(){
    $("input[type='checkbox']").prop('checked',false);
    $("input[type='checkbox']").removeAttr('checked');
    str = '';
    new_str = '';
    $(".show").empty();
    // console.log($("input:checked"));
});



$('.submit').click(function(){
    $("input[type='checkbox']").prop('checked',false);
    $("input[type='checkbox']").removeAttr('checked');
    let pItem = ($(".show").html());
    let gName = $(item).val();    
    // console.log(gName);
    let str_ = `<tr><td class="g-name">${gName}</td><td class="p-item">${pItem}</td><td class="edit"><button class="revise">編輯</button><br><button class="no">刪除</button></td></tr>`
    table.append(str_);
    $(item).val("");
    str = '';
    new_str = '';
    $(".show").empty();

    return false;
});

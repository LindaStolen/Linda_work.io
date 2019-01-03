let table = $('table#group');
let item = $("#groupName");
// let checked = '';
let p; //所選的checkbox
let str = '';
let arr = new Array();
let temp = [];

$("#group").hide();
$(".show").hide();

$("input[name='selectAll']").click(function(){
    if($(this).prop('checked')){
        p = $("input[name='check']").attr('checked',true);
        console.log(p);
        $("input[name='check']").each(function(i,j){
            temp.push(j.value);
            str = temp.join(',');
        });
        console.log($('.show').html());
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
                arr[i] = ''; // 取消陣列值
            }
            if(arr[i] != ''){
                temp += arr[i] + ",";
            }
        }
        str = temp;
        $(".show").text(str);
    }
});

$(".cancel").click(function(){
    $("input[type='checkbox']").prop('checked',false);
    $("input[type='checkbox']").removeAttr('checked');
    str = '';
    temp = [];
    $(".show").empty();
});



$('.submit').click(function(){
    $("#group").show();
    $("input[type='checkbox']").prop('checked',false);
    $("input[type='checkbox']").removeAttr('checked');
    let pItem = ($(".show").html());
    let gName = $(item).val(); 
    let str_ = `<tr><td class="g-name">${gName}</td><td class="p-item">${pItem}</td><td><button class="revise">編輯</button><br><button class="no">刪除</button></td></tr>`
    table.append(str_);
    $(item).val("");
    str = '';
    temp = []; //淨空陣列裡的值
    $(".show").empty();

    
    $(".revise").click(function(){
        let tr = $(this).parent().parent();
        
        if (status == false){
            tr.after(list);
            $("tr.edit").addClass("edit-hide");
            status = true;
            console.log("success");
            return false;
        } else if (status == true){
            $("tr.edit").remove();
            status = false;
            console.log("close");
        }
    });
    $(".no").click(function(){
        $(".no").parent().parent().remove();
    })
    return false;
});

;

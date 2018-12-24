let table = $('table#group');
let item = $("#groupName");
let gName = $(item).val();
let check = $("input:checked");
$("input[type=checkbox]").change(function(){
    let value = $("input:checked").val();
    let str = $(".show").text();
    console.log(str);
    
    if (check){
        $(this).prop("check","checked");
        str += value;
        $(".show").text(str + " , ");
    }else {
        $(".show").slice();
    }
    // str += value;
    // $(".show").text(str + " , ");
});



$('button').click(function(str){
    // let pItem = $(".show").val();
    // let pItem = $('input[type=checkbox]').val();
    let str_ = `<tr><td class="g-name">${gName}</td><td class="p-item">${pItem}</td><td class="edit"><button class="revise">編輯</button><br><button class="no">刪除</button></td></tr>`
    table.append(str_);
    item.val("");

    
    // console.log(pItem);

    return false;
});
// console.log($('button'));


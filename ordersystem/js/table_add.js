let table = $('table#group');
let item = $("#groupName");
let gName = $(item).val();
let checked = '';
$("input[type='checkbox']").change(function(){
    let p = $(this).attr('checked',true);
    if($(this).prop('checked')){
        checked = $(this).val();
        console.log(checked);
        let str = $(".show").html();
        str +=  $(this).val() + " / ";
        $(".show").text(str);
    }else {
        $(this).removeAttr('checked');
        $(".show").remove($(this).val());
    }
});
$(".cancel").click(function(){
    $("input[type='checkbox']").prop('checked',false);
    $("input[type='checkbox']").removeAttr('checked');
    $(".show").empty();
    // console.log($("input:checked"));
});



$('submit').click(function(){
    let pItem = $(".show").val();
    // let pItem = $('input[type=checkbox]').val();
    let str_ = `<tr><td class="g-name">${gName}</td><td class="p-item">${pItem}</td><td class="edit"><button class="revise">編輯</button><br><button class="no">刪除</button></td></tr>`
    table.append(str_);
    item.val("");

    return false;
});

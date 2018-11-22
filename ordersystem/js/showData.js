// place-manage&change 
$(document).ready(function(){
    $('.submit').click(function(){
        alert('setting is done!');
        $("#table_2").show();
        return false;
    })

    //新增預約
    $('.btn').click(function(){
        $(".crossLine").show();
        $(".student_info").show();
        return false;
    })
    $('.reset').click(function(){
        $("input").val(date).empty();
        $("select").empty();
    })

    // 修改刪除預約
    $('.btn_correct').click(function(){
        $('.student_info').show();
        $('.data').hide();
    })
})
// function showdata(){
//     alert('setting is done!');
//     $("#table_2").show();
//     return false;
// }

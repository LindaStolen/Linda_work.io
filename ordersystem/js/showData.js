// place-manage&change 
$(document).ready(function(){
    $('.check').click(function(){
        // alert('setting is done!');
        $("#table_2").show();
        $("#table_1 input").val("");
        $("#table_1 select").val("");
        return false;
    })

    //新增預約
    // $('.check-btn').click(function(){
    //     $(".crossLine").show();
    //     $(".student_info").show();
    //     $("input").val("");
    //     $("select").val("");
    //     console.log(123)
    //     return false;
    // })

    // 修改刪除預約
    $('.correct').click(function(){
        $('.student_info').show();
        $('.id').val("");
    })
    // 學生預約記錄
    $('.btn_correct').click(function(){
        $('dd').show();
        $('.data').show();
        $('.search').hide();
    })
    // 違規紀錄
    $("dd").hide();
    $('.correct').click(function(){
        $('dd').show();
    })
     // 查詢時數
     $('.data').hide();
     $('.correct').click(function(){
         $('.data').show();
         return false;
     })
})

function add_del(){
    $('#list').append('<input type="text" name="" class="secadm" placeholder="准考證號碼">')
    $('#list').append('<button class="del_btn">移除<i class="fas fa-minus-circle"></i></button>')
    $(".del_btn").click(function(){
        $(this).prev().remove();
        $(this).remove();
    })
}
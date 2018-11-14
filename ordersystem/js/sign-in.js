$(function(){
    $(".signIn").attr("style","color: #0d00c0");
    $(".late").attr("style","color: #c00000");

    $("#user").click(function(){
        $(".user").slideToggle().show();
    })
});


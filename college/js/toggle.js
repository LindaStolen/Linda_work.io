// toggle                
$(function(){
    $(".collapse").hide();
    $(".fa-angle-up").hide();
    $(".toggle:eq(0)").next().slideToggle();
    $(".toggle:eq(0)").find(".fa-angle-down").toggleClass("fa-angle-up");
    $(".toggle").click(function(){
        $(this).next().slideToggle();
        $(this).find(".fa-angle-down").toggleClass("fa-angle-up");
    })

    $(".login").click(function(){
        $(".container").show();
        $("body").attr("style","overflow-y: hidden");
        photoWidth = $(window).innerWidth();
        $('.photo').attr('style', `width:${photoWidth}px`);
    })
    
    $(".btn").click(function(){
        $(".hello").toggle(".enter");
        $(".enter").hide();
        $(".container").hide();
        $("body").attr("style","overflow-y: show");
    })
    $(".close").click(function(){
        $(".container").hide();
        $("body").attr("style","overflow-y: show");
    })
})
// radio切換 (時數)
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        if($(this).attr("value")=="date"){
            $("#change-time").hide();
            $("#used-time").show();
        }
        if($(this).attr("value")=="class"){
            $("#used-time").hide();
            $("#change-time").show();
        }
    });
});
// (權限)
$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        if($(this).attr("value")=="tkb"){
            $(".pal").hide();
            $(".tkb").show();
        }
        if($(this).attr("value")=="pal"){
            $(".tkb").hide();
            $(".pal").show();
        }
    });
});
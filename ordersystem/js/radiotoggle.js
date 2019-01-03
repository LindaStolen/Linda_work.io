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

// (統計)
$(document).ready(function(){
    $('button').click(function(){
        if($('input[type="radio"]').attr("value")=="now"){
            $("#pass").hide();
            $("#now").show();
        }
        if($('input[type="radio"]').attr("value")=="pass"){
            $("#now").hide();
            $("#pass").show();
        }
    });
});
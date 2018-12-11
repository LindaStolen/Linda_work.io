// radio切換
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
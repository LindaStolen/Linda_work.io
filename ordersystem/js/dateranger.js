$(document).ready(function(){
// 新增預約
    $( function() {
        $( "#datepicker" ).datepicker({ 
            minDate: 0, 
            maxDate: '+7D', 
            dateFormat: "yy-mm-dd",
            currentText: "Now",
        });
    } );
})

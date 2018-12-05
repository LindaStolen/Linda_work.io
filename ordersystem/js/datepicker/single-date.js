$(document).ready(function(){
    $( function() {
        $( "#datepicker" ).datepicker({ 
            minDate: 0, 
            maxDate: '+7D', 
            dateFormat: "yy-mm-dd",
            // currentText: "Today",
            // showButtonPanel: true,
        });
        // 最大權限日期查詢
        $( "#date" ).datepicker({ 
            minDate: 0, 
            dateFormat: "yy-mm-dd",
        });
        $("#used").datepicker({
            minDate: '-1M',
            maxDate: '+1M',
            dateFormat: 'yy-mm-dd',
            
        });
        $( ".datepicker" ).datepicker({ 
            minDate: 0, 
            maxDate: '1M', 
            dateFormat: "yy-mm-dd",
            // currentText: "Today",
            // showButtonPanel: true,
        });
    } );
})
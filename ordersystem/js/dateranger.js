$(document).ready(function(){
    let start = moment().subtract(30,'days');
    let end = moment();
    function cb(start, end) {
        $('input[name="date"]').html(start.format('yyyy-mm-dd') + ' - ' + end.format('yyyy-mm-dd'));
    };
   $('input[name="date"]').daterangepicker({
        startDate: start,
        endDate: end,
        // minDate: {moment().subtract(30, 'days')},
        // maxDate: {moment().subtract(-30, 'days'), moment()},                
        locale: {
            format:"YYYY-MM-DD",
            },
        ranges: {
        '後一周': [moment().subtract(7, 'days'), moment()],
        '前30天': [moment().subtract(30, 'days'), moment()],
        '後30天': [moment().subtract(-30, 'days'), moment()],
        '前後一個月': [moment().subtract(45, 'days'), moment().subtract(-45, 'days')]
        }
    }, cb);
    cb(start, end);

    $(function() {
        $( "input #datepicker" ).datepicker({ minDate: 0, maxDate: "+7D" });
      } );

})
// 新增預約
    $( function() {
        $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+7D" });
    } );
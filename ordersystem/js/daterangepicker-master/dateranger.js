$('.daterangepicker').ready(function(){
    let start = moment();
    console.log($('.daterangepicker'));
    console.log(document.readyState);
    // if(document.readyState == 'complete'){
    console.log($('.show-ranges')[0]);

       
    // }
    $('.daterangepicker').on('click','.ranges',function(e){
        console.log(22222222);
        console.log(e);
        console.log($(this));
    });
    // $('#datepicker').change(function(){
    //     // console.log($(this).val());
    //     // console.log($(this).val());
    //     // console.log($('.ranges ul li').data('range-key'));
    //     console.log($('.ranges ul li')[0]);
    //     var rangeKey = $('.ranges ul li').data('range-key');
    //     let keyValue = $('#datepicker').val();
    //     // console.log($('#datepicker').val());
    //     if(rangeKey == '今天'){
    //         let today = keyValue.slice(0,10);
    //         console.log(today);
    //         // keyValue.replace(keyValue,today);
    //         // $('#datepicker').append(today);
    //         $('#datepicker').val(today);
    //         console.log(rangeKey);
    //     }else {
            
    //     };

    // })    
    // function cb(start, end) {
    //     $('#datepicker').html(start.format('yyyy-mm-dd') + ' - ' + end.format('yyyy-mm-dd'));
    // };
    // 日期快蒐
    $('#datepicker').daterangepicker({
        startDate: start,
        "autoApply": true,        
        "showCustomRangeLabel": false,
        locale: {
            format:"YYYY-MM-DD",
            },
        ranges: {
        '今天': moment(),
        '本周': [moment().subtract(3, 'days'), moment().subtract(-3, 'days')],
        '前一周': [moment().subtract(7, 'days'), moment()],
        '後一周': [moment(), moment().subtract(-7, 'days')],
        '本月': [moment().subtract(0, 'month').startOf('month'), moment().subtract(0, 'month').endOf('month')],
        '上個月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        '下個月': [moment().subtract(-1, 'month').startOf('month'), moment().subtract(-1, 'month').endOf('month')],
        },
        // "singleDatePicker": true,
    });
    // cb(start, end);
    $('#usedDate').daterangepicker({
        startDate: start,
        "autoApply": true,
        // "singleDatePicker": true,
        "showCustomRangeLabel": false,
        locale: {
            format:"YYYY-MM-DD",
            },
        ranges: {
        '今天': moment(),
        '本周': [moment().subtract(3, 'days'), moment().subtract(-3, 'days')],
        '前一周': [moment().subtract(7, 'days'), moment()],
        '後一周': [moment(), moment().subtract(-7, 'days')],
        '本月': [moment().subtract(0, 'month').startOf('month'), moment().subtract(0, 'month').endOf('month')],
        '上個月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
        '下個月': [moment().subtract(-1, 'month').startOf('month'), moment().subtract(-1, 'month').endOf('month')],
        }
    });
})

$("#date-single").daterangepicker({
    "autoUpdateInput": false,
    "singleDatePicker": true,
    "locale": {
            format: "YYYY-MM-DD",
            applyLabel: "確定",
            cancelLabel: "清除",
            // customRangeLabel: "自訂日期區間",
            daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"
            ],
        },
    minDate: moment(),
    maxDate: moment().subtract(-7, 'days'),
    "autoApply": false,
},function(start, end, label) {
    console.log('New date selected: ' + start.format('YYYY-MM-DD'));
  });
  console.log($("#date-single"));
$("#date-single").on("apply.daterangepicker", function(ev, picker) {
    $(this).val(picker.startDate.format("YYYY-MM-DD"));
});

// date-singleChange
$("#date-singleChange").daterangepicker({
    "autoUpdateInput": false,
    "singleDatePicker": true,
    "locale": {
            format: "YYYY-MM-DD",
            applyLabel: "確定",
            cancelLabel: "清除",
            // customRangeLabel: "自訂日期區間",
            daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"
            ],
        },
    minDate: moment(),
    maxDate: moment().subtract(-7, 'days'),
    "autoApply": false,
},function(start, end, label) {
    console.log('New date selected: ' + start.format('YYYY-MM-DD'));
  });
  console.log($("#date-singleChange"));
$("#date-singleChange").on("apply.daterangepicker", function(ev, picker) {
    $(this).val(picker.startDate.format("YYYY-MM-DD"));
});

// date-single停場設定
$("#date-single-close").daterangepicker({
    "autoUpdateInput": false,
    "singleDatePicker": true,
    "locale": {
            format: "YYYY-MM-DD",
            applyLabel: "確定",
            cancelLabel: "清除",
            // customRangeLabel: "自訂日期區間",
            daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
            "7月", "8月", "9月", "10月", "11月", "12月"
            ],
        },
    minDate: moment(),
    "autoApply": false,
},function(start, end, label) {
    console.log('New date selected: ' + start.format('YYYY-MM-DD'));
  });
  console.log($("#date-single-close"));
$("#date-single-close").on("apply.daterangepicker", function(ev, picker) {
    $(this).val(picker.startDate.format("YYYY-MM-DD"));
});
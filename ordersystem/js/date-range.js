$("input[name='date-range']").daterangepicker({
    autoUpdateInput: false,
    locale: {
        format: "YYYY-MM-DD",
        separator: " ~ ",
        applyLabel: "確定",
        cancelLabel: "清除",
        customRangeLabel: "自訂日期區間",
        daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月"
        ],
        firstDay: 1
        },
        autoApply: false,
        showDropdowns: true,
},function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
  });
  
$("input[name='date-range']").on("apply.daterangepicker", function(ev, picker) {
    $(this).val(picker.startDate.format("MM/DD/YYYY") + " - " + picker.endDate.format("MM/DD/YYYY"));
});
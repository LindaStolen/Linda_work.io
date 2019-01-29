$(document).ready(function(){
    // document.write('<script type="text/javascript" src="dateranger.js"></script>');
    
    var status = false;
    var list = `<tr class="edit">
    <td colspan="1">
        <ul class="last-edit">
            <li class="title">最後更新狀態</li>
            <li class="">經手人:嚕啦啦</li>
            <li class="date">日期:2018-11-27&nbsp;17:10</li>
            <li>原因:螢幕壞掉</li>
            <li>狀態:故障</li>
        </ul>
    </td>
    <td colspan="2">
        <ul class="new-edit">
            <li class="title">本次更新狀態</li>
            <li>經手人:吧哪哪</li>
            <li>日期: <input type="text" id="date-single" autocomplete="off"></li>
            <li>原因: <input type="text"></li>
            <li>狀態: 
                <select name="" id="status">
                    <option value="">正常</option>
                    <option value="">保留</option>
                    <option value="">故障</option>
                    <option value="">封閉</option>
                </select>
            </li>
        </ul>                                
    </td>
    <td><button type="submit">確定</button></td></tr>`;
    // $(".edit").hide();
    $(".fa-edit").click(function(){
        var tr = $(this).parent().parent();
        
        if (status == false){
            tr.after(list);
            $("tr.edit").addClass("edit-hide");
            status = true;
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
                "autoApply": false
                },function(start, end, label) {
                // console.log('New date selected: ' + start.format('YYYY-MM-DD'));
            });
              console.log($("#date-single"));
            $("#date-single").on("apply.daterangepicker", function(ev, picker) {
                $(this).val(picker.startDate.format("YYYY-MM-DD"));
            });
            console.log("success");
            return false;
        } else if (status == true){
            $("tr.edit").remove();
            status = false;
            console.log("close");
        }
    });
})
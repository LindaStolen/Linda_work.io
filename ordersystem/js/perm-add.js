$(document).ready(function(){
    // document.write('<script type="text/javascript" src="dateranger.js"></script>');
    
    let status = false;
    let list = 
    `<tr class="edit">
        <td colspan="4" class="cot">
            <p>更改權限</p>
            <ul> <!-- about order -->
                <li>
                    <input type="checkbox" name="" id=""> 新增預約
                </li>
                <li>
                    <input type="checkbox" name="" id=""> 修改/刪除預約
                </li>
                <li>
                    <input type="checkbox" name="" id=""> 查詢學生預約記錄
                </li>
                <li>
                    <input type="checkbox" name="" id=""> 查詢學生時數餘額
                </li>
            </ul>
            <ul> <!-- about seat -->
                <li>
                    <input type="checkbox" name="" id=""> 查詢座位現狀
                </li>
                <li>
                    <input type="checkbox" name="" id=""> 修改座位狀態
                </li>
            </ul>
            <ul> <!-- about place -->
                <li>
                    <input type="checkbox" name="" id=""> 查詢場次現狀
                </li>
                <li>
                    <input type="checkbox" name="" id=""> 停場設置
                </li>
            </ul>
            <ul> <!-- about permission -->
                <li>
                    <input type="checkbox" name="" id=""> 人員權限設定 <br> (限館長使用)
                </li>
            </ul>
        </td>
        <td><button>送出</button><br><button class="cancel">取消</button></td>
    </tr>`
    // $(".edit").hide();
    $(".fa-pencil-alt").click(function(){
        let tr = $(this).parent().parent();
        
        if (status == false){
            tr.after(list);
            $("tr.edit").addClass("edit-hide");
            status = true;
            console.log("success");
            return false;
        } else if (status == true){
            $("tr.edit").remove();
            status = false;
            console.log("close");
        }
    });
    $(".cancel").click(function(){
        $("tr.edit").remove();
        status = false;
        console.log("close");

    })
})
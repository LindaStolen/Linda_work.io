$(document).ready(function(){
    let status = false;
    let list = `<tr class="edit">
    <td colspan="1" style="width:15%;">
        <ul class="last-edit">
            <li class="title">最後更新狀態</li>
            <li>經手人:嚕啦啦</li>
            <li>日期:2018-11-27&nbsp;17:10</li>
            <li>原因:螢幕壞掉</li>
            <li>狀態:故障</li>
        </ul>
    </td>
    <td colspan="2" style="width:30%;">
        <ul class="new-edit">
            <li class="title">本次更新狀態</li>
            <li>經手人:吧哪哪</li>
            <li>日期: <input type="datetime-local" name="" id="" value="2018-11-27Wed17:14"></li>
            <li>原因: <input type="text"></li>
            <li>狀態: 
                <select name="" id="">
                    <option value="">正常</option>
                    <option value="">保留</option>
                    <option value="">故障</option>
                    <option value="">封閉</option>
                </select>
            </li>
        </ul>                                
    </td>
    <td><button>確定</button></td></tr>`
    // $(".edit").hide();
    $(".fa-edit").click(function(){
        let tr = $(this).parent().parent();
        
        if (status == false){
            tr.after(list);
            status = true;
            // return false;
        } else if (status == true){
            $("tr.edit").remove();
            status = false;
            console.log(2222222222);
            // console.log(p);
            // console.log(p.next());
        }
    });
    
    // console.log($(".fa-edit"));
    // function e(this){
    //     console.log($(this))
    //     let p = $(this).parent.parent
    //     let list = '<tr class="edit"></tr>'
    //     $(p).append(list)
    //     console.log(p)
    // }
    // $(".fa-edit").click(function(){
    //     $(this).next().toggle();
    // })
    // console.log($(".fa-edit"));

})
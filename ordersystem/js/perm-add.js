$(document).ready(function(){
    let status = false;
    let list = 
    `<tr class="edit">
        <td colspan="3" class="cot">
            <p>更改群組</p>
            <select>
                <option></option>
                <option>董事長</option>
                <option>總經理</option>
                <option>經理</option>
                <option>區行政</option>
                <option>主任</option>
                <option>一般職員</option>
            </select>
        </td>
        <td colspan="2"><button>送出</button><button class="cancel">取消</button></td>
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
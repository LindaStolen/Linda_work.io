$(document).ready(function(){
    // document.write('<script type="text/javascript" src="dateranger.js"></script>');
    
    let status = false;
    let list = `<tr class="edit">
    <td colspan="4">
        <input type="checkbox">更改權限
    </td>
    <td><button>確定</button></td></tr>`
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
})
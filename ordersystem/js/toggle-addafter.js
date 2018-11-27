$(document).ready(function(){
    $(".fa-edit").click(function(){
        $(this.parent).next().append("<tr></tr>");
    });
    console.log($(".fa-edit"));
})
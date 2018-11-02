$(function(){
    let currentPosition = 0;
    let photoWidth = $(window).outerWidth();
    let photoNums = $(".photo").length;
    let timeout = 5000;
    let speed = 1500;
    console.log(photoWidth);
    $(".wrapper").attr('style',`width:${photoNums*photoWidth}px`);
    
    $(window).resize(function(){
        let photo = $('.photo');
        photoWidth = $(window).outerWidth();
        $('.photo').attr('style', `width:${photoWidth}px`);
        $(".wrapper").attr('style',`width:${photoNums*photoWidth}px`);
        console.log(photoWidth);            
    })

$('#header .photo').attr('style', `width:${photoWidth}px`);

    function move(){
        $(".wrapper").animate({
            marginLeft: -(photoWidth*currentPosition)
        })
    }
    function cycle(){
        if(currentPosition == photoNums - 1){
            currentPosition = 0;
        }else{
            currentPosition++;
        }
        move();
    }
    setInterval(cycle,timeout);

    $(".membercenter").click(function(){
        $("#memberCenter").slideToggle({top:'70px'});
    })
}) 

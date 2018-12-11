$(function(){
    let showTab = 0;
    let defaultLi = $('.tabs ul li').eq(showTab).addClass('active');
    $(defaultLi.find('a').attr('href')).siblings().hide();

    $('ul li').click(function(){
        let $this = $(this),
        _clickTab = $this.find('a').attr('href');
        $this.addClass('active').siblings('.active').removeClass('active');
        $(_clickTab).stop(false,true).fadeIn().siblings().hide();

        // return false;
    }).find('a').focus(function(){
        this.blur();
    });
});
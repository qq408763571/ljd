/**
 * Created by Master on 2016/11/9.
 */
/*中心图片的浮动*/
$(function(){
    $(".shover .mpic").hide();
    $(".shover").hover(function(){
        $(this).find(".mpic").stop().fadeTo(300,1);
        $(this).find(".mpic .mpy").stop().fadeTo(300,1);
        $(this).find(".mpic .mtext").stop().fadeTo(300,1);
    },function(){
        $(this).find(".mpic").stop().fadeTo(300,0);
        $(this).find(".mpic .mpy").stop().fadeTo(300,0);
        $(this).find(".mpic .mtext").stop().fadeTo(300,0);
    })
})

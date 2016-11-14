/**
 * Created by Master on 2016/11/9.
 */
/*滚动条显示隐藏*/
$(function(){
    $(".scroll span,.content-p").mouseover(function () {
        $(".scroll span").stop().css("opacity","1");
    })
    $(".scroll span,.content-p").mouseout(function () {
        $(".scroll span").stop().css("opacity","0");
    })
})
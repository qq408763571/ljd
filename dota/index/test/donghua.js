/**
 * Created by Master on 2016/11/9.
 */
/*主页动画*/
$(document).ready(function(){
    $("#box").hide().fadeIn(2000);
    $("#boxPage img:eq(0)").fadeIn(1000);
    var count = $("#boxPage img").length;
    var nValue = 0;
    var oValue = 0;

    var setIntervalImg = setInterval(function(){
        nValue++;
        if(nValue == count){
            nValue = 0;
        }
        $("#boxPage img:eq(" + (nValue) + ")").fadeIn(1000);
        $("#boxPage img:eq(" + (oValue) + ")").fadeOut(1000);
        oValue = nValue % count;
    },5000);
})

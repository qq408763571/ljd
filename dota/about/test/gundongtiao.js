/**
 * Created by Master on 2016/11/9.
 */
    /*滚动条*/
var $scrollBar = $(".scroll span");
var $neirong = $(".content-p");

var boxHeight = $(".content").height();
var neirongHeight = $neirong.height();

var scrollBarHeight = (boxHeight / neirongHeight) * boxHeight;

$scrollBar.css("height",scrollBarHeight);

var nowTop = 0;

$(".scroll span").draggable(
    {
        "containment" : "parent",
        "axis" : "y",
        drag : function(event,ui){
            var scrollBarY = ui.position.top;

            nowTop = - (neirongHeight - boxHeight) * scrollBarY / (boxHeight - scrollBarHeight);

            $(".content-p").css("top",nowTop);
        }
    }
);
$(".content").mousewheel(function(event,delta){
    event.preventDefault();
    nowTop = nowTop + delta * 20;
    if(nowTop>0){
        nowTop = 0;
    }else if(nowTop < boxHeight - neirongHeight){
        nowTop = boxHeight - neirongHeight;
    }
    var scrollBarY = nowTop * (boxHeight - scrollBarHeight) / (neirongHeight - boxHeight);
    $neirong.css("top",nowTop);
    $scrollBar.css("top",-scrollBarY);
});
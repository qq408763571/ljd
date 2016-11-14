/**
 * Created by Master on 2016/11/9.
 */
//滑动解锁
$(function () {
    var slider = new SliderUnlock(".slideunlock-slider", {}, function(){
        alert('success');
    }, function(){
        $(".warn").text("index:" + slider.index + "， max:" + slider.max + ",lableIndex:" + slider.lableIndex + ",value:" + $(".slideunlock-lockable").val() + " date:" + new Date().getUTCDate());
    });
    slider.init();

    $("#reset-btn").on('click', function(){
        slider.reset();
    });
})

/**
 * Created by Master on 2016/11/9.
 */
//下拉框
$(function () {
    /*省份菜单*/
    $("#s-list,#s-list ul").mouseover(function () {
        $("#s-list ul").stop().slideDown(300);
    })
    $("#s-list,#s-list ul").mouseout(function () {
        $("#s-list ul").stop().slideUp(300);
    })
    $("#s-list ul li").mouseover(function () {
        $(this).css("background", "gray");
    })
    $("#s-list ul li").mouseout(function () {
        $(this).css("background", "#fff");
    })
    $("#s-list ul li").click(function () {
        $("#s-list").html($(this).html());
    })

    /*城市菜单*/
    $("#s-slist,#s-slist ul").mouseover(function () {
        $("#s-slist ul").stop().slideDown(300);
    })
    $("#s-slist,#list").mouseout(function () {
        $("#s-slist ul").stop().slideUp(300);
    })
    $("#s-slist ul li").mouseover(function () {
        $(this).css("background", "gray");
    })
    $("#s-slist ul li").mouseout(function () {
        $(this).css("background", "#fff");
    })
    $("#s-slist ul li").click(function () {
        $("#s-slist").html($(this).html());
    })
})

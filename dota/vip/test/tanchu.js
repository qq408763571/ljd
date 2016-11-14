/**
 * Created by Master on 2016/11/9.
 */
jQuery(document).ready(function($) {
    $('.btn').click(function () {
        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover').slideDown(200);
    })
    $('.theme-poptit .close').click(function () {
        $('.theme-popover-mask').fadeOut(100);
        $('.theme-popover').slideUp(200);
    })

    $('.btn-s').click(function () {
        $('.theme-popover-mask2').fadeIn(100);
        $('.theme-popover2').slideDown(200);
    })
    $('.theme-poptit2 .close2').click(function () {
        $('.theme-popover-mask2').fadeOut(100);
        $('.theme-popover2').slideUp(200);
    })
})

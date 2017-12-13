/**
 * Created by lixudong on 2017/12/12.
 */
var w = document.body.clientWidth;
var h = document.body.clientHeight;
$("#mainWrap").css({
    "width":w,
    "height":h
});
$(window).resize(function (a, b) {
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;
    $("#mainWrap").css({
        "width":w,
        "height":h
    });
});
$("#add_manage").click(function () {
    modalOpen("#addManage")
    window.parent.showS();
})
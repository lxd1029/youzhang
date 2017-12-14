/**
 * Created by lixudong on 2017/12/13.
 */
var modalOpen=function (ele) {
    $(ele).modal({
        closeViaDimmer:false,
        dimmer:false
    })
    myshade()
}
var modalClose=function (ele) {
    $(ele).modal('close')
    $("#myShade").fadeOut(400,function () {
        $(this).remove();
    })
    window.parent.hideS()
}
$(".closeA").click(function () {
    var ele=$(this).parents('.am-modal-alert').attr('id');
    modalClose("#"+ele)
});
function myshade() {
    var div='<div id="myShade" style="position: fixed;top: 0;right: 0;bottom: 0;left: 0;'+
        'width: 100%;height: 100%;background-color: rgba(0,0,0,.6);z-index: 1100;"></div>';
    $('body').append(div);
}
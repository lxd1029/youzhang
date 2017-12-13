/**
 * Created by lixudong on 2017/12/13.
 */
var modalOpen=function (ele) {
    $(ele).modal({
        closeViaDimmer:false
    })
}
var modalClose=function (ele) {
    $(ele).modal('close')
    window.parent.hideS()
}
$(".closeA").click(function () {
    var ele=$(this).parents('.am-modal-alert').attr('id');
    modalClose("#"+ele)
});
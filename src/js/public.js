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
function myModal(ele,openEle) {
    $(ele).click(function () {
        modalOpen(openEle);
        window.parent.showS();
    })
}
function myshade() {
    var div='<div id="myShade" style="position: fixed;top: 0;right: 0;bottom: 0;left: 0;'+
        'width: 100%;height: 100%;background-color: rgba(0,0,0,.6);z-index: 1100;"></div>';
    $('body').append(div);
}
$(".MyTable").on('click','thead tr th input',function () {
    if($(this).is(':checked')){
        $(this).parents('thead').siblings('tbody').find('input').uCheck('check');
    }else{
        $(this).parents('thead').siblings('tbody').find('input').uCheck('uncheck');
    }
});
$(".MyTable").on('click','tbody tr td input',function () {
    if($(this).is(':checked')){
        var inputs=$(this).parents('tbody').find('input');
        $.each(inputs,function (i, v) {
            if(!$(this).is(':checked')){
                $(this).parents('tbody').siblings('thead').find('input').uCheck('uncheck');
                return false;
            }else{
                $(this).parents('tbody').siblings('thead').find('input').uCheck('check');
            }
        })
    }else{
        $(this).parents('tbody').siblings('thead').find('input').uCheck('uncheck');
    }
});
//禁止鼠标右键菜单和F12打开控制台看源码
// function click(e) {
//     if (document.all) {
//         if (event.button==2||event.button==3) {
//             oncontextmenu='return false';
//         }
//     }
//     if (document.layers) {
//         if (e.which == 3) {
//             oncontextmenu='return false';
//         }
//     }
// }
// if (document.layers) {
//     document.captureEvents(Event.MOUSEDOWN);
// }
// document.onmousedown=click;
// document.oncontextmenu = new Function("return false;")
// document.onkeydown =document.onkeyup = document.onkeypress=function(){
//     if(window.event.keyCode == 123) {
//         window.event.returnValue=false;
//         return(false);
//     }
// }
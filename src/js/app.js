$("#Nav").on('click','a',function () {
    if($(this).parent().children().length>1){
        if($(this).siblings().css('display')=='none'){
            $(this).parent().siblings().find('i').removeClass('active');
            $(this).children('i').addClass('active');
            $(this).siblings().slideDown();
            $(this).parent().siblings().children('a').removeClass('active');
            $(this).addClass('active');
            $(this).parent().siblings().children('ul').slideUp();
        }else{
            $(this).siblings().slideUp();
            $(this).children('i').removeClass('active');
        }
        return;
    }
    var goto=$(this).attr('goto');
    var name=$(this).text();
    $("#Iframe").attr('src',goto);
    $("#cRouter").attr('goto',goto);
    $("#cRouter").text(name);
    $("#pRouter").text(name);
    if(!$(this).hasClass('active')){
        $(this).parent().siblings().find('i').removeClass('active');
        $(this).parent().siblings('li').children().removeClass('active');
        $(this).addClass('active')
        $(this).parent('li').siblings().find('li').removeClass('active');
        $(this).parent().siblings().children('ul').slideUp();
    }
});
$("#myMenu").on('click','ul li a',function () {
    var ele=$(this).attr('class');
    $("#"+ele).modal({closeViaDimmer:false})
});
$("#Nav").on('click','li ul li',function () {
    var goto=$(this).attr('goto');
    var name=$(this).text();
    var pname=$(this).parent().siblings('a').text();
    if(!goto){
        var ele = $(this).attr('class')
        $("#"+ele).modal({closeViaDimmer:false})
        return;
    }
    $("#Iframe").attr('src',goto);
    $("#cRouter").attr('goto',goto);
    $("#cRouter").text(name);
    $("#pRouter").text(pname);
    if(!$(this).hasClass('active')){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('li').siblings().find('li').removeClass('active');
    }
});
$("#nowPage").on('click','a',function () {
    var goto=$(this).attr('goto');
    if(goto==''){
        return;
    }
    $("#Iframe").attr('src',goto)
});
$(".closeOut").click(function () {
    $("#logout").modal('close')
})
//拓展日期时间函数
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
//定时器，每秒更新显示时间
setInterval(function () {
    var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
    $("#nowTime").text(time);
},1000);
var showS=function () {
    $("#Shade").show()
};
var hideS=function () {
    $("#Shade").fadeOut()
};
$('#docTime').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    minView:2,
    todayBtn:true
});
$('#pickupTime').datetimepicker({
    language:  'zh-CN',
    format: 'yyyy-mm-dd',
    minView:2,
    todayBtn:true
});
$('#docTime').on('change', function(){
    $(this).datetimepicker('hide');
});
$('#pickupTime').on('change', function(){
    $(this).datetimepicker('hide');
});
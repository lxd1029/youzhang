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


var myChart = echarts.init(document.getElementById('analyzeWindow'));
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        right: 0,
        top: 0,
        orient: 'vertical',
        width: 80,
        data:['401-600元','601-800元','801-1000元','1001-1200元','1201-1400元','1401-1600元']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'资金区间',
            type:'pie',
            radius : [15, 95],
            center : ['35%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'401-600元'},
                {value:5, name:'601-800元'},
                {value:15, name:'801-1000元'},
                {value:25, name:'1001-1200元'},
                {value:20, name:'1201-1400元'},
                {value:35, name:'1401-1600元'}
            ]
        }
    ]
};
myChart.setOption(option);
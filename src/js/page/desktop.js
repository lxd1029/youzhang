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
var customer=new Vue({
    el:"#customer",
    data:{
        cusData:[
            {
                name:"商贸公司",
                num:"01",
                backlog:"1",
                state:"正常",
                debt:"200",
                surplus:"6000"
            },{
                name:"商贸公司1",
                num:"02",
                backlog:"3",
                state:"正常",
                debt:"2400",
                surplus:"61000"
            }
        ]
    }
})
var warning=new Vue({
    el:"#WarningTabs",
    data:{
        one:[
            {name:"商贸公司事项1",num:"2"},
            {name:"商贸公司事项2",num:"3"}
        ],
        two:[
            {name:"公司名称1",date:"2017-12-23",money:"100",type:"已收款"},
            {name:"公司名称2",date:"2017-12-24",money:"300",type:"已收款"},
            {name:"公司名称3",date:"2017-12-25",money:"400",type:"已收款"},
            {name:"公司名称4",date:"2017-12-26",money:"500",type:"已收款"}
        ],
        three:[
            {name:"合同名称1",num:"201236251364",date:"2017-12-31"},
            {name:"合同名称2",num:"201236251364",date:"2017-12-21"},
            {name:"合同名称3",num:"201236251343",date:"2017-12-11"}
        ],
        four:[
            {date:"报税期间",num:'1'},
            {date:"报税期间1",num:'2'},
            {date:"报税期间2",num:'3'}
        ],
        five:[
            {type:'类型1',thems:"主题1",date:"2017-12-15",state:"1"},
            {type:'类型2',thems:"主题2",date:"2017-12-14",state:"2"},
            {type:'类型3',thems:"主题3",date:"2017-12-17",state:"3"}
        ]
    }
})
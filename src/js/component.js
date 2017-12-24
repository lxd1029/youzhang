/**
 * Created by lixudong on 2017/12/23.
 */
/*
* 首页组件
* */
Vue.component('cus-tr',{
    props:["name","num","backlog","state","debt","surplus"],
    template:'<tr><td><a href="javascript:;" @click="cusInfo">{{name}}</a></td><td>{{num}}</td><td>{{backlog}}</td><td>{{state}}</td>'+
    '<td>{{debt}}</td><td>{{surplus}}</td><td align="center"><button type="button" class="am-btn am-btn-xs am-radius">记账</button>　'+
    '<button type="button" class="am-btn am-btn-xs am-radius">收款</button></td></tr>',
    methods:{
        cusInfo:function () {
            modalOpen("#myCus");
            window.parent.showS();
        }
    }
})
Vue.component('warning-one',{
    props:['name','num'],
    template:'<tr><td>{{name}}</td><td>{{num}}</td></tr>'
})
Vue.component('warning-two',{
    props:['name','date',"money","type"],
    template:'<tr><td>{{name}}</td><td>{{date}}</td><td>{{money}}</td><td>{{type}}</td></tr>'
})
Vue.component('warning-three',{
    props:['name','num',"date"],
    template:'<tr><td>{{name}}</td><td>{{num}}</td><td>{{date}}</td></tr>'
})
Vue.component('warning-four',{
    props:['date','num'],
    template:'<tr><td>{{date}}</td><td>{{num}}</td></tr>'
})
Vue.component('warning-five',{
    props:['type','thems','date','state'],
    template:'<tr><td>{{type}}</td><td>{{thems}}</td><td>{{date}}</td><td align="center"><a href="javascript:;" class="am-btn am-btn-xs am-radius s-btn">查看</a></td></tr>'
})
/*
* 部门管理组件
* */
Vue.component('dep-table',{
    props:['no','name','charge'],
    template:'<tr><td><label class="am-checkbox"><input type="checkbox" checked="checked" value="" data-am-ucheck >{{no}}</label></td><td>{{name}}</td><td>{{charge}}</td></tr>'
})
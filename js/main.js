/**
 * Created by Founder007 on 2017/10/13.
 */
$(function () {
    //动态菜单数据
    var treeData = [{
        text : "代理产品",
        state : "closed",
        children : [{
            text : "美国AP",
            state : "",
            attributes : {
                url : "http://www.baidu.com"
            },
            children : [{
                text: "500系列"
            },{
                text: "2700系列"
            },{
                text: "通用选件"
            },{
                text: "ATS系列"
            }]
        }, {
            text : "德国Klippel",
            attributes : {
                url : "http://www.baidu.com"
            },
            children: [{
                text: "QC系列"
            },{
                text: "RD系列"
            }]
        }, {
            text : "ACO",
        },{
            text: "QD",
            children: [{
                text: "980系列"
            },{
                text: "780系列"
            },{
                text: "882E系列"
            }]
        }
        ]
    },{
        text: "自有产品",
        state: "closed",
        children: [{
            text: "车载自动化系统"
        },{
            text: "蓝牙自动化测试系统"
        },{
            text: "仪器"
        }]
    },
        {
            text: "所有物料",
            state: "closed",
            children: [{
                text: "部品",
                children: [{
                    text: "电子料"
                },{
                    text: "五金"
                },{
                    text: "半成品"
                },]
            },{
                text: "包材"
            },{
                text: "附件"
            },{
                text: "辅料"
            }]
        },
        {
            text: "产品BOM",
            state: "closed",
            children: [{
                text: "部品",
                children: [{
                    text: "电子料"
                },{
                    text: "五金"
                },{
                    text: "半成品"
                },]
            },{
                text: "包材"
            },{
                text: "附件"
            },{
                text: "辅料"
            }]
        },
        {
            text: "工治具"
        },{
            text: "第三方检测"
        },{
            text: "自动化物料"
        },
    ];

    //实例化树形菜单
    $("#tree").tree({
        data : treeData,
        lines : true,
        onClick : function (node) {
            if (node.attributes) {
                Open(node.text, node.attributes.url);
            }
        }
    });

});
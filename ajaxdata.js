// var data = Mock.mock({
//     'list|1-10': [{
//         'id|+1': 1
//     }]
// });
// $('<pre>').text(JSON.stringify(data, null, 4))
//     .appendTo('body')

// 语法示例: http://mockjs.com/examples.html#RegExp
// 正则表达式生成参考网址: http://tools.jb51.net/regex/create_reg
// 配置mock模拟数据 // 需要等待一定的时间(20秒左右)
Mock.mock('http://g.cn', { //模拟数据请求地址
    'status': 200,
    'data|100': [{ //模拟数据|条数
        'id|+1': 1, //id|从1开始+1递增
        'name': '@cname', //姓名|随机姓名
        'sex|1': [ //性别
            '男',
            '女'
        ],
        'age|1-100': 100, //年龄|1(min)~100(max)之间的随机数
        'color': '@color', //随机颜色
        "number|1-100": 100, //随机数字|1到100之间,整数
        // "number|1-100.1-10": 1, //随机数字|整数部分1~100之间,小数部分1~10位随机小数
        // "number|+1": 202, //递增数|每次递增+202
        'sentence': '@csentence(15, 30)', //随机句子(3~5个单词)//没有前面的c就是英文
        'email': '@email', //电子邮箱
        'city': '@county(true)', //城市 (加了true就是省市区,不加就是区/县)
        'time': '@now', //当前时间
        "type|1": [ //随机多选1
            "A",
            "B",
            "C"
        ],
        'phone': /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17([0-3]|[5-9]))|(18[0-9]))\d{8}$/, //直接使用正则表达式,
        'identity': /\d{15}|\d{18}/, //身份证
        'wechat': /^[0-9a-zA-Z_]{5,15}$/, //微信号(5到18位)
        'openid': /^([0-9a-zA-Z]{32})$/, //openid
    }]
});

// 发送ajax请求
$.ajax({
    url: 'http://g.cn',
    dataType: 'json'
}).done(function (data, status, xhr) {
    console.log(data)
    $('<pre>').text(JSON.stringify(data, null, 4)).appendTo('body')
});
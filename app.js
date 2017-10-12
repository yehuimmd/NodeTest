var express = require('express');
var mongoose=require('mongoose');//引入模块
var path = require('path');
/*var _ = require('underscore');*///新更新的数据替换
var Book = require('./models/book');
var bodyParser = require('body-parser');
var swig = require('swig');

//创建web实例
var app = express();

var admin = require('./routes/admin');
var index = require('./routes/index');
var list = require('./routes/list');
var watch = require('./routes/watch');

//定义模板
app.engine('html', swig.renderFile);
//设置模板目录
app.set('views', './views');
//注册模板
app.set('view engine', 'html');
/*//取消模板缓存
swig.setDefaults({cache:false});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//express配置静态文件
app.use(express.static(path.join(__dirname, 'public')));

//各路由
app.use('/admin', admin);
app.use('/', index);
app.use('/list', list);
app.use('/watch', watch);

app.listen(3000, function(){
	console.log('app is listening at port 3000');
});

//连接数据库
mongoose.connect('mongodb://localhost:27017/book',function(err){
    if(err){
        console.log('数据库连接错误了哦');
    }else{
        console.log('数据库连接成功了！你很棒棒哦！');
        app.listen();
    }
});

//启动数据库
/*mongoose.connection.once('openUri', function(callback){
    console.log('数据库启动了');
});*/

module.exports = app;
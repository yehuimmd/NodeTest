var express = require('express');
//创建路有对象
var  router = express.Router();
var Book = require('../models/book');

router.get('/', function(req, res){
    res.render('index');
});

//统一返回格式
var responseData = null;
router.use(function(req,res,next){
    responseData={
        message:'',
        bookInfo: ''
    }
    next();
});

router.get('/index', function(req, res){
	Book.find(function(err, books){
		if(err){
			console.log(err);
		}else{
			responseData.message = '所有数据查询成功';
			responseData.bookInfo = books;
		    res.json(responseData);
		    return;
		}
	});
});

module.exports = router;
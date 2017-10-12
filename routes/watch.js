var express = require('express');
//创建路有对象
var  router = express.Router();
var Book =require('../models/book');

//统一返回格式
var responseData = null;
router.use(function(req,res,next){
    responseData={
        message:'',
        bookInfo: ''
    }
    next();
});

router.get('/', function(req, res){
    res.render('admin/watch');
});

//详情页/展示页
router.get('/look', function(req, res) {
	var id = req.query.id;
    //console.log(req.query.id);
    //res.json(id);
	Book.findOne({
		_id: id
	}).then(function(book){
		if(!book){
			responseData.message='该id在数据库中不存在！';
	        res.json(responseData);
	        return;
		}else{
            responseData.message='获取当前页面成功！';
	        responseData.bookInfo = book;
	        res.json(responseData);
            res.location('/watch');
	        return;
		}
	});
});


module.exports = router;
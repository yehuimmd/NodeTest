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
    res.render('admin/list');
});

//数据列表
router.get('/listnew', function(req, res){
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

//删除数据
router.delete('/delete', function(req, res){
	var id = req.query.id;
    
    console.log(id);
	if(id){
		Book.remove({
			_id: id
		}, function(err,book){
			if(err){
				console.log(err);
			}
            responseData.message = '数据删除成功';
		    res.json(responseData);
		    return;
		});
	}
});

module.exports = router;
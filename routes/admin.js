var express = require('express');
//创建路有对象
var  router = express.Router();
var Book =require('../models/book');

router.get('/', function(req, res){
    res.render('admin/admin');
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

//后台录入数据
router.post('/bookinfo', function(req, res){
/*    var id = req.body.book._id;*/
    var bookname = req.body.bookname;
    var username = req.body.username;
    var publishtime = req.body.publishtime;
    var bookinfo = req.body.bookinfo;
    var _book;

    if(bookname == '' || username == '' || publishtime == '' || bookinfo == ''){
        responseData.message = '需要输入全部的数据！';
        res.json(responseData);
        return;
    }
    
    //查看所录入的书本信息是否存在
    Book.findOne({
        bookname: bookname
    }).then(function(bookInfo){
        if(bookInfo){
            responseData.message = '该书已经存在，可对他进行更新';
            res.json(responseData);
            _book = new Book({    
               bookname: bookname,
               username: username,
               publishtime: publishtime,
               bookinfo: bookinfo,
            });
            return _book.save();
        }else{
            _book = new Book({    
               bookname: bookname,
               username: username,
               publishtime: publishtime,
               bookinfo:bookinfo,

            });
            return _book.save();
        }
    }).then(function(newBookInfo){
        responseData.message='数据录入成功！';
        responseData.bookInfo = _book;
        res.json(responseData);
        //res.redirect('/list.html');
    });
          
});

//更新数据
router.get('/update', function(req, res){
    var id = req.query.id;

    if(id){
        Book.findById({
            _id: id
        }, function(err,book){
            if(err){
                console.log(err);
            }
            responseData.message = '更新数据获取成功';
            responseData.bookInfo = book;
            res.json(responseData);
            return;
        });
    }
});

module.exports = router;

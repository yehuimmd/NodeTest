//模型
//用来初始化一个模式，成为一个有用的数据库对象
var mongoose = require('mongoose');
var BookSchema = require('../schema/book');
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
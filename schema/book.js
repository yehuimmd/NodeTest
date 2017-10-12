//模式
//这里面放与书相关的信息
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BookSchema = new Schema({
    bookname: String,
    username: String,
    publishtime: Number,
    bookinfo:String,
    meta:{
    	createAt:{
    		type: Date,
    		default: Date.now()
    	},
    	updateAt: {
            type: Date,
    		default: Date.now()
    	}
    }
});

//为模式添加方法
//每次保存一个book数据之前都会调用这个方法
BookSchema.pre('save', function(next){
	if(this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	}else{
		this.meta.updateAt = Date.now();
	}

	next();
});

//静态方法,通过模型实例化之后才会有效
BookSchema.static = {
	//取出目前数据库所有的数据
	fetch: function(cb){
        return this
            .find({})
            .sort('meta.updateAt')//通过时间顺序对数据进行排序
	        .exec(cb);//执行回调方法
	},
	findById: function(id, cb){
        return this
            .findOne({_id: id})
	        .exec(cb); 
	}
};

module.exports = BookSchema;
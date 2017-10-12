$(function(){

      $.ajax({
      	type: 'GET',
      	url: '/index',
      	data: {
      		//
      	},
      	dataType:'json',
      	success: function(data){
          var data = data.bookInfo;
      		/*console.log(data);*/
      		if(data.status === 0){
      			console.log(data.message);
      		}else{
              for(var i = 0; i < data.length; i ++){
                  var str = ' ';
                  str += '<img src="./images/picture.jpg">'
                         +'<span class="content">'
                            +'<p>书名：'+data[i].bookname+'</p>'
                            +'<p>作者：'+data[i].username+'</p>'
                            +'<p>出版时间：'+data[i].publishtime+'</p>'
                            +'<p>内容简介：'+data[i].bookinfo+'</p>'
                         +'</span>';
                  $('.bonner').append(str);
              }
             // console.log($('.bonner'));
      		}
      	},
      	error: function(err){
      		//console.log();
      	}
      });
});
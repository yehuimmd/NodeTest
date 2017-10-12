//查询字符串
function getSearchString(key) {
    // 获取URL中?之后的字符
    var str = location.search;
    str = str.substring(1,str.length);
   
    // 以&分隔字符串，获得类似name=xiaoli这样的元素数组
    var arr = str.split("&");
    var obj = new Object();
   
    // 将每一个数组元素以=分隔并赋给obj对象    
    for(var i = 0; i < arr.length; i++) {
        var tmp_arr = arr[i].split("=");
        obj[decodeURIComponent(tmp_arr[0])] = decodeURIComponent(tmp_arr[1]);
    }
    return obj[key];
}


$(function(){
    $('.butto').click(function(){
        if($('.bookinfo').find('[name="bookname"]').val() == '' 
          || $('.bookinfo1').find('[name="username"]').val() == ''
          || $('.bookinfo2').find('[name="publishtime"]').val() == ''
          || $('.bookinfo2').find('[name="bookinfo"]').val() == ''){
            alert('请输入所有需要的数据！');
        }else{
            $.ajax({
                type: 'POST',
                url: 'admin/bookinfo',
                data: {
                    id: getSearchString('id'),
                    bookname: $('.bookinfo').find('[name="bookname"]').val(),
                    username: $('.bookinfo1').find('[name="username"]').val(),
                    publishtime: $('.bookinfo2').find('[name="publishtime"]').val(),
                    bookinfo: $('.bookinfo2').find('[name="bookinfo"]').val()
                },
                dataType:'json',
                success: function(data){
                    var data = data.bookInfo;
                    if(data.status === 0){
                      console.log(data.message);
                    }else{
                       alert('数据已成功录入！');
                       //window.location.reload();
                    }
                },
                error: function(err){
                    console.log(err);
                }
            });
        }
    });  



       //点击更新按钮
    (function(){
        $.ajax({
            type: 'GET',
            url: 'admin/update',
            data: {
                id: getSearchString('id') 
            },
            dataType:'json',
            success: function(data){
                var data = data.bookInfo;
                //console.log(data);
                //window.location.href = 'admin';
                var bookname1 = $('.bookinfo input');
                var username1 = $('.bookinfo1 input');
                var publishtime1 =  $('.bookinfo2').find('[name="publishtime"]');
                var bookinfo1 = $('.bookinfo2').find('[name="bookinfo"]');
                bookname1.val(data.bookname);
                username1.val(data.username);
                publishtime1.val(data.publishtime);
                bookinfo1.val(data.bookinfo);
                /*$('.bonner').append(str);*/
                console.log(bookinfo1);
            },
            error: function(err){
                  console.log(err);
            }
        });
    })();    
});
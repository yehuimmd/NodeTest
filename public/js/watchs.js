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
    (function(){
        //var id = window.location.
        $.ajax({
            type: 'GET',
            url: 'watch/look?id='+getSearchString('id'),
            data: {
               // id: getSearchString('id')
            },
            dataType:'json',
            success: function(data){
                var data = data.bookInfo;
                //console.log(data);
                var str = ' ';
                str += '<img src="./images/picture.jpg">'
                       +'<span class="content">'
                          +'<p>书名：'+data.bookname+'</p>'
                          +'<p>作者：'+data.username+'</p>'
                          +'<p>出版时间：'+data.publishtime+'</p>'
                          +'<p>内容简介：'+data.bookinfo+'</p>'
                       +'</span>';
                $('.bonner').append(str);
            },
            error: function(){
                console.log(err);
            }
        });
    })();
});
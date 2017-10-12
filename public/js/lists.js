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
        $.ajax({
            type: 'GET',
            url: 'list/listnew',
            data: {
                //
            },
            dataType:'json',
            success: function(data){
                var data = data.bookInfo;
                if(data.status === 0){
                    console.log(data.message);
                }else{
                    for(var i = 0; i < data.length; i++){
                        var str = ' ';
                        str += '<ul class="listinfo1">'
                                    +'<li>'+data[i].bookname +'</li>'
                                    +'<li>'+data[i].username +'</li>'
                                    +'<li>'+data[i].publishtime +'</li>'
                                    +'<li class="look"><a href="./watch?id='+data[i]._id+'">'+'查看'+'</a></li>'
                                    +'<li class="update"><a href="./admin?id='+data[i]._id+'">'+'更新'+'</a></li>'
                                    +'<li class="add"><a href="admin">'+'添加'+'</a></li>'
                                    +'<li class="del"><a href="?id='+data[i]._id+'">'+'删除'+'</a></li>'
                                +'</ul>';
                        $('.content').append(str);
                    }
                    //console.log(data[i].id);
                    //删除功能
                    $('.del a').click(function(){
                         $.ajax({
                            /*cache: false,*/
                            type: 'DELETE',
                            url: 'list/delete?id='+getSearchString('id'),
                            data: {
                               // id: getSearchString('id')
                            },

                            dataType:'json',
                            success: function(data){
                                alert('删除成功！');
                                //window.location.reload();
                            },
                            error: function(err){
                                //console.log(err);
                            }
                        });
                    });
                }
            },
            error: function(err){
                console.log(err);
            }
        });
    })();
});
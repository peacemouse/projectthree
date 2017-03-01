/**
 * Created by Administrator on 2016/11/9 0009.
 */
function setMyCookie(key,val,mDate){
    var cookie = "";
    //键值不为空
    if(key && val){
        //键值可能包含空格
        cookie = encodeURIComponent(key)+ "=" + encodeURIComponent(val);
    }
    //判断是不是一个数字
    if(!isNaN(mDate)){
        var d = new Date();
        d.setDate( d.getDate()+ mDate);
        //追加时间
        cookie = cookie +";expires"+ "d";
    }
    document.cookie = cookie;
    //返回值是因设置好的cookie(已经完成URI解码)
    return decodeURIComponent(document.cookie);
}

//cookie存储的字符串
function getMyCookie(key){
    var cookie = decodeURIComponent(document.cookie);
        //先去掉空格 用正则表达式删除cookie字符串中的所有空格
        cookie = cookie.replace(/ /g,"");
        //以分号的形式分割字符串到数组中
        var arr1 = cookie.split(";");
        //遍历arr1数组 再以=形式分割字符串（）
       for(var i=0;i<arr1.length;i++){
           var arr2 = arr1[i].split("=");
           //找到了cookie中与key完全一致的键  返回这个键对应的值
           if(arr2[0]==key){
               return arr2[1];
           }
       }
       return;
}

//删除cookie
function removeCookie(key){
    document.cookie = decodeURIComponent(key)+";expires"+new Date();

}
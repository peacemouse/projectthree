$(function(){
	$(".work-list li").mouseenter(function(){
		$(this).css("border","solid 1px #EC3E7D").siblings("li").css("border","solid 1px #C69A62");
		$(this).children("a").css("color","#EC3E7D").parent().siblings().children().css("color","#C69A62");
		
	})
	$(".work-list li").mouseleave(function(){
		$(this).css("border","solid 1px #C69A62");
		$(this).children("a").css("color","#C69A62");
	})
	
	//当鼠标放在对应的图片上 显示对应的图片
	$(".goods-album li").mouseenter(function(){
		$(this).css("border","solid 5px #E5CBB2").siblings("li").css("border","solid 1px #DDDDDD");
		$(".goods1").attr("src",$(this).children().attr("src"));
	})
	
	//放大镜效果
	var smallArea = $("#smallArea");
	var goods1 = $(".goods1");
	var bgImg = $("#bigImg");
    var bgArea = $("#bigArea"); 
    
    var scale = bgImg.width() / goods1.width();
    
    $(document).mousemove(function(e){
		// 确定鼠标移动在smallImg范围内    smallArea显示  否则隐藏
		var minLeft = goods1.offset().left;
		var maxLeft = goods1.offset().left + goods1.width();
		var minTop = goods1.offset().top;
		var maxTop = goods1.offset().top + goods1.height();
//		console.log(e.pageX);
		if (e.pageX >= minLeft && e.pageX <= maxLeft && e.pageY >= minTop && e.pageY <= maxTop) {
			// 范围内smallArea显示
			smallArea.show();
			var x = e.pageX-20;
			var y = e.pageY-20;
			// 左右边距判断
			if (x <= 0) {
				x = 0;
			}else if(x >= 200){
				x = 200;
			}
			// 上下边距判断
			if (y <= 0) {
				y = 0;
			}else if(y >= 500){
				y = 500;
			}
			
			smallArea.css({left:x,top:y});
			// bgImg 跟着移动
			bgImg.css({left:-x*scale,top:-y*scale});
		}else{
			smallArea.hide();
		}
		
		
		//减法
		var num = $(".number").val();
		$(".jian").click(function(){
			if(num >1){
				num--;
			}
			$(".number").val(num);
		})
		//加法
		$(".jia").click(function(){
			num++;
			$(".number").val(num);
		})

	})
    
    
    //加入购物车
    $(".button1").click(function(){
    	
    	
    	var $name = $(".pro-name").text();
    	var $deatil =  $(".pro-title2").text();
    	var $num = $(".number").val();
    	var $price = $(".pre-price").text();
    	var $img = $(".goods1").attr("src");
    	
    	var obj1 =  JSON.stringify([$name,$deatil,$num,$price,$img]);
    	
    	
//  	var data = $name + "|" + $price +"|" +$num +"|" + $num +"|" + $img;
    	
    	$.cookie("aaaaaa",obj1,{expires:7,path:'/'})
//  	var str = decodeURIComponent(document.cookie);
    	window.location.href="car-go.html";
    })





//var serverTime = * 1000; //服务器时间，毫秒数 
$(function(){ 
var dateTime = new Date(); 
var difference = dateTime.getTime()//客户端与服务器时间偏移量 
    
setInterval(function(){ 
   $(".time-dao").each(function(){ 
    var obj = $(this); 
    var endTime = new Date(1482019200000); 
    var nowTime = new Date(); 
    var nMS=endTime.getTime() - nowTime.getTime(); 
    var myD=Math.floor(nMS/(1000 * 60 * 60 * 24)); //天 
    var myH=Math.floor(nMS/(1000*60*60)) % 24; //小时 
    var myM=Math.floor(nMS/(1000*60)) % 60; //分钟 
    var myS=Math.floor(nMS/1000) % 60; //秒 
//  var myMS=Math.floor(nMS/100) % 10; //拆分秒 
    if(myD>= 0){ 
      var str = myD+"天"+myH+"小时"+myM+"分"+myS+"秒"; 
    }else{ 
      var str = "已结束！";  
    } 
    obj.html(str); 
   }); 
}, 100); //每个0.1秒执行一次 
});


    
    
})

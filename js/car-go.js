$(function(){
	if($.cookie("goodList")){
		 var a = 0;
		 var b = 0;
		var arr =JSON.parse($.cookie("goodList"));      
		
		
        $.each(arr,function(index,value){
//     	console.log(arr);
       	var div = $("<li></li>");
        div.addClass("contain-div"); 
        
    	var bsa = value["num"];
    	var inputgoods =$("<input type='checkbox' />");
        inputgoods.addClass("checkgoods");
   	     //显示的商品图片   
   	    var img = $("<img>").attr("src",value["src"]);
   	        img.addClass("img");
   	    //显示的商品名字
   	    var h4 = $("<h5>" + value["title1"]+"</h5>");
   	        h4.addClass("checkgoods-detail");
   	    //价格
   	    var span = $("<span>" +value["price"]+".0</span>");
   	        span.addClass("checkgoods-price");
   	        
   	    //减法按钮
   	    var jianbutton =$("<span>-</span>");
   	        jianbutton.addClass("jianbutton");
   	        
   	    var inputbutton = $("<input type='text' value='" + parseInt(value['num']) + "' />");
   	        inputbutton.addClass("inputbutton");

   	    
   	      	    //加法按钮  
   	    var jiabutton  =$("<span>+</span>");
            jiabutton.addClass("jiabutton"); 	  
            
        //小计
        var smallcount =$("<span>" + value['num']*value['price'] +".00</span>");
            smallcount.addClass("smallcount");
            
   	     
   	    //创建删除标签
   	    var spana = $("<span><a>删除</a></span>" );
   	        spana.addClass("spana");
   	        
   	        
   	           	   
   	    div.append(inputgoods);
   	    div.append(img);
   	    div.append(h4);
   	    div.append(span);
   	    div.append(jianbutton);
   	    div.append(inputbutton);
   	    div.append(jiabutton);
// 	    smallcount.append(span);
   	    div.append(smallcount);
   	    div.append(spana);
 
   	    $(".goods-jiesuan").append(div); 
   	    
   	    
   	   //商品的数量
	    a+= parseFloat(value['num']);    
   	    $(".total").text(a);
   	    
   	    //价格
   	    b+= parseFloat(value['price'])*parseFloat(value['num']);
   	    $(".money").text(b);
   	   

       })
        
        
        
        
//        减法和加法
//      var num = parseInt($(".inputbutton").val());
        
		$(".jianbutton").click(function(){
		
				var num = parseFloat($(this).parent().find(".inputbutton").val());
			if(num >1){	
			
				
				
				num--;
				$(this).parent().find(".smallcount").text(parseFloat($(this).parent().find(".checkgoods-price").text())*(num)+'.00');
				a--;
				b = parseFloat($(".money").text()) - parseFloat($(this).parent().find(".checkgoods-price").text());
				
				
			$(this).parent().find(".inputbutton").val(num);
			//总计商品的数量
			 $(".total").text(a);
			//商品的价格
			 $(".money").text(b);
			 
			 
			 console.log($(this).parent().index()-1);
			 var i = $(this).parent().index()-1;
			 arr[i].num--;
				$.cookie("goodList",JSON.stringify(arr),{expires:7});
				
			}
			
			 
		})		
   	    $(".jiabutton").click(function(){
   	    	var num = parseFloat($(this).parent().find(".inputbutton").val());
   	    	num++;
            $(this).parent().find(".smallcount").text(parseFloat($(this).parent().find(".checkgoods-price").text())*(num) +'.00');
			$(this).parent().find(".inputbutton").val(num);
			
			//总计商品的数量
			
				a++;
				b = parseFloat($(".money").text()) + parseFloat($(this).parent().find(".checkgoods-price").text());

			  //商品的价格
			$(".total").text(a);
			$(".money").text(b);
			
            console.log($(this).parent().index()-1);
			 var i = $(this).parent().index()-1;
			 arr[i].num++;
				$.cookie("goodList",JSON.stringify(arr),{expires:7});
			
			
		}) 
 	      
   	    //点击删除按钮删除整条商品
   	    $(".spana").click(function(){
   	     
   	       var idx = $(this).parent().index()-1;
   	       arr.splice(idx,1);
		   $.cookie("goodList",JSON.stringify(arr),{expires:7});
   	       $(this).parent().remove();
   	    })

        //点击结账
        $(".payit").click(function(){
        	window.location.href="index.html";
        })
        
        //清空购物车
        $(".null-cart").click(function(){
        	$(".cart-tips").css("display","none");
        	$(".goods-jiesuan").css("display","none");
        	$(".image-dingdan").css("display","none");
        	$(".dingdan-message").css("display","none");
        	$(".small-page").css("display","block");
        	$.cookie("goodList",arr,{expires:0});
        })        
        
        
        
       
        $(".login").text($.cookie("user2"));
       
	}
   
})
	$(function(){
		//每日必看的json数据
		$.ajax({
			type:"get",
			url:"data.json",
			dataType:"json",
			success:function(data){
//				console.log(data);
				$.each(data,function(index,value){
					var div = $("<div></div>");
					div.addClass("big-div");
						var img = $("<img>").attr("data-original",value.src);
						    img.addClass("lazy");
						var p = $("<p><a>" + value.title +"</a></p>");
						var name = $("<p>" +value.name+ "</p>");
						var  detail = $("<P><a>" +value.detail+"</a></p>");
						var button1 =$("<button><a  href='shopping-car.html'>" +"立即抢购" +"</a></button>"); 
						//图片懒加载
					    img.lazyload({
						    effect:"fadeIn"
						});
						
						 
						p.addClass("title");
						name.addClass("name");
						detail.addClass("detail");
						button1.addClass("crazy-go");
					//给加入购物车按钮添加事件
					    $(".crazy-go").mouseenter(function(){
						   $(this).css("background","#C53265"); 	
						})
					    
					    $(".crazy-go").mouseleave(function(){
					    	$(this).css("background","#E93B78");
					    })
						
						div.append(p);
						div.append(img);
						div.append(name);
						div.append(detail);
                        div.append(button1);
					$(".must-check").append(div);
				})
			}
		})
		
        //限时特卖的json数据
		$.get("data2.json",function(response){
//			console.log(response);
			$.each(response,function(index,value){
				var divImage = $("<li></li>");
				    divImage.addClass("divImage");
				   
			    var img = $("<img>").attr("data-original",value.src);	
			        img.addClass("lazy");
			    
			    //图片懒加载
			     img.lazyload({
				    effect:"fadeIn"
				});
					
			    var time1 = $("<span>1482019200000</span>");
			        time1.addClass("time");
			        
			    var content = $("<span><a>" +value.intro +"</a></span>");
			        content.addClass("content-goods");
			        
			    var title1 =$("<p><a>" +value.title1+ "</a></p>");
			        title1.addClass("title1");
			        
			    var price = $("<span><a>"+ value.price +"</a></span>");
			        price.addClass("price");
			        
			    var sold = $("<p><a>" +value.sale+"</a></p>");
			        sold.addClass("sold");
			        
			        var dollar = $("<span>¥</span>" );
			            dollar.addClass("dollar");
			        
			        var button2 =$("<button>" +"<a href='goods-detail.html'>马上抢</a>" +"</button>");
			            button2.addClass("gogo");
			          
			        var button5 = $("<button>加入购物车</button>");
			            button5.addClass("button5");
			            		
			   		//给加入购物车按钮添加事件
				    $(".gogo").mouseenter(function(){
					   $(this).css("background","#C53265"); 	
					});
				   
				   
				   
				   $(".gogo").click(function(){
				   	if($.cookie("user2")){
				   		window.location.href="goods-detail.html";
				   	}else{
//				       alert("请先登录");
				    	window.location.href="login.html";
				    }	
				   })
				   								
				    
				    $(".gogo").mouseleave(function(){
				    	$(this).css("background","#E93B78");
				    })
					            
			            
			    divImage.append(img);
			    divImage.append(time1);
			    divImage.append(content);
			    divImage.append(title1);
			    divImage.append(dollar);
			    divImage.append(price);
			    divImage.append(sold);
			    divImage.append(button2);
			    divImage.append(button5);
			    
			    $(".time-sale2").append(divImage);
			    
			    //点击button3把对应的数据存到cookie里面 并在里面动态的创建li
			   var offset = $(".shopping-list").offset();
//			   console.log(offset);
			   divImage.find(".button5").click(function(){
				   	//点击按钮飞到购物车
				   	var button5 = $(this);
				   	var img = button5.parent().find('img').attr('src');
//				   
				   	var flyer = $('<img class="u-flyer" src="'+img+'">');
                    var lazytop  =$(this).parent().find("img").offset().top;
                    var lazyleft = $(this).parent().find("img").offset().left;
                        console.log(lazytop,lazyleft);
//				   	console.log(event.pageX),
//				   	console.log(event.pageY)
				   	flyer.fly({
				   		//起点
				   		start:{
				   			left:lazyleft,
				   			top:lazytop	
				   		},
				   		end:{
				   			left:offset.left,
				   			top:offset.top,
				   			width:0,
				   			height:0
				   		},
				   		onEnd:function(){
				   			console.log("到达终点");
	
				   		}
				   	})
			   	   
			   	    
			   	    
			    	var idx = $(this).parent().index()-1;
//			    	console.log($(this).parent());
//			    	console.log(idx,response[idx]);//被点击按钮对应的数据
			    	
			    	var str = $.cookie("goodList");
			    	var arr = str?JSON.parse(str):[];
			    	
			    	var exist = false;
			    	$.each(arr,function(index,value){
			    		if(value["title1"] == response[idx]["title1"]){
			    			exist = true;
			    		}
			    	});
			    	if(!exist){
			    		arr.push(response[idx]);
			    		
			    		$.cookie("goodList",JSON.stringify(arr),{expires:7});
			    	}
//			    	console.log($.cookie("goodList"));
			    	
			   })    
				   
			})
		})
		
		
		var str = $.cookie("goodList");
		var arr = str?JSON.parse(str):[];
		$.each(arr,function(index,value){
			
//			console.log(index,value);
			var cartshowli = $("<li></li>");
			    cartshowli.addClass("cartshowli");
			
			var cartshowimg = $("<img>").attr("src",value["src"]);
			    cartshowimg.addClass("cartshowimg");
			
			var cartshowspan = $("<span>" +value["title1"]+ "</span>");
			    cartshowspan.addClass("cartshowspan");
			    
			var cartshowprice = $("<span><strong>￥"+value["price"]+"</strong></span>");
			    cartshowprice.addClass("cartshowprice");
			
			var cartshowi = $("<i style='background:url(image/mainimage/icon/delete.png)'></i>");
			    cartshowi.addClass("cartshowi");
			   
			cartshowli.append(cartshowimg);
			cartshowli.append(cartshowspan);
			cartshowli.append(cartshowprice);
			cartshowli.append(cartshowi);
			
			$(".cargo-show").append(cartshowli);
				
			})

        	//点击删除icon
		$(".cartshowi").click(function(){
			var idx = $(this).parent().index()-3;
//			console.log(idx);
			arr.splice(idx,1);
			$.cookie("goodList",JSON.stringify(arr),{expires:7});
			console.log($.cookie("goodList"));
			$(this).parent("li").remove();
			  
		

		})

		
	
	//倒计时
$(function(){ 
  var dateTime = new Date(); 
  var difference = dateTime.getTime();//客户端与服务器时间偏移量 
    
  setInterval(function(){ 
   $(".time").each(function(){ 
// 	console.log($(".time").text());
    var obj = $(this); 
    var endTime = new Date(1482019200000); 
//  console.log(endTime);
    var nowTime = new Date(); 
    var nMS=endTime.getTime() - nowTime.getTime(); 
//  console.log("结束时间"+endTime.getTime());
// console.log("当前时间"+nowTime.getTime());
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


//
//		$(".list-sort>li").mouseenter(function(){
////			console.log("aaa");
//			$(this).css("background","white");
//		});
//		$(".list-sort>li").mouseleave(function(){
//			$(this).css("background","#F2F2F2");
//		});
//		$(".list-sort li:first").mouseenter(function(){
//			$(".sort-count").css("display","block").animate({height:150},500);
//			
//		})
//		$(".list-sort li:first").mouseleave(function(){
//			$(".sort-count").hide();
//			
//		})
//		$(".sort-count").mouseleave(function(){
//			$(".sort-count").hide().css("border-top","none");
//		})
//		//购物车下拉列表
//		$(".shopping").mouseenter(function(){
//			$(".shopping-div").show();
//		})
//	
//		$(".shopping").mouseleave(function(){
//			$(".shopping-div").hide();
//		})
//		//微信微博下拉列表
//		$(".weibo-logo").mouseenter(function(){
//			$(".weibopicture").show();
//		})
//	
//		$(".weibo-logo").mouseleave(function(){
//			$(".weibopicture").hide();
//		})
//		
//		
//		//微信下拉列表
//		$(".wechat-logo").mouseenter(function(){
//			$(".weixinpicture").show();
//		})
//	
//		$(".wechat-logo").mouseleave(function(){
//			$(".weixinpicture").hide();
//		})
//		
//		
//		$(".last-list").mouseenter(function(){
//			$(".brand").css("display","block");
//		})
//		
//	    $(".last-list").mouseleave(function(){
//			$(".brand").css("display","none");
//		})
//		
		//二级菜单栏动画 
		$(".list1-ti").mouseenter(function(){
//			console.log($(this).children().eq(1));
			$(this).css("background","white").css("border-top","none");
			$(this).children().eq(1).css("color","#FA3778");
			$(this).children().eq(3).show().css("border-left","none");
		})
		
		$(".list1-ti").mouseleave(function(){
			$(this).css("background","#FA3778").css("border-top","dashed 1px #FE7DAB");
			$(this).children().eq(1).css("color","white");
			$(this).children().eq(3).hide();
		})
	
	//我的账户动画
	$(".count-logo").mouseenter(function(){
		$(this).css("background","#EC3E7D");
		$(".hide-div").fadeIn("fast").animate({left:'-90px'},"fast");
	})
	
	$(".count-logo").mouseleave(function(){
		$(this).css("background","#4C4C4C");
		$(".hide-div").animate({left:'-140px'},'fast').fadeOut("fast");
	})
	
	//购物车动画
	$(".shopping-list").mouseenter(function(){
		$(this).css("background","#EC3E7D");
	});
	$(".shopping-list").mouseleave(function(){
		$(this).css("background","#4C4C4C");
	})
	//我的收藏动画
	$(".shoucang-logo").mouseenter(function(){
		$(this).css("background","#EC3E7D");
		$(".hide-div2").fadeIn("fast").animate({left:'-90px'},"fast");
	})
	
	$(".shoucang-logo").mouseleave(function(){
		$(this).css("background","#4C4C4C");
		$(".hide-div2").animate({left:'-140px'},"fast").fadeOut("fast");
	})
	//浏览记录
	$(".liulan-logo").mouseenter(function(){
		$(this).css("background","#EC3E7D");
		$(".hide-div3").fadeIn("fast").animate({left:'-90px'},"fast");
	})
	
	$(".liulan-logo").mouseleave(function(){
		$(this).css("background","#4C4C4C");
		$(".hide-div3").animate({left:'-140px'},"fast").fadeOut("fast");
	})
	
	//在上客服
	$(".xianshang-logo").mouseenter(function(){
		$(this).css("background","#EC3E7D");
		$(".hide-div4").fadeIn("fast").animate({left:'-90px'},"fast");
	})
	
	$(".xianshang-logo").mouseleave(function(){
		$(this).css("background","#4C4C4C");
		$(".hide-div4").animate({left:'-140px'},"fast").fadeOut("fast");
	})
	
	//微信动画
	$(".code-logo").mouseenter(function(){
		$(this).css("background","#EC3E7D");
		$(".hide-div5").fadeIn("fast").animate({left:'-140px'},"fast");
	})
	
	$(".code-logo").mouseleave(function(){
		$(this).css("background","#4C4C4C");
		$(".hide-div5").animate({left:'-180px'},"fast").fadeOut("fast");
	})
	
		//轮播图动画
		
function imgReload()

{

	var imgHeight = 0;

	var wtmp = $("body").width();

	$("#b06 ul li").each(function(){

        $(this).css({width:wtmp + "px"});

    });

	$(".sliderimg").each(function(){

		$(this).css({width:wtmp + "px"});

		imgHeight = $(this).height();

	});

}


	
	$(window).resize(function(){imgReload();});
	
	
	
	$(document).ready(function(e) {
	
		imgReload();
	
	    var unslider06 = $('#b06').unslider({
	
			dots: true,
	
			fluid: true
	
		}),
	
		data06 = unslider06.data('unslider');
	
		
	
		$('.unslider-arrow06').click(function() {
	
	        var fn = this.className.split(' ')[1];
	
	        data06[fn]();
	
	    });
	
	});

    //点击scrolltop 按钮回到顶部
    $(".scrolltop-logo").click(function(){
    	  $("html,body").animate({scrollTop:0}, 500);
    })
    
    //楼梯层效果
    $(".floor-list li").mouseenter(function(){
    	$(this).css("background","#EC3E7D").siblings("li").css("background","white");
    })
    
//     console.log($(document).scrollTop());
    
    $(window).scroll(function(){
    	var top = $(this).scrollTop();
    	if( top>=700 ){
    		$(".floor").show();
    	}
    	if(top >= 2700){
    		$(".floor").show();
    		$(".floor li:first").css("background","white");
    		$(".floor li").eq(1).css("background","#EC3E7D");
    	}
    	
    	
    	else{
    		$(".floor").hide();
    		$(".floor li:first").css("background","white");
    	}
//  	console.log(top);
    })
    $(".floor li:first").click(function(){
    	$("html,body").animate({scrollTop:700}, 500);
    })
    
    $(".floor li").eq(1).click(function(){

    	$(this).css("background","#EC3E7D").siblings().css("background","white");
    	$("html,body").animate({scrollTop:2700}, 500);
    })
    
    
//  var time3 = Date.parse("2016-12-18");
//  console.log(time3);
    
    
    //购物车
    $(".shopping-icon").click(function(){
    	$(".cargo-show"). css("display","block");
    })
    
    //点击close  icon 关掉购物车 
    $(".close").click(function(){
    	$(".cargo-show").css("display","none");
    })
    
    
    
    var a = b =1;c = d =[1],f={e:1};
    a = 2, d[0] = 2, f.e = 3;
    console.log(a,b,c,d,f);
   
    
 
}) 

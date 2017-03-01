$(function(){
			$(".list-sort>li").mouseenter(function(){
//			console.log("aaa");
			$(this).css("background","white");
		});
		$(".list-sort>li").mouseleave(function(){
			$(this).css("background","#F2F2F2");
		});
		$(".list-sort li:first").mouseenter(function(){
			$(".sort-count").css("display","block").animate({height:150},500);
			
		})
		$(".list-sort li:first").mouseleave(function(){
			$(".sort-count").hide();
			
		})
		$(".sort-count").mouseleave(function(){
			$(".sort-count").hide().css("border-top","none");
		})
		//购物车下拉列表
		$(".shopping").mouseenter(function(){
			$(".shopping-div").show();
		})
	
		$(".shopping").mouseleave(function(){
			$(".shopping-div").hide();
		})
		//微信微博下拉列表
		$(".weibo-logo").mouseenter(function(){
			$(".weibopicture").show();
		})
	
		$(".weibo-logo").mouseleave(function(){
			$(".weibopicture").hide();
		})
		
		
		//微信下拉列表
		$(".wechat-logo").mouseenter(function(){
			$(".weixinpicture").show();
		})
	
		$(".wechat-logo").mouseleave(function(){
			$(".weixinpicture").hide();
		})
		
		
		$(".last-list").mouseenter(function(){
			$(".brand").css("display","block");
		})
		
	    $(".last-list").mouseleave(function(){
			$(".brand").css("display","none");
		})
//	    console.log();
	    $(".login").text($.cookie("user2"));
})

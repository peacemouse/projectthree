	$(function(){
		$.idcode.setCode();
		
		
		$(".span-user").mouseenter(function(){
			$(this).css("border","solid 1px #F9A0B4");
		})
		$(".span-user").mouseleave(function(){
			$(this).css("border","solid 1px #CCCCCC");
		})	
		
		$(".span-psd").mouseenter(function(){
			$(this).css("border","solid 1px #F9A0B4");
		})
		$(".span-psd").mouseleave(function(){
			$(this).css("border","solid 1px #CCCCCC");
		})	
		
		$(".psd-again").mouseenter(function(){
			$(this).css("border","solid 1px #F9A0B4");
		})
		$(".psd-again").mouseleave(function(){
			$(this).css("border","solid 1px #CCCCCC");
		})	
		
	    $(".show-border").mouseenter(function(){
			$(this).css("border","solid 1px #F9A0B4");
		})
		$(".show-border").mouseleave(function(){
			$(this).css("border","solid 1px #CCCCCC");
		})	
		
		var flag1 = false; 
		var flag2 = false;
		var flag3 = false; 
		var flag4 = false; 
		//邮箱/手机正则验证
		$(".user").blur(function(){
           if($(".user").val().length == 0){
           	 $(".tishi1").show();
            }else{
	           	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	           	var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	           	var value1 = $(".user").val();
	           	var yanzheng1 =myreg.test(value1);
	           	var yanzheng2 =filter.test(value1);
	           	if(!yanzheng1 && !yanzheng2){	
	                flag1 = false;
	           		$(".tishi1").show();
	           		$(".tishi1").text("手机/邮箱格式不对");
	           	}else{
	           		flag1 = true;
	           		$(".tishi1").hide();
	           	}
	         
            }  
            
		})
		
		//密码正则验证 
		$(".psd").blur(function(){
			if($(".psd").val().length == 0){
				$(".tishi2").show();
			}else{
				var i = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				var value = $(".psd").val();
				var yanzhen4 = i.test(value);
				if(!yanzhen4){
					flag2 = false;
					 $(".tishi2").show();
					$(".tishi2").text("密码长度在6-16之间并且要字母和数字组合");
				}else{
					flag2 =true;
					$(".tishi2").hide();
				}
			}
			
			
		})
	    $(".sure-psd").blur(function(){
	    	if($(".sure-psd").val().length == 0){
	    		$(".tishi4").show();
	    	}else{
	    		
	    		if($(".sure-psd").val() !== $(".psd").val()){
	    			flag3 = false;
	    			$(".tishi4").show();
	    			$(".tishi4").text("密码与确认密码不符合 请重新输入");
	    		}else{
	    			flag3 = true;
	    			$(".tishi4").hide();
	    		}
	    	}
	    })
	    //验证码校正
	    
	    $(".txtVerification").blur(function(){
	    	if($(".txtVerification").val().length == 0){
	    		$(".tishi3").show();
	    	}else{
	    		
	    		if($(".txtVerification").val() !== $("#idcode").text()){
	    			flag4 = false;
	    			$(".tishi3").show();
	    			$(".tishi3").text("验证码不一致");
	    		}else{
	    			flag4 = true;
	    			$(".tishi3").hide();
	    		}
	    	}
	    })
	    
	    

	    
	    $(".submit").click(function(){
	    	if(!flag1 && !flag2 && !flag3 && !flag4){
	    		alert("信息错误，重新填写")
	    	}else{
	    		alert("注册成功");
	    		
	    	    var user =$(".user").val();
			    var psd =$(".psd").val();
			    
			    var jieshou = JSON.stringify([user,psd]);
//			    console.log(jieshou);
	    		$.cookie("user",jieshou,{expires:7,path:'/'});
//	    		console.log($.cookie("user"));
	    		window.location.href="login.html";
	    	}
	    })
	    

		
	})
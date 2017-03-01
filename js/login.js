$(function(){
	  if($.cookie("user")){
//	  	console.log($.cookie("user")); 
	  	var arr = JSON.parse($.cookie("user"));
	  	console.log(arr);
	  	$(".user").val(arr[0]);
	  	
	  	var flag = false;
	  	$(".psd").blur(function(){
//	  		console.log('aa');
		  	if($(".psd").val() == arr[1]){
		  		flag = true;
		  		
		  	}else{
		  		flag = false;
		  		alert("密码不正确");
		  	}
	  	})

		$(".span-denglu").click(function(){
			if(flag == true){
//			console.log("Aaa");
	  		alert("登录成功");

            var arr1 = arr[0];
	  		$.cookie("user2",arr1,{expires:7});
	  		console.log($.cookie("user2"));
	  		window.location.href="index.html";
			}else{
//		  		flag = false;
		  		alert("密码不正确");
		  	}

	  		
	  	})
	  	
//	  	$(".login").text($(".user").val());
	  }	
	  	
	

	  
	
		
	})
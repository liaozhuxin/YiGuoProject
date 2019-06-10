			//01.布局
			//02. input  blur是焦点
			//    正则表达式 reg
			//    reg.test     input value
			//03.通过判断校验的布尔值，控制提示信息 span 显示隐藏
			

			
			$('.input').blur(function(){
				//取到input的value值，用.val()
				var index = $('.input').index(this);
				var value = $('.input').eq(index).val();
				var reg;
				switch(index){
					case 0:
					  reg=/(?<![a-zA-Z0-9])([a-zA-Z0-9]{" + YZMLENGTH + "})(?![a-zA-Z0-9])/;
					  break;
					case 1:
					  reg=/^((17[0-9])|(14[0-9])|(13[0-9])|(15[^4,\\D])|(18[0,5-9]))\\d{8}$/;
					  break;
					case 2:
					  reg=/^\d{4}$/;
					  break;	
					case 3:
					  reg=/^\w{6,12}$/;
					  break;
					case 4:
						validate();
						break;
					case 5:
					  reg=/^\d{4}$/;
					  break;
				}
				checked( reg,value,index )
			})
			
			function checked( reg,value,index ){
				var resulet = reg.test(value);
				console.log(value,resulet,reg);
				if(resulet==false){
					$('.error').eq(index).css('color','red');
				}else{
					$('.error').eq(index).css('color','#fff');
				}
			}
			function validate() {			      
			    var pwd = $("#Key").val();
			    var pwd1 = $("#sKey").val();
			<!-- 对比两次输入的密码 -->
			    if(pwd == pwd1)
			     {
			        $("#errorKey").html("两次密码相同");
			         $("#errorKey").css("color","green");
			     }
			else {
			        $("#errorKey").html("两次密码不相同");
			         $("#errorKey").css("color","red") 
			      }
			}
			
			
//			
//			
//			
//			$(".btn-green-l").eq(0).click(function(){
//				if($('.input').val() == '' ){
//					
//				}
//			})
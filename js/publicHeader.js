$(function(){
	//菜单栏事件
	$('header').on("click","#topNavMenuBoxFather",function(){
		var oValue = $('#topNavMenuBox').attr('value');
					console.log(oValue);
					if(oValue == 1){
						$('#topNavMenuBox').attr("value","0");
						$('#topNavMenuBox').css('display','none');
					}
					if(oValue == 0){
						$('#topNavMenuBox').attr("value","1");
						$('#topNavMenuBox').css('display','block');
					}
	})
	
	//隐藏显示
	$(document).on("mouseover","#topNavMenuBoxFather",function(){
			var oValue = $('#topNavMenuBox').attr('value');
			if(oValue == 0){
				$('#topNavMenuBox').css('display','block');
			}
	})
	$(document).on("mouseout","#topNavMenuBoxFather",function(){
			var oValue = $('#topNavMenuBox').attr('value');
			if(oValue == 0){
				$('#topNavMenuBox').css('display','none');
			}
	})
	
	//吸顶+回到顶部按钮显示隐藏
	$(window).scroll(function() { 
		scro = $(document).scrollTop();
		if(scro>90){
			$('.headerSearch2').eq(0).css('display','block');
		}else{
			$('.headerSearch2').eq(0).css('display','none');	
		}
	})
	//左移动画
	$('header').on("mouseover",".topNavMenuNameList",function(){
		$('.topNavMenuNameList').eq($('.topNavMenuNameList').index($(this))).css('transform','translateX(10px)');
	})
	$('header').on("mouseout",".topNavMenuNameList",function(){
		$('.topNavMenuNameList').eq($('.topNavMenuNameList').index($(this))).css('transform','none');
	})
	
})


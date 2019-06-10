$(function(){
	//回到顶部++锚点
	$('footer').on("click","#backTop",function(){
		$(document).scrollTop(0);
	})
	$(window).scroll(function() { 
		scro = $(document).scrollTop();
		if(scro>200){
			$('#backTop').css('display','block');				
		}else{
			$('#backTop').css('display','none');					
		}
	})
})
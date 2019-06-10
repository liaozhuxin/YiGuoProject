$(function(){
			//01.布局
			//02.监听鼠标在 spic上移动的事件  
			//   获取到鼠标的坐标 改变 square的位置
			//   判断 left top
			
			$('#picBox').mousemove(function(event){
				//console.log( event.clientX,event.clientY )
				//console.log( $('#spic').offset().left,$('#spic').offset().top)								
				var nowleft = Math.floor(event.pageX - $('#picBox').offset().left)-100;
				var nowtop  = event.pageY - $('#picBox').offset().top-100;
//				console.log( nowleft,nowtop )
				$('#square').css('display','block');
				$('#hugePic').css('display','block');
				if(nowleft<0){
					nowleft = 0 ;
					$('#square').css('display','none');
					$('#hugePic').css('display','none');
				}
				if(nowleft>250){
					nowleft = 250 ;
					$('#square').css('display','none');
					$('#hugePic').css('display','none');					
				}				
				if(nowtop<0){
					nowtop = 0 ;
					$('#square').css('display','none');
					$('#hugePic').css('display','none');
				}				
				if(nowtop>250){
					nowtop = 250 ;
					$('#square').css('display','none');
					$('#hugePic').css('display','none');
				}				
				
				$('#square').css({
					'top':nowtop,
					'left':nowleft
				})
				$('#huge').css({
					'top':-nowtop*2,
					'left':-nowleft*2
				})				
				
				
			})
			$('#Introduce').click(function(){
				$('#Introduce').addClass('goodsIntroduce');
				$('#goodsAppraise').removeClass('goodsIntroduce');
			})
			$('#goodsAppraise').click(function(){
				$('#goodsAppraise').addClass('goodsIntroduce');
				$('#Introduce').removeClass('goodsIntroduce');
			})
})
			
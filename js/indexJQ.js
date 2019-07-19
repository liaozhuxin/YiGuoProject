$(function(){
//	//左移动画
//	$('.topNavMenuNameList').hover(function(){
//		$('.topNavMenuName').eq($(this).index()).fadeIn();
//	})
//	$('.topNavMenuNameList').mouseleave(function(){
//		$('.topNavMenuName').eq($(this).index()).fadeOut();
//		
//	})
	
	
	$('.moveRight').mouseover(function(){
		$(this).children('img').css('transform','translateX(3px)')
	})
	$('.moveRight').mouseout(function(){
		$(this).children('img').css('transform','none')
	})
	
	$('.sideBarMenuBtnList').mouseenter(function(){
		$(this).children('.sideBarMenuBtnText2').css({'display':'block','text-decoration': 'none','color':'white'})
	})
	$('.sideBarMenuBtnList').mouseleave(function(){
		$(this).children('.sideBarMenuBtnText2').css('display','none')
	})
//	$(document).Element.scrollTop = $(document).scroll;
	$(document).scroll(function(){
		 var scroH = $(document).scrollTop();
		 console.log(scroH)
		 if(scroH >= 800 && scroH < 1300){
		 	$('.sideBarMenuBtnList').eq(0).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(0).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 1300 && scroH < 1800){
		 	$('.sideBarMenuBtnList').eq(1).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(1).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 1800 && scroH < 2300){
		 	$('.sideBarMenuBtnList').eq(2).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(2).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 2300 && scroH < 2800){
		 	$('.sideBarMenuBtnList').eq(3).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(3).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 2800 && scroH < 3300){
		 	$('.sideBarMenuBtnList').eq(4).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(4).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 3300 && scroH < 3800){
		 	$('.sideBarMenuBtnList').eq(5).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(5).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 3800 && scroH < 4300){
		 	$('.sideBarMenuBtnList').eq(6).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(6).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 4300 && scroH < 4800){
		 	$('.sideBarMenuBtnList').eq(7).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(7).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
		 if(scroH >= 4800 && scroH < 5300){
		 	$('.sideBarMenuBtnList').eq(8).children('.sideBarMenuBtnText').css('display','block')
		 }else{
		 	$('.sideBarMenuBtnList').eq(8).children('.sideBarMenuBtnText').css('display','none')		 	
		 }
	})
	
})
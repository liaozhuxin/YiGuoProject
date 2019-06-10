$(function(){
	//左移动画
	$('.topNavMenuNameList').mouseover(function(){
		$('.topNavMenuNameList').eq($('.topNavMenuNameList').index($(this))).css('transform','translateX(10px)')
	})
	$('.topNavMenuNameList').mouseout(function(){
		$('.topNavMenuNameList').eq($('.topNavMenuNameList').index($(this))).css('transform','none')
	})
	
	
	$('.moveRight').mouseover(function(){
		$(this).children('img').css('transform','translateX(3px)')
	})
	$('.moveRight').mouseout(function(){
		$(this).children('img').css('transform','none')
	})
	
	$('.sideBarMenuBtnList').mouseover(function(){
		$(this).children('.sideBarMenuBtnText').css({'display':'block','text-decoration': 'none','color':'white'})
	})
	$('.sideBarMenuBtnList').mouseout(function(){
		$(this).children('.sideBarMenuBtnText').css('display','none')
	})
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
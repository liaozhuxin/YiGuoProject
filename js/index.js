window.onload = function(){
	//图片轮播
			var oBannerPicList = document.getElementsByClassName("bannerPicList");
			var oBeforeBtn = document.getElementById("beforeBtn");
			var oNextBtn = document.getElementById("nextBtn");
			var oBannerPicBtn = document.getElementsByClassName("bannerPicBtn");
			slider();
			function slider(){
							inter();				
							var iNow = 0;
							var timer;
							for(var i = 0;i<oBannerPicBtn.length;i++){
								bind(i);
							}
							function bind(index){
								oBannerPicBtn[index].onclick = function(){
									clearInterval(timer);
									iNow = index;
									changePic();
									inter();
								}
							}
							function changePic(){					
								for(var j = 0;j<oBannerPicList.length;j++){
			//						console.log(j);						
									//把所有照片的宽度改为100%				
									oBannerPicBtn[j].style.backgroundColor = '#b5b2a8';
									oBannerPicList[j].style.transform = 'scaleX('+1.1+') scaleY('+1.1+')';						
									oBannerPicList[j].style.opacity = 0;
									//当j等于索引值是
									if(j==iNow){
										oBannerPicBtn[iNow].style.backgroundColor = '#5aaa16';
										oBannerPicList[j].style.transform ='scaleX('+1+') scaleY('+1+')';							
										oBannerPicList[j].style.opacity = 1;							
									}												
								}
							}
							//定时器
							function inter(){					
								timer = setInterval(function(){										
									iNow++;
									if(iNow>oBannerPicList.length-1){
										iNow = 0;
									}					
									changePic();
								},5000)
							}
							//向前
							oBeforeBtn.onclick = function(){
								iNow--;
								clearInterval(timer);
								if(iNow<0){
									iNow = oBannerPicList.length-1;
								}				
			//					console.log('before:'+iNow);
								changePic();
								inter();
							}
							//向后
							oNextBtn.onclick = function(){
								iNow++;
								clearInterval(timer);
								if(iNow> oBannerPicList.length-1){
									iNow = 0;
								}				
			//					console.log('after:'+iNow);
								changePic();
								inter();
							}
						}
			//菜单栏点击事件
			var oTopNavMenuBoxFather = document.getElementsByClassName("topNavMenuBoxFather")[0];
			var oTopNavMenuBox = document.getElementById("topNavMenuBox");
			
			oTopNavMenuBoxFather.onclick = function(){
							var oValue = oTopNavMenuBox.getAttribute("value");
							console.log(oValue);
							if(oValue == 0){
								oTopNavMenuBox.setAttribute("value","1");
								oTopNavMenuBox.style.display = "none";
							}
							if(oValue == 1){
								oTopNavMenuBox.setAttribute("value","0");
								oTopNavMenuBox.style.display = "block";
							}
			}
			oTopNavMenuBoxFather.onmouseover = function(){
							var oValue = oTopNavMenuBox.getAttribute("value");
							if(oValue == 1){
								oTopNavMenuBox.style.display = "block";
							}
			}
			oTopNavMenuBoxFather.onmouseout = function(){
							var oValue = oTopNavMenuBox.getAttribute("value");
							if(oValue == 1){
								oTopNavMenuBox.style.display = "none";
							}
			}
			//回到顶部+吸顶+锚点
			var oheaderSearch2 = document.getElementsByClassName("headerSearch2")[0];
			var oBackTop = document.getElementById('backTop');
						oBackTop.onclick = function(){
							document.documentElement.scrollTop = 0;
						}
			var scro;
			var osideBarMenu = document.getElementById("sideBarMenu");
			document.onscroll = function(){
							scro =document.documentElement.scrollTop;
							if(scro>200){
								oBackTop.style.display = 'block';				
							}else{
								oBackTop.style.display = 'none';					
							}
							if(scro>90){
								oheaderSearch2.style.display = 'block'
							}else{
								oheaderSearch2.style.display = 'none';
							}
							if(scro<800){
								osideBarMenu.style.display = 'none';
							}else{
								osideBarMenu.style.display = 'block';
							}
						
						}


}

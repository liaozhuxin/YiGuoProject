window.onload = function(){
	var oPicBtn = document.getElementsByClassName('picBtn');
	var oBigPic = document.getElementsByClassName('bigPic');
	var oHuge = document.getElementById('huge');
	var num 
	slider();
	function slider(){				
		for(var i = 0;i<oPicBtn.length;i++){
			console.log(i);
			bind(i);
		}
		function bind(index){
			oPicBtn[index].onmouseover = function(){				
				console.log(index);
				changePic(index);
			}
		}
		function changePic(index){					
			for(var j = 0;j<oBigPic.length;j++){
				//把所有照片的透明度改为零
				oBigPic[j].style.opacity = 0;
				oPicBtn[j].style.border = 1+'px'+' '+'solid'+' '+'#bcbcbc';   
				//当j等于索引值是
				if(j==index){
					oBigPic[j].style.opacity = 1;
					oPicBtn[j].style.border = 1+'px'+' '+'solid'+' '+'#008842';					
					num = index+1;
					oHuge.setAttribute('src','img/商品详情/goodsPic0'+num+'.jpg');
				}
			}
		}
	}
	//购物车加减
	var oDecreaseBtn = document.getElementsByClassName('decreaseBtn')[0];
	var oIncreaseBtn = document.getElementsByClassName('increaseBtn')[0];
	oIncreaseBtn.onclick = function(){
		var oPnumber = document.getElementById('pnumber');
		oIncreaseBtn.removeAttribute('disabled');
		oDecreaseBtn.removeAttribute('disabled');
		if(oPnumber.value >= 5){
			oIncreaseBtn.setAttribute('disabled','disabled');
		}else{
			oPnumber.value++;
		}
	}
	oDecreaseBtn.onclick = function(){
		var oPnumber = document.getElementById('pnumber');
		oIncreaseBtn.removeAttribute('disabled');
		oDecreaseBtn.removeAttribute('disabled');
		if(oPnumber.value <= 1){
			oDecreaseBtn.setAttribute('disabled','disabled');
		}else{
			oPnumber.value--;
		}
	}
	
	//商品详情用户评论切换
	var oIntroduce = document.getElementById('Introduce');
	var oGoodsAppraise = document.getElementById('goodsAppraise');
	var oAllInContent = document.getElementsByClassName('allInContent')[0];
	var oAllAppraise = document.getElementsByClassName('allAppraise')[0];	
	oIntroduce.onclick = function(){
		oAllAppraise.style.display = 'none';
		oAllInContent.style.display = 'block';
	}
	oGoodsAppraise.onclick = function(){
		oAllAppraise.style.display = 'block';
		oAllInContent.style.display = 'none';
	}
	
}

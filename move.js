// window.onload=function(){
// 	var arr=[];
// 	$(".ibox").on('mouseover',function(){

// 		move(this,-15,15);
// 	})
// 	$(".ibox").on('mouseout',function(){
// 		move(this,0,0);
// 	})

// 	// $("#ibox2").on('mouseover',function(){
// 	// 	move(this,-155,155);
// 	// 	//setTimeout(remove(this),2000);
// 	// })
// 	// $("#ibox2").on('mouseout',function(){
// 	// 	move(this,0,0);
// 	// })

// 	// $("#ibox3").on('mouseover',function(){
// 	// 	move(this,-155,155);
// 	// 	//setTimeout(remove(this),2000);
// 	// })
// 	// $("#ibox3").on('mouseout',function(){
// 	// 	move(this,0,0);
// 	// })

// 	function move(obj,top,height){
		
// 		var $this=$(obj);
// 		var oimg = $this.find('img');
// 		if(oimg.times)clearTimeout(oimg.times);
// 		//oimg.css("opacity","1");

// 		var curHeight = parseInt(oimg.css('height'));
// 		var curTop = parseInt(oimg.css('top'));
// 		console.log(curTop);
// 		console.log(curHeight);
// 		if(curTop==top&&curHeight==height)return true;
// 		if(curTop>top){
// 			curTop=curTop-5;
// 		}
// 		if(curTop<top){
// 			curTop=curTop+5;
// 		}
		
// 		if(curHeight<height){
// 			curHeight+=5;	
// 		}
// 		if(curHeight>height){
// 			curHeight-=5;	
// 		}
// 		oimg.css("top",curTop+"px");
// 		oimg.css("height",curHeight+"px");
// 		oimg.times = setTimeout(function(){move(obj,top,height)},500);

// 	}


// }

window.onload=function(){
	var oibox = document.getElementById("ibox1");
	oibox.onmouseover = function(){
		move("moveimg",-164,154);
	}

	oibox.onmouseout = function(){
		move("moveimg",0,0);
	}

	function move(obj,top,height){
		
		var oimg = document.getElementById(obj);
		if(oimg.times)clearTimeout(oimg.times);

		var curHeight = oimg.offsetHeight;
		var curTop = oimg.offsetTop;
		
		console.log(curTop);
		if(curTop==top&&curHeight==height)return true;
		if(curTop>top){
			curTop=curTop-5;
		}

		if(curTop<top){
			curTop=curTop+5;
		}
		if(Math.abs(curTop-top)<5)curTop=top;
		if(curHeight<height){
			curHeight+=5;	
		}
		if(curHeight>height){
			curHeight-=5;	
		}
		if(Math.abs(curHeight-height)<5)curHeight=height;
		oimg.style.top = curTop+"px";
		oimg.style.height = curHeight + "px";
		oimg.times = setTimeout(function(){move(obj,top,height)},10);

	}


}
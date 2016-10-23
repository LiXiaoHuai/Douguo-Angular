		var nowimg=0; 
        var $rightBtn= $(".rightBtn")
        var $leftBtn= $(".leftBtn")
        var lis=$(".banner-in li")
        var $banner=$(".banner")
        var $circle=$(".circle span")
        var animateTime=1500;
        var timer=null;
        var setTimer=5500;
        var $bannerIn=$(".banner .banner-in");
        $(".banner-in li:first").clone().appendTo(".banner-in");
        $(".banner-in li:nth-of-type(2)").clone().appendTo(".banner-in");
        // rightBtn
        $rightBtn.click(rightBtnfunc);
        function rightBtnfunc() {
            if(!$bannerIn.is(":animated")){
                if(nowimg<lis.length-1){
                	nowimg++;
                	putong();
            	}else{                		 
                	$bannerIn.animate({"left":(++nowimg)*-700-580}, animateTime,function(){
                   		$bannerIn.css("left",-580);
                	});
                	nowimg=0;
            	}
            	if(nowimg == 4) {
            		$circle.eq(0).addClass('cur').siblings().removeClass("cur");
            	}
            	$circle.eq(nowimg+1).addClass('cur').siblings().removeClass("cur");
            }
        }
        // leftBtn
        $leftBtn.click(function() {
          	if(!$bannerIn.is(":animated")){
            	if(nowimg>1){
            		nowimg--;
            		putong();
          		}else{
            		nowimg=lis.length-1;
            		$bannerIn.css("left",lis.length*-700-580)
           			putong();
          		}
           		$circle.eq(nowimg).addClass('cur').siblings().removeClass("cur");
          	}
        });
        // 小圆点业务
        $circle.click(function() {
            nowimg=$(this).index();
            $bannerIn.animate({"left":(nowimg-1)*-700-580}, animateTime);
            $circle.eq(nowimg--).addClass('cur').siblings().removeClass("cur");                      
        });
        function putong(){ 
        		$bannerIn.animate({"left":nowimg*-700-580}, animateTime) ;          
        }
        timer=setInterval(rightBtnfunc,setTimer)
        $banner.mouseenter(function() {
           clearInterval(timer)
        });
        $banner.mouseleave(function() {
           clearInterval(timer)
           timer=setInterval(rightBtnfunc,setTimer)
        });
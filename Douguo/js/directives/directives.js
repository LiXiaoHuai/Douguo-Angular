angular.module('starter.directives',[])
	.directive('foodFenlei',function(){
		return {
			link : function(scope, element, attrs) {
				var toggle = true;
				element.find('.updown').on('click',function(){
					if(toggle){
						element.find('.updown').text('收起') ;
						element.children('ul').css('max-height','100%');
						toggle = !toggle;
					}else{
						element.find('.updown').text('展开更多');
						element.children('ul').css('max-height','66px');
						toggle = !toggle;
					}		
				});	
        	}
		}
	});
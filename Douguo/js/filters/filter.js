angular.module('starter.filter',[])
	.filter({
		'goods_info':function(){
			return function(res){
//				console.log(res.length);
				res = res.substr(0,26)+"...";
				return res;
			}
		},
		'oldPrice':function(){
			return function(oprice){
				if(oprice != ""){
					oprice = "￥"+oprice;
				}
				return oprice;
			}
		},
		'by':function(){
			return function(data){
				if(data == ""){
					data = "包邮";
				}else{
					data = "运费(￥)："+data;
				}
				return data;
			}
		}
	});
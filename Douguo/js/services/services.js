angular.module('starter.services',[])
	.factory('indexFactory',function($http,$rootScope){
		var data = {};
		return {
			getIndex:function(){
				$http({
					url:'json/index.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutIndex');
				});
			},
			getIndexdata:function(){
				return data;
			}
		}
	})
	.factory('jingxuanFactory',function($http,$rootScope){
		var data = {};
		return {
			getJingxuan:function(){
				$http({
					url:'json/jingxuan.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutJingxuan');
				});
			},
			getJingxuandata:function(){
				return data;
			}
		}
	})
	.factory('fenleiFactory',function($http,$rootScope){
		var data = {};
		return {
			getFenlei:function(){
				$http({
					url:'json/fenlei.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutFenlei');
				});
			},
			getFenleidata:function(){
				return data;
			}
		}
	})
	.factory('shicaiFactory',function($http,$rootScope){
		var data = {};
		return {
			getShicai:function(){
				$http({
					url:'json/foodshicai.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutShicai');
				});
			},
			getShicaidata:function(){
				return data;
			}
		}
	})
	.factory('zuopinFactory',function($http,$rootScope){
		var data = {};
		return {
			getZuopin:function(){
				$http({
					url:'json/zuopin.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutZuopin');
				});
			},
			getZuopindata:function(){
				return data;
			}
		}
	})
	.factory('caidanFactory',function($http,$rootScope){
		var data = {};
		return {
			getCaidan:function(){
				$http({
					url:'json/caidan.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutCaidan');
				});
			},
			getCaidandata:function(){
				return data;
			}
		}
	})
	.factory('paihangFactory',function($http,$rootScope){
		var data = {};
		return {
			getPaihang:function(){
				$http({
					url:'json/paihang.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutPaihang');
				});
			},
			getPaihangdata:function(){
				return data;
			}
		}
	})
	.factory('deliciousFactory',function($http,$rootScope){
		var data = {};
		return {
			getDelicious:function(){
				$http({
					url:'json/delicious.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutDelicious');
				});
			},
			getDeliciousdata:function(){
				return data;
			}
		}
	})
	.factory('goodshopingFactory',function($http,$rootScope){
		var data = {};
		return {
			getGoodshoping:function(){
				$http({
					url:'json/goodshoping.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutGoodshoping');
				});
			},
			getGoodshopingdata:function(){
				return data;
			}
		}
	});
	
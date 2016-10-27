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
	.factory('discoverFactory',function($http,$rootScope){
		var data = {};
		return {
			getDiscover:function(){
				$http({
					url:'json/discover.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutDiscover');
				});
			},
			getDiscoverdata:function(){
				return data;
			}
		}
	})
	.factory('diaryFactory',function($http,$rootScope){
		var data = {};
		return {
			getDiary:function(){
				$http({
					url:'json/diary.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutDiary');
				});
			},
			getDiarydata:function(){
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
	})
	.factory('allarticleFactory',function($http,$rootScope){
		var data = {};
		return {
			getAllarticle:function(){
				$http({
					url:'json/allarticle.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutAllarticle');
				});
			},
			getAllarticledata:function(){
				return data;
			}
		}
	})
	.factory('allactiveFactory',function($http,$rootScope){
		var data = {};
		return {
			getAllactive:function(){
				$http({
					url:'json/allactive.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutAllactive');
				});
			},
			getAllactivedata:function(){
				return data;
			}
		}
	})
	.factory('mstygFactory',function($http,$rootScope){
		var data = {};
		return {
			getMstyg:function(){
				$http({
					url:'json/mstyg.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutMstyg');
				});
			},
			getMstygdata:function(){
				return data;
			}
		}
	})
	.factory('msktFactory',function($http,$rootScope){
		var data = {};
		return {
			getMskt:function(){
				$http({
					url:'json/mskt.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutMskt');
				});
			},
			getMsktdata:function(){
				return data;
			}
		}
	})
	.factory('cpzjFactory',function($http,$rootScope){
		var data = {};
		return {
			getCpzj:function(){
				$http({
					url:'json/cpzj.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutCpzj');
				});
			},
			getCpzjdata:function(){
				return data;
			}
		}
	})
	.factory('qthdFactory',function($http,$rootScope){
		var data = {};
		return {
			getQthd:function(){
				$http({
					url:'json/qthd.json',
					method:'GET'
				})
				.success(function(res){
//					console.log(res);
					data = res;
					$rootScope.$broadcast('aboutQthd');
				});
			},
			getQthddata:function(){
				return data;
			}
		}
	})
	;
	
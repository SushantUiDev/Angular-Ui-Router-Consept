(function(){
	function loginCtrlFn(){
		var vm=this;
		vm.user={
			
		}
		vm.login=function(){
			console.log(vm.user);
		}
		
	}
	angular.module("login")
	.controller("loginCtrl",[loginCtrlFn]);
})();
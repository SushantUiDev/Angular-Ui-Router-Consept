(function(){
	function headerCtrlFn(){
		var vm=this;
		vm.brandName="Sushant";
		vm.navbar=["login","register","products"];
		vm.loginTemplate="app/login/login.tpl.html";
		vm.productsTemplate="app/products/products.tpl.html";
		vm.registerTemplate="app/register/register.tpl.html";
		vm.loadView=function(para){
			console.log(para);
			if(para=="login"){
				vm.loadTemplate=vm.loginTemplate;
			}
			else if(para=="products"){
				vm.loadTemplate=vm.productsTemplate;
			}else if(para=="register"){
				vm.loadTemplate=vm.registerTemplate;
			}
		}
		
	}
	angular.module("header")
	.controller("headerCtrl",[headerCtrlFn]);
})();
(function () {
		angular.module("myService", ["ui.router", "header", "login", "products", "register"]);

		angular.module("myService")
			.config(["$stateProvider", "$urlRouterProvider",
					  function ($stateProvider, $urlRouterProvider) {
				       
				      var loginObj={
				      
				          templateUrl:"app/login/login.tpl.html",
				          controller:"loginCtrl as lc",
				          name:"login"
				     };
				
				      var productsObj={
				          templateUrl:"app/products/products.tpl.html",
				          controller:"productsCtrl as pc",
				          name:"products"
				      };
				
				      var registerObj={
				           templateUrl:"app/register/register.tpl.html",
				           controller:"registerCtrl as rc",
				           name:"register"
				      };
				
				  $stateProvider.state("login", loginObj);
				  $stateProvider.state("products", productsObj);
				  $stateProvider.state("register", registerObj);
                  console.log("app module  config Method");

		             }]) 
				.run(function () {
					console.log("I am myService run method....");
				})
			})();
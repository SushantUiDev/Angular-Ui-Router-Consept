(function(){
	angular.module("register",[]);
	
	angular.module("register")
	.config(function(){
	   console.log("i am register module config method..")	;
	})
	.run(function(){
		console.log("i am register module run method...");
	})
})();
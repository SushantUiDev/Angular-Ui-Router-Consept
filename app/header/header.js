(function(){
	angular.module("header",[]);
	
	angular.module("header")
	.config(function(){
		console.log("i am header module config method...");
	})
	.run(function(){
		console.log("i am header module run method...");
	})
})();
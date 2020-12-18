var bzMod =angular.module('beingZeroApp',['ngRoute']);
bzMod.config(function($routeProvider){
	$routeProvider
        .when("/",{templateUrl:'index.html',controller:'singlectrl'})
        .when("/pag1",{templateUrl:'partials/pag1.html',controller:'pag1ctrl'})
        .when("/pag2",{templateUrl:'partials/pag2.html',controller:'pag2ctrl'})


        
});

bzMod.controller('beingZeroCtrl',function(){

});


bzMod.controller('singleCtrl',function(){

});
bzMod.controller('pag1Ctrl',function(){

});
bzMod.controller('pag2Ctrl',function(){

});
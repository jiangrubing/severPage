var app = angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
    .state('shoppingcar',{
        url:"/shoppingcar",
        templateUrl:"./App/Views/shoppingcar.html"
    })
    .state('moneypage',{
        url:"/moneypage",
        templateUrl:"./App/Views/moneypage.html"
    });
    $urlRouterProvider.otherwise("/shoppingcar");
});
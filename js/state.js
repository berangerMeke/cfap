/*
var routerApp = angular.module('gaeaApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/page1');
    
    $stateProvider
        
       
        .state('page1', {
            url: '/page1',
            templateUrl: '/pages/page1.html'
        })
        
   
        .state('page2', {
            url: '/page2',
            templateUrl: '/pages/page2.html'
        })
    
         .state('page3', {
            url: '/page3',
            templateUrl: '/pages/page3.html'
        })
        
});
*/





var app = angular.module('gaeaApp',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'page1.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'page2.html'      
        });
        
});
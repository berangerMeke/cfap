var app = angular.module('gaeaApp');

app.controller('homeCtrl', function($scope, $http, $interval, $translate) { 


    
/* SLIDE ACCUEIL*/
    /*slide 1*/ 
        $scope.slide1 ='images/homeSlide/Image18.png';
        $scope.Slide1titre1 = 'Peuple Bamiléké danse Ndop';
        $scope.Slide1titre2 = 'Le Ndop est une étoffe traditionnelle africaine portée par le peuple Bamiléké';
    /*slide 2*/
        $scope.slide2 ='images/homeSlide/2.JPG';
        $scope.Slide2titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide2titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide2detail = 'sem, ac viverra ante luctus vel.';
    /*slide 3*/
        $scope.slide3 ='images/homeSlide/Image22.png';
        $scope.Slide3titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide3titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide3detail = 'sem, ac viverra ante luctus vel.';

     /*slide 4*/
        $scope.slide4 ='images/homeSlide/Image26.png';
        $scope.Slide4titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide4titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide3detail = 'sem, ac viverra ante luctus vel.';

     /*slide 5*/
        $scope.slide5 ='images/homeSlide/Image23.png';
        $scope.slide5titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide5titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide5detail = 'sem, ac viverra ante luctus vel.';

     /*slide 6*/
        $scope.slide6 ='images/homeSlide/Image20.png';
        $scope.Slide6titre1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        $scope.Slide6titre2 = 'Nulla convallis egestas rhoncus. Donec facilisis fermentum';
        $scope.Slide6detail = 'sem, ac viverra ante luctus vel.';

    
    
         $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
          };
    
    
  
    
});


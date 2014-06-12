var Site = angular.module('Site', []);

Site.config(function($routeProvider, $locationProvider) {
    $routeProvider

    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })

    .when('/quick-start', {
        templateUrl: 'pages/quick-start.html',
        controller: 'quickStartController'
    })

    .when('/plugins', {
        templateUrl: 'pages/plugins.html',
        controller: 'pluginsController'
    })

    .when('/docs', {
        templateUrl: 'pages/docs.html',
        controller: 'docsController'
    })

    .when('/community', {
        templateUrl: 'pages/community.html',
        controller: 'communityController'
    })
    // if (window.history && window.history.pushState) {
    //     $locationProvider.html5Mode(true);
    // }
});

/*  Controllers
 *
 **********************************/

Site.controller('homeController', function($scope) {});

Site.controller('quickStartController', function($scope) {});

Site.controller('pluginsController', function($scope) {});

Site.controller('docsController', function($scope, $http) {
    // Load docs
    $http.get('models/docs.json').success(function(data) {
        $scope.docs = data.docs;
    });
});

Site.controller('communityController', function($scope) {});
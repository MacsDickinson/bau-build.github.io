var Site = angular.module('Site', ['hljs']);

Site.init = function() {
    $('.menu.stuck').each(function() {
        $(this).width($(this).parent().width())
    })
    setActiveContent();
};

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

Site.controller('homeController', function($scope) {
    Site.init();
});

Site.controller('quickStartController', function($scope) {
    Site.init();
});

Site.controller('pluginsController', function($scope) {
    Site.init();
});

Site.controller('docsController', function($scope, $http) {
    // Load docs
    $http.get('models/docs.json').success(function(data) {
        $scope.docs = data.docs;
    });
    $scope.loaded = function() {
        setActiveContent();
    }
    Site.init();
});

Site.controller('communityController', function($scope, $http) {
    $http.get('https://api.github.com/repos/bau-build/bau/contributors').success(function(data) {
        $scope.bauContributors = data.sort(compareContributors);
    });
    $http.get('https://api.github.com/repos/bau-build/bau-build.github.io/contributors').success(function(data) {
        $scope.websiteContributors = data.sort(compareContributors);
    });
    Site.init();
});


/*  Utilities
 *
 **********************************/

function compareContributors(a, b) {
    if (a.contributions > b.contributions)
        return -1;
    if (a.contributions < b.contributions)
        return 1;
    return 0;
}
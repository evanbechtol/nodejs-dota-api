dotaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'html/home.html',
        controller: 'homeController'
    })
    .when('/items', {
        templateUrl: 'html/items.html',
        controller: 'forecastController'
    })
    .when('/match/', {
        templateUrl: 'html/matchDetails.html',
        controller: 'forecastController as forecast1vm'
    })
    .when('/match/:id', {
        templateUrl: 'html/items.html',
        controller: 'forecastController as forecast1vm'
    })
    .otherwise({redirectTo: '/'})
}])

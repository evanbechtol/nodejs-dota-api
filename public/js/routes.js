dotaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'html/home.html',
        controller: 'matchController'
    })
    .when('/items', {
        templateUrl: 'html/items.html',
        controller: 'matchController'
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

dotaApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'html/home.html',
        controller: 'matchController'
    })
    .when('/items', {
        templateUrl: 'html/match.html',
        controller: 'matchController'
    })
    .when('/match/', {
        templateUrl: 'html/matchDetails.html',
        controller: 'matchController'
    })
    .when('/match/:id', {
        templateUrl: 'html/match.html',
        controller: 'forecastController as forecast1vm'
    })
    .otherwise({redirectTo: '/'})
}])

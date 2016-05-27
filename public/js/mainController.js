dotaApp.controller('mainController', ['$scope', '$log', '$filter', function ($scope, $log, $filter) {
    $scope.message = 'Hello from the controller!';
    $scope.message = $filter('uppercase')($scope.message);
}]);
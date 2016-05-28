dotaApp.directive('matchPanel', function() {
   return {
       replace: true,
       templateUrl: 'html/matchPanel.html',
       scope: {
           convertToDate: "&",
           convertToFahrenheit: "&",
           dateFormat: "@",
           w: "="
       }
   } 
});
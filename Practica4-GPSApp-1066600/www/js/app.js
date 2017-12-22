// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Practica4-GPSApp-1066600', ['ionic','ngCordova'])

.controller('GPSController', function($scope, $cordovaGeolocation) {
  var posOptions = {timeout: 10000, enableHighAccuracy: true};
  
  $scope.long
  $scope.lat
  $scope.map = undefined;
  $scope.latLong = undefined;
  
  
  $cordovaGeolocation

  .getCurrentPosition(posOptions)

  .then(function (position) {
    $scope.lat  = position.coords.latitude
    $scope.long = position.coords.longitude
    
    
  }, function(err) {
     console.log(err)
  });

  var mapOptions = {
    center: new google.maps.LatLng(0, 0),
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP};


 $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);


$scope.latLong = new google.maps.LatLng($scope.lat, $scope.long);

$scope.marker = new google.maps.Marker({
    position: $scope.latLong
});

$scope.marker.setMap($scope.map);
$scope.map.setZoom(15);
$scope.map.setCenter($scope.marker.getPosition());


})




.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
function newFunction($scope) {
  return $scope.lat;
}


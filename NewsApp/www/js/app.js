
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);

window.fbAsyncInit = function() {
    FB.init({
        appId      : '1383100148465986',
        xfbml      : true,
        version    : 'v2.11'
    });
    FB.AppEvents.logPageView();
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];

    if (d.getElementById(id)) {
        return;
    }

    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}

(document, 'script', 'facebook-jssdk'));

function checkLoginState($state) {
    FB.getLoginStatus(function(response) {
        alert(response.status);
        //$state.go('/tab/dash'); 
    });
}


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
      
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('settings',{
    url:'/settings',
    templateUrl: 'settings.html'
  })


  .state('tab.allnews', {
    url: '/allnews',
    views: {
      'tab-allnews': {
        templateUrl: 'templates/tab-allnews.html',
        controller: 'AllNewsCtrl'
      }
    }
  })

  .state('tab.newsbydate',{
    url:"/newsbydate",
    views:{
      'tab-newsbydate':{
        templateUrl: "templates/tab-newsbydate.html",
        controller: 'NewsByDateCtrl'
      }
    }
  })



  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/allnews');

})

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})

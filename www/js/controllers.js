angular.module('starter.controllers', [])

app.controller('DashCtrl', function($scope) {})


app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

app.controller('navController', function($scope,$http){

    $scope.news = [];

    $scope.loadMore = function() {
        $http.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=87238f079d8a4eebbc3b2010c7efbef0').success(function(items) {
          useItems(items);
          $scope.$broadcast('scroll.infiniteScrollComplete');
        });
    };

    $http({
        method: "GET",
        url: "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=87238f079d8a4eebbc3b2010c7efbef0"
    }).then(function(newsData){
        $scope.news = newsData.data.articles;
        console.log($scope.news);
    });

});



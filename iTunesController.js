// create a controller
// elink to HTTP service

var iTunesController = function ($scope, $http)  {
    // define the search function called by the form.
    $scope.searchiTunes = function(artist) {
        // use the jsonp callback function from the $http service this
        // will get around any limitations for cross-domain scripting.
        $http.jsonp('http://itunes.apple.com/search', {
            params: {
                'callback': 'JSON_CALLBACK',
                'term': artist
            }
            // returns if not error
        }).then(onSearchComplete, onError)
    }
    // pulls and displays data
    var onSearchComplete = function(response) {
        // take all data elements
        $scope.data = response.data
        //store songs to iterite
        $scope.songs = response.data.results
    }
    // if error - store
    var onError = function(reason) {
        $scope.error = reason
    }
}
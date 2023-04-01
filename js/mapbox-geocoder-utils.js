function geocode(search, token){
    //mapbnox url
    var baseURL = 'https://api.mapbox.com';
    //the endpoint when request lgn and lat based on location name
    var endPoint = '/geocoding/v5/mapbox.places/'
    //the fetch takes in url endpoint and returns lgnlat
    return fetch(baseURL + endPoint + encodeURIComponent(search) + '.json' + '?' + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        }).then(function(data){
            return data.features[0].center
        })
}
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}

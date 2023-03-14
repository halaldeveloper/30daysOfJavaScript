const http = new easyHTTP;

// Get Posts
http.get('http://jsonplaceholder.typicode.com/posts', function(response) {
    console.log(response);
});
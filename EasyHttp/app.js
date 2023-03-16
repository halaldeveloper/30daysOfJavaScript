const http = new easyHTTP;

// Get Posts
// http.get('http://jsonplaceholder.typicode.com/posts', 
// function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }

// });

// Get single post
// http.get('http://jsonplaceholder.typicode.com/posts/12', 
// function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }

// });

// Create data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create post
// http.post('http://jsonplaceholder.typicode.com/posts', data, 
// function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// Update
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });

// Delete
http.delete('http://jsonplaceholder.typicode.com/posts/1', 
function(err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }

});
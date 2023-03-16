const http = new EasyHTTP;

// GET Users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

// user data
const data = {
    name: 'Abdulsalam Isa',
    username: 'HalalDeveloper',
    email: 'issahpeacee@gmail.com'
}

// CREATE Users
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// UPDATE Users
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// DELETE post
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));
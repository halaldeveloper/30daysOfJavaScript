/** 
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 2.0.0 Created with Fetch, Promises, Class & Arrow Functions
* @author HalalDeveloper RMC
* @license MIT
*
**/

// GET
class EasyHTTP {
    // Make an HTTP GET Request
    get(url) {
        return new Promise ((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make an HTTP POST request
    post(url, data) {
        return new Promise ((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // Make an HTTP PUT request
    put(url, data) {
        return new Promise ((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // make a HTTP DELETE request
    delete(url) {
        return new Promise ((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'Application/json'
                },
            })
            .then(res => res.json())
            .then(() => resolve('Resource Deleted...'))
            .catch(err => reject(err));
        });
    }
}
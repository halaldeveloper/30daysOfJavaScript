document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.chucknorris.io/jokes/random/`, true);

    xhr.onload = function() {
        if(this.status === 200) {
            const response = JSON.parse(this.responseText);

            // console.log(response);
            
            let output = '';

            if(response.icon_url === "https://assets.chucknorris.host/img/avatar/chuck-norris.png") {
                output +=  `<li>${response.value}</li>`
                // response.forEach (function(categories){
                //     output +=  `<li>${categories.value}</li>`
                // })
            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}
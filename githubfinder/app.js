// init gitHub
const github = new Github;
// init UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('search-user');

// Search Input Event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if(userText !== '') {
        // Make http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear profle
        ui.clearProfile();
    }
});
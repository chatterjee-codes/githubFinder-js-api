//init github
const github  = new GitHub;

//init UI
const ui  = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    
    //get input text
    const userText = e.target.value;

    if(userText !== '')
    {
        // make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found')
                {
                    //show alert through ui.js
                    ui.showAlert('User not found', 'alert alert-danger');
                    ui.clearProfile();

                }
                else
                {
                    //show profile through ui.js
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                    
                }
            })
    }

    else
    {
        //clear profile through ui.js
        ui.clearProfile();
    }
});

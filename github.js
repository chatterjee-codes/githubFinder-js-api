class GitHub
{
    constructor()
    {
        this.config = {
            headers: {
                Authorization: 'token your_token_here'
            }
            
        }

         this.repos_count = 10;
         this.repos_sort = 'created: asc';
    }

    //making two requests
    //one to get the user
    //one to gert the repos

    async  getUser(user)
    {
        
        
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,this.config);
        
        const profile = await profileResponse.json();

        const repos = await reposResponse.json();

        return {profile, repos}; //to return it as a collection
    }
}
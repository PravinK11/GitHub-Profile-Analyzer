const axios= require("axios");


const profile= async (username) =>{
    const response= await axios.get(`https://api.github.com/users/${username}`);
    // console.log(response);
    const user= response.data ;
    return {
        username: user.login,
        name: user.name,
        followers: user.followers,
        following: user.following,
        publicRepos: user.public_repos,
        githubUrl: user.html_url,
        avatarUrl: user.avatar_url
    };
}
module.exports={profile};
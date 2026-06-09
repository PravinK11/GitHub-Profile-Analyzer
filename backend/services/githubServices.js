const axios= require("axios");
const githubModel = require("../model/githubModel");


const getProfile= async (username) =>{
    const response= await axios.get(`https://api.github.com/users/${username}`);
    // console.log(response);
    const user= response.data ;
    const profileScore =
        user.followers +
        (user.public_repos * 2);

    const profile= {
        username: user.login,
        name: user.name,
        followers: user.followers,
        following: user.following,
        publicRepos: user.public_repos,
        githubUrl: user.html_url,
        avatarUrl: user.avatar_url,
        score: profileScore
    };

    await githubModel.saveProfile(profile);

    return profile;
}
module.exports={getProfile};
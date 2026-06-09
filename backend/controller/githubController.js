const githubServices=require("../services/githubServices");


const analyzeProfile = async (req, res) => {
    try {
        const { username } = req.body;

        const profile =
            await githubServices.getProfile(username);

        res.status(201).json(profile);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAllProfiles = async(req, res)=>{
    try{
        const profiles =
            await githubServices.getAllProfiles();

        res.status(200).json(profiles);
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

const getProfileByUsername = async (req, res) => {
    try {
        const { username } = req.params;

        const profile =
            await githubServices.getProfileByUsername(username);

        res.status(201).json(profile);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    analyzeProfile, getAllProfiles, getProfileByUsername
};
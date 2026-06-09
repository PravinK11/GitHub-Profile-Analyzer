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

module.exports = {
    analyzeProfile
};
const express= require("express");
const router= express.Router();
const githubController=require("../controller/githubController");


router.post(
    "/analyze",
    githubController.analyzeProfile
);
router.get(
    "/",
    githubController.getAllProfiles
);
router.get(
    "/:username",
    githubController.getProfileByUsername
);

module.exports = router;
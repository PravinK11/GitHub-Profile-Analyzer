const express= require("express");
const router= express.Router();
const githubController=require("../controller/githubController");


router.post(
    "/analyze",
    githubController.analyzeProfile
);

module.exports = router;
const router = require("express").Router();

router.get('/', async (req,res) => {
    console.log("Home page")
    res.send("This is the home page")
});

module.exports = router;
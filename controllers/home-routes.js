const router = require("express").Router();

router.get('/', async (req,res) => {
    console.log("Home page")
    res.send("This is the home page")
});

router.get('/dashboard/', async (req,res) => {
    res.send("This is the dashboard");
})


module.exports = router;
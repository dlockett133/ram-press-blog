const router = require("express").Router();

router.get('/', async (req,res) => {
    console.log("Home page")
    res.render('homepage')
});

router.get('/dashboard/', async (req,res) => {
    res.render('dashboard');
})


module.exports = router;
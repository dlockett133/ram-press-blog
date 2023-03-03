const router = require("express").Router();

router.post('/', async (req,res) => {
    console.log(req.method)
    res.json("Create New User");
});

router.post('/login', async (req,res) => {
    console.log(req.method)
    res.json("Login")
});

router.post('/logout', async (req,res) => {
    console.log(req.method)
    res.json("Logout")
});

module.exports = router;
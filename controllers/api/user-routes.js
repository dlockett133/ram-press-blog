const router = require("express").Router();

router.post('/', async (req,res) => {
    res.json("Create New User")
});

router.post('/login', async (req,res) => {
    res.json("Login")
});

router.post('/logout', async (req,res) => {
    res.json("Logout")
});

module.exports = router;
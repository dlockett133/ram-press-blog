const router = require("express").Router();

router.get('/', async (req,res) => {
    res.send("This is the dashboard");
})


module.exports = router;
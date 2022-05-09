const router = require('express').Router();


router.get('/', async (req, res) => {
    try{
        const data = [{title: "something", user: "stuff"},{title: "something2", user: "stuff2"}]
        res.render("adminposts", {layout: "dashboard", data})
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
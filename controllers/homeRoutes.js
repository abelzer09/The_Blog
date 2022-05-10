const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try{
        res.render("allpost")
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/main', async (req, res) => {
    try {
        res.render('allpost')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/signup', async (req, res) => {
    try{
        res.render("signup")
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
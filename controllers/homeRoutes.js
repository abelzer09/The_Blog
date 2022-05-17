const router = require('express').Router();
const { response } = require('express');
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
          include: [User],
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
        res.render('allpost', { posts });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User, 
                {
                    model: Comment,
                    include: [User]
                }
            ]
        })
        if (postData){
            const post = postData.get({plain: true})
            res.render('singlepost', {Post})
        } else {
            res.status(404).end()
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/')
        }
        else {
            res.render('login')
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/signup', async (req, res) => {
    try{
        if (req.session.logged_in) {
            res.redirect('/')
        }
        else {
            res.render('signup')
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
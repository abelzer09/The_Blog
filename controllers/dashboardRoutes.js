const withAuth = require('../utils/auth');
const { Post } = require('../models');
const router = require('express').Router();


router.get('/', withAuth, async (req, res) => {
    try{
        const postData = await Post.findAll({
           where: {userId: req.session.user_id},
          });
      
          const posts = postData.map((post) => post.get({ plain: true }));
        res.render("adminposts", {layout: "dashboard", posts})
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('newpost', {
      layout: 'dashboard',
    });
  });

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
    
        if (postData) {
          const post = postData.get({ plain: true });
    
          res.render('editpost', {
            layout: 'dashboard',
            post,
          });
        } else {
          res.status(404).end();
        }
      } catch (err) {
        res.redirect('login');
      }
})
module.exports = router;
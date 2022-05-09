const router = require('express').Router();
const res = require('express/lib/response');
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newPost = await Post.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPost);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, req) => {
      try {
          const postInfo = await Post.findOne({where:{id:req.params.id, 
            user_id: req.session.user_id,}})
          await postInfo.update({description: req.body.description})
          res.json(postInfo)
      } catch (err) {
          res.status(400).json(err)
      }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postInfo = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!postInfo) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postInfo);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
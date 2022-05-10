const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:postid', withAuth, async (req, res) => {
    try {
        const commentInfo = await Post.findByPk(req.params.postid, {
            include: [
                {
                    model: Comment
                }
            ]
        }
         )
         console.log(commentInfo);
        // await commentInfo.update({description: req.body.description})
        // res.json(postInfo)
    } catch (err) {
        res.status(400).json(err)
    }
})

module.exports = router;
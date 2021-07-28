import { Post } from '../models/post.js'
import { Reply } from '../models/reply.js'

export {
  create,
  deleteReply as delete
}

function create(req, res) {
  // Add author/game info to req.body (for when we use model.create)
  req.body.author = req.user.profile._id
  req.body.post = req.params.id
  // Create the review
  Reply.create(req.body)
  .then(reply => {
    // Add the review reference to the Game
    Post.findById(req.params.id)
    .then(post => {
      post.replies.push(reply.id)
      post.save()
      .then(() => {
        res.redirect(`/posts/${post.postId}`)
      })
    })
  })
}

function deleteReply(req, res){
  Reply.findByIdAndDelete(req.body._id, function(reply, err){
    res.redirect('/posts')
      })
    }
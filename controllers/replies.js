import { Post } from '../models/post.js'
import { Reply } from '../models/reply.js'

export {
  create,
  reply
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
      post.replies.push(reply._id)
      post.save()
      .then(() => {
        res.redirect(`/posts/${post._id}`)
      })
    })
  })
}

function reply(req, res) {
  // Add author of reply to req.body
  req.body.poster = req.params.id
  req.body.author = req.user.profile._id
  Reply.findById(req.params.id)
  .then(reply => {
    reply.response.push(req.body)
    reply.save()
    .then(() => {
      res.redirect(`/posts/${req.params.id}`)
    })
  })
}

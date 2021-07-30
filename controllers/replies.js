import { Post } from '../models/post.js'
import { Reply } from '../models/reply.js'

export {
  create,
  deleteReply as delete,
  updateReply as update
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

function updateReply(req, res){
  Reply.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/post/${post._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


function deleteReply(req, res){
  Reply.findByIdAndDelete(req.params.id, function(err, reply){
    res.redirect(`/posts/${post._id}`)
    })
}
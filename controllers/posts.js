import { Post } from '../models/post.js'
import { Reply } from '../models/reply.js'


export {
  index,
  create,
  newPost as new,
  deletePost as delete,
  search,
  show,
  addToWall,
  removeFromWall,
  update,
  edit
}



function index(req, res){
  Post.find({})
  .populate('leader')
  .populate('team')
  .populate('replies')
  .sort({createdAt: "desc"})
  .then(posts=>{
    res.render('posts/index',{
      title: "LFG",
      posts
    })
  })

}

function newPost(req, res){
  res.render('posts/new',{
    title: "New Post"
  });
}

function create(req, res){
  req.body.postId = req.params.id
  req.body.leader = req.user.profile._id
  req.body.eroles= !!req.body.eroles
  req.body.support1 = !!req.body.support1
  req.body.support2= !!req.body.support2
  req.body.dps1= !!req.body.dps1
  req.body.dps2= !!req.body.dps2
  req.body.tank1= !!req.body.tank1
  req.body.tank2= !!req.body.tank2

  Post.create(req.body)
  .then(()=>{
    res.redirect('/posts')
  })
}
function update(req, res) {
  req.body.eroles= !!req.body.eroles
  req.body.support1 = !!req.body.support1
  req.body.support2= !!req.body.support2
  req.body.dps1= !!req.body.dps1
  req.body.dps2= !!req.body.dps2
  req.body.tank1= !!req.body.tank1
  req.body.tank2= !!req.body.tank2
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(post => {
    res.redirect(`/posts/${post._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/posts`)
  })
}

function edit(req, res) {
  Post.findById(req.params.id)
  .populate('team')
  .then(post => {
    res.render('posts/edit', {
      title: `Editing ${post.title}`,
      post
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}




function deletePost(req, res){
  Post.findByIdAndDelete(req.params.id, function(err, post) {
    Reply.findByIdAndDelete(req.params.id, function(err, reply){
      res.redirect('/posts')
      })
    })
}


function search(req, res){
  
}

function show(req,res){
  Post.findById(req.params.id)
  .populate('leader')
  .populate({
    path: 'replies',
    populate:{
      path: 'author'
    }
  })
  .then(post=>{
    res.render('posts/show',{
      title: 'LFG Details',
      post
    })
  })
}

function addToWall(req, res) {
  // Add id of the logged in user to req.body for creating a game for the first time (if it doesn't exist in the database)
  req.body.collectedBy = req.user.profile._id
  // Look to see if the game already exists in the database
  Post.findById(req.params.id)
  .then(post => {
    // If it does, push the user's profile id to game.collectedBy
    if (post) {
      post.collectedBy.push(req.user.profile._id)
      post.team.push(req.user.profile._id)
      post.save()
      .then(() => {
        res.redirect(`/posts/${req.params.id}`)
      })
    } else {
      // If it doesn't exist in the database, create it!
      Post.create(req.body)
      .then(() => {
        res.redirect(`/posts/${req.params.id}`)
      })
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


function removeFromWall(req, res) {
  // Find the game in the database
  Post.findById(req.params.id)
  .then(post => {
    // Remove the user's profile id from collectedBy
    post.replies.remove(req.user.profile._id)
    post.team.remove(req.user.profile._id)
    post.collectedBy.remove(req.user.profile._id)
    post.save()
    .then(() => {
      res.redirect(`/posts/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}
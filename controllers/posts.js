import { Post } from '../models/post.js'


export {
  index,
  create,
  newPost as new,
  deletePost as delete,
  update,
  search,
  show,
  addToWall,
  removeFromWall
}

function index(req, res){
  Post.find({})
  .populate('leader')
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


function update(req,res){

}

function deletePost(req, res){

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
  Post.findOne({ userId: req.params.id })
  .then(post => {
    // If it does, push the user's profile id to game.collectedBy
    if (post) {
      post.collectedBy.push(req.user.profile._id)
      Post.save()
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
  Post.findOne({ postId: req.params.id })
  .then(post => {
    // Remove the user's profile id from collectedBy
    post.collectedBy.remove({_id: req.user.profile._id})
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
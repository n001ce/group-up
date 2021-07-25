import { Post } from '../models/post.js'


export {
  index,
  create,
  newPost as new,
  deletePost as delete,
  update,
  search,
  show
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

  }

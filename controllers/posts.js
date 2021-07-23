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
  .populate('author')
  .sort({createdAt: "desc"})
  .then(post=>{
    res.render('posts/index',{
      title: "LFG",
      post
    })
  })

}

function newPost(req, res){

}

function create(req, res){
  
}

function update(req,res){

}

function deletePost(req, res){

}

function search(req, res){
  
}

function show(req,res){

  }

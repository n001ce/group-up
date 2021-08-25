import { Post } from '../models/post.js'
import { Reply } from '../models/reply.js'


export {
  index,
  create,
  deletePost as delete,
  show,
  addToWall,
  removeFromWall,
  update,
  edit,
}



function index(req, res){
  Post.find({})
  .populate('leader')
  .populate('team')
  .populate('replies')
  .sort({createdAt: "desc"})
  .then(post=>{
    res.json(post)
    })
  }

function create(req, res){
  Post.create(req.body)
  .then(post => {
    post.populate('author').populate('LFG').execPopulate()
    .then(()=> {
      res.json(post)
    })
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
    res.json(post)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`back`)
  })
}

function edit(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .populate('team').populate('replies').execPopulate()
  .then(post => {
    if(req.user.profile._id.toString() === post.leader._id.toString()){
      res.json(post)
    } else{
    res.redirect('back')
  }
})
}




function deletePost(req, res){
  Post.findByIdAndDelete(req.params.id, function(err, post) {
    Reply.findByIdAndDelete(req.params.id, function(err, reply){
      res.redirect('/posts')
      })
    })
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
    res.json(post)
    })
}

function addToWall(req, res) {
  req.body.collectedBy = req.user.profile
  Profile.findById(req.user.profile)
  .then(profile => {
    Post.findOne({id: req.body.id})
    .then(post =>  {
      if (post) {
        post.collectedBy.push(req.user.profile)
        post.save()
        .then(post => {
          profile.post.push(post._id)
          profile.save()
          profile.populate('post').populate('friends').execPopulate()
          .then((profile) => {
            res.json(profile)
          })
        })
      } else {
        Post.create(req.body)
        .then(post => {
          profile.post.push(post._id)
          profile.save()
          profile.populate('post').populate('friends').execPopulate()
          .then((profile) => {
            res.json(profile)
          })
        })
      }
    })
  })
}



function removeFromWall(req, res) {
  // Find the game in the database
  Post.findOne({ id: req.params.id })
  .then(post => {
    post.collectedBy.remove({ _id: req.user.profile })
    post.save()
    .then(() => {
      Profile.findById(req.user.profile)
      .then(profile => {
        let postIdx = profile.post.indexOf(post._id)
        profile.media.splice(psotIdx, 1)
        profile.save()
        profile.populate('post').populate('friends').execPopulate()
        .then(()=> res.json(profile))
      })
    })
  })
}


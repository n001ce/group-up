import { Post } from '../models/post.js'
import { Profile } from '../models/profile.js'
import { Team } from '../models/team.js'

export {
  create,
  removePlayer as delete,
  addPlayer as update,
}

function create(req, res) {
  // Add author/game info to req.body (for when we use model.create)
  req.body.post = req.params.id
  // Create the review
  Team.create(req.body)
  .then(team => {
    Post.findById(req.params.id)
    .then(post => {
        post.team.push(team._id)
        post.save()
        .then(() => {
            res.json(team)
            })
        })
    })
}

function addPlayer(req, res){
    console.log(req.body)
    Team.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then(team => {
        team.save()
        team.populate('m_support').populate('o_support').populate('m_dps').populate('o_dps').populate('m_tank').populate('o_tank').execPopulate()
        .then(()=> {
            Profile.findByIdAndUpdate(req.user.profile._id)
            .then(profile=>{
                profile.save()
                profile.populate('team').execPopulate()
            })
            .then(()=>{
                res.json(team)
            })
        })
    })
}

function removePlayer(req, res){
    role = req.body.role
    Team.findByIdAndUpdate(req.params.id)
    .then(team => {
        team.role.remove({ _id: req.user.profile })
        team.save()
        .then(()=> {
            Profile.findByIdAndUpdate(req.user.profile)
            profile.team.remove({ _id: req.params.id })
            profile.save()
            .then(()=> {
                res.json(team)
            })
        })
    })
}



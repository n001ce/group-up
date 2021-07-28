import { Profile } from "../models/profile.js"
import { Post } from "../models/post.js"
import axios from 'axios'
import { Stat } from "../models/stat.js"


export {
  index,
  show,
  edit,
  update,
  follow,
  unfollow
}

function follow(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.friends.push(req.params.id)
    profile.save()
    .then(()=> {
      res.redirect(`/profiles/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function unfollow(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    profile.save()
    .then(()=> {
      res.redirect(`/profile/${req.params.id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profile/${profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profile/edit', {
      title: `Editing ${profile.name}'s profile`,
      profile
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  // Populate friends to get profile data for each of them
  .populate('followers')
  .then(profile => {
    // Use the profile clicked to find games belonging to that user
    Post.find({ collectedBy: profile._id })
    .then(posts => {
      // Find the profile of the current logged in user
      Profile.findById(req.user.profile)
      .then(userProfile => {
        res.render('profile/show', {
          // Profile of the user clicked
          profile,
          // Profile of the logged in user
          userProfile,
          title: `${profile.name}'s profile`,
          posts
      })
      })
    })

  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profile/index', {
      title: "LFG Profile",
      profiles,
    })
  })
}

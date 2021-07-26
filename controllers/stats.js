import { Stat } from '../models/stat.js'
import axios from 'axios'

export {
  search,
  addToProfile,
  removeFromProfile
}

function addToProfile(req, res) {
    // Add id of the logged in user to req.body for creating a game for the first time (if it doesn't exist in the database)
    req.body.collectedBy = req.user.profile._id
    // Look to see if the game already exists in the database
    Stat.findOne({ statId: req.params.id })
    .then(stat => {
      // If it does, push the user's profile id to game.collectedBy
      if (stat) {
        stat.collectedBy.push(req.user.profile._id)
        stat.save()
        .then(() => {
          res.redirect(`/stats/${req.params.id}`)
        })
      } else {
        // If it doesn't exist in the database, create it!
        Stat.create(req.body)
        .then(() => {
          res.redirect(`/stats/${req.params.id}`)
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

  function removeFromProfile(req, res) {
    // Find the game in the database
    Stat.findOne({ statId: req.params.id })
    .then(stat => {
      // Remove the user's profile id from collectedBy
      stat.collectedBy.remove({_id: req.user.profile._id})
      stat.save()
      .then(() => {
        res.redirect(`/stats/${req.params.id}`)
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }
  


function search(req, res) {
  axios.get(`https://public-api.tracker.gg/v2/overwatch/standard/profile/xbl/N001CE`,{
  headers: {
    "TRN-Api-Key": process.env.TRN_API_KEY
  }})
  .then((response) => {
    Stat.findOne({ statId: response.data.id })
    .then((stat)=> {
      res.render("stats/show", {
        title: "Player Details",
        apiResult: response.data,
        stat
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


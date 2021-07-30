import { Stat } from '../models/stat.js'
import axios from 'axios'

export {
  search,
  addToProfile,
  removeFromProfile,
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

  }
  


function search(req, res) {
  axios.get(`https://ow-api.com/v1/stats/${req.body.platform}/us/${req.body.gamerTag}/profile`)
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

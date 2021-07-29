import { Stat } from '../models/stat.js'
import axios from 'axios'

export {
  search,
  addToProfile,
  removeFromProfile,
}

function addToProfile(req, res) {

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
    res.render('stats/error')
  })
}

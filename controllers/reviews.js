import { Profile } from '../models/profile.js'
import { Review } from '../models/review.js'

export {
  createReview as create
}

function createReview(req, res) {
  // Add author/game info to req.body (for when we use model.create)
  req.body.author = req.user.profile._id
  req.body.profile = req.params.id
  // Create the review
  Review.create(req.body)
  .then(review => {
    // Add the review reference to the Game
    Profile.findById(req.params.id)
    .then(profile => {
      profile.reviews.push(review._id)
      profile.save()
      .then(() => {
        res.redirect(`/profile/${review._id}`)
      })
    })
  })
}
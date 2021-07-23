import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  PlayerReview
}

const playerReviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5},
  content: String,
  player: { type: Schema.Types.ObjectId, ref: "Profile" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
},{
  timestamps: true,
})

const PlayerReview = mongoose.model("PlayerReview", playerReviewSchema)
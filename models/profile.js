import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Profile
}

const reviewSchema = new Schema({
  rating: {type: Number, min: 1, max: 5},
  content: String,
  profile: { type: Schema.Types.ObjectId, ref: "Profile" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
  },{
  timestamps: true,
  })

const profileSchema = mongoose.Schema({
  name: String,
  gamerTag: {type: String},
  avatar: String,
  platform:{type: String, default: "xbl"},
  region: String,
  roleSelect: {type: String, default: "Support"},
  reviews: [reviewSchema],
  followers: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  
 }, {
  timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)
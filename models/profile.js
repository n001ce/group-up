import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Profile
}

const profileSchema = mongoose.Schema({
  name: String,
  gamerTag: String,
  avatar: String,
  followers: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  srank: Number,
  srankImg: String,
  drank: Number,
  drankImg: String,
  trank: Number,
  trankImg: String,
  level: Number,
  mostPlayedHero: String,
 }, {
  timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)
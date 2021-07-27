import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Profile
}

const profileSchema = mongoose.Schema({
  name: String,
  gamerTag: {type: String},
  avatar: String,
  followers: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  platform:{type: String, default: "xbl"},
  region: String,
 }, {
  timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)
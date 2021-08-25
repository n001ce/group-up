import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Profile
}


const profileSchema = mongoose.Schema({
  name: String,
  gamerTag: {type: String},
  avatar: String,
  platform:{type: String, default: "xbl"},
  region: String,
  roleSelect: {type: String, default: "Support"},
  team: {type: Schema.Types.ObjectId, ref: "Team"},
  reviews: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  friends: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  
 }, {
  timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)
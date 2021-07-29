import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Reply
}
const responseSchema = new Schema({
  poster: {type: Schema.Types.ObjectId, ref: "Profile"},
  author: {type: Schema.Types.ObjectId, ref: 'Profile'},
  content: String
},{
  timestamps: true
})

const replySchema = new Schema({
  content: String,
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
  response: [responseSchema]
},{
  timestamps: true,
})

const Reply = mongoose.model("Reply", replySchema)
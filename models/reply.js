import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Reply
}

const replySchema = new Schema({
  content: String,
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  author: { type: Schema.Types.ObjectId, ref: "Profile" },
},{
  timestamps: true,
})

const Reply = mongoose.model("Reply", replySchema)
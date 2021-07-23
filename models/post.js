import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Post
}

const preplySchema = new Schema({
  author: [{type: Schema.Types.ObjectId, ref: "Profile"}],
  content: String
},{
  timestamps: true
})

const postSchema = new Schema({
  profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  content: String,
  video: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
},{
  timestamps: true,
});

const Post = mongoose.model("Post", postSchema);
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Post
}



const postSchema = new Schema({
  title: {type: String, required: true},
  postId: String,
  leader: {type: Schema.Types.ObjectId, ref: "Profile"},
  queue: String,
  eroles: [{
    support1: Boolean,
    support2: Boolean,
    dps1: Boolean,
    dps2: Boolean,
    tank1: Boolean,
    tank2: Boolean,
  }],
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
  team:{type: Schema.Types.ObjectId, ref: "Team"},
  collectedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}],
},{
  timestamps: true,
});



function arrayLimit(val) {
  return val.length <= 6;
}

const Post = mongoose.model("Post", postSchema);
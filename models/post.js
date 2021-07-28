import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Post
}



const postSchema = new Schema({
  title: String,
  postId: String,
  leader: {type: Schema.Types.ObjectId, ref: "Profile"},
  queue: String,
  eroles: {
    type: Boolean,
    default: true
  },
  support1:{
    type:Boolean,
    default: true
    },
  support2:{
    type: Boolean,
    default: true
    },
  dps1:{
    type: Boolean,
    default: true
    },
  dps2:{
    type: Boolean,
    default: true
    },
  tank1:{
    type: Boolean,
    default: true
    },
  tank2:{
    type: Boolean,
    default: true
  },
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
  collectedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}]
},{
  timestamps: true,
});

const Post = mongoose.model("Post", postSchema);
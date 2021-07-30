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
  eroles: {
    type: Boolean,
  },
  support1:{
    type:Boolean,
    },
  support2:{
    type: Boolean,
    },
  dps1:{
    type: Boolean,
    },
  dps2:{
    type: Boolean,
    },
  tank1:{
    type: Boolean,
    },
  tank2:{
    type: Boolean,
  },
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
  team:{
    type: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
    validate: [arrayLimit, '{PATH} exceeds the limit of 6'],
  },
  collectedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}],
},{
  timestamps: true,
});



function arrayLimit(val) {
  return val.length <= 6;
}

const Post = mongoose.model("Post", postSchema);
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
    default:true
  },
  support1:{
    type:Boolean,
    default: isRoleFilled
    },
  support2:{
    type: Boolean,
    default: isRoleFilled
    },
  dps1:{
    type: Boolean,
    default: isRoleFilled
    },
  dps2:{
    type: Boolean,
    default: isRoleFilled
    },
  tank1:{
    type: Boolean,
    default: isRoleFilled
    },
  tank2:{
    type: Boolean,
    default: isRoleFilled
  },
  replies: [{type: Schema.Types.ObjectId, ref: "Reply"}],
  team:[{type: Schema.Types.ObjectId, ref: "Profile"}],
  collectedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}],
},{
  timestamps: true,
});

function isRoleFilled(req, res){
  if(req.team.role != ""){
    role = req.team.role
    req.post.forEach(idx => idx === role ? false : [])
  }
}

const Post = mongoose.model("Post", postSchema);
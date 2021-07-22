import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	LFG
}

const lfgSchema = new Schema({
  profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  content: String,
  video: String,
  replies: [{ type: Schema.Types.ObjectId, ref: "Profile" }],
  // To be filled in later
  // reviews: [reference GameReview],
},{
  timestamps: true,
});

const LFG = mongoose.model("LFG", gameSchema);
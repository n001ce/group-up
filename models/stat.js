import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Stat
}

const statSchema = new Schema({
  gamerTag: String,
  platform: String,
  region: {type: String, default: "us"},
  statId: Number,
  collectedBy: [{type: Schema.Types.ObjectId, ref: "Profile"}]
},{
  timestamps: true,
});

const Stat = mongoose.model("Stat", statSchema);
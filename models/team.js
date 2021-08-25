import mongoose from 'mongoose'
const Schema = mongoose.Schema;

export {
	Team
}



const teamSchema = new Schema({
  teamId: Number,
  post: {type: Schema.Types.ObjectId, ref: "Post"},
  m_support: {type: Schema.Types.ObjectId, ref: "Profile"},
  o_support: {type: Schema.Types.ObjectId, ref: "Profile"},
  m_dps: {type: Schema.Types.ObjectId, ref: "Profile"},
  o_dps: {type: Schema.Types.ObjectId, ref: "Profile"},
  m_tank: {type: Schema.Types.ObjectId, ref: "Profile"},
  o_tank: {type: Schema.Types.ObjectId, ref: "Profile"},
},{
  timestamps: true,
});


const Team = mongoose.model("Team", teamSchema);
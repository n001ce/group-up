import mongoose from 'mongoose'
const Schema = mongoose.Schema

export {
  Review
}


const reviewSchema = new Schema({
rating: {type: Number, min: 1, max: 5},
content: String,
profile: { type: Schema.Types.ObjectId, ref: "Profile" },
author: { type: Schema.Types.ObjectId, ref: "Profile" },
},{
timestamps: true,
})

const Review = mongoose.model("Review", reviewSchema)
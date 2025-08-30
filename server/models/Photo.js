import mongoose from "mongoose";
const PhotoSchema = new mongoose.Schema({
  url: String,
  caption: String,
  createdAt: { type: Date, default: Date.now }
});
const Photo  = mongoose.model('Photo', PhotoSchema);
export default Photo
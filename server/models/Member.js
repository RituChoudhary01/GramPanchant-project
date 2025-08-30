import mongoose from "mongoose";
const MemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  photo: String,
  contact: String,
  bio: String
});
const Memeber = mongoose.model('Member', MemberSchema);
export default Memeber
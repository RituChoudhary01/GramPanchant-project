import mongoose from "mongoose";
const PanchayatSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: String,
  address: String,
  contactEmail: String,
  contactPhone: String,
  socialLinks: { facebook: String, instagram: String, twitter: String, behance: String }
});
const PanchayatModel = mongoose.model('Panchayat', PanchayatSchema);
export default PanchayatModel

import Panchayat from "../models/Panchayat.js";

// GET single panchayat (create default if not exists)
export const getPanchayat = async (req, res) => {
  try {
    let panchayat = await Panchayat.findOne();
    if (!panchayat) {
      panchayat = await Panchayat.create({ name: "Default Panchayat", about: "" });
    }
    res.status(200).json(panchayat);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// UPDATE panchayat
export const updatePanchayat = async (req, res) => {
  try {
    const { name, about } = req.body;
    const updated = await Panchayat.findOneAndUpdate({}, { name, about }, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



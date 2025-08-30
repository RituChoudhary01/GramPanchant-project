import Photo from "../models/Photo.js";
import cloudinary from "../config/cloudinary.js"; 

// GET all photos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST new photo
export const addPhoto = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Now cloudinary.uploader.upload exists
    const result = await cloudinary.uploader.upload(req.file.path);
    const photo = await Photo.create({ url: result.secure_url });

    res.status(201).json({ success: true, photo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};



// DELETE photo
export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    await Photo.findByIdAndDelete(id);
    res.status(200).json({ message: "Photo deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


import News from "../models/News.js";

// GET news list sorted by date
export const getNews = async (req, res) => {
  try {
    const news = await News.find().sort({ createdAt: -1 });
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// POST new news
export const addNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    const news = await News.create({ title, content });
    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// DELETE news
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    await News.findByIdAndDelete(id);
    res.status(200).json({ message: "News deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

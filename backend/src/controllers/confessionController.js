const { getAllConfessions, addConfession, deleteConfessionById } = require("../models/confessionModel");

const getConfessions = async (req, res) => {
  const { data, error } = await getAllConfessions();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

const postConfession = async (req, res) => {
  const { text } = req.body;
  if (!text || text.trim().length === 0 || text.length > 300) {
    return res.status(400).json({ error: "Confessions must be 1-100 characters" });
  }

  const { data, error } = await addConfession(text);
  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
};

const deleteConfession = async (req, res) => {
  const { id } = req.params;
  const { error } = await deleteConfessionById(id);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: "Confession deleted" });
};

module.exports = { getConfessions, postConfession, deleteConfession };
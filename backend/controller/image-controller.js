const File = require("../models/file.js");

async function uploadImage(req, res) {
  const fileObj = {
    path: req.file.path,
    name: req.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    // console.log(file);
    res.status(200).json({
      path: `https://localhost:${process.env.PORT}/files/${file.id}`,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error: error.message });
  }
}
async function getImage(req, res) {
  try {
    const file = await File.findById(req.params.fileId);

    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
}

module.exports = { uploadImage, getImage };

const express = require("express");
const { uploadImage } = require("../controller/image-controller.js");
const upload = require("../utils/upload.js");
const router = express.Router();
const { getImage } = require("../controller/image-controller.js");

router.post("/upload", upload.single("file"), uploadImage);
router.get("/files/:fileId", getImage);

module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

// File upload endpoint
router.post("/", upload.single("file"), (req, res) => {
  res.json({ fileUrl: `http://localhost:5000/uploads/${req.file.filename}` });
});

module.exports = router;

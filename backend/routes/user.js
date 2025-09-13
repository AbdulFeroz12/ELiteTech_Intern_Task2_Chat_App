const express = require("express");
const multer = require("multer");
const User = require("../models/User");
const { authMiddleware } = require("../middleware/auth");

const router = express.Router();

// Multer config → save uploaded files in /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Upload avatar
router.post("/avatar", authMiddleware, upload.single("avatar"), async (req, res) => {
  try {
    const avatarUrl = `/uploads/${req.file.filename}`;
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: avatarUrl },
      { new: true }
    );
    res.json({ message: "Avatar uploaded", avatar: user.avatar });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

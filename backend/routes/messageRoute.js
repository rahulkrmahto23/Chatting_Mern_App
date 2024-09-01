const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");
const {
  getMessages,
  sendMessage,
} = require("../controllers/messageController");

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

module.exports = router;

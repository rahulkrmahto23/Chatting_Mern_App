const express = require("express");
const router = express.Router();
const protectRoute = require("../middleware/protectRoute");
const getUsersForSidebar = require("../controllers/userController");

router.get("/", protectRoute, getUsersForSidebar);

module.exports = router;

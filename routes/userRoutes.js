const express = require("express");
const { registerUser, loginUser, currentUsers } = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

//Route to register the user
router.post("/register", registerUser);

router.post("/loginUser", loginUser);

router.get("/currentUser",validateToken, currentUsers);


module.exports = router;
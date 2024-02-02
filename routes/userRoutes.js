const express = require("express");
const { registerUser, loginUser, currentUsers } = require("../controllers/userController");

const router = express.Router();

//Route to register the user
router.post("/register", registerUser);

router.post("/loginUser", loginUser);
router.post("/currentUser", currentUsers);


module.exports = router;
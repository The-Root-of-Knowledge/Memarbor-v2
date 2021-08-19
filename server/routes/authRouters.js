const express = require("express");

const authController = require("../controllers/authController.js");

const router = express.Router();

//route to handle signup
router.post(
  "/signup",
  authController.createUser,
  // authController.setSSIDCookie,
  (req, res) => res.status(200).json({userId: res.locals.userId})
);

//route to handle login
router.post(
  "/login",
  authController.verifyUser,
  // authController.setSSIDCookie,
  (req, res) => res.status(200).json({userId: res.locals.userId})
);

module.exports = router;

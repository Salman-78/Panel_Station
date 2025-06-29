const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth-controller")
const signupSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware= require("../middlewares/authMiddleware")

router.route("/").get(controller.home)
router.route("/registration").post(validate(signupSchema) , controller.registration)
router.route("/login").post(controller.login)
router.route("/user").get(authMiddleware ,controller.user)

module.exports = router;   

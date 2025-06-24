const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin-controller");
const authMiddleware=require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin-middleware");

router.route("/user").get(authMiddleware,adminMiddleware, adminController.getAllUsers)
router.route("/contact").get(authMiddleware,adminMiddleware, adminController.getAllContacts)
router.route("/user/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteUserById)
router.route("/user/:id").get(authMiddleware, adminMiddleware, adminController.getUserById)
router.route("/user/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUserById)
router.route("/contact/delete/:id").delete(authMiddleware, adminMiddleware, adminController.deleteContactById)


module.exports = router;  
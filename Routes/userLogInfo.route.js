const express = require("express");
const { route } = require("../app");
const userController = require("../Controllers/userLogInfo.controller");
const veryfyToken = require("../middlewares/veryfyToken");
const { authenticateKey } = require("../middlewares/apiKeyAuth");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", authenticateKey, userController.login);

router.get("/loginInfo", veryfyToken, userController.getMe);

router.route("/:id").patch(userController.patchProductIdInUserSchemaById);
module.exports = router;

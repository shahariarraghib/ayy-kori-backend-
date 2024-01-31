const express = require("express");
const { route } = require("../app");
const productInfoController = require("../Controllers/product.controller");
// const veryfyToken = require("../middlewares/veryfyToken");
const router = express.Router();

router
  .route("/")
  .get(productInfoController.getProductInfo)
  .post(productInfoController.createProductInfo);

router
  .route("/:id")

  .get(productInfoController.getProoductInfoById)
  .patch(productInfoController.patchProoductInfoById)
  .delete(productInfoController.deleteProductInfoById);

module.exports = router;

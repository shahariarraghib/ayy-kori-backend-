const { query } = require("express");
const {
  productService,
  getProductService,
  getProductServiceById,
  patchProductInfoByIdService,
  deleteProductInfoServiceById,
} = require("../Services/productService");

exports.createProductInfo = async (req, res) => {
  try {
    const result = await productService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data insert successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't insert",
      error: error.message,
    });
  }
};

exports.getProductInfo = async (req, res) => {
  try {
    const result = await getProductService(req.query);

    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data not found",
      error: error.message,
    });
  }
};

exports.getProoductInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { category } = req.params;
    const result = await getProductServiceById(id, category);
    res.status(200).json({
      status: "success",
      message: "Data get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't get",
      error: error.message,
    });
  }
};

exports.patchProoductInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await patchProductInfoByIdService(id, req.body);
    res.status(200).json({
      status: "success",
      message: "Data update successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't update ",
      error: error.message,
      et,
    });
  }
};

exports.deleteProductInfoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductInfoServiceById(id);
    res.status(200).json({
      status: "success",
      message: "Data delete successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data couldn't delete",
      error: error.message,
    });
  }
};

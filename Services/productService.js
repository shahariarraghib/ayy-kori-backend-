const productInfo = require("../Models/productSchema");

exports.productService = async (prooductInfo) => {
  const result = await productInfo.create(prooductInfo);
  return result;
};

exports.getProductService = async (query) => {
  const result = await productInfo.find(query);
  return result;
};

exports.getProductServiceById = async (id) => {
  const result = await productInfo.findById(id);
  return result;
};

exports.patchProductInfoByIdService = async (productId, patchData) => {
  const result = await productInfo.updateOne(
    { _id: productId },
    { $set: patchData },
    { runValidators: true }
  );
  return result;
};

exports.deleteProductInfoServiceById = async (id) => {
  const result = await productInfo.deleteOne({ _id: id });
};

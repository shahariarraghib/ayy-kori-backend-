const userLogInfo = require("../Models/userLogInfo");
const ObjectId = require("mongodb").ObjectId;
const { json } = require("express");
exports.signupService = async (userInfo) => {
  const result = await userLogInfo.create(userInfo);
  return result;
};

exports.loginService = async (email) => {
  const result = await userLogInfo.findOne({ email });
  return result;
};

exports.patchProductIdInUserByIdService = async (userId, patchData) => {
  const result = await userLogInfo.updateOne(
    { _id: userId },
    { $push: { productbuyinfo: patchData } },
    { runValidators: true }
  );
  return result;
};

const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

const productSchema = mongoose.Schema(
  {
    productname: {
      type: String,
      required: ["provide product name"],
      lowercase: true,
      
    },
    productbrand: {
      type: String,
      required: ["provide brand name"],
      lowercase: true,
  
    },
    productquantity: {
      type: Number,
    },
    productprice: {
      type: Number,
    },
  },

  { timestamps: true }
);

const productInfo = mongoose.model("productInfo", productSchema);
module.exports = productInfo;

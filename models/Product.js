// models/Product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  designName: { type: String },
  remark: { type: String },
  grossWeight: {
    type: String,
  },
  netWeight: {
    type: String,
  },
  purity: String,
  photoPaths: String, // Store photo path here, not the image
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

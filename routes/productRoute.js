const express = require("express");
const {
  upload,
  addProductController,
  productsController,
  categoryController,
  subCategoryController,
  singleProductController,
  goldController,
  silverController,deleteProductController,filterSubCategoryController,
  barAndCoinsController
} = require("../controllers/Product");
const router = express.Router();

// Route for adding a new product with photo uploads
router.post("/category",  filterSubCategoryController); // todo Using the same endpoint for upload and creation
router.post("/newproduct", upload, addProductController); // todo Using the same endpoint for upload and creation
router.get("/allproduct", productsController); // ? Using the same endpoint for upload and creation
router.get("/goldproduct", goldController);
router.get("/barandcoins", barAndCoinsController);
 // ? Using the same endpoint for upload and creation
router.get("/silverproduct", silverController); // ? Using the same endpoint for upload and creation
router.get("/filtercategory/:category", categoryController); // ! Using the same endpoint for upload and creation
router.get("/filtersubcategory/:subcategory", subCategoryController); // todo Using the same endpoint for upload and creation
router.get("/product/:id", singleProductController); // ? Using the same endpoint for upload and creation
router.delete("/delete/:id", deleteProductController); // ? Using the same endpoint for upload and creation

module.exports = router;

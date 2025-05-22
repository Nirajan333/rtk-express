import expressAsyncHandler from "express-async-handler";
import Product from "../schema/product.schema.js";

/* 
expressAsynchHandler is a wrapper
it must wrap asych function
if any error occur at  that function
it automaticall call error middlewer next(error)



*/

export const createProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      result: result,
    });
  }

  // next(error)
);

export const readAllProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.find({});
    // output of find is in array of object
    res.status(200).json({
      success: true,
      message: "Product read successfully.",
      result: result,
    });
  }
);

export const readProductDetailsController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.findById(req.params.id);
    // output will be in object or null
    res.status(200).json({
      success: true,
      message: "Product Read Successfully.",
      result: result,
    });
  }
);

export const updateProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Product updated successfully.",
      result: result,
    });
  }
);

export const deleteProductController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully.",
      result: result,
    });
  }
);

/* 

Product.creat(req.body)  
Product.find({})//  [{}, {}] , []
Produt.findById(req.params.id)// {} , null
Product.findByIdAndUpdate(req.params.id,req.body,{new:true})// 
Product.findByIdAndDelete(req.params.id)



npm i express-async-handler






*/

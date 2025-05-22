import expressAsyncHandler from "express-async-handler";
import Review from "../schema/review.schema.js";
// import Review from "../schema/review.schema.js";
// import Review from "../schema/review.schema.js";

export const createReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Review.create(req.body);
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      result: result,
    });
  }

  // next(error)
);

export const readAllReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Review.find({}).populate("user").populate("product");
    // output of find is in array of object
    res.status(200).json({
      success: true,
      message: "Review read successfully.",
      result: result,
    });
  }
);

export const readReviewDetailsController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Review.findById(req.params.id);
    // output will be in object or null
    res.status(200).json({
      success: true,
      message: "Review Read Successfully.",
      result: result,
    });
  }
);

export const updateReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Review updated successfully.",
      result: result,
    });
  }
);

export const deleteReviewController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Review deleted successfully.",
      result: result,
    });
  }
);

/* 

Review.creat(req.body)  
Review.find({})//  [{}, {}] , []
Produt.findById(req.params.id)// {} , null
Review.findByIdAndUpdate(req.params.id,req.body,{new:true})// 
Review.findByIdAndDelete(req.params.id)



npm i express-async-handler






*/

import { Router } from "express";
import {
  createReviewController,
  deleteReviewController,
  readAllReviewController,
  readReviewDetailsController,
  updateReviewController,
} from "../controller/review.controller.js";

const reviewRoute = Router();
reviewRoute
  .route("/")
  .post(createReviewController)
  .get(readAllReviewController);
reviewRoute
  .route("/:id")
  .get(readReviewDetailsController)
  .patch(updateReviewController)
  .delete(deleteReviewController);

export default reviewRoute;

/* 


          Review => name, price, quantity, isDamage
                                use timestamps:true
                Review    =>name, email, password, profileImage
                        add unique:true
                Review => review, review, description
*/

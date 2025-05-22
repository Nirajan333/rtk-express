import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  readAllProductController,
  readProductDetailsController,
  updateProductController,
} from "../controller/product.controller.js";
const productRoute = Router();
productRoute
  .route("/")
  .post(createProductController)
  .get(readAllProductController);
productRoute
  .route("/:id")
  .get(readProductDetailsController)
  .patch(updateProductController)
  .delete(deleteProductController);

export default productRoute;

/* 


          Product => name, price, quantity, isDamage
                                use timestamps:true
                User    =>name, email, password, profileImage
                        add unique:true
                Review => product, user, description
*/

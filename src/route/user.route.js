import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  readAllUserController,
  readUserDetailsController,
  updateUserController,
} from "../controller/user.controller.js";

const userRoute = Router();
userRoute.route("/").post(createUserController).get(readAllUserController);
userRoute
  .route("/:id")
  .get(readUserDetailsController)
  .patch(updateUserController)
  .delete(deleteUserController);

export default userRoute;

/* 


          User => name, price, quantity, isDamage
                                use timestamps:true
                User    =>name, email, password, profileImage
                        add unique:true
                Review => user, user, description
*/

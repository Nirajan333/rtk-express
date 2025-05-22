import expressAsyncHandler from "express-async-handler";
import User from "../schema/user.schema.js";
// import User from "../schema/user.schema.js";

export const createUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      result: result,
    });
  }

  // next(error)
);

export const readAllUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await User.find({});
    // output of find is in array of object
    res.status(200).json({
      success: true,
      message: "User read successfully.",
      result: result,
    });
  }
);

export const readUserDetailsController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await User.findById(req.params.id);
    // output will be in object or null
    res.status(200).json({
      success: true,
      message: "User Read Successfully.",
      result: result,
    });
  }
);

export const updateUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "User updated successfully.",
      result: result,
    });
  }
);

export const deleteUserController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
      result: result,
    });
  }
);

/* 

User.creat(req.body)  
User.find({})//  [{}, {}] , []
Produt.findById(req.params.id)// {} , null
User.findByIdAndUpdate(req.params.id,req.body,{new:true})// 
User.findByIdAndDelete(req.params.id)



npm i express-async-handler






*/

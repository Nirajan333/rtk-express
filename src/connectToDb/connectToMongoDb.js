import mongoose from "mongoose";

const connectToMongoDb = async () => {
  //connect express app to mongdb
  try {
    let result = await mongoose.connect("mongodb://0.0.0.0:27017/dw24");
    console.log("application is connected to database successfully");
  } catch (error) {
    console.log("Failed to connect with database");
  }
};

export default connectToMongoDb;

/* 
async await 


*/

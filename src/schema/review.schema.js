// {name: "Laptop", price:100000, quantity:10, isDa}
import { model, Schema } from "mongoose";
const reviewSchema = Schema(
  {
    product: {
      type: Schema.ObjectId,
      ref: "Product",
      required: [true, "product is required."],
    },
    user: {
      type: Schema.ObjectId,
      ref: "User",
      required: [true, "user is required"],
      unique: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  {
    timestamps: true,

    toJSON: {
      transfrom: (doc, ret) => {
        ret.id = red._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);
const Review = model("Review", reviewSchema);
export default Review;
/*
table name must be first letter capital
table name and model name must be same
*/

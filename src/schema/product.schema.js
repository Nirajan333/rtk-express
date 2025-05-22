// {name: "Laptop", price:100000, quantity:10, isDa}
import { model, Schema } from "mongoose";
const productSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity is required"],
    },
    isDamage: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);
const Product = model("Product", productSchema);
export default Product;
/*
table name must be first letter capital
table name and model name must be same
*/

// {name: "Laptop", price:100000, quantity:10, isDa}
import { model, Schema } from "mongoose";
const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name is required."],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    profileImage: {
      type: String,
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
const User = model("User", userSchema);
export default User;
/*
table name must be first letter capital
table name and model name must be same
*/

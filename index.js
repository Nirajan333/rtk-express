import express, { json } from "express";
import connectToMongoDb from "./src/connectToDb/connectToMongoDb.js";
import errorMiddleware from "./src/middleware/errorMiddleware.js";
import pageNotFoundMiddleware from "./src/middleware/pageNotFoundMiddleware.js";
import productRoute from "./src/route/product.route.js";
import userRoute from "./src/route/user.route.js";
import reviewRoute from "./src/route/review.route.js";
import cors from "cors";

let app = express();
app.listen(8000, () => {
  console.log("Express app is listening at port 8000");
  connectToMongoDb();
});

app.use(json()); // Enables Express to parse JSON in request bodies
app.use(cors());

// Placeholder route

app.use("/product", productRoute);
app.use("/user", userRoute);

app.use("/review", reviewRoute);

app.use(errorMiddleware);
app.use(pageNotFoundMiddleware);

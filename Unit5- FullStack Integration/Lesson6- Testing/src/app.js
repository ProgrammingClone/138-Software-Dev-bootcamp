import express from "express";
import userRoute from "./routes/userRoute.js";
import { handleError } from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());
app.use("/users", userRoute);

// custom error route created to show error handling
app.get("/cause-error", (req, res, next) => {
  const error = new Error("Server Error");
  error.status = 500;
  next(error); // Pass the error to the middleware
});

app.use(handleError);

app.listen("3000", (req, res) => {
  console.log("app running on port 3000");
});

export default app;

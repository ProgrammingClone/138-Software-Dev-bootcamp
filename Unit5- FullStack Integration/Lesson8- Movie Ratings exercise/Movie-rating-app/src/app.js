import dotenv from "dotenv/config";
import path from "path";
import express from "express";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";

connectDB();
const app = express();

// ejs setup
app.set("view engine", "ejs");
// middlewares


// route
app.use('/movies', movieRoutes);

const PORT  =process.env.PORT || 3000;

app.listen(PORT, () => {
  // console.log(__filename, __dirname);
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
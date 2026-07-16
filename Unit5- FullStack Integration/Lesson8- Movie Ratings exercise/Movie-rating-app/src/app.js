import dotenv from "dotenv/config";
import path from "path";
import express from "express";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

connectDB();
const app = express();

// ejs setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirName, "views"));

// #region middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// #endregion

// redirect 
app.get('/', (req, res) => res.redirect('/movies'));
// route

app.use('/movies', reviewRoutes);
app.use('/movies', movieRoutes); // connecting the api routes

const PORT  =process.env.PORT || 3000;

app.listen(PORT, () => {
  // console.log(__fileName, __dirName);
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
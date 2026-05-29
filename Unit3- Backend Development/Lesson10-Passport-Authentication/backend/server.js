import express from "express";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import morgan from "morgan";
import "./passport-config.js"; // Note: We are importing this for its side effects (configuring Passport).
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import dotenv from "dotenv";
dotenv.config();

// Create an instance of the Express application.
const app = express();
// Define the port the server will listen on. It will use the PORT environment variable if set, otherwise default to 3000.
const PORT = process.env.PORT || 3000;
// Define the MongoDB connection URI. It will use the MONGO_URI environment variable if set, otherwise default to a local MongoDB instance and database.
const MONGO_URI =
  process.env.MONGO_URI

// Use Morgan middleware for logging HTTP requests in the 'dev' format (concise output colored by response status).
app.use(morgan("dev"));
// Use Express's built-in middleware to parse incoming requests with JSON payloads.
// This makes `req.body` available for JSON requests.
app.use(express.json());
// Use Express's built-in middleware to parse incoming requests with URL-encoded payloads (e.g., from HTML forms).
// `extended: true` allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.urlencoded({ extended: true }));
// Serve static files (like HTML, CSS, images) from the 'public' directory.
// For example, a request to /index.html will serve public/index.html.
app.use(express.static("public"));

// Configure the express-session middleware.
app.use(
  session({
    // `secret` is used to sign the session ID cookie. It should be a long, random string kept secret.
    // It uses the SESSION_SECRET environment variable or a default fallback key.
    secret: process.env.SESSION_SECRET || "your_secret_key",
    // `resave: false` means the session will not be saved back to the session store
    // if it was never modified during the request. This can help prevent race conditions.
    resave: false,
    // `saveUninitialized: false` means that a session that is new but not modified will not be saved.
    // This is useful for reducing server storage usage and complying with cookie laws.
    saveUninitialized: false,
    cookie: {
      // `secure: true` ensures the cookie is only sent over HTTPS. This should be true in production.
      // It's set based on the NODE_ENV environment variable.
      secure: process.env.NODE_ENV === "production",
      // `maxAge` sets the maximum age of the cookie in milliseconds (here, 7 days).
      // After this time, the cookie (and session) will expire.
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
      // `sameSite: 'strict'` helps protect against CSRF (Cross-Site Request Forgery) attacks
      // by restricting when the browser sends the cookie.
      sameSite: "strict",
    },
  })
);

// Initialize Passport middleware. This is essential for Passport to work.
app.use(passport.initialize());
// Enable Passport to use sessions. This allows users to stay logged in across requests.
// This middleware must be used after `express-session`.
app.use(passport.session());

// Mount the authentication routes under the '/auth' path.
// For example, a POST request to /auth/login will be handled by the authRoutes router.
app.use("/auth", authRoutes);
// Mount the protected routes under the '/protected' path.
// These routes will typically have middleware to ensure the user is authenticated.
app.use("/protected", protectedRoutes);

// Connect to the MongoDB database using Mongoose.
mongoose
  .connect(MONGO_URI) // Use the connection URI defined earlier.
  .then(() => console.log("Connected to MongoDB")) // If connection is successful, log a message.
  .catch((err) => console.error("Could not connect to MongoDB:", err)); // If connection fails, log an error.

// Start the Express server and have it listen for incoming requests on the defined PORT.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

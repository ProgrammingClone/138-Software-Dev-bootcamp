const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    age: Number,
  },
  { timestamps: true },
);

// Virtuals are fields that are not persisted to MongoDB but are computed on the fly.
// Here `info` concatenates name and age for quick display.
UserSchema.virtual("info").get(function () {
  return `${this.name}${this.age ? ` (age ${this.age})` : ""}`;
});


// Ensure virtuals are included 
UserSchema.set("toJSON", { virtuals: true });


module.exports = mongoose.model("User", UserSchema);

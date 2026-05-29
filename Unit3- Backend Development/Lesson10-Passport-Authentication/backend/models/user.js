import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define the schema for a User.

const userSchema = new mongoose.Schema({
 
  username: { type: String, required: true, unique: true },
  // It must be a String and is required. This will store the hashed password, not the plain text one.
  password: { type: String, required: true },
});

// Define a static method on the userSchema called 'hashPassword'.
// Static methods are called on the Model itself (e.g., User.hashPassword()), not on instances of the model.
// This asynchronous function takes a plain text password and returns a hashed version of it.
userSchema.statics.hashPassword = async function (password) {
  // Higher salt rounds make hashing slower but more secure.
  return await bcrypt.hash(password, 10);
};

// Define an instance method on the userSchema called 'isValidPassword'.
// Instance methods are called on individual documents (instances of the User model, e.g., user.isValidPassword()).
userSchema.methods.isValidPassword = async function (password) {
  // `this.password` refers to the hashed password stored in the current user document.
  // bcrypt.compare securely compares the plain password with the stored hash.
  // It returns true if they match, false otherwise.
  return await bcrypt.compare(password, this.password);
};


const User = mongoose.model("User", userSchema);

export default User;

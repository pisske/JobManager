import mongoose from "mongoose";
import validator from "validator";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    mixLength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    mixLength: 6,
  },
  lastName: {
    type: String,
    required: [true, "Please provide password"],
    mixlength: 20,
    trim: true,
    default: "last name",
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "my city",
  },
});

export default mongoose.model("User", userSchema);

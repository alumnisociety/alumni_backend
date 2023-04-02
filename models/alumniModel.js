const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  email: {
    type: String, 
    require: [true, "email is required"],
    lowercase: true,
    validator: [validator.isEmail, "please provide a valid email"],
  },
  image: {
    type: String,
    require: [false, "image is required"],
  },
  mobileNo: {
    type: Number,
    require: [true, "mobile number is required"],
  },
  rollNo: {
    type: Number,
    require: [true, "Roll No. is required"],
  },
  year: {
    type: String,
    require: [true, "year is required"],
  },
  password:{
    type: String
  },
  dept: {
    type: String,
    require: [true, "department is required"],
  },
  company: {
    type: String,
    // require: [true, "Position is required"],
  },
  position: {
    type: String,
    // require: [true, "Position is required"],
  },
  about:{
    type: String,
  },

  linkdinUrl: {
    type: String,
    // require: [true, "linedIn is required"],
  },
  fbUrl: {
    type: String,
    // require: [true, "FB is required"],
  },
  placement: {
    type: String,
    // require: [false],
  },
  internship: {
    type: String,
    // require: [false],
  },
  exprience: {
    type: String,
    // require: [true, false],
  },
});



alumniSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  // const slat= await bcrypt.genSalt()
  const salt= 100;
  this.password =bcrypt.hash(this.password, salt);

  next();
});

alumniSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Alumni = mongoose.model("alumni", alumniSchema);
module.exports = Alumni;

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const alumniSchema = require("../models/alumniModel");
const alumni = require("./alumni.json");

const start = async () => {
  try {
    const DB = process.env.DATABASE.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD
    );
    mongoose.connect(DB).then(() => {
      console.log("mongoDB connection successfull");
    });
    await alumniSchema.deleteMany();
    await alumniSchema.create(alumni);
    console.log("sucsess");
  } catch (e) {
    console.log(e);
  }
};

start();

const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("database wala file chal raha h aur db se connect v ho gaya h");
  } 
  catch (error) {
    console.error("DataBase connection failed in file db.js")
    process.exit(0);
  }
};

module.exports = connectDb

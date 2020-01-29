const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Database");
  } catch (err) {
    console.error(err.message);
    //Exit Process
    process.exit(1);
  }
};

//Export
module.exports = connectDB;

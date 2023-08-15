const mongoose = require("mongoose");

async function DBConnection() {
  const MONGODB_URI = `mongodb://0.0.0.0:27017/FileSharing`;

  try {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
}

module.exports = DBConnection;

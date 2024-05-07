//* LIB
const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL, {
      maxPoolSize: 50,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;

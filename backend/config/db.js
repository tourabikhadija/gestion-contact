
const mongoose = require("mongoose");

async function connectDB() {
  try {
    console.log("Tentative de connexion MongoDB...");
    console.log("URI disponible :", Boolean(process.env.MONGO_URI));

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connectee avec succes !");
  } catch (error) {
    console.error("Erreur MongoDB :", error.message);
    throw error;
  }
}

module.exports = connectDB;

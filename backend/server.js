
const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./route/contactRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gestion Contact API fonctionne !");
});

app.use("/api/contacts", contactRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erreur de connexion MongoDB :", error.message);
  });
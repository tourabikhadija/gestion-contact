const express = require("express");

const {
  ajouterContact,
  afficherContacts,
  modifierContact,
  supprimerContact,
} = require("../Controller/contact.controller");

const router = express.Router();

router.post("/", ajouterContact);
router.get("/", afficherContacts);
router.put("/:id", modifierContact);
router.delete("/:id", supprimerContact);

module.exports = router;

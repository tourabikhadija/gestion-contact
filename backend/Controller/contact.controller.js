
const Contact = require("../models/Contact");


// Ajouter un contact
const ajouterContact = async (req, res) => {
  try {
    console.log("Données reçues :", req.body);

    const contact = await Contact.create(req.body);

    console.log("Contact créé :", contact);

    res.status(201).json(contact);
  } catch (error) {
    console.error("Erreur MongoDB :", error);

    res.status(500).json({
      message: "Erreur lors de l'ajout",
      error: error.message,
    });
  }
};


// Afficher tous les contacts
const afficherContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'affichage" });
  }
};

// Modifier un contact
const modifierContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ message: "Contact introuvable" });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la modification" });
  }
};

// Supprimer un contact
const supprimerContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact introuvable" });
    }

    res.status(200).json({ message: "Contact supprimé" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression" });
  }
};

module.exports = {
  ajouterContact,
  afficherContacts,
  modifierContact,
  supprimerContact,
};
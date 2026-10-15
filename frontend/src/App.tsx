import { useEffect, useState } from "react";
import type { Contact } from "./types";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";

const API_URL = "http://localhost:5000/api/contacts";

// Structure des données reçues depuis MongoDB
type BackendContact = {
  _id: string;
  nomComplet: string;
  email: string;
  telephone: string;
};

// Convertir les données du Backend vers le format React
function formatContact(contact: BackendContact): Contact {
  return {
    id: contact._id,
    name: contact.nomComplet,
    email: contact.email,
    phone: contact.telephone,
  };
}

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] =
    useState<Contact | null>(null);
  const [error, setError] = useState("");

  // 1. Afficher les contacts depuis MongoDB
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Impossible de charger les contacts.");
        }

        const data: BackendContact[] = await response.json();

        setContacts(data.map(formatContact));
      } catch (error) {
        console.error("Erreur de chargement :", error);
        setError(
          "Impossible de charger les contacts. Vérifie le Backend."
        );
      }
    }

    fetchContacts();
  }, []);

  // 2. Ajouter ou modifier un contact
  async function saveContact(contact: Omit<Contact, "id">) {
    try {
      setError("");

      const isEditing = editingContact !== null;

      const url = isEditing
        ? `${API_URL}/${editingContact.id}`
        : API_URL;

      const response = await fetch(url, {
        method: isEditing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomComplet: contact.name,
          email: contact.email,
          telephone: contact.phone,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        console.error("Erreur Backend :", response.status, data);

        throw new Error(
          data?.error ||
            data?.message ||
            `Erreur HTTP ${response.status}`
        );
      }

      const savedContact = formatContact(data as BackendContact);

      if (isEditing) {
        setContacts((previous) =>
          previous.map((item) =>
            item.id === savedContact.id ? savedContact : item
          )
        );
      } else {
        setContacts((previous) => [...previous, savedContact]);
      }

      setShowForm(false);
      setEditingContact(null);
    } catch (error) {
      console.error("Erreur d'enregistrement :", error);

      setError(
        error instanceof Error
          ? error.message
          : "Impossible d'enregistrer le contact."
      );
    }
  }

  // 3. Supprimer un contact
  async function deleteContact(id: string) {
    try {
      setError("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message || "Erreur lors de la suppression."
        );
      }

      setContacts((previous) =>
        previous.filter((contact) => contact.id !== id)
      );
    } catch (error) {
      console.error("Erreur de suppression :", error);

      setError(
        error instanceof Error
          ? error.message
          : "Impossible de supprimer le contact."
      );
    }
  }

  // Ouvrir le formulaire de modification
  function editContact(contact: Contact) {
    setEditingContact(contact);
    setShowForm(true);
  }

  // Fermer le formulaire
  function cancelForm() {
    setShowForm(false);
    setEditingContact(null);
  }

  return (
    <div className="app">
      <header>
        <h1>Gestion Contact</h1>
        <p>Gérez vos contacts facilement.</p>

        <button
          onClick={() => {
            setEditingContact(null);
            setShowForm(true);
          }}
        >
          Ajouter un contact
        </button>
      </header>

      {error && <p role="alert">{error}</p>}

      {showForm && (
        <ContactForm
          key={editingContact?.id ?? "new"}
          initialContact={editingContact}
          onSubmit={saveContact}
          onCancel={cancelForm}
        />
      )}

      <section>
        <h2>Mes contacts ({contacts.length})</h2>

        {contacts.length === 0 ? (
          <p>Aucun contact pour le moment.</p>
        ) : (
          <div className="contacts-list">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                {...contact}
                onEdit={() => editContact(contact)}
                onDelete={() => deleteContact(contact.id)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
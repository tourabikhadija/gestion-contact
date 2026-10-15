import { useState } from "react";
import type { Contact } from "../types";

type ContactFormProps = {
  initialContact: Contact | null;
  onSubmit: (contact: Omit<Contact, "id">) => void;
  onCancel: () => void;
};

function ContactForm({
  initialContact,
  onSubmit,
  onCancel,
}: ContactFormProps) {
  const [name, setName] = useState(initialContact?.name ?? "");
  const [email, setEmail] = useState(initialContact?.email ?? "");
  const [phone, setPhone] = useState(initialContact?.phone ?? "");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onSubmit({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {initialContact
          ? "Modifier un contact"
          : "Ajouter un contact"}
      </h2>

      <label htmlFor="name">Nom complet</label>
      <input
        id="name"
        type="text"
        placeholder="Ex : Khadija Tourabi"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Ex : khadija@email.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <label htmlFor="phone">Téléphone</label>
      <input
        id="phone"
        type="tel"
        placeholder="Ex : 0612345678"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        required
      />

      <button type="submit">
        {initialContact ? "Enregistrer" : "Ajouter"}
      </button>

      <button type="button" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
}

export default ContactForm;
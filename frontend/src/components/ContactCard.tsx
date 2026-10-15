
type ContactCardProps = {
  name: string;
  email: string;
  phone: string;
  onEdit: () => void;
  onDelete: () => void;
};

function ContactCard({
  name,
  email,
  phone,
  onEdit,
  onDelete,
}: ContactCardProps) {
  return (
    <article className="contact-card">
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <p>Téléphone : {phone}</p>

      <button onClick={onEdit}>Modifier</button>
      <button onClick={onDelete}>Supprimer</button>
    </article>
  );
}

export default ContactCard;

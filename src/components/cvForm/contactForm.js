export default function ContactForm({
  phoneNum,
  setPhoneNum,
  email,
  setEmail,
  adress,
  setAdress,
  website,
  setWebsite,
}) {
  return (
    <section className="form-section">
      <h2 className="form-section-heading">Contact</h2>
      <input
        value={phoneNum}
        maxLength={15}
        type="tel"
        className="form-input"
        name="phoneNum"
        id="phoneNum"
        placeholder="Phone number *"
        required
        aria-required="true"
        onChange={(e) => setPhoneNum(e.target.value)}
      />
      <input
        value={email}
        className="form-input"
        maxLength={50}
        type="email"
        name="email"
        id="email"
        placeholder="Email *"
        required
        aria-required="true"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={adress}
        className="form-input"
        maxLength={100}
        type="text"
        name="adress"
        id="adress"
        placeholder="Adress *"
        required
        aria-required="true"
        onChange={(e) => setAdress(e.target.value)}
      />

      <input
        value={website}
        className="form-input"
        maxLength={50}
        type="text"
        name="website"
        id="website"
        placeholder="Your personal website (optional)"
        onChange={(e) => setWebsite(e.target.value)}
      />
    </section>
  );
}

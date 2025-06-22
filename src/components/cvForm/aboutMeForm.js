export default function AboutMe({
  name,
  setName,
  aboutMeText,
  setAboutMeText,
}) {
  return (
    <section className="form-section">
      <h2 className="form-section-heading">About me</h2>
      <input
        value={name}
        className="form-input"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name *"
        onChange={(e) => setName(e.target.value)}
        required
        aria-required="true"
      />
      <textarea
        value={aboutMeText}
        maxLength={500}
        type="text"
        name="about-me"
        id="about-me"
        placeholder="Write something about yourself *"
        onChange={(e) => setAboutMeText(e.target.value)}
        required
        aria-required="true"
      />
    </section>
  );
}

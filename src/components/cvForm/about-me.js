export default function AboutMe() {
  return (
    <section className="form-section">
      <h2 className="form-section-heading">About me</h2>
      <input
        className="text-input"
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
      />
      <textarea
        type="text"
        name="about-me"
        id="about-me"
        placeholder="Write something about yourself"
      />
    </section>
  );
}

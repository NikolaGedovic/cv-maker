import React from "react";
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
        className="text-input"
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        value={aboutMeText}
        maxLength={450}
        type="text"
        name="about-me"
        id="about-me"
        placeholder="Write something about yourself"
        onChange={(e) => setAboutMeText(e.target.value)}
      />
    </section>
  );
}

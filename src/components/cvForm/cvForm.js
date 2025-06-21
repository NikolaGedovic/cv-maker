import AboutMe from "./about-me";

export default function CvForm({ name, setName }) {
  return (
    <div className="cv-form">
      <AboutMe name={name} setName={setName} />
    </div>
  );
}

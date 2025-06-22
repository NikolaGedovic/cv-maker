export default function SkillsForm({ skill, setSkill, skills, setSkills }) {
  const handleAddSkill = () => {
    if (skill.trim() !== "" && skills.length < 5) {
      setSkills([...skills, skill.trim()]);
      setSkill("");
    }
  };

  return (
    <section className="form-section">
      <h2 className="form-section-heading">Skills</h2>
      <span className="input-help">You can add a maximum of 5 skills</span>
      <input
        className="form-input skill-input"
        maxLength={32}
        value={skill}
        type="text"
        name="skill"
        id="skill"
        placeholder="Add your skills"
        onChange={(e) => setSkill(e.target.value)}
        disabled={skills.length >= 5}
      />
      <button
        className="add-btn"
        type="button"
        onClick={handleAddSkill}
        disabled={skills.length >= 5}
      >
        Add
      </button>
    </section>
  );
}

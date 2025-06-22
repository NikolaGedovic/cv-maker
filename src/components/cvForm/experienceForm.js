export default function ExperienceForm({
  experienceList,
  setExperienceList,
  currentExperience,
  setCurrentExperience,
}) {
  // Limit to 3 experiences
  const maxExperiences = 3;

  // Update input field values in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentExperience((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add current experience to the list if all required fields are filled
  const handleAddExperience = () => {
    const {
      company,
      position,
      fromYearExperience,
      toYearExperience,
      whatYouDid,
    } = currentExperience;

    if (
      company.trim() &&
      position.trim() &&
      fromYearExperience.trim() &&
      toYearExperience.trim() &&
      whatYouDid.trim() &&
      experienceList.length < maxExperiences
    ) {
      setExperienceList([...experienceList, currentExperience]);
      setCurrentExperience({
        company: "",
        position: "",
        fromYearExperience: "",
        toYearExperience: "",
        whatYouDid: "",
      });
    } else {
      alert(
        "Please fill all fields before adding and don't exceed 3 experiences."
      );
    }
  };

  return (
    <section className="form-section">
      <h2 className="form-section-heading">Experience</h2>
      <span className="input-help">Add your 3 most recent job experiences</span>

      <input
        type="text"
        name="company"
        maxLength={30}
        className="form-input experience-input"
        placeholder="Company name"
        value={currentExperience.company}
        onChange={handleChange}
        disabled={experienceList.length >= maxExperiences}
        required
        aria-required="true"
      />
      <input
        type="text"
        name="position"
        maxLength={30}
        className="form-input experience-input"
        placeholder="Position"
        value={currentExperience.position}
        onChange={handleChange}
        disabled={experienceList.length >= maxExperiences}
        required
        aria-required="true"
      />
      <input
        type="text"
        name="fromYearExperience"
        maxLength={4}
        className="form-input experience-input"
        placeholder="From (year)"
        value={currentExperience.fromYearExperience}
        onChange={handleChange}
        disabled={experienceList.length >= maxExperiences}
        required
        aria-required="true"
      />
      <input
        type="text"
        name="toYearExperience"
        maxLength={4}
        className="form-input experience-input"
        placeholder="To (year)"
        value={currentExperience.toYearExperience}
        onChange={handleChange}
        disabled={experienceList.length >= maxExperiences}
        required
        aria-required="true"
      />
      <textarea
        name="whatYouDid"
        maxLength={100}
        className="form-input experience-description experience-input"
        placeholder="Describe what you did on your position"
        value={currentExperience.whatYouDid}
        onChange={handleChange}
        disabled={experienceList.length >= maxExperiences}
        required
        aria-required="true"
      />
      <button
        className="add-btn"
        type="button"
        onClick={handleAddExperience}
        disabled={experienceList.length >= maxExperiences}
      >
        Add
      </button>
    </section>
  );
}

export default function EducationForm({
  educationList,
  setEducationList,
  currentEducation,
  setCurrentEducation,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddEducation = () => {
    const { schoolName, subject, fromYear, toYear } = currentEducation;

    if (
      schoolName.trim() &&
      subject.trim() &&
      fromYear.trim() &&
      toYear.trim() &&
      educationList.length < 4
    ) {
      setEducationList([...educationList, currentEducation]);
      setCurrentEducation({
        schoolName: "",
        subject: "",
        fromYear: "",
        toYear: "",
      });
    }
  };

  const isDisabled = educationList.length >= 4;

  return (
    <section className="form-section">
      <h2 className="form-section-heading">Education</h2>
      <span className="input-help">You can add a maximum of 4 schools</span>
      <input
        type="text"
        name="schoolName"
        className="form-input education-input"
        maxLength={30}
        placeholder="School name"
        value={currentEducation.schoolName}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <input
        type="text"
        name="subject"
        maxLength={30}
        className="form-input education-input"
        placeholder="Subject"
        value={currentEducation.subject}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <input
        type="text"
        name="fromYear"
        maxLength={4}
        className="form-input education-input"
        placeholder="From (year)"
        value={currentEducation.fromYear}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <input
        type="text"
        name="toYear"
        maxLength={4}
        className="form-input education-input"
        placeholder="To (year)"
        value={currentEducation.toYear}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <button
        className="add-btn"
        type="button"
        onClick={handleAddEducation}
        disabled={isDisabled}
      >
        Add
      </button>
    </section>
  );
}

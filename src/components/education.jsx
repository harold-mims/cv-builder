/* eslint-disable react/prop-types */
import { Component } from "react";
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

class EducationExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, major, institution, years} = this.props;

    return (
      <div className="EducationalExperienceWrapper">
        <MultilineEditable
          className={"MajorText " + className}
          defaultValue="Enter Your Major"
          value={major != "" ? major : ""}
        />
        <MultilineEditable
          className="UniversityName"
          defaultValue="Name of your University"
          value={institution != "" ? institution : ""}
        />
        <MultilineEditable
          className="YearsAttended"
          defaultValue="20xx - 20xx"
          value={years != "" ? years : ""}
        />
      </div>
    );
  }
}

class Education extends Component {
constructor(props) {
    super(props)
}

render() {
  // eslint-disable-next-line react/prop-types
  const { education } = this.props;

  return (
    <div className="EducationWrapper">
    {education.length > 0 && <SectionHeader className="EducationHeader" defaultValue="Education" />}
      {education.map(() => {
        return (
          <EducationExperience
            key={education.id}
            major={education.major}
            institution={education.institution}
            years={education.years}
          />
        );
      })}
    </div>
  );
}}

export default Education;

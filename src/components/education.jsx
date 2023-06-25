/* eslint-disable react/prop-types */
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

function EducationExperience ({ className, major, institution, years }) {

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


function Education({ education }) {
  return (
    <div className="EducationWrapper">
      {education.length > 0 && (
        <SectionHeader className="EducationHeader" defaultValue="Education" />
      )}
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
}

export default Education;

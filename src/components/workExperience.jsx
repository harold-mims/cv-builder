/* eslint-disable react/prop-types */
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

function WorkExperience({ className, years, position, company, description }) {
  return (
    <div className="WorkExperienceWrapper flexrow">
      <MultilineEditable
        className={"YearsWorked " + className}
        defaultValue="20xx-20xx"
        value={years != "" ? years : ""}
      />
      <div className="WorkDescription flexcol">
        <MultilineEditable
          className={"JobPosition " + className}
          defaultValue="Job Position Here"
          value={position != "" ? position : ""}
        />
        <MultilineEditable
          className={"CompanyName " + className}
          defaultValue="Company Name | Location"
          value={company != "" ? company : ""}
        />
        <MultilineEditable
          className={"WorkDesc " + className}
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae efficitur odio. Ut fringilla, neque sed eleifend semper."
          value={description != "" ? description : ""}
        />
      </div>
    </div>
  );
}

function WorkHistory({ workHistory }) {
  return (
    <div className="WorkHistoryWrapper">
      {workHistory.length > 0 && (
        <SectionHeader
          className="WorkHistoryHeder"
          defaultValue="Work Experience"
        />
      )}
      {workHistory.map(() => {
        return (
          <WorkExperience
            key={workHistory.id}
            years={workHistory.years}
            position={workHistory.position}
            company={workHistory.company}
            description={workHistory.description}
          />
        );
      })}
    </div>
  );
}

export default WorkHistory;

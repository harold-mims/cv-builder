/* eslint-disable react/prop-types */
import { Component } from "react";
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

class WorkExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, years, position, company, description } = this.props;

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
}

class WorkHistory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { workHistory } = this.props;

    return (
      <div className="WorkHistoryWrapper">
        {workHistory.length > 0 && (
          <SectionHeader className="WorkHistoryHeder" defaultValue="Work Experience" />
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
}

export default WorkHistory;

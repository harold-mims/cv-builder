/* eslint-disable react/prop-types */
import { Component } from "react";
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";
import uniqid from "uniqid";

class IndividualReference extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, refName, position, contact} = this.props;

    return (
      <div className="IndividualReferenceWrapper">
        <MultilineEditable
          className={"refNameText " + className}
          defaultValue="First Reference Name"
          value={refName != "" ? refName : ""}
        />
        <MultilineEditable
          className="UniversityName"
          defaultValue="Position | Company"
          value={position != "" ? position : ""}
        />
        <MultilineEditable
          className="YearsAttended"
          defaultValue="T: (555) 555-5555"
          value={contact != "" ? contact : ""}
        />
      </div>
    );
  }
}

class References extends Component {
constructor(props) {
    super(props)
}

render() {
  // eslint-disable-next-line react/prop-types
  const { references } = this.props;

  return (
    <div className="ReferencesWrapper">
    {references.length > 0 && <SectionHeader className="ReferencesHeader" defaultValue={references.length > 1 ? "References" : "Reference"} />}
      {references.map(() => {
        return (
          <IndividualReference
            key={uniqid()}
            refName={references.refName}
            position={references.position}
            contact={references.contact}
          />
        );
      })}
    </div>
  );
}}

export default References;
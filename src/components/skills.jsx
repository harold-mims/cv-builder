/* eslint-disable react/prop-types */
import { Component } from "react";
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

class Skill extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, skillName, familiarity} = this.props;

    return (
      <div className="SkillWrapper">
        <MultilineEditable
          className={"refNameText " + className}
          defaultValue="Skill Name"
          value={skillName != "" ? skillName : ""}
        />
        <input type="range" min="0" max="100" value={familiarity}/>
      </div>
    );
  }
}

class Skills extends Component {
constructor(props) {
    super(props)
}

render() {
  // eslint-disable-next-line react/prop-types
  const { skills } = this.props;

  return (
    <div className="ReferencesWrapper">
    {skills.length > 0 && <SectionHeader className="ReferencesHeader" defaultValue="Skills" />}
      {skills.map(() => {
        return (
          <Skill
            key={skills.id}
            refName={skills.skillName}
            position={skills.position}
          />
        );
      })}
    </div>
  );
}}

export default Skills;
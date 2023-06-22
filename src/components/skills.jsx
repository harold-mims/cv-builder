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
      <div className="SkillWrapper flexcol">
        <MultilineEditable
          className={"SkillNameText " + className}
          defaultValue="Skill Name"
          value={skillName != "" ? skillName : ""}
        />
        <input className={"SkillFamiliarity " + className} type="range" min="0" max="100" value={familiarity}/>
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
    <div className="SkillsSectionWrapper">
    {skills.length > 0 && <SectionHeader className="ReferencesHeader" defaultValue="Skills" />}
    <div className="SkillsWrapper flexrow flexwrap">
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
    </div>
  );
}}

export default Skills;
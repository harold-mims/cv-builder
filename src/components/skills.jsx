/* eslint-disable react/prop-types */
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

function Skill({ className, skillName, familiarity }) {
  return (
    <div className="SkillWrapper flexcol">
      <MultilineEditable
        className={"SkillNameText " + className}
        defaultValue="Skill Name"
        value={skillName != "" ? skillName : ""}
      />
      <input
        className={"SkillFamiliarity " + className}
        type="range"
        min="0"
        max="100"
        value={familiarity}
      />
    </div>
  );
}

function Skills({ skills }) {
  return (
    <div className="SkillsSectionWrapper">
      {skills.length > 0 && (
        <SectionHeader className="ReferencesHeader" defaultValue="Skills" />
      )}
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
}

export default Skills;

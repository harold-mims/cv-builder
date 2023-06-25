/* eslint-disable react/prop-types */
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

function IndividualReference({ className, refName, position, contact }) {
  return (
    <div className="IndividualReferenceWrapper">
      <MultilineEditable
        className={"refNameText " + className}
        defaultValue="First Reference Name"
        value={refName != "" ? refName : ""}
      />
      <MultilineEditable
        className="refPosition"
        defaultValue="Position | Company"
        value={position != "" ? position : ""}
      />
      <MultilineEditable
        className="refContact"
        defaultValue="T: (555) 555-5555"
        value={contact != "" ? contact : ""}
      />
    </div>
  );
}

function References({ references }) {
  return (
    <div className="ReferencesWrapper">
      {references.length > 0 && (
        <SectionHeader
          className="ReferencesHeader"
          defaultValue={references.length > 1 ? "References" : "Reference"}
        />
      )}
      {references.map(() => {
        return (
          <IndividualReference
            key={references.id}
            refName={references.refName}
            position={references.position}
            contact={references.contact}
          />
        );
      })}
    </div>
  );
}

export default References;

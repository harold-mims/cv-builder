/* eslint-disable react/prop-types */
function AddElementBtn({ textValue, className, onClick }) {
  return (
    <button className={"addElementBtn " + className} onClick={onClick}>
      {textValue}
    </button>
  );
}

function AddBtnSet({ className, textValue, incValue, decValue }) {
  return (
    <div className={"btnWrapper flexcol"}>
      <AddElementBtn
        className={className}
        textValue={"Add " + textValue}
        onClick={incValue}
      />
      <AddElementBtn
        className={className}
        textValue={"Remove " + textValue}
        onClick={decValue}
      />
    </div>
  );
}

export { AddElementBtn, AddBtnSet };

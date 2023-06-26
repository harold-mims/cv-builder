/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react';

function InlineEditable({ defaultValue, className }) {
  const [textValue, setTextValue] = useState("");

  const onEdit = (e) => {
    setTextValue(e.target.value)
  };

 return (
      <input
        className={"inlineEditable " + className}
        onChange={onEdit}
        value={textValue}
        placeholder={defaultValue}
      />
    );
}

function MultilineEditable({ defaultValue, className }) {
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
      onInput;
    
  }, []);

  const onEdit = (e) => {
    setTextValue(e.target.value)
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.target.blur();
    }
  };

  const onInput = (e) => {
    e.target.style.height = "5px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

    return (
      <textarea
        rows={1}
        className={"multilineEditable " + className}
        onChange={onEdit}
        onKeyDown={onKeyDown}
        onInput={onInput}
        value={textValue}
        placeholder={defaultValue}
      />
    );
  
}

function ChangableImage ({ className, src }) {
  const [imgURL, setImgUrl] = useState("")

  const changeImage = (e) => {
    if (e.target.files.length) {
      setImgUrl(URL.createObjectURL(e.target.files[0]))
      console.log(URL.createObjectURL(e.target.files[0]));
    }
  };

    return (
      <>
        <label htmlFor="change-img-btn">
          <img
            className={"cv-image " + className}
            src={imgURL ? imgURL : src}
          />
        </label>
        <input
          type="file"
          id="change-img-btn"
          style={{ display: "none" }}
          onChange={changeImage}
        />
      </>
    );
  
}

export { InlineEditable, MultilineEditable, ChangableImage };

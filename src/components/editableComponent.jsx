import { Component } from "react";

class InlineEditable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  onEdit = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { defaultValue, textValue, className } = this.props;

    return (
      <input
        className={"inlineEditable " + className}
        onChange={this.onEdit}
        value={textValue}
        placeholder={defaultValue}
      />
    );
  }
}

class MultilineEditable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  onEdit = (e) => {
    this.setState({
      textValue: e.target.value,
    });

    console.log(e);
  };

  onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.target.blur();
    }
  };

  onInput = (e) => {
    e.target.style.height = "5px";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { defaultValue, textValue, className } = this.props;

    return (
      <textarea
        rows={1}
        className={"multilineEditable " + className}
        onChange={this.onEdit}
        onKeyDown={this.onKeyDown}
        onInput={this.onInput}
        value={textValue}
        placeholder={defaultValue}
      />
    );
  }
}

class ChangableImage extends Component {
  constructor() {
    super();

    this.state = {
        imgURL: "",
    };
  }

  changeImage = (e) => {
    if (e.target.files.length) {
      this.setState({
          imgURL: URL.createObjectURL(e.target.files[0]),
      });
      console.log(URL.createObjectURL(e.target.files[0]));
    }
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, src } = this.props;
    const { imgURL } = this.state;

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
          onChange={this.changeImage}
        />
      </>
    );
  }
}

export { InlineEditable, MultilineEditable, ChangableImage };

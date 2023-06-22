import { MultilineEditable } from "./editableComponent";

function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title" style={{ alignSelf: "center" }}>
        CV Creater
      </a>
      <a
        href="https://github.com/harold-mims/cv-builder/tree/main"
        className="githubLink"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </nav>
  );
}

function Footer() {
  return <p className="footer">Copyright @ The Odin Project 2023</p>;
}

// eslint-disable-next-line react/prop-types
function SectionHeader({ className, defaultValue = "Section Header" }) {
  return (
    <>
      <MultilineEditable
        className={"sectionHeader " + className}
        defaultValue={defaultValue}
      >
        {defaultValue}
      </MultilineEditable>
      <hr className={"sectionHR " + className}></hr>
    </>
  );
}

export { Navbar, Footer, SectionHeader };

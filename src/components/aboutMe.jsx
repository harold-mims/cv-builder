import { Component } from "react";

class AboutMe extends Component {
    render() {
        return(
            <div className="aboutMe">
                <h2>About Me</h2>
                <hr></hr>
                <p className="aboutMeText" contentEditable="true">Please Describe Yourself Here.</p>
            </div>
        );
    }

}

export default AboutMe;
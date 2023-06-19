import { Component } from "react";

class ContactInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {contactMethod, defaultValue } = this.props;
        return(
            <div className="contactInfoWrapper">
                <div className="contactMethodWrapper">
                    <div className="contactAccent"></div>
                    <p className="contactMethod">{contactMethod}</p>
                </div>
                <p className="contactInfo" contentEditable>{defaultValue}</p>
            </div>
        );
    }

}

export default ContactInfo;
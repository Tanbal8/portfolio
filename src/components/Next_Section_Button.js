import React, { Component } from "react";
class Next_Section_Button extends Component {
    render() {
        return (
            <i className="fa fa-caret-down fa-2x next-section-button"
                onClick={this.Change_Section.bind(this)}
            ></i>
        );
    }
    Change_Section() {
        const section = document.getElementById(this.props['target']);
        console.log(section, section.offsetTop);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        })
    }
}
export default Next_Section_Button;
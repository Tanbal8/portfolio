import React, { Component } from "react";
class Back_To_Top_Button extends Component {
    render() {
        return (
            <div id="back-to-top-button" onClick={this.Back_To_Top}>
                <i className="fa fa-chevron-up"></i>
            </div>
        )
    }
    Back_To_Top() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    Show() {}
    Hide() {}
}
export default Back_To_Top_Button;
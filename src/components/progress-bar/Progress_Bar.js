import React, { Component } from "react";
import './progress-bar.css';
class Progress_Bar extends Component {
    render() {
        const { score } = this.props;
        return (
            <div className="progress-bar" score={score}>
                <div className="progress-fill" style={{
                    width: score + '%'
                }}></div>
            </div>
        );
    }
}
export default Progress_Bar;
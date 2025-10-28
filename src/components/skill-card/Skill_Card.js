import React, { Component } from "react";
import Progress_Bar from "../progress-bar/Progress_Bar";
import './skill-card.css';
class Skill_Card extends Component {
    render() {
        const {subject, score, image} = this.props;
        return (
            <div className='col skill-card-area'>
                <div id={this.props.id} className="skill-card">
                    <div className="skill-subject">{subject}</div>
                    <img src={image} />
                    <Progress_Bar score={score} />
                </div>
            </div>
        );
    }
}
export default Skill_Card;
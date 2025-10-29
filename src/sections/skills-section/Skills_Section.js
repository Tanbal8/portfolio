import React, { Component } from "react";
import Section from "../Section";
import Skill_Card from "../../components/skill-card/Skill_Card";
import data from '../../data.json';
import './skills-section.css';
class Skills_Section extends Component {
    render() {
        return (
            <Section subject='Skills' id='skills-section'>
                <div className="container">
                    <div className="row row-cols-3 row-cols-md-4 justify-content-center gy-5" id='skill-card-list'>
                        {Object.keys(data.skills).map(skill => {
                            return <Skill_Card subject={skill} score={data.skills[skill].score} image={data.skills[skill].image} key={skill} />
                        })}
                    </div>
                </div>
            </Section>
        );
    }
}
export default Skills_Section;
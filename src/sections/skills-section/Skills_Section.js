import React, { Component } from "react";
import Section from "../Section";
import Skill_Card from "../../components/skill-card/Skill_Card";
import './skills-section.css';
class Skills_Section extends Component {
    render() {
        return (
            <Section subject='Skills' id='skills-section'>
                <Skill_Card subject='HTML' score={80} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' />
                <Skill_Card subject='CSS' score={80} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' />
                <Skill_Card subject='Javascript' score={80} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' />
                <Skill_Card subject='React' score={25} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' />
                <Skill_Card subject='Next.js' score={10} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg' />
                <Skill_Card subject='Bootstrap' score={30} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' />
                <Skill_Card subject='PHP' score={20} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' />
                <Skill_Card subject='MySQL' score={20} image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg' />
            </Section>
        );
    }
}
export default Skills_Section;
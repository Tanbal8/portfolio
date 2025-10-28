import React, {Component} from "react";
import Section from "../Section";
import data from '../../data.json';
import './introducion-section.css';
import { SocialIcon } from 'react-social-icons';
class Introducion_Section extends Component {
    render() {
        return (
            <Section id='introducion-section'>
                <h1>Hello i'm {data.author.first_name} {data.author.last_name}!</h1>
                <div id='social-media-icons'>
                    {Object.keys(data.links).map(social_media => {
                        return <SocialIcon url={data.links[social_media]} network={social_media} key={social_media} />
                    })}
                </div>
            </Section>
        );
    }
}
export default Introducion_Section;
import React, {Component} from 'react';
import './section.css';
class Section extends Component {
    render() {
        const { children, subject } = this.props;
        return (
            <div className="section" id={this.props.id}>
                <h2 className='section-title'>{subject}</h2>
                {children}
            </div>
        );
    }
}
export default Section;
import { Component } from 'react';
import data from './data.json'
import Navigation from './components/navigation/Navigation';
import Introducion_Section from './sections/introducion-section/Introducion_Section';
import Skills_Section from './sections/skills-section/Skills_Section';
import { SocialIcon } from 'react-social-icons';
import Back_To_Top_Button from './components/Back_To_Top_Button';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Introducion_Section />
        <Skills_Section />
        <Back_To_Top_Button />
      </div>
    );
  }
}

export default App;

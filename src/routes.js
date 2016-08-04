import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import Skill from './components/Skill';
import NoteList from './components/NoteList';
import AboutMe from './components/AboutMe';

export default (
  <Route path="/" component={App}>
    <Route path="/home" component ={Home}/>
    <Route path="/skill" component ={Skill}/>
    <Route path="/notelist" component ={NoteList}/>
    <Route path="/about" component ={AboutMe}/>
    <IndexRoute component={Home} />
  </Route>
)

import React from 'react';
import {Route ,IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import NoteList from './components/NoteList';


export default (
  <Route path="/" component={App}>
    <Route path="/home" component={Home} />
    <Route path="/about" component={AboutMe} />
    <Route path="/notelist" component={NoteList} />
    <IndexRoute component={Home} />
  </Route>
)

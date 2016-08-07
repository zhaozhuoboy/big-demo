import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import Skill from './components/Skill';
import NoteList from './components/NoteList';
import Posts from './components/notelist/Posts';
import AboutMe from './components/AboutMe';
import NotFindPage from './components/NotFindPage'

export default (
  <Route path="/" component={App}>
    <Route path="/home" component ={Home}/>
    <Route path="/skill" component ={Skill}/>
    <Route path="/notelist" component ={NoteList}/>
    <Route path="/notelist/:title" component ={Posts}/>//一篇博客笔记叫一个posts
    <Route path="/about" component ={AboutMe}/>
    <Route path="*" component={NotFindPage}/>
    <IndexRoute component={Home} />
  </Route>
)

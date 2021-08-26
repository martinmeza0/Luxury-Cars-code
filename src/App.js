import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Tagline from './components/Tagline';
import Card from './components/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './pages/About';
import SingleView from './pages/SingleView';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/users"/>
          <Route path="/:carName" component={SingleView}/>
      </Switch>
    </Router>
)
}

const Home = () => (
  <>
    <header>
      <Menu></Menu>
      <Tagline></Tagline>
    </header>
    <main>
      <Card/>
      <Card/>
      <Card/>
    </main>
  </>
)
export default App

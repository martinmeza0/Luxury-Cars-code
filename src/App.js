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
import Footer from './components/Footer';
import SingleView from './pages/SingleView';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/support"/>
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
      <Card 
        img="/image/1.webp" 
        tittle="BMW M3" 
        price="69,900 US$"/>
      <Card 
        img="/image/2.webp" 
        tittle="Escalade Sport Platinum" 
        price="100,595 US$"/>
      <Card 
        img="/image/3.webp" 
        tittle="Mustang GT" 
        price="52,720 US$"/>
      <Card 
        img="/image/4.webp" 
        tittle="F150 Raptor" 
        price="77,000 US$"/>
      <Card 
        img="/image/5.webp" 
        tittle="BMW M760 IxDrive" 
        price="157,700 US$"/>
      <Card 
        img="/image/6.webp" 
        tittle="Corvette Stingray" 
        price="99,998 US$"/>
      <Card 
        img="/image/7.webp" 
        tittle="Yukon SLT" 
        price="87,000 US$"/>
      <Card 
        img="/image/8.webp" 
        tittle="Corvette Stingray 1LT" 
        price="59,995 US$"/>
      <Card 
        img="/image/9.webp" 
        tittle="Z4 sDrive30i" 
        price="64,695 US$"/>
    </main>
    <Footer></Footer>
  </>
)
export default App

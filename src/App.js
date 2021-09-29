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
import Error404 from './pages/Error404';
import {GridContainer} from './components/Styles';

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/support" component={Error404}/>
          <Route path="/BMW M3" component={SingleView}/>
      </Switch>
    </Router>
  )
}

const Home = () => {
  return (
    <>
      <header>
        <Menu></Menu>
        <Tagline></Tagline>
      </header>
      <GridContainer>
        <Card 
          img="/image/1.webp" 
          title="BMW M3" 
          price="69,900 US$"/>
        <Card 
          img="/image/2.webp" 
          title="Escalade Sport Platinum" 
          price="100,595 US$"/>
        <Card 
          img="/image/3.webp" 
          title="Mustang GT" 
          price="52,720 US$"/>
        <Card 
          img="/image/4.webp" 
          title="F150 Raptor" 
          price="77,000 US$"/>
        <Card 
          img="/image/5.webp" 
          title="BMW M760 IxDrive" 
          price="157,700 US$"/>
        <Card 
          img="/image/6.webp" 
          title="Corvette Stingray" 
          price="99,998 US$"/>
        <Card 
          img="/image/7.webp" 
          title="Yukon SLT" 
          price="87,000 US$"/>
        <Card 
          img="/image/8.webp" 
          title="Corvette Stingray 1LT" 
          price="59,995 US$"/>
        <Card 
          img="/image/9.webp" 
          title="Z4 sDrive30i" 
          price="64,695 US$"/>
      </GridContainer>
      <Footer></Footer>
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Tagline from './components/Tagline';
import Card from './components/Card';

const App = () => {
  return (
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
}

export default App

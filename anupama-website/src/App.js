import React from 'react';
//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
        <div className="App">
        <NavBar  />
           <Header />
           <br />
           <br />
           <Switch>
             <Route exact path="/" component={About} />
           </Switch>

           <Footer />
        </div>

    </Container>
   
  );
}

export default App;

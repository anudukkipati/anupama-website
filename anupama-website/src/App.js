import React from 'react';
//import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header.js'
import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'
import Resume from './components/Resume.js'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <Container fluid>
      
          <div className="App">
            <NavBar  />
              <Header />
              <br />
              <br />
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/resume" component={Resume} />
              </Switch>

              <Footer />
            </div>
      
       

    </Container>
   
  );
}

export default App;

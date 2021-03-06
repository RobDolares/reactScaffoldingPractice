import React, { Component } from 'react';
import './styles/App.css';

import NavBar from './components/navbar.js'
import Footer from './components/footer.js'
import Header from './components/header.js'
import Form from './components/form.js'
import Section from './components/section.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;

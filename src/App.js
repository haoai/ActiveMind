import React, { Component } from 'react';
import 'styles/main.scss';
import Nav from 'components/Nav';
import Hero from 'components/Hero';
import SpeakerList from 'components/SpeakerList';
import Footer from 'components/Footer';




export default class App extends Component {

  render() {

    return (
      <div>
         <Nav />
         <Hero />
         <SpeakerList />
         <Footer />
      </div>
    );
  }
}

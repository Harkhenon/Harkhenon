import _ from 'lodash';
import React, { Component } from 'react';
import { Header as Text } from 'semantic-ui-react';

import Header from 'src/components/Parts/Header';
import Footer from 'src/components/Parts/Footer';

import './scss/Home.scss';
import WhoAmI from 'src/components/WhoAmI';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';


export default class Home extends Component {


  render() {
    return (
      <>
        <Header />
          <main>
            <section id="content-left">
              <div id="header-portrait">
                <div id="portrait-frame-1"></div>
                <div id="portrait-frame-2"></div>
                <div id="portrait-frame-3"></div>
                <div id="portrait-frame-4">
                  <p id="identity">Thomas "Harkhenon" BALANS</p>
                </div>
              </div>
            </section>
            <section id="content-right">
              <div id="home">
                <p className="section-title">Introduction</p>
                <p id="hello-world-text">I'm an autodidact web developper & passionnate gamer</p>
                {/* Hire me button here*/}
              </div>
              <WhoAmI />
              <Projects />
              <Contact />
            </section>
          </main>
        <Footer />
      </>
    )
  }
}

import React, { Component } from 'react';

import logo1 from '../logo1.svg';
import logo2 from '../logo2.svg';
import logo3 from '../logo3.svg';

const styles = { logo: { height: '10vh', width: '60vh' } };

class LogIn extends Component {
    componentDidMount() {
      window.scrollTo(0, 0);


    
    }
    render() {
      return (
        <div id="container">
          <div id="login-button"></div>
          <div id="profile" className="hidden">
            <img id="picture" src="#"/>
            <p id="welcome">Welcome!</p>
            <h3> hello</h3>
          </div>
        </div>
      );
    }

  }
}

export default LogIn;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <header className="header-container">
        <Link to="/" aria-label="Home">
          <h1>
            <img
              src="./../src/img/LOGO/MattPeetLOGO-500x116px.png"
              id="headerImage"
              alt="Home: Matt Peet Illustration"
            />
          </h1>
        </Link>
      </header>
    );
  }
}

export default Header;
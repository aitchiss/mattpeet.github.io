import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArtistDetails from "../../models/ArtistDetails.js";

class SocialAndMenuNavigation extends Component {
  constructor(props) {
    super(props);
    this.artist = new ArtistDetails();
  }

  getMenuIcon() {
    if (this.props.menuOpen) {
      return "fa-times";
    } else {
      return "fa-bars";
    }
  }

  render() {
    return (
      <div className="social-and-nav">
        <aside className="social-links">
          <a
            href={this.artist.instagram.linkUrl}
            aria-label="Instagram"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href={this.artist.twitter.linkUrl}
            aria-label="Twitter"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={this.artist.tumblr.linkUrl}
            aria-label="Tumblr"
            target="_blank"
          >
            <i className="fab fa-tumblr-square"></i>
          </a>
          <a
            href={this.artist.facebook.linkUrl}
            aria-label="Facebook"
            target="_blank"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href={"mailto:" + this.artist.email.linkUrl} aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </aside>
        <div className="nav-end">
          <i
            aria-label="Open menu"
            id="hamburger-menu"
            className={"fas " + this.getMenuIcon()}
            onClick={this.props.openMenuCommand}
          ></i>
        </div>
      </div>
    );
  }
}

export default SocialAndMenuNavigation;

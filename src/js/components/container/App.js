import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js"
import Navigation from "./Navigation.js"
import ProjectMainGrid from "./ProjectMainGrid.js"
import ProjectDetailContainer from "./ProjectDetailContainer.js"
import AboutContainer from "./AboutContainer.js"
import ContactContainer from "./ContactContainer.js"
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState((prevState) => {
      prevState.menuOpen = !prevState.menuOpen
      return prevState
    })
  }


  render() {
    return (
      <div className="app-container">
        <Header />
        <Navigation
          menuOpen={this.state.menuOpen}
          openMenuCommand={this.toggleMenu}
        />
        <main>
          <Main menuOpen={this.state.menuOpen} toggleMenu={this.toggleMenu} />
        </main>
      </div>
    );
  }
}

class Main extends Component {

  render () {
    return (
    <Switch>
      <Route exact path='/' render={(props) => <ProjectMainGrid {... props} menuOpen={this.props.menuOpen} toggleMenu={this.props.toggleMenu} />} />
      <Route path='/category/:categoryId/:subcategoryId' component={ProjectMainGrid} />
      <Route path='/category/:categoryId' component={ProjectMainGrid}  />
      <Route path="/about" render={(props) => <AboutContainer {... props} menuOpen={this.props.menuOpen} toggleMenu={this.props.toggleMenu} />} />
      <Route path="/contact" render={(props) => <ContactContainer {... props} menuOpen={this.props.menuOpen} toggleMenu={this.props.toggleMenu} />} />
      <Route path='/:projectId' render={(props) => <ProjectDetailContainer {... props} menuOpen={this.props.menuOpen} toggleMenu={this.props.toggleMenu}  />} />
    </Switch>
    )
  }
}

export default App;
const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(
  <HashRouter><App /></HashRouter>, wrapper
  ) : false;
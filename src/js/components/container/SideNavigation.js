import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

class SideNavigation extends Component {
  render() {
    return (
      <div id="side-nav-container">
        <div id="project-filters">
          <ul>
            <li>
              <Link to="/">projects</Link>
            </li>
          </ul>
        </div>
        <div id="sundry-nav">
          <ul>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideNavigation;

// <div id="side-nav-container">
//   <div id="project-filters">
//     <ul>
//       <Link to="/category/illustration"><li>illustration</li></Link>
//         <ul>
//           <Link to="/category/illustration/editorial"><li>editorial</li></Link>
//           <Link to="/category/illustration/portraiture"><li>portraiture</li></Link>
//           <Link to="/category/illustration/other"><li>other</li></Link>
//         </ul>
//       <Link to="/category/comics"><li>comics</li></Link>
//     </ul>
//   </div>
//   <div id="sundry-nav">
//     <ul>
//     <Link to="/about"><li>about</li></Link>
//     <Link to="/contact"><li>contact</li></Link>
//     </ul>
//   </div>
// </div>

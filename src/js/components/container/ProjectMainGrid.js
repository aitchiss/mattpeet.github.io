import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js";
import ProjectThumbnail from "../presentational/ProjectThumbnail.js";
import ProjectDetailContainer from "./ProjectDetailContainer.js";
import MenuOverlay from "./MenuOverlay.js";

class ProjectMainGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var factory = new ProjectFactory();
    var filterCategory = this.props.match.params.categoryId;
    var filterSubcategory = this.props.match.params.subcategoryId;

    var projects;

    if (filterCategory !== undefined) {
      projects = factory.getFilteredProjects(filterCategory, filterSubcategory);
    } else {
      projects = factory.getArtistProjects();
    }

    var thumbs = projects.map((project, index) => {
      return (
        <ProjectThumbnail
          image={project.images[0].source}
          ariaLabel={`View project: ${project.images[0].title}`}
          key={index}
          index={index}
          clickHandler={this.onThumbnailClick}
        />
      );
    });
    return (
      <div className="main-project-grid" id="overview-grid">
        {thumbs}
        <MenuOverlay
          overlayVisible={this.props.menuOpen}
          toggleMenu={this.props.toggleMenu}
        />
      </div>
    );
  }
}

export default ProjectMainGrid;

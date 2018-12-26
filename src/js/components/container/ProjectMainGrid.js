import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectThumbnail from "../presentational/ProjectThumbnail.js"
import ProjectDetailContainer from "./ProjectDetailContainer.js"


class ProjectMainGrid extends Component {

  // Mode to show list of all projects
  static get OVERVIEW_MODE() {
    return 0
  }

  // Mode to show single project detail
  static get PROJECT_DETAIL_MODE() {
    return 1
  }

  constructor(props) {
    super(props)

    this.state = {
      mode: ProjectMainGrid.OVERVIEW_MODE,
      activeProject: 0
    }
    this.onThumbnailClick = this.onThumbnailClick.bind(this)
  }

  onThumbnailClick(index) {
    this.setState({
      mode: ProjectMainGrid.PROJECT_DETAIL_MODE,
      activeProject: index
    })
  }

  render() {
    var factory = new ProjectFactory()
    var projects = factory.getArtistProjects()
    var activeProject = projects[this.state.activeProject]
    
    if(this.state.mode == ProjectMainGrid.OVERVIEW_MODE) {

      var thumbs = projects.map((project, index) => {
        return <ProjectThumbnail image={project.images[0]} key={index} index={index} clickHandler={this.onThumbnailClick} />
      })
      return (
        <div className="main-project-grid" id="overview-grid">
          {thumbs}
        </div>
        )
    } else {
      return (
        <ProjectDetailContainer activeProject={activeProject} />
        )
    
    }
  }
}

export default ProjectMainGrid
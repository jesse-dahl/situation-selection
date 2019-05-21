import React, { Component } from 'react';
import './../styles/studies.scss';
import { Link } from "react-router-dom";

class Studies extends Component {
  renderStudies() {
    return (
      <div className="studyTable">
        <div className="FirstRow">
          <div className="TableItem Item1">Study Name</div>
          <div className="TableItem Item2">Study ID</div>
          <div className="TableItem Item3">Date Created</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div classname="Header FlexRow JustifyCenter AlignCenter">
        <h1>Studies</h1>
        <div className="Studies">
          {this.renderStudies()}
          <div className="RightAlign">
            <Link to="/newStudy" className="Button Flex1 FlexRow JustifyCenter AlignCenter LargeText Link">
              Studies
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Studies;
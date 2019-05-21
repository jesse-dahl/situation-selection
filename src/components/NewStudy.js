import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NewStudy extends Component {

  constructor() {
    super();

    this.state = {
      studyName: null,
    };
  }

  setField(value, field) {
    this.setState({
      [field]: value,
      error: null,
    });
  }

  render() {
    return (
      <div classname="Header FlexRow JustifyCenter AlignCenter">
        <h1>New Study</h1>
        <div className="LargeText">Fill out the field below to create a new study</div>
        <div className="LoginForm FlexCol JustifyCenter AlignCenter">
          <input value={this.state.studyName} placeholder="Study Name..." onChange={e => this.setField(e.target.value, 'name')} type="text" className="LoginFormField"/>
          <div className="FlexCol JustifyCenter AlignCenter" onClick={(() => this.createStudy())}>
            <Link to="/studyTable" className="Button Flex1 FlexRow JustifyCenter AlignCenter LargeText Link">
              Create Study
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NewStudy;
import React, { Component } from 'react';
import './../styles/research.scss';
import { Link } from "react-router-dom";
import {Home} from "./../../src/images/home-button.png";

class Research extends Component {

  render() {
    return (
      <div classname="Header FlexRow JustifyCenter AlignCenter">
        <h1>Researcher Portal</h1>
        <div>
        <Link to="/" className="Button">
        <img className="HomeButton" src={Home} alt="Home Button"/>
        </Link>
        </div>
        <div className="LargeText Upper">
          If you already have an account, click studies to view past studies or generate new studies
        </div>
        <div className="LargeText Lower">
          If you dont have an account, click register to register for a new account
        </div>
        <div className="RegisterStudy FlexRow JustifyCenter AlignCenter">
          <div className="Left-Col Column">
            <Link to="/register" className="Button Flex1 FlexRow JustifyCenter AlignCenter LargeText Link">
              Register
            </Link>
          </div>
          <div className="Right-Col Column">
            <Link to="/studyTable" className="Button Flex1 FlexRow JustifyCenter AlignCenter LargeText Link">
              Studies
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Research;
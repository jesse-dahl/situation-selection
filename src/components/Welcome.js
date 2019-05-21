import React, { Component } from 'react';
import './../styles/welcome.scss';
import { Link } from "react-router-dom";

class Welcome extends Component {

    constructor() {
        super();

        this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        };
    }
    render() {
        return (
            <div classname="Header FlexRow JustifyCenter AlignCenter">
                <h1>Welcome to Situation Selection</h1>
                <div className="RegisterStudy FlexRow JustifyCenter AlignCenter">
                    <div className="Left-Col Column">
                        <Link to="/login" className="Button Flex1 FlexRow JustifyCenter AlignCenter LargeText Link">
                          Participants
                        </Link>
                    </div>
                    <div className="Right-Col Column">
                        <Link to="/research" className="Button Flex1 FlexRow JustifyCenter AlignCenter LargeText Link">
                            Researchers
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;
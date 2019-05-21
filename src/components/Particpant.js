import React, { Component } from 'react';
import './../styles/participant.scss';
import { Link } from 'react-router-dom';

class Participant extends Component {

    constructor() {
        super();

        this.state = {
        participantID: null,
        studyID: null,
        email: '',
        password: '',
        error: null,
        };
    }

    setField(value,field) {
        this.setState({
            [field]: value,
            error: null,
        });
    }

    render() {
        return (
            <div classname="Header FlexRow JustifyCenter AlignCenter">
                <h1>Participant Portal</h1>
                <div className="LargeText">Enter your participant ID and study ID below</div>
                <div className="LoginForm FlexCol JustifyCenter AlignCenter">
                    <input autoFocus value={this.state.participantID} placeholder="Enter Participant ID..." onChange={e => this.setField(e.target.value, 'participantID')}  type="text" className="LoginFormField"/>
                    <input value={this.state.studyID} placeholder="Enter Study ID..." onChange={e => this.setField(e.target.value, 'studyID')}  type="text" className="LoginFormField"/>
                    <div className="JustifyCenter AlignCenter">
                      <Link to="/instructions" className="Button FlexCol JustifyCenter AlignCenter LargeText Link">
                        Start Trial
                      </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Participant;
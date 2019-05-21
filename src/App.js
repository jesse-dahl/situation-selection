import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from "./components/Welcome";
import Participant from "./components/Particpant";
import Research from "./components/Research"
import Register from "./components/Register";
import Studies from "./components/Studies";
import NewStudy from "./components/NewStudy";
import InstructionScreen from "./components/InstructionScreen";
import Test from "./components/Test";
import Congrats from "./components/Congrats";
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/login" component={Participant}/>
          <Route exact path="/research" component={Research}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/studyTable" component={Studies}/>
          <Route exact path="/newStudy" component={NewStudy}/>
          <Route exact path="/instructions" component={InstructionScreen}/>
          <Route exact path="/videos" component={Test}/>
          <Route exact path="/thanks" component={Congrats}/>
        </Switch>
      </main>
    );
  }
}

export default App;

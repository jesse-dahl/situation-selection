import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Instructions extends Component {
  instructions = {
    1: [
      "Welcome to situation selection. After this instructional screen, you will be faced with 20 short video clips (each clip varying between 1:13-2:36 minutes in length).",
      "Each clip contains a short 2-4 word description, followed by an emotion that the video was expected to elicit (e.g., 'Seal catches a ride - Happy').",
      "You may choose any video in whatever order you want. You may also watch each video as long as you would like, and can start or stop a video at any time. However, you only have 10 minutes to watch any video(s) of your choice",
      "Once you continue, you will be directed to the experiment screen. The timer will be located at the top of the screen and the screen itself will be comprised of the videos that you will be able to watch. Please continue the experiement until the timer runs out",
      "Click on the arrow in the bottom right corner when you are ready to start the experiment."
    ]
  };
}

export default Instructions;
import React, { Component } from 'react';
import {  Header, Image} from "semantic-ui-react";
import src1 from '../Images/myPic.png';


class HomePage extends Component {

  render()
  {
    return (
        <div>
        <div id='homePageHeading'>
          <Header as='h1' size='huge' textAlign="center" id='textFade' style={{color: 'white'}}>Hi! My name is Shubham Gupta.</Header>
            <Header as='h2' textAlign="center" id='textFade' style={{color: 'white'}}>Welcome to my portfolio.</Header>

        </div>
        </div>
    )
  }
}



export default HomePage;
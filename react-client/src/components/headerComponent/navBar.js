import React, { Component } from 'react';
import {Container, GridColumn, Menu, MenuItem} from "semantic-ui-react";
import {SocialIcon} from 'react-social-icons';



class NavBar extends Component {
  render() {
    return (
<div>
            <Menu fixed='top' size='massive' inverted>
                <MenuItem as='a' href='/'>
                    Home
                </MenuItem>

                <MenuItem as='a' href='/Me'>
                    About Me
                </MenuItem>

                <MenuItem as='a' href='/Projects'>
                    Projects/Skills
                </MenuItem>

                <Container>
                </Container>

                <MenuItem as='a'>
                    <SocialIcon url="https://github.com/BCGupta"></SocialIcon>
                </MenuItem>
                <MenuItem>
                    <SocialIcon url='https://www.linkedin.com/in/shubhamgupta306/'></SocialIcon>
                </MenuItem>


        </Menu>
</div>
    )
  }
}

export default NavBar;
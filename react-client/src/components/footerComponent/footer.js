import React, { Component } from 'react';
import {Grid, GridColumn, GridRow, Header} from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{marginTop: '2em', textAlign: 'center'}}>
            <p>Copyright © Shubham Gupta 2019</p>

        </div>
      </footer>
    )
  }
}

export default Footer;
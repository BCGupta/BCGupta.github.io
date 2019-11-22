import React, { Component } from 'react';
import {Header, Image, Grid, GridRow, GridColumn, Container} from "semantic-ui-react";
import src1 from "../Images/IMG_3154.png";
import src2 from "../Images/IMG_9541.png";
import src3 from "../Images/IMG_4093.png";
import src4 from "../Images/camping.png";
import src5 from "../Images/bk.png";
import src6 from "../Images/IMG_1296.png";
import src7 from "../Images/bksix.png";

class AboutMyself extends Component{

    render()
    {
        return (
            <div>

                <div id='projectHeading'>

                    <Header as='h1' size='huge' inverted color = 'white' textAlign="center" id='textFade'>About me</Header>
                </div>

                    <Grid container alignItems='flex-start' justify='flex-end'>
                        <GridRow>
                            <GridColumn width='5'>
                    <Image src={src2} size='medium' circular bordered centered/>
                            </GridColumn>
                            <GridColumn width='11'>
                                <font size='5' color='white' align='center' id='textFade'>
                                   I am a soon to be graduate of San Francisco State University, leaving with a Bachelors in
                                    Computer Science. I was raised in the SF Bay Area for almost my entire life. When I am not studying or in school,
                                    I enjoy working on my car, playing the drums, and watching Formula 1 videos! With these passions of mine I have been
                                    able to go on a national tour, meet many new friends, and have many great experiences. Pictures down below!
                                </font>
                            </GridColumn>
                        </GridRow>
                    </Grid>

                <Grid container alignItems='flex-start' justify='flex-end'>
                    <GridRow columns='3'>
                        <GridColumn>
                            <Image src={src3} bordered centered rounded/>
                        </GridColumn>
                        <GridColumn>
                            <Image src={src4}  bordered centered rounded/>
                        </GridColumn>
                        <GridColumn>
                            <Image src={src5} size='large' bordered centered rounded/>
                        </GridColumn>
                    </GridRow>
                </Grid>


        <Grid container alignItems='flex-start' justify='flex-end'>
            <GridRow columns='3'>
                <GridColumn>
                    <Image src={src1} size='large'  bordered centered rounded/>
                </GridColumn>
                <GridColumn>
                    <Image src={src6} size='large'  bordered centered rounded/>
                </GridColumn>
                <GridColumn>
                    <Image src={src7} size='large'  bordered centered rounded/>
                </GridColumn>
            </GridRow>
        </Grid>


</div>

        )
    }
}

export default AboutMyself;